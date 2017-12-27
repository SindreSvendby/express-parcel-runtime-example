const fs = require('fs')
const express = require('express')
const Bundler = require('parcel-bundler')
const app = express()
// var expressParcelMiddleware = require('../express-parcel-middleware')


app.use(function (req, res, next) {
    console.log('Time:', Date.now())
    next()
  })

app.get('/', async (req, res) => {
    const option = {
        publicURL: "./_parcel",
        outDir: '../../dist/_parcel',
        hmr: false,
    }
    const bundler = new Bundler('src/index.html', option)
    const bundleInfo = await bundler.bundle()
    
    const content = fs.readFileSync(bundleInfo.name, {  'encoding': 'UTF-8'});
    res.type('html');
    res.send(content)
})


app.use('/', express.static('dist'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))


// app.use(expressParcelMiddleware())