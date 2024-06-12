// models/fileModel.js

const db = require('../config/db.config');

class FileModel {
  static async createFile(originalname, filePath, userId) {
    userId = parseInt(userId);
    console.log(`=============>${userId}`);

    const query =
      "INSERT INTO files (fileName, filePath,user_id) VALUES (?, ?, ?)";
    const result = await db.query(query, [originalname, filePath, userId]);
    return { id: result.insertId, fileName: originalname, filePath, userId };
  }

  static async getFiles() {
    const query = "SELECT * FROM files";
    const files = await db.query(query);

    console.log(files);
    return files;
  }

  static async getFileById(id) {
    const query = "SELECT * FROM files WHERE id = ?";
    const files = await db.query(query, [id]);
    return files[0];
  }

  static async updateFile(id, originalname, filePath) {
    const query = "UPDATE files SET fileName = ?, filePath = ? WHERE id = ?";
    await db.query(query, [originalname, filePath, id]);
    return { id, fileName: originalname, filePath };
  }

  static async deleteFile(id) {
    const query = "DELETE FROM files WHERE id = ?";
    await db.query(query, [id]);
  }
}

module.exports = FileModel;
