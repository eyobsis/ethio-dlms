const express = require('express');
const imageController = require('../controllers/image.controller');
const upload = require('../config/multer.config');

const router = express.Router();

router.post('/api/uploadSingleImage', upload.single('image'), imageController.uploadSingleImage);
router.post('/api/uploadMultipleImages', upload.array('images',50), imageController.uploadMultipleImages);
router.get('/api/getAllImages',imageController.getAllImages);
//router.get('/api/getImageById/:id', imageController.getImageById);
router.delete('/api/DeleteImages/:id',   imageController.deleteImageById);

module.exports = router;
