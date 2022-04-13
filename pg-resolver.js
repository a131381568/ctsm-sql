import knex from './psql-adapter'
const path = require('path');
const { finished } = require('stream/promises');
const {
  GraphQLUpload,
} = require('graphql-upload');

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
    }
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