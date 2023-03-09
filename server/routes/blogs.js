const express = require('express')
const router = express.Router()
const Blog = require('../models/blog')

//Getting all blogs
router.get('/', (req, res) => {
res.send('Hello world')
})

//Getting one blog
router.get('/:id', (req, res) => {
    res.send('Hello world')
})

//Creating one blog
router.post('/', (req, res) => {
    res.send('Hello world POST')
})


//Updating one
router.patch('/:id', (req, res) => {

})


//Deleting one
router.delete('/:id', (req, res) => {

})

module.exports = router