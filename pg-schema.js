const { ApolloServer, gql } = require('apollo-server-express');

const typeDefs = gql`
  type artistsCategory {
    post_category_name: String
    post_category_id: String
  }

  type singlePageInfo {
    page_title: String
    sub_page_title: String
    page_route: String
  }

  type Post {
    postid: Int
    title: String
    categoryid: String
    updatetime: String
    content: String
    description: String
    image: String
  }

  type Query {
    getSinglePost(postid: Int!): Artist
    artists (first: Int, last: Int, after: Int, before: Int, categoryid:String): ArtistsConnection
    searchArtists (first: Int, last: Int, after: Int, before: Int, keyword:String): ArtistsConnection
    artistsCategories: [artistsCategory]
    pageInfo:[singlePageInfo]
    aboutInfo:AboutInfo
  }

  type Artist {
    postid: Int
    title: String
    categoryid: String
    updatetime: String
    content: String
    description: String
    image: String
  }

  type ArtistsConnection {
    edges: [Artist]
    pageInfo: PageInfo!
  }

  type ArtistEdge {
    node: Artist
    cursor: String
  }

  type PageInfo {
    hasNextPage: Boolean!
    hasPreviousPage: Boolean!
    start: Int
    end: Int
  }

  type AboutInfo {
    visual: String
    slogan: String
    philosophy: String
    quote: String
    epilogue: String
  }

  type CommonResponse {
    code: Int!
    message: String!
  }

  type Mutation {
    setNewPost(postid: Int, title: String, categoryid: String, updatetime: String, content: String, image: String): CommonResponse
  } 
`
export default typeDefs;