const imageService = require('../services/image.service');
// imageController.js

const uploadSingleImage = async (req, res) => {
    try {
      const { productId } = req.body;
      const imageUrl = `/uploads/${req.file.filename}`;
      const imageId = await imageService.uploadProductImage(productId, imageUrl);
      res.status(201).json({ id: imageId, url: imageUrl });
    } catch (error) {
      console.error('Error uploading single image:', error);
      res.status(500).json({ error: 'Failed to upload single image' });
    }
  };
  
  const uploadMultipleImages = async (req, res) => {
    try {
      const { productId } = req.body;
      const imageUrls = req.files.map(file => `/uploads/${file.filename}`);
      const imageIds = await imageService.uploadProductImages(productId, imageUrls);
      const response = imageIds.map((id, index) => ({
        id,
        url: imageUrls[index]
      }));
      res.status(201).json(response);
    } catch (error) {
      console.error('Error uploading multiple images:', error);
      res.status(500).json({ error: 'Failed to upload multiple images' });
    }
  };
  
  const getAllImages = async (req, res) => {
    try {
      const images = await imageService.getAllProductImages();
      res.status(200).json(images);
    } catch (error) {
      console.error('Error fetching images:', error);
      res.status(500).json({ error: 'Failed to fetch images' });
    }
  };
  
  const deleteImageById = async (req, res) => {
    const { id } = req.params;
    try {
      await imageService.deleteProductImageById(id);
      res.status(200).json({ message: 'Image deleted successfully' });
    } catch (error) {
      console.error('Error deleting image:', error);
      res.status(500).json({ error: 'Failed to delete image' });
    }
  };
  
  module.exports = {
    uploadSingleImage,
    uploadMultipleImages,
    getAllImages,
    deleteImageById
  };
