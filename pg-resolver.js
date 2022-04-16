require('dotenv').config({
  path: ".env." + process.env.NODE_ENV
})

const {
  ForbiddenError,
  AuthenticationError
} = require("apollo-server-core");

import knex from './psql-adapter'
const path = require('path');
const { finished } = require('stream/promises');
const {
  GraphQLUpload,
} = require('graphql-upload');

// 引入外部套件
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// 定義 bcrypt 加密所需 saltRounds 次數
const SALT_ROUNDS = 2;
// 定義 jwt 所需 secret
const SECRET = process.env.BE_JWT_SECRET;

// 儲存使用者資訊
const users = [
  {
    id: 1,
    email: "fong@test.com",
    password: "$2b$04$wcwaquqi5ea1Ho0aKwkZ0e51/RUkg6SGxaumo8fxzILDmcrv4OBIO", // 123456
    name: "Fong",
    age: 23,
    friendIds: [2, 3]
  },

  {
    id: 2,
    email: "kevin@test.com",
    passwrod: "$2b$04$uy73IdY9HVZrIENuLwZ3k./0azDvlChLyY1ht/73N4YfEZntgChbe", // 123456
    name: "Kevin",
    age: 40,
    friendIds: [1]
  },
  {
    id: 3,
    email: "mary@test.com",
    password: "$2b$04$UmERaT7uP4hRqmlheiRHbOwGEhskNw05GHYucU73JRf8LgWaqWpTy", // 123456
    name: "Mary",
    age: 18,
    friendIds: [1]
  }
];
const hash = text => bcrypt.hash(text, SALT_ROUNDS);
const addUser = ({ name, email, password }) => (
  users[users.length] = {
    id: users[users.length - 1].id + 1,
    name,
    email,
    password
  }
);

// helper function
const createToken = ({ id, email, name }) => jwt.sign({ id, email, name }, SECRET, {
  expiresIn: '2m'
});

const findUserByUserId = userId =>
  users.find(user => user.id === Number(userId));

const isAuthenticated = resolverFunc => (parent, args, context) => {
  if (!context.me) throw new ForbiddenError("Not logged in.");
  return resolverFunc.apply(null, [parent, args, context]);
};


const resolvers = {
  Query: {
    getSinglePost: async (_, args) => {
      const result = await knex('science').select('*').whereNot('published', '=', false)
      const { postid } = args
      const filterList = result.filter((item) => item.postid === postid)[0]
      return filterList;
    },
    artistsPagi: async (root, args, context, info) => {

      let artists;
      let hasNextPage;
      let hasPreviousPage;
      let startStr;
      let endStr;
      let totalPagiNum;

      const { pageNumber, linesPerpage } = args;
      // .whereNot('categoryid', 'like', 'story')
      // 先取得總頁數
      const totalCountObj = await knex('science').count('*').whereNot('published', '=', false)
      totalPagiNum = Math.ceil(totalCountObj[0].count / linesPerpage)

      // 依據參數取得該篇數
      const data = await knex('science').orderBy('orderid', 'DESC').whereNot('published', '=', false)
        .limit(linesPerpage + 1)
        .offset((pageNumber - 1) * linesPerpage)

      hasPreviousPage = false;
      hasNextPage = data.length > linesPerpage;
      artists = hasNextPage ? data.slice(0, -1) : data;

      if (pageNumber > 1) {
        hasPreviousPage = true
      }


      if (artists.length > 0) {
        startStr = artists[0].postid
        endStr = artists[artists.length - 1].postid
      } else {
        startStr = null
        endStr = null
      }

      return {
        edges: artists,
        pageInfo: {
          hasNextPage,
          hasPreviousPage,
          start: startStr,
          end: endStr,
          totalPagi: totalPagiNum
        }
      };

    },
    artists: async (root, args, context, info) => {
      const { first, last, after, before, categoryid } = args;


      if (!first && !last) {
        /* Handling errors */
      }

      if (first && last) {
        /* Handling errors */
      }

      if (after && before) {
        /* Handling errors */
      }

      let artists;
      let hasNextPage;
      let hasPreviousPage;
      let startStr;
      let endStr;

      if (first && !after && !before && !categoryid) {
        const data = await knex('science')
          .whereNot('categoryid', 'like', 'story')
          .where('published', '=', true)
          .orderBy('orderid', 'DESC')
          .limit(first + 1);

        hasPreviousPage = false;
        hasNextPage = data.length > first;
        artists = hasNextPage ? data.slice(0, -1) : data;
      }

      if (first && !after && !before && categoryid) {
        const data = await knex('science')
          .whereNot('published', '=', false)
          .where('categoryid', 'like', categoryid)
          .orderBy('orderid', 'DESC')
          .limit(first + 1);

        hasPreviousPage = false;
        hasNextPage = data.length > first;
        artists = hasNextPage ? data.slice(0, -1) : data;
      }

      if (first && after && !categoryid) {
        // .whereNotIn('postid', [4824, 4826])
        const data = await knex('science')
          .whereNot('categoryid', 'like', 'story')
          .where('postid', '<', after)
          .andWhere('published', '=', true)
          .orderBy('orderid', 'DESC')
          .limit(first + 1);

        hasPreviousPage = true;
        hasNextPage = data.length > first;
        artists = hasNextPage ? data.slice(0, -1) : data;
      }

      if (first && after && categoryid) {
        const data = await knex('science')
          .whereNot('published', '=', false)
          .where('postid', '<', after)
          .andWhere('categoryid', 'like', categoryid)
          .orderBy('orderid', 'DESC')
          .limit(first + 1);

        hasPreviousPage = true;
        hasNextPage = data.length > first;
        artists = hasNextPage ? data.slice(0, -1) : data;
      }

      if (last && !before && !after && !categoryid) {
        const subQuery = knex('science')
          .whereNot('categoryid', 'like', 'story')
          .where('published', '=', true)
          .orderBy('orderid', 'ASC')
          .limit(last + 1);

        const data = await knex
          .from(knex.raw(`(${subQuery}) AS science`))
          .orderBy('science.orderid', 'DESC');

        hasNextPage = false;
        hasPreviousPage = data.length > last;
        artists = hasPreviousPage ? data.slice(1) : data;
      }

      if (last && !before && !after && categoryid) {
        const subQuery = knex('science')
          .whereNot('published', '=', false)
          .where('categoryid', 'like', categoryid)
          .orderBy('orderid', 'ASC')
          .limit(last + 1);

        const data = await knex
          .from(knex.raw(`(${subQuery}) AS science`))
          .orderBy('science.orderid', 'DESC');

        hasNextPage = false;
        hasPreviousPage = data.length > last;
        artists = hasPreviousPage ? data.slice(1) : data;
      }

      if (last && before && !categoryid) {
        //           .whereNot('categoryid', 'like', 'story')
        const subQuery = knex('science')
          .whereNot('categoryid', '=', 'story')
          .where('postid', '>', before)
          .andWhere('published', '=', true)
          .orderBy('orderid', 'ASC')
          .limit(last + 1);

        const data = await knex
          .from(knex.raw(`(${subQuery}) AS science`))
          .orderBy('science.orderid', 'DESC');

        hasNextPage = true;
        hasPreviousPage = data.length > last;
        artists = hasPreviousPage ? data.slice(1) : data;
      }

      if (last && before && categoryid) {
        const subQuery = knex('science')
          .whereNot('published', '=', false)
          .where('postid', '>', before)
          .andWhere('categoryid', 'like', categoryid)
          .orderBy('orderid', 'ASC')
          .limit(last + 1);

        const data = await knex
          .from(knex.raw(`(${subQuery}) AS science`))
          .orderBy('science.orderid', 'DESC');

        hasNextPage = true;
        hasPreviousPage = data.length > last;
        artists = hasPreviousPage ? data.slice(1) : data;
      }

      if (artists.length > 0) {
        startStr = artists[0].postid
        endStr = artists[artists.length - 1].postid
      } else {
        startStr = null
        endStr = null
      }

      return {
        edges: artists,
        pageInfo: {
          hasNextPage,
          hasPreviousPage,
          start: startStr,
          end: endStr
        }
      };
    },
    searchArtists: async (root, args, context, info) => {
      const { first, last, after, before, keyword } = args;

      if (!first && !last) {
        /* Handling errors */
      }

      if (first && last) {
        /* Handling errors */
      }

      if (after && before) {
        /* Handling errors */
      }

      let artists;
      let hasNextPage;
      let hasPreviousPage;
      let startStr;
      let endStr;

      if (first && !after && !before && !keyword) {
        const data = await knex('science')
          .orderBy('orderid', 'DESC')
          .limit(first + 1);

        hasPreviousPage = false;
        hasNextPage = data.length > first;
        artists = hasNextPage ? data.slice(0, -1) : data;
      }

      if (first && !after && !before && keyword) {
        const data = await knex('science')
          .where('title', 'like', `%${keyword}%`)
          .orderBy('orderid', 'DESC')
          .limit(first + 1);

        hasPreviousPage = false;
        hasNextPage = data.length > first;
        artists = hasNextPage ? data.slice(0, -1) : data;
      }

      if (first && after && !keyword) {
        const data = await knex('science')
          .where('postid', '<', after)
          .orderBy('orderid', 'DESC')
          .limit(first + 1);

        hasPreviousPage = true;
        hasNextPage = data.length > first;
        artists = hasNextPage ? data.slice(0, -1) : data;
      }

      if (first && after && keyword) {
        const data = await knex('science')
          .where('postid', '<', after)
          .andWhere('title', 'like', `%${keyword}%`)
          .orderBy('orderid', 'DESC')
          .limit(first + 1);

        hasPreviousPage = true;
        hasNextPage = data.length > first;
        artists = hasNextPage ? data.slice(0, -1) : data;
      }

      if (last && !before && !after && !keyword) {
        const subQuery = knex('science')
          .orderBy('orderid', 'ASC')
          .limit(last + 1);

        const data = await knex
          .from(knex.raw(`(${subQuery}) AS science`))
          .orderBy('science.orderid', 'DESC');

        hasNextPage = false;
        hasPreviousPage = data.length > last;
        artists = hasPreviousPage ? data.slice(1) : data;
      }

      if (last && !before && !after && keyword) {
        const subQuery = knex('science')
          .where('title', 'like', `%${keyword}%`)
          .orderBy('orderid', 'ASC')
          .limit(last + 1);

        const data = await knex
          .from(knex.raw(`(${subQuery}) AS science`))
          .orderBy('science.orderid', 'DESC');

        hasNextPage = false;
        hasPreviousPage = data.length > last;
        artists = hasPreviousPage ? data.slice(1) : data;
      }

      if (last && before && !keyword) {
        const subQuery = knex('science')
          .where('postid', '>', before)
          .orderBy('orderid', 'ASC')
          .limit(last + 1);

        const data = await knex
          .from(knex.raw(`(${subQuery}) AS science`))
          .orderBy('science.orderid', 'DESC');

        hasNextPage = true;
        hasPreviousPage = data.length > last;
        artists = hasPreviousPage ? data.slice(1) : data;
      }

      if (last && before && keyword) {
        const subQuery = knex('science')
          .where('postid', '>', before)
          .andWhere('title', 'like', `%${keyword}%`)
          .orderBy('orderid', 'ASC')
          .limit(last + 1);

        const data = await knex
          .from(knex.raw(`(${subQuery}) AS science`))
          .orderBy('science.orderid', 'DESC');

        hasNextPage = true;
        hasPreviousPage = data.length > last;
        artists = hasPreviousPage ? data.slice(1) : data;
      }

      if (artists.length > 0) {
        startStr = artists[0].postid
        endStr = artists[artists.length - 1].postid
      } else {
        startStr = null
        endStr = null
      }

      return {
        edges: artists,
        pageInfo: {
          hasNextPage,
          hasPreviousPage,
          start: startStr,
          end: endStr
        }
      };
    },
    artistsCategories: async () => {
      const result = await knex('post_categories').select('*')
      return result
    },
    pageInfo: async () => {
      const result = await knex('page_info').select('*')
      return result
    },
    aboutInfo: async () => {
      const result = await knex('about_info').select('*')
      if (result.length === 0) {
        return {
          visual: "",
          slogan: "",
          philosophy: "",
          quote: "",
          epilogue: ""
        }
      } else {
        return result[0]
      }
    },
    facilitiesList: async () => {
      const result = await knex('facilities_list').select('*')
      if (result.length === 0) {
        return []
      } else {
        return result
      }
    },
    observatoriesList: async () => {
      const result = await knex('observatories_list').select('*')
      if (result.length === 0) {
        return []
      } else {
        return result
      }
    },
    stargazingList: async () => {
      const result = await knex('stargazing_list').select('*')
      if (result.length === 0) {
        return []
      } else {
        return result
      }
    },
    me: isAuthenticated((root, args, { me }) => {
      // const jwtStr = Object.values(context).join("")
      const emptyObj = {
        id: "",
        email: "",
        name: ""
      }
      // if (Object.keys(context).length === 0) {
      //   // 完全沒帶 token 的情況
      //   // return emptyObj
      //   return null
      // } else {
      //   const { me } = context

      console.log(me)

      function changeDate(timestamp) {
        let display = ""
        const ts = new Date(timestamp);
        const year = ts.getFullYear()
        let date = ts.getDate()
        let month = ts.getMonth() + 1
        let hour = ts.getHours()
        let minutes = ts.getMinutes()
        let sec = ts.getSeconds()
        if (String(month).length === 1) {
          display = year + "-" + "0" + month
        } else {
          display = year + "-" + month
        }
        if (String(date).length === 1) {
          display = display + "-" + "0" + date
        } else {
          display = display + "-" + date
        }
        return display + " " + hour + ":" + minutes + ":" + sec
      }

      console.log(changeDate(me.iat * 1000), changeDate(me.exp * 1000))
      // 有錯誤的情況
      if (Object.keys(me).length === 0) {
        // return emptyObj
        return null
      }
      // 正常回傳
      return me
      // }
    })
  },
  Upload: GraphQLUpload,
  Mutation: {
    setNewPost: async (parent, args) => {
      const { postid, title, categoryid, updatetime, content, image } = args;
      const commonResponse = { code: 0, message: '' };
      // INSERT INTO science(postid, title, categoryid, updatetime, content) VALUES(
      //   '4847', '大氣視窗x', '天文觀測', 'observation', '2022-04-06', 'xxxxxx'
      // );
      await knex('science')
        .insert({
          postid: postid,
          title: title,
          categoryid: categoryid,
          updatetime: updatetime,
          content: content,
          image: image
        })
        .then(() => {
          commonResponse.message = 'create post success';
          return commonResponse;
        })
        .catch((error) => {
          console.error(error);
          commonResponse.code = 1;
          commonResponse.message = 'create post error';
          return commonResponse;
        });

    },
    singleUpload: async (_, { file }) => {
      const { createReadStream, filename, mimetype, encoding } = await file;
      const stream = createReadStream();

      // const out = require('fs').createWriteStream('local-file-output.txt');
      // stream.pipe(out);
      // await finished(out);

      const out = await require('fs').createWriteStream(path.join(__dirname, "/images", filename))

      await new Promise(res =>
        stream.pipe(out)
          .on("close", res)
      );

      return { filename, mimetype, encoding };
    },
    signUp: async (root, { name, email, password }, context) => {
      // 1. 檢查不能有重複註冊 email
      const isUserEmailDuplicate = users.some(user => user.email === email);
      if (isUserEmailDuplicate) throw new Error('User Email Duplicate');

      // 2. 將 passwrod 加密再存進去。非常重要 !!
      const hashedPassword = await hash(password, SALT_ROUNDS);
      // 3. 建立新 user
      const newUser = await addUser({ name, email, password: hashedPassword });

      return newUser
    },
    login: async (root, { email, password }, context) => {
      // 1. 透過 email 找到相對應的 user
      const user = users.find(user => user.email === email);
      if (!user) throw new Error('Email Account Not Exists');

      // 2. 將傳進來的 password 與資料庫存的 user.password 做比對
      const passwordIsValid = await bcrypt.compare(password, user.password);
      if (!passwordIsValid) throw new Error('Wrong Password');

      // 3. 成功則回傳 token
      return { token: await createToken(user) };
    }
  },
  Artist: {
    description: (parent, args, context) => {
      const { content } = parent
      let str = content.substr(3, 100)
      let des = str.replace(/\\\n|\\n|\n|<br \/>|<br \/>|\>/g, "");
      return des
    },
  }
}

export default resolvers;