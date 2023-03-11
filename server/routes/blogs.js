const express = require('express')
const router = express.Router()
const Blog = require('../models/blog')

//Getting all blogs
router.get('/',  async (req, res) => {

    try {
        const blogs = await Blog.find()
        res.json(blogs)
    } catch(err) {
        res.status(500).json({ message: err.message })
    }
})

//Getting one blog
router.get('/:id', getBlog, (req, res) => {
    res.json(res.blog)
})

//Creating one blog
router.post('/', async (req, res) => {
    const blog = new Blog({
        media: req.body.media,
        title: req.body.title,
        heading: req.body.heading,
        textBody: req.body.textBody,
        datePosted: req.body.datePosted,
        comments: req.body.comments
    })

    try {
        const newBlog = await blog.save()
        res.status(201).json(newBlog)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }

})


//Updating one
router.patch('/:id', getBlog,  async (req, res) => {
    if(req.body.title != null) {
        res.blog.title = req.body.title
    }
    if(req.body.heading != null) {
        res.blog.heading = req.body.heading
    }
    if(req.body.textBody != null) {
        res.blog.textBody = req.body.textBody
    }

    try {
        const updatedBlog =  await res.blog.save()
        res.json(updatedBlog)
    } catch (err) {
        res.status(400).json({ message: err.message})
    }
})


//Deleting one
router.delete('/:id', getBlog, async (req, res) => {
     try {
        await res.blog.remove()
        res.json({message: "Deleted blog."})
     } catch (err) {
        res.status(500).json({message: err.message})
     }
})

async function getBlog(req, res, next) {
let blog
try {
    blog = await Blog.findById(req.params.id)
    if(blog == null) {
        return res.status(404).json({ message: "Cannot find blog"})
    }
} catch (err) {
    return res.status(500).json({ message: err.message})
}
    res.blog = blog
    next()
}

module.exports = router