"use strict"
const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const app = express()
const PORT = process.env.PORT || 5550

//Static Directory
app.use(favicon(path.join(__dirname, 'favicon.png')))
app.use(express.static(path.join(__dirname, 'public')))

//View Engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

//Endpoints
app.get('/', (req, res) => {
  res.render('index')
})

//Port
app.listen(PORT, ()=> console.log(`Listening at http://localhost:${PORT}`))