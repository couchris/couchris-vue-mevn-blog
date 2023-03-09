const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    media: {
        type: String,
        required: true
    },

    title: {
        type: String,
        required: true
    },

    heading: {
        type: String
    },

    textBody: {
        type: String,
        required: true
    },

    datePosted: {
        type: String,
        required: true,
        default: Date.now
    },

    comments: [
        {
            user: String,
            comment: String
        }
    ]
})

module.exports = mongoose.model('Blog', blogSchema )