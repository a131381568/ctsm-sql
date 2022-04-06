const { ApolloServer, gql } = require('apollo-server-express');

const typeDefs = gql`
  type Post {
    postid: Int
    title: String
    categoryid: String
    updatetime: String
    content: String
  }
  type Query {
    getSinglePost(postid: Int!): Post
    artists (first: Int, last: Int, after: Int, before: Int, categoryid:String): ArtistsConnection
    searchArtists (first: Int, last: Int, after: Int, before: Int, keyword:String): ArtistsConnection
  }

  type Artist {
    postid: Int
    title: String
    categoryid: String
    updatetime: String
    content: String
    description: String
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
    hasPreviousPage: Boolean!,
    start: Int,
    end: Int
  }


  type CommonResponse {
    code: Int!
    message: String!
  }



  type Mutation {
    setNewPost(postid: Int, title: String, categoryid: String, updatetime: String, content: String): CommonResponse
  } 
  

`

export default typeDefs;