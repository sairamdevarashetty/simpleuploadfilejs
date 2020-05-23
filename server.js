var express = require("express");
var app = express();
var multer  = require('multer')
var path = require('path');

var storage = multer.diskStorage({
    // any destination as per your wish
    destination:'C:\\Users\\1025040\\Pictures\\Screenshots',
    filename: function(req, file, callback) {
        var fname = file.fieldname + '-' + Date.now() + path.extname(file.originalname);

        callback(null, fname);

    }
})
   
var upload = multer({ storage: storage })

app.listen(3000);

app.get('/*',(req,res) => {
    res.send("hello");
})

app.post('/saveImage', upload.single('myFile'),(req, res) => {
    console.log('req.files', req.file);
})