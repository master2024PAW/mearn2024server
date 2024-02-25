const express = require('express');
const {upload} = require('../helpers/filehelper');
const {singleFileUpload, multipleFileUpload,
     getallSingleFiles, getallMultipleFiles,deletePhoto} = require('../controllers/fileuploaderController');
const router = express.Router();


router.post('/singleFile', upload.single('file'), singleFileUpload);
router.get('/getSingleFiles', getallSingleFiles);
router.delete('/:id', deletePhoto);


module.exports = {
    routes: router
}