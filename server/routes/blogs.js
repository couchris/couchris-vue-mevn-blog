const express = require('express')

const router = express.Router()

//Getting all blogs
router.get('/', (req, res) => {
res.send('Hello world')
})

//Getting one blog
router.get('/:id', (req, res) => {

})

//Creating one blog
router.post('/', (req, res) => {

})


//Updating one
router.patch('/:id', (req, res) => {

})


//Deleting one
router.delete('/:id', (req, res) => {

})

module.exports = router