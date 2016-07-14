'use strict';

const express = require('express');
const app = express();
const upload = require('multer')();

app.use(express.static('public'));
app.post('/', upload.single('file'), (req, res) => {
    res.json({filesize: req.file.size});
});
app.listen(process.env.PORT);
