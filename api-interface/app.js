// app.js
// import modules
const path = require('path')
const express = require('express')
const mockjs = require('express-mockjs')
const bodyParser = require("body-parser");

const app = express()
const port = 8015

app.use('/', mockjs(path.join(__dirname, 'mocks')))
app.use(bodyParser.urlencoded({
    extended: true
}));

/**bodyParser.json(options)
 * Parses the text as JSON and exposes the resulting object on req.body.
 */
app.use(bodyParser.json());

// route setting
app.post("/FileServlet", (req, res) => {
    console.log(req.body, 'req')
    res.send("This is my first Express app");
});


// create server
app.listen(port, () => {
    console.log(`server listen to http://localhost:${port}/`)
})

app.use(function(req, res, next) {
    res.set('Authorization', 'Authorization')
    next()
})