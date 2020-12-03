const express = require('express');
const multer = require('multer');

var storage = multer.memoryStorage(); 
 var upload = multer({ storage: storage });

const app = new express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
    if (req.file !== undefined) {
        let obj = {
        name: req.file.originalname,
        type: req.file.mimetype,
        size: req.file.size
    };
    res.send(obj);
    }
    else {
        res.send("Please select a file to upload!");
    }
    
});

app.listen(process.env.PORT || 5000, () => {
    console.log(`App listening at http://localhost:${process.env.PORT}`);
});

