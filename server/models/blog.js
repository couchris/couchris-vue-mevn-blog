const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    media: {
        type: String,
        required: true
    },

    title: {

    },

    heading: {

    },

    textBody: {

    },

    datePosted: {
        
    },

    comments: {

    }

})