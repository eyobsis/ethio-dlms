const db=require('../config/db.config');
const Image = require('../models/imageModel');
const uploadProductImage = async (productId, imageUrl) => {
    const sql = 'INSERT INTO product_images (product_id, image_url) VALUES (?, ?)';
    const [result] = await db.query(sql, [productId, imageUrl]);
    return result.insertId;
  };
  
  const uploadProductImages = async (productId, imageUrls) => {

    console.log('imageUrls',imageUrls);
    const values = imageUrls.map(url => [productId, url]);
    const sql = 'INSERT INTO product_images (product_id, image_url) VALUES (?,?)';
    const [result] = await db.query(sql, [values]);
    const insertedIds = [];
    for (let i = 0; i < result.affectedRows; i++) {
      insertedIds.push(result.insertId + i);
    }
    return insertedIds;
  };
  
  
  const getAllProductImages = async () => {
    const sql = 'SELECT * FROM product_images';
    const [rows] = await db.query(sql);
    return rows;
  };
  
  const deleteProductImageById = async (id) => {
    const sql = 'DELETE FROM product_images WHERE image_id = ?';
    await db.query(sql, [id]);
  };
  
  module.exports = {
    uploadProductImage,
    uploadProductImages,
    getAllProductImages,
    deleteProductImageById
  };