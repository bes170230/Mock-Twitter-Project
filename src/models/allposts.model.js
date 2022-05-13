const mongoose = require('mongoose')

const allPostsSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            unique: true,
            required: true
        },
        content: {
            type: String,
            required: true,
        },
        time: {
            type: Date,
            required: true,
        },
        view: {
            type: String,
            required: true,
        }
    },
    {timestamps: true}
)

module.exports = mongoose.model("allPosts", allPostsSchema)