const router = require('express').Router() //calling express in from the node modules
const fs = require('fs')
const db = require('../db/db.json') // pulling the database (db) from the backend 
const { v4: uuidv4 } = require('uuid');
router.get('/notes', (req, res) => {
    fs.readFile('db/db.json', 'utf-8', (err, data) => err ? console.log(err) : res.json(JSON.parse(data))
)})
router.post('/notes', (req, res) => {
    fs.readFile('db/db.json', 'utf-8', (err, data) => {
        if (err) throw err
        const parseData = JSON.parse(data)
        const note = { text: req.body.text, title: req.body.title, id:uuidv4()} //creating an object
        parseData.push(note)
        fs.writeFile('db/db.json', JSON.stringify(parseData), err => {
            if (err) throw err
            res.redirect('/notes')
        })

    })
})
router.delete('/notes/:id', (req, res) => { // these are the params 
    fs.readFile('db/db.json', 'utf-8', (err, data) => {
        if (err) throw err
        const parseData = JSON.parse(data)
        const note = parseData.filter(note => note.id != req.params.id) // for loop
        fs.writeFile('db/db.json', JSON.stringify(note), err => {
            if (err) throw err
            res.redirect('/notes')
        })

    })
})


module.exports = router //export so we can use it!