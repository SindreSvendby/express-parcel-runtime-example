const fs = require('fs')
const express = require('express')
const Bundler = require('parcel-bundler')
const app = express()
// var expressParcelMiddleware = require('../express-parcel-middleware')


app.get('/', async (req, res) => {
    const option = {
        publicURL: "./",
        hmr: false,
    }
    const bundler = new Bundler('src/index.html', option)
    console.log(bundler)
    const bundleInfo = await bundler.bundle()
    console.log(bundleInfo)
    
    const content = fs.readFileSync(__dirname + '/../../dist/index.html', {  'encoding': 'UTF-8'});
    res.type('html');    
    res.send(content)
})

app.use('/', express.static('dist'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))


// app.use(expressParcelMiddleware())