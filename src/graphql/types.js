const { GraphQLObjectType , GraphQLInputObjectType, GraphQLID, 
    GraphQLString, GraphQLList, GraphQLInt, GraphQLBoolean,
    GraphQLFloat  } = require('graphql')

const { User, Post, AllPosts } = require('../models')

const UserType = new GraphQLObjectType({
    name: 'User',
    description: 'User type',
    fields: () => ({
        id: { type: GraphQLID },
        username: {type: GraphQLString},
        email: {type: GraphQLString},
        password: {type: GraphQLString}
    })
})

const PostType = new GraphQLObjectType({
    name: 'Post',
    description: 'Post type',
    fields: () => ({
        id: {type: GraphQLID},
        userId: {type: GraphQLString},
        content: {type: GraphQLString},
        time: {type: GraphQLString},
    })
})

const AllPostsType = new GraphQLObjectType({
    name: 'All Posts',
    description: 'All posts type',
    fields: () => ({
        userId: {type: GraphQLString},
        content: {type: GraphQLString},
        time: {type: GraphQLString},
    })
})


module.exports = {
    UserType,
    PostType,
    AllPostsType
}