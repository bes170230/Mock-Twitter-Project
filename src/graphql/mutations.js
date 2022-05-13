const { GraphQLString, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLInt } = require('graphql')
const { UserType, PostType, AllPostsType } = require('./types')
const { User, Post, AllPosts, Submission } = require('../models')
const { createJwtToken } = require('../util/auth')

const register = {
    type: GraphQLString,
    args: {
        username: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
    },
    async resolve(parent, args) {
        
        const checkUser = await User.findOne({ email: args.email })
        if (checkUser) {
            throw new Error("User with this email address already exists")
        }

        const { username, email, password } = args
        const user = new User({ username, email, password })

        await user.save()

        const token = createJwtToken(user)
        return token
    }
}

const login = {
    type: GraphQLString,
    args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
    },
    async resolve(parent, args) {
        const user = await User.findOne({ email: args.email })
        if (!user || args.password !== user.password) {
            throw new Error("Invalid credentials")
        }

        const token = createJwtToken(user)
        return token
    }
}

const createPost = {
    type: GraphQLString,
    args: {
        content: {
            type: GraphQLString
        },
        userId: {
            type: GraphQLString
        }
    },
    async resolve(parent, args) {

        const post = new Post({
            content: args.content,
            time: (new Date()).toString(),
            userId: args.userId
        })

        await post.save()

        return post.id


    }
}

const submitPost = {
    type: GraphQLString,
    args: {
        userId: {
            type: GraphQLString
        },
        postId: {
            type: GraphQLString
        },
        content: {
            type: GraphQLString
        }
    },
    async resolve(parent, args) {
        try{

        for (const post of args.posts) {
            const postContent = await Post.findById(post.postId)

        }

        const submission = new Submission({
            userId: args.userId,
            postId: args.postId
        })

        submission.save()

            return submission.id
        }
        catch(e) {
            console.log(e)
            return ''
        }
    }
}

module.exports = { register, login, createPost, submitPost }