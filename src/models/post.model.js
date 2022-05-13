const mongoose = require('mongoose')

const postSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            unique: false,
            required: false
        },
        content: {
            type: String,
            required: true,
        },
        time: {
            type: Date,
            required: true,
        }
    },
    {timestamps: true}
)

module.exports = mongoose.model("post", postSchema)