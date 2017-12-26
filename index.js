const fs = require('fs')
const express = require('express')
const Bundler = require('parcel-bundler')
const app = express()
// var expressParcelMiddleware = require('../express-parcel-middleware')


app.get('/', (req, res) => {
    const content = fs.readFileSync('index.html', {  'encoding': 'UTF-8'});
    res.type('html');
    const bundler = new Bundler()
    res.send(content)
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))


// app.use(expressParcelMiddleware())