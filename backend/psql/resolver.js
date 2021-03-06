require('dotenv').config({
  path: ".env." + process.env.NODE_ENV
})

const {
  ForbiddenError,
  AuthenticationError
} = require("apollo-server-core");

// import knex from './adapter'
const knex = require('./adapter');

const path = require('path');
const { finished } = require('stream/promises');
const {
  GraphQLUpload,
} = require('graphql-upload');

// 引入外部套件
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// import { getAllKeys, upload } from '../aws-s3/sdk'
const { getAllKeys, upload } = require('../aws-s3/sdk');

// 定義 bcrypt 加密所需 saltRounds 次數
const SALT_ROUNDS = 2;
// 定義 jwt 所需 secret
const SECRET = process.env.BE_JWT_SECRET;

// 儲存使用者資訊
const hash = text => bcrypt.hash(text, SALT_ROUNDS);
const addUser = ({ name, email, password }) => (
  users[users.length] = {
    uid: users[users.length - 1].uid + 1,
    name,
    email,
    password
  }
);

// helper function
const createToken = ({ id, email, name }, time) => jwt.sign({ id, email, name }, SECRET, {
  expiresIn: time
});

const findUserByUserId = userId =>
  users.find(user => user.id === Number(userId));

const isAuthenticated = resolverFunc => (parent, args, context) => {
  const nowTimeStamp = Math.floor(new Date().getTime() / 1000)
  console.log("isAuthenticated-context: ", context)
  if (context.jwtInfo && context.jwtInfo.exp > nowTimeStamp) {
    return resolverFunc.apply(null, [parent, args, context]);
  } else {
    throw new ForbiddenError("Not logged in.");
  }
};


const resolvers = {
  Query: {
    getSinglePost: async (_, args) => {
      const { postid } = args
      const result = await knex('science').select('*').whereNot('published', '=', false).where('postid', '=', postid)

      // ##### innerJoin #####
      // const result = await knex('post_categories').select('postid', 'title', 'categoryid', 'updatetime', 'content', 'image', 'post_category_name').innerJoin('science', function () {
      //   this.on('science.categoryid', '=', 'post_categories.post_category_id')
      // }).where({ 'science.postid': postid, 'science.published': true })

      // ##### filter #####
      // const result = await knex('science').select('*').whereNot('published', '=', false)
      // const filterList = result.filter((item) => item.postid === postid)[0]
      // return filterList;

      if (result.length === 1) {
        return result[0];
      } else {
        return {
          "categoryid": "",
          "content": "",
          "image": "",
          "postid": 0,
          "title": "",
          "updatetime": ""
        }
      }
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
      const result = await knex('post_categories').select('*').where('published', '=', true).orderBy('post_category_orderid', 'ASC')
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
      const result = await knex('facilities_list').select('*').whereNot('published', '=', false).orderBy('facilities_orderid', 'ASC')
      if (result.length === 0) {
        return []
      } else {
        return result
      }
    },
    observatoriesList: async () => {
      const result = await knex('observatories_list').select('*').whereNot('published', '=', false).orderBy('observatory_orderid', 'ASC')
      if (result.length === 0) {
        return []
      } else {
        return result
      }
    },
    stargazingList: async () => {
      const result = await knex('stargazing_list').select('*').whereNot('published', '=', false).orderBy('stargazing_orderid', 'DESC')
      if (result.length === 0) {
        return []
      } else {
        return result
      }
    },
    stargazingPagi: async (root, args, context, info) => {
      let stargazingList;
      let hasNextPage;
      let hasPreviousPage;
      let startStr;
      let endStr;
      let totalPagiNum;

      const { pageNumber, linesPerpage } = args;
      // .whereNot('categoryid', 'like', 'story')
      // 先取得總頁數
      const totalCountObj = await knex('stargazing_list').count('*').whereNot('published', '=', false)
      totalPagiNum = Math.ceil(totalCountObj[0].count / linesPerpage)

      // 依據參數取得該篇數
      const data = await knex('stargazing_list').orderBy('stargazing_orderid', 'DESC').whereNot('published', '=', false)
        .limit(linesPerpage + 1)
        .offset((pageNumber - 1) * linesPerpage)

      hasPreviousPage = false;
      hasNextPage = data.length > linesPerpage;
      stargazingList = hasNextPage ? data.slice(0, -1) : data;

      if (pageNumber > 1) {
        hasPreviousPage = true
      }

      if (stargazingList.length > 0) {
        startStr = stargazingList[0].stargazing_lid
        endStr = stargazingList[stargazingList.length - 1].stargazing_lid
      } else {
        startStr = null
        endStr = null
      }

      return {
        edges: stargazingList,
        pageInfo: {
          hasNextPage,
          hasPreviousPage,
          start: startStr,
          end: endStr,
          totalPagi: totalPagiNum
        }
      };

    },
    getSingleStargazer: async (_, args) => {
      const { stargazing_lid } = args;
      const result = await knex('stargazing_list').select('*').where('stargazing_lid', '=', stargazing_lid)
      if (result.length === 1) {
        return result[0];
      } else {
        return {
          "stargazing_title": "",
          "stargazing_latitude": 0,
          "stargazing_longitude": 0,
          "stargazing_image": "",
          "stargazing_description": "",
          "stargazing_address": "",
          "stargazing_link": "",
          "stargazing_lid": "",
          "published": false
        }
      }
    },
    getSingleCategory: async (_, args) => {
      const { categoryId } = args;
      const result = await knex('post_categories').select('*').where('post_category_id', '=', categoryId)
      if (result.length === 1) {
        return result[0];
      } else {
        return {
          "post_category_name": "",
          "post_category_id": ""
        }
      }
    },
    getSingleOrganization: async (_, args) => {
      const { facilities_orderid } = args;
      const result = await knex('facilities_list').select('*').where('facilities_orderid', '=', facilities_orderid)
      if (result.length === 1) {
        return result[0];
      } else {
        return {
          "facilities_orderid": 0,
          "facilities_title": "",
          "facilities_description": "",
          "facilities_image": "",
          "facilities_link": "",
          "facilities_published": false
        }
      }
    },
    getSingleObservatory: async (_, args) => {
      const { observatory_category_id } = args;
      const result = await knex('observatories_list').select('*').where('observatory_category_id', '=', observatory_category_id)
      if (result.length === 1) {
        return result[0];
      } else {
        return {
          "observatory_category_name": "",
          "observatory_category_id": "",
          "observatory_post_content": "",
        }
      }
    },
    me: isAuthenticated((root, args, { me }) => {
      // const jwtStr = Object.values(context).join("")
      let emptyObj = {
        name: "",
        uid: null,
        email: "",
        iat: null,
        token: "",
        exp: null,
        refreshToken: "",
        refreshExp: null
      }
      // if (Object.keys(context).length === 0) {
      //   // 完全沒帶 token 的情況
      //   // return emptyObj
      //   return null
      // } else {
      //   const { me } = context

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

      // console.log(me)
      // 正常回傳
      if (Object.keys(me).length > 0) {
        console.log(changeDate(me.iat * 1000), changeDate(me.exp * 1000))
        return me
      }
      // 有錯誤的情況
      return emptyObj

    })
  },
  Upload: GraphQLUpload,
  Mutation: {
    setNewPost: async (parent, args) => {
      const { title, categoryid, content, image } = args;
      const commonResponse = { code: 0, message: '' };
      const changeDate = () => {
        let display = ""
        const ts = new Date();
        const year = ts.getFullYear()
        let date = ts.getDate()
        let month = ts.getMonth() + 1
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
        return display
      }
      const maxPostId = await knex('science')
        .max('postid')
        .first();
      const setTime = changeDate()
      const newId = 1 + maxPostId.max

      await knex('science')
        .insert({
          postid: newId,
          title: title,
          categoryid: categoryid,
          updatetime: setTime,
          content: content,
          image: image,
          published: true
        })
        .then(() => {
          commonResponse.code = 1;
          commonResponse.message = '新增成功';
          return commonResponse;
        })
        .catch((error) => {
          console.error(error);
          commonResponse.code = -1;
          commonResponse.message = '新增失敗';
          return commonResponse;
        });
      return commonResponse
    },
    mutSinglePost: async (parent, args) => {
      const { postid, title, categoryid, content, image } = args;
      const commonResponse = { code: 0, message: '' };
      await knex('science').where('postid', '=', postid).update({
        title: title,
        categoryid: categoryid,
        content: content,
        image: image
      }).then(() => {
        commonResponse.code = 1;
        commonResponse.message = '編輯成功';
        return commonResponse;
      })
        .catch((error) => {
          console.error(error);
          commonResponse.code = -1;
          commonResponse.message = '編輯失敗';
          return commonResponse;
        });
      return commonResponse
    },
    deletePost: async (parent, args) => {
      const { postid } = args;
      const commonResponse = { code: 0, message: '' };
      await knex('science')
        .where('postid', '=', postid)
        .update({ published: false }).then(() => {
          commonResponse.code = 1;
          commonResponse.message = '刪除成功';
          return commonResponse;
        })
        .catch((error) => {
          console.error(error);
          commonResponse.code = -1;
          commonResponse.message = '刪除失敗';
          return commonResponse;
        });
      return commonResponse
    },
    singleUpload: async (_, { file }, content) => {
      const { fileSize } = content
      const fs = require('fs');
      const { createReadStream, filename, mimetype, encoding } = await file;
      const stream = createReadStream();
      const filePath = path.join(__dirname, "../images", filename)
      let s3Path = ""
      let errorTitle = ""

      // const fileList = await getAllKeys()
      // console.log(`allKeys: ${JSON.stringify(fileList)}`)

      if (fileSize < 1048576) {
        const out = await fs.createWriteStream(filePath, { autoClose: true })
        const pipeFile = await new Promise((resolve, reject) =>
          stream.pipe(out).on('error', err => {
            console.log("err", err);
            reject(false)
          }).on('finish', () => {
            // const stat = fs.statSync(filePath)
            // console.log("size: ", stat["size"])
            resolve(true)
          })
        );
        if (pipeFile) {
          s3Path = await upload(filePath, filename, mimetype)
          if (s3Path) {
            fs.unlink(filePath, function (err) {
              if (err) {
                return console.error(err);
              }
              console.log("檔案刪除成功");
            });
          }
        }
      } else {
        errorTitle = "This file is too large"
      }

      return { filename, mimetype, encoding, s3Path, errorTitle };
    },
    signUp: async (root, { name, email, password }, context) => {
      // 1. 檢查不能有重複註冊 email
      // const isUserEmailDuplicate = users.some(user => user.email === email);
      // if (isUserEmailDuplicate) throw new Error('User Email Duplicate');

      // 2. 將 passwrod 加密再存進去。非常重要 !!
      const hashedPassword = await hash(password, SALT_ROUNDS);

      // 3. 建立新 user
      const newUser = await addUser({ name, email, password: hashedPassword });

      return newUser
    },
    login: async (root, { email, password }, context) => {
      // 預設空值
      const emptyObj = {
        name: "",
        uid: null,
        email: "",
        iat: null,
        token: "",
        exp: null,
        refreshToken: "",
        refreshExp: null,
        errorTitle: "",
        errorMsg: ""
      }
      let passwordIsValid = false
      // 透過 email 找到相對應的 user
      const users = await knex('users').select('*').where('email', '=', email)
      let user = null
      if (users.length > 0) {
        user = users[0]
      }
      // 將傳進來的 password 與資料庫存的 user.password 做比對
      if (user) {
        passwordIsValid = await bcrypt.compare(password, user.password);
      }
      if (user && passwordIsValid) {
        // 成功則回傳 token
        const mainToken = await createToken(user, '40m')
        const refreshToken = await createToken(user, '15 days')
        const mainInfo = await jwt.verify(mainToken, SECRET)
        const refreshInfo = await jwt.verify(refreshToken, SECRET)
        const jwtObj = {
          name: mainInfo.name,
          uid: user.uid,
          email: mainInfo.email,
          iat: mainInfo.iat,
          token: mainToken,
          exp: mainInfo.exp,
          refreshToken: refreshToken,
          refreshExp: refreshInfo.exp,
          errorTitle: "",
          errorMsg: ""
        }
        return jwtObj
      } else if (!user) {
        // 找不到使用者
        emptyObj.errorMsg = "登入失敗"
        return emptyObj
      } else if (!passwordIsValid) {
        // 密碼錯誤
        emptyObj.errorMsg = "登入失敗"
        return emptyObj
      } else {
        // 其他情況
        emptyObj.errorMsg = "登入失敗"
        return emptyObj
      }
    },
    extendExpired: async (root, { oriReToken }, context) => {
      let oriReFreshEmail = ""
      let oriReFreshExp = 0
      const nowTimeStamp = Math.floor(new Date().getTime() / 1000)

      // 預設空值
      const emptyObj = {
        name: "",
        uid: null,
        email: "",
        iat: null,
        token: "",
        exp: null,
        refreshToken: "",
        refreshExp: null,
        errorTitle: "",
        errorMsg: ""
      }

      // 解析 原本的 token 是否過期
      const oriToken = context.jwtInfo.errorTitle
      // console.log("extendExpired-oriToken: ", oriToken)

      // 解析 refresh 是否過期
      const resolveOriRetokenIsERR = await jwt.verify(oriReToken, SECRET, function (err, result) {
        if (err) {
          return true
        } else {
          oriReFreshEmail = result.email
          oriReFreshExp = result.exp
          if (oriReFreshExp > nowTimeStamp) {
            return false
          } else {
            return true
          }
        }
      });

      // 查詢此使用者 email 是否存在
      const users = await knex('users').select('*').where('email', '=', oriReFreshEmail)
      let user = null
      if (users.length > 0) {
        user = users[0]
      }
      // if (resolveOriRetoken) throw new Error('User ID Not Exists');
      // console.log("resolveOriRetokenIsERR: ", resolveOriRetokenIsERR)
      // console.log("oriToken: ", oriToken)
      // console.log("user: ", user)

      // 符合條件才回傳查詢
      if (!resolveOriRetokenIsERR && oriToken === "TokenExpiredError" && user.email === oriReFreshEmail) {
        console.log("符合條件")
        // 重新製作 JWT
        const mainToken = await createToken(user, '40m')
        const refreshToken = await createToken(user, '15 days')
        const mainInfo = await jwt.verify(mainToken, SECRET)
        const refreshInfo = await jwt.verify(refreshToken, SECRET)
        const jwtObj = {
          name: mainInfo.name,
          uid: user.uid,
          email: mainInfo.email,
          iat: mainInfo.iat,
          token: mainToken,
          exp: mainInfo.exp,
          refreshToken: refreshToken,
          refreshExp: refreshInfo.exp,
        }
        return jwtObj
      } else {
        return emptyObj
      }
    },
    setNewStargazer: async (parent, args) => {
      const { stargazing_title, stargazing_latitude, stargazing_longitude, stargazing_image, stargazing_description, stargazing_address, published } = args;
      const commonResponse = { code: 0, message: '' };
      const lastLid = await knex('stargazing_list').select('stargazing_lid', 'stargazing_orderid').orderBy('stargazing_lid', 'DESC').limit(1)
      const insert = await knex('stargazing_list')
        .insert({
          stargazing_orderid: 1 + Number(lastLid[0].stargazing_orderid),
          stargazing_title: stargazing_title,
          stargazing_latitude: stargazing_latitude,
          stargazing_longitude: stargazing_longitude,
          stargazing_image: stargazing_image,
          stargazing_description: stargazing_description,
          stargazing_address: stargazing_address,
          stargazing_lid: String(1 + Number(lastLid[0].stargazing_lid)),
          published: published
        })
      if (insert.rowCount > 0) {
        commonResponse.code = 1;
        commonResponse.message = '新增成功'
      } else {
        commonResponse.code = -1;
        commonResponse.message = '新增失敗'
      }
      return commonResponse
    },
    deleteStargazer: async (parent, args) => {
      const { stargazing_lid } = args;
      const commonResponse = { code: 0, message: '' };
      await knex('stargazing_list')
        .where('stargazing_lid', '=', stargazing_lid)
        .update({ published: false }).then(() => {
          commonResponse.code = 1;
          commonResponse.message = '刪除成功';
          return commonResponse;
        })
        .catch((error) => {
          console.error(error);
          commonResponse.code = -1;
          commonResponse.message = '刪除失敗';
          return commonResponse;
        });
      return commonResponse
    },
    editStargazer: async (parent, args) => {
      // console.log(args)
      const {
        stargazing_title,
        stargazing_latitude,
        stargazing_longitude,
        stargazing_image,
        stargazing_description,
        stargazing_address,
        stargazing_lid
      } = args;
      const commonResponse = { code: 0, message: '' };
      await knex('stargazing_list')
        .where('stargazing_lid', '=', stargazing_lid)
        .update({
          stargazing_title: stargazing_title,
          stargazing_latitude: stargazing_latitude,
          stargazing_longitude: stargazing_longitude,
          stargazing_image: stargazing_image,
          stargazing_description: stargazing_description,
          stargazing_address: stargazing_address
        }).then(() => {
          commonResponse.code = 1;
          commonResponse.message = '編輯成功';
          return commonResponse;
        })
        .catch((error) => {
          console.error(error);
          commonResponse.code = -1;
          commonResponse.message = '編輯失敗';
          return commonResponse;
        });
      return commonResponse
    },
    editHomeSlogan: async (parent, args) => {
      const {
        pageTitle,
        pageSubTitle
      } = args;
      const commonResponse = { code: 0, message: '' };
      await knex('page_info')
        .where('page_route', '=', 'Home')
        .update({
          page_title: pageTitle,
          sub_page_title: pageSubTitle
        }).then(() => {
          commonResponse.code = 1;
          commonResponse.message = '編輯成功';
          return commonResponse;
        })
        .catch((error) => {
          console.error(error);
          commonResponse.code = -1;
          commonResponse.message = '編輯失敗';
          return commonResponse;
        });
      return commonResponse
    },
    mutAboutSlogan: async (parent, args) => {
      const {
        sloganRef,
        philosophyRef
      } = args;
      const commonResponse = { code: 0, message: '' };
      await knex('about_info').update({
        slogan: sloganRef,
        philosophy: philosophyRef
      }).then(() => {
        commonResponse.code = 1;
        commonResponse.message = '編輯成功';
        return commonResponse;
      })
        .catch((error) => {
          console.error(error);
          commonResponse.code = -1;
          commonResponse.message = '編輯失敗';
          return commonResponse;
        });
      return commonResponse
    },
    mutAboutQuote: async (parent, args) => {
      const {
        quoteRef
      } = args;
      const commonResponse = { code: 0, message: '' };
      await knex('about_info').update({
        quote: quoteRef
      }).then(() => {
        commonResponse.code = 1;
        commonResponse.message = '編輯成功';
        return commonResponse;
      })
        .catch((error) => {
          console.error(error);
          commonResponse.code = -1;
          commonResponse.message = '編輯失敗';
          return commonResponse;
        });
      return commonResponse
    },
    mutAboutEpilogue: async (parent, args) => {
      const {
        epilogueRef
      } = args;
      const commonResponse = { code: 0, message: '' };
      await knex('about_info').update({
        epilogue: epilogueRef
      }).then(() => {
        commonResponse.code = 1;
        commonResponse.message = '編輯成功';
        return commonResponse;
      })
        .catch((error) => {
          console.error(error);
          commonResponse.code = -1;
          commonResponse.message = '編輯失敗';
          return commonResponse;
        });
      return commonResponse
    },
    setNewCategory: async (parent, args) => {
      let { categoryName, categoryId } = args;
      const commonResponse = { code: 0, message: '' };

      const checkCatId = await knex('post_categories').select('post_category_id').where('post_category_id', 'like', `${categoryId}%`)

      if (checkCatId.length > 0) {
        let maxNum = 0
        checkCatId.forEach(catId => {
          let strReplace = catId.post_category_id.replace(categoryId + '_', '')
          if (strReplace !== categoryId && Number(strReplace) > maxNum) {
            maxNum = Number(strReplace)
          }
        });
        categoryId = categoryId + '_' + (1 + maxNum)
      } else if (checkCatId.length === 1 && checkCatId[0] === categoryId) {
        categoryId = categoryId + '_1'
      }

      const orderid = await knex('post_categories')
        .max('post_category_orderid')
        .first();
      await knex('post_categories')
        .insert({
          post_category_orderid: 1 + orderid.max,
          post_category_name: categoryName,
          post_category_id: categoryId,
          published: true
        })
        .then(() => {
          commonResponse.code = 1;
          commonResponse.message = '成功新增分類';
          return commonResponse;
        })
        .catch((error) => {
          console.error(error);
          commonResponse.code = -1;
          commonResponse.message = '新增失敗';
          return commonResponse;
        });

      return commonResponse
    },
    deleteCategory: async (parent, args) => {
      const { categoryId } = args;
      const commonResponse = { code: 0, message: '' };
      await knex('post_categories')
        .where('post_category_id', '=', categoryId)
        .update({ published: false }).then(() => {
          commonResponse.code = 1;
          commonResponse.message = '刪除成功';
          return commonResponse;
        })
        .catch((error) => {
          console.error(error);
          commonResponse.code = -1;
          commonResponse.message = '刪除失敗';
          return commonResponse;
        });
      return commonResponse
    },
    mutCategory: async (parent, args) => {
      const { categoryName, categoryId } = args;
      const commonResponse = { code: 0, message: '' };
      await knex('post_categories')
        .where('post_category_id', '=', categoryId)
        .update({
          post_category_name: categoryName
        }).then(() => {
          commonResponse.code = 1;
          commonResponse.message = '編輯成功';
          return commonResponse;
        })
        .catch((error) => {
          console.error(error);
          commonResponse.code = -1;
          commonResponse.message = '編輯失敗';
          return commonResponse;
        });
      return commonResponse
    },
    deleteOrganization: async (parent, args) => {
      const { facilities_orderid } = args;
      const commonResponse = { code: 0, message: '' };
      await knex('facilities_list')
        .where('facilities_orderid', '=', facilities_orderid)
        .update({ published: false }).then(() => {
          commonResponse.code = 1;
          commonResponse.message = '刪除成功';
          return commonResponse;
        })
        .catch((error) => {
          console.error(error);
          commonResponse.code = -1;
          commonResponse.message = '刪除失敗';
          return commonResponse;
        });
      return commonResponse
    },
    setNewOrganization: async (parent, args) => {
      const { facilities_title, facilities_description, facilities_image, facilities_link } = args;
      const commonResponse = { code: 0, message: '' };
      const maxPostId = await knex('facilities_list')
        .max('facilities_orderid')
        .first();
      const newId = 1 + maxPostId.max
      await knex('facilities_list')
        .insert({
          facilities_orderid: newId,
          facilities_title: facilities_title,
          facilities_description: facilities_description,
          facilities_image: facilities_image,
          facilities_link: facilities_link,
          published: true
        })
        .then(() => {
          commonResponse.code = 1;
          commonResponse.message = '新增成功';
          return commonResponse;
        })
        .catch((error) => {
          console.error(error);
          commonResponse.code = -1;
          commonResponse.message = '新增失敗';
          return commonResponse;
        });
      return commonResponse
    },
    mutOrganization: async (parent, args) => {
      const { facilities_orderid, facilities_title, facilities_description, facilities_image, facilities_link } = args;
      const commonResponse = { code: 0, message: '' };
      await knex('facilities_list')
        .where('facilities_orderid', '=', facilities_orderid)
        .update({
          facilities_title: facilities_title,
          facilities_description: facilities_description,
          facilities_image: facilities_image,
          facilities_link: facilities_link,
        }).then(() => {
          commonResponse.code = 1;
          commonResponse.message = '編輯成功';
          return commonResponse;
        })
        .catch((error) => {
          console.error(error);
          commonResponse.code = -1;
          commonResponse.message = '編輯失敗';
          return commonResponse;
        });
      return commonResponse
    },
    deleteObservatories: async (parent, args) => {
      const { observatory_category_id } = args;
      const commonResponse = { code: 0, message: '' };
      await knex('observatories_list')
        .where('observatory_category_id', '=', observatory_category_id)
        .update({ published: false }).then(() => {
          commonResponse.code = 1;
          commonResponse.message = '刪除成功';
          return commonResponse;
        })
        .catch((error) => {
          console.error(error);
          commonResponse.code = -1;
          commonResponse.message = '刪除失敗';
          return commonResponse;
        });
      return commonResponse
    },
    setNewObservatories: isAuthenticated(async (parent, args) => {
      let { observatory_category_name, observatory_category_id, observatory_post_content } = args;
      const commonResponse = { code: 0, message: '' };

      const checkCatId = await knex('observatories_list').select('observatory_category_id').where('observatory_category_id', 'like', `${observatory_category_id
        }%`)

      if (checkCatId.length > 0) {
        let maxNum = 0
        checkCatId.forEach(catId => {
          let strReplace = catId['observatory_category_id'].replace(observatory_category_id + '_', '')
          if (strReplace !== observatory_category_id && Number(strReplace) > maxNum) {
            maxNum = Number(strReplace)
          }
        });
        observatory_category_id = observatory_category_id + '_' + (1 + maxNum)
      } else if (checkCatId.length === 1 && checkCatId[0] === observatory_category_id) {
        observatory_category_id = observatory_category_id + '_1'
      }

      await knex('observatories_list')
        .insert({
          observatory_category_name: observatory_category_name,
          observatory_category_id: observatory_category_id,
          observatory_post_content: observatory_post_content,
          published: true
        })
        .then(() => {
          commonResponse.code = 1;
          commonResponse.message = '新增成功';
          return commonResponse;
        })
        .catch((error) => {
          console.error(error);
          commonResponse.code = -1;
          commonResponse.message = '新增失敗';
          return commonResponse;
        });
      return commonResponse
    }),
    mutObservatories: async (parent, args) => {
      const { observatory_category_name, observatory_category_id, observatory_post_content } = args;
      const commonResponse = { code: 0, message: '' };
      await knex('observatories_list')
        .where('observatory_category_id', '=', observatory_category_id)
        .update({
          observatory_category_name: observatory_category_name,
          observatory_post_content: observatory_post_content,
        }).then(() => {
          commonResponse.code = 1;
          commonResponse.message = '編輯成功';
          return commonResponse;
        })
        .catch((error) => {
          console.error(error);
          commonResponse.code = -1;
          commonResponse.message = '編輯失敗';
          return commonResponse;
        });
      return commonResponse
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

// export default resolvers;
module.exports = resolvers