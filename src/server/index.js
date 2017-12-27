const fs = require('fs')
var tmp = require('tmp');
const express = require('express')
const Bundler = require('parcel-bundler')
const app = express()
// var expressParcelMiddleware = require('../express-parcel-middleware')

// const parcelExpressMiddleware = async (req, res, next) => {
//     const option = {
//         publicURL: "./_parcel",
//         outDir: './dist/_parcel',
//         hmr: false,
//     }

//     const send = res.send.bind(res);

//     res.send = async (content) => {
        
//         //  TODO: Horrible hack! Creates a file and write content to it.
//         //  Then passes the ref to the file to parcel, so parcel can read the content from the file!
//         //  Did not find a way to provide content and not a filename to parcel.
//         var tmpobj = tmp.fileSync({postfix: '.html'});
//         console.log('File: ', tmpobj.name);
//         console.log('Filedescriptor: ', tmpobj.fd);
//         fs.writeFileSync(tmpobj.name, content)
        
//         const bundler = new Bundler(tmpobj.name, option)
//         const bundleInfo = await bundler.bundle()
//         console.log('bundleInfo: ', bundleInfo);
//         return res.sendFile(bundleInfo.name)
//     }
//     next()
// }


// app.use(parcelExpressMiddleware)

app.use('/', express.static('./src/es6-modules/'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))


// app.use(expressParcelMiddleware())