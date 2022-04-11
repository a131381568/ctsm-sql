const { ApolloServer, gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    getSinglePost(postid: Int!): Artist
    artists (first: Int, last: Int, after: Int, before: Int, categoryid:String): ArtistsConnection
    searchArtists (first: Int, last: Int, after: Int, before: Int, keyword:String): ArtistsConnection
    artistsCategories: [artistsCategory]
    pageInfo:[singlePageInfo]
    aboutInfo:AboutInfo
    facilitiesList: [Facility]
    observatoriesList: [Observatory]
    stargazingList: [Stargazing]
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

  type Facility{
    facilities_title: String
    facilities_description: String
    facilities_image: String
    facilities_link: String
  }

  type Observatory{
    observatory_category_name: String
    observatory_category_id: String
    observatory_post_content: String
  }

  type Stargazing{
    stargazing_title: String
    stargazing_latitude: Float
    stargazing_longitude: Float
    stargazing_image: String
    stargazing_description: String
    stargazing_address: String
    stargazing_link: String
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