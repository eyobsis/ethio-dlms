// routes/fileRoutes.js

const express = require('express');
const fileController = require('../controllers/file.controller');
const upload = require('../config/multer.config')

const router = express.Router();

// Route for uploading a file
router.post('/api/file/upload', upload.single('file'), fileController.uploadFile);

// Route for getting all files
router.get('/api/file/getAllFiles', fileController.getFiles);

// Route for getting a single file by ID
router.get('/api/file/getAFile/:id', fileController.getFile);

// Route for updating a file by ID
router.put('/api/file/updateFile/:id', upload.single('file'), fileController.updateFile);

// Route for deleting a file by ID
router.delete('/api/file/deletefile/:id', fileController.deleteFile);

module.exports = router;
