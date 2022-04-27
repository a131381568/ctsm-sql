const { ApolloServer, gql } = require('apollo-server-express');

const typeDefs = gql`
  scalar Upload

  type File {
    filename: String!
    mimetype: String!
    encoding: String!
    s3Path: String!
    errorTitle: String
  }

  type Query {
    getSinglePost (postid: Int!): Artist
    artists (first: Int, last: Int, after: Int, before: Int, categoryid:String, pageNumber: Int): ArtistsConnection
    searchArtists (first: Int, last: Int, after: Int, before: Int, keyword:String): ArtistsConnection
    artistsCategories: [artistsCategory]
    pageInfo:[singlePageInfo]
    aboutInfo:AboutInfo
    facilitiesList: [Facility]
    observatoriesList: [Observatory]
    stargazingList: [Stargazing]
    artistsPagi (pageNumber: Int, linesPerpage: Int): ArtistsConnectionPush
    otherFields: Boolean!
    me: User
    stargazingPagi (pageNumber: Int, linesPerpage: Int): StargazingConnectionPush
    getSingleStargazer (stargazing_lid: String): Stargazing
    getSingleCategory (categoryId: String!): artistsCategory
  }

  type Artist {
    postid: Int
    title: String
    categoryid: String
    updatetime: String
    content: String
    description: String
    image: String
    published: Boolean
  }

  type ArtistsConnection {
    edges: [Artist]
    pageInfo: PageInfo!
  }

  type ArtistsConnectionPush {
    edges: [Artist]
    pageInfo: PageInfoPush!
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

  type PageInfoPush {
    hasNextPage: Boolean!
    hasPreviousPage: Boolean!
    start: Int
    end: Int
    totalPagi: Int
  }

  type AboutInfo {
    visual: String
    slogan: String
    philosophy: String
    quote: String
    epilogue: String
  }

  type Facility{
    facilities_orderid: Int
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
    stargazing_lid: String
    published: Boolean
  }

  type StargazingConnectionPush {
    edges: [Stargazing]
    pageInfo: PageInfoPush!
  }

  type CommonResponse {
    code: Int!
    message: String!
  }

  type User {
    id: ID!
    email: String!
    name: String
    iat: Int
    exp: Int
  }

  type Token {
    token: String!
  }

  type LoginInfo {
    name: String
    id: ID
    email: String
    iat: Int
    token: String
    exp: Int
    refreshToken: String
    refreshExp: Int
    errorTitle: String
    errorMsg: String
  }

  type Mutation {
    setNewPost(title: String, categoryid: String, content: String, image: String): CommonResponse
    deletePost(postid: Int): CommonResponse
    singleUpload(file: Upload!): File!
    signUp(name: String, email: String!, password: String!): User
    login(email: String!, password: String!): LoginInfo
    extendExpired(userId: Int!, email: String!, oriReToken: String!): LoginInfo
    setNewStargazer(stargazing_title: String, stargazing_latitude: Float, stargazing_longitude: Float, stargazing_image: String, stargazing_description: String, stargazing_address: String, published: Boolean): CommonResponse
    deleteStargazer(stargazing_lid: String!): CommonResponse
    editStargazer(stargazing_title: String, stargazing_latitude: Float, stargazing_longitude: Float, stargazing_image: String, stargazing_description: String, stargazing_address: String, stargazing_lid: String): CommonResponse
    editHomeSlogan(pageTitle: String!, pageSubTitle: String!): CommonResponse
    mutAboutSlogan(sloganRef: String!, philosophyRef: String!): CommonResponse
    mutAboutQuote(quoteRef: String!): CommonResponse
    mutAboutEpilogue(epilogueRef: String!): CommonResponse
    setNewCategory(categoryName: String!, categoryId: String!): CommonResponse
    deleteCategory(categoryId: String!): CommonResponse
    mutCategory(categoryName: String!, categoryId: String!): CommonResponse
    mutSinglePost(postid: Int!, title: String, categoryid: String, content: String, image: String): CommonResponse
    deleteOrganization(facilities_orderid: Int!): CommonResponse
  } 
`
export default typeDefs;