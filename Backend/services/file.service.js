// services/file.service.js

const FileModel = require('../models/file.models');
const fs = require('fs');
const path = require('path');

class FileService {
  async uploadFile(file) {
    const newFile = await FileModel.createFile(file.originalname, file.path);
    return newFile;
  }

  async getFiles() {
    const files = await FileModel.getFiles();
    return files;
  }

  async getFileById(id) {
    const file = await FileModel.getFileById(id);
    return file;
  }

  async updateFile(id, file) {
    const existingFile = await FileModel.getFileById(id);
    if (!existingFile) {
      throw new Error('File not found');
    }

    // Remove old file
    fs.unlinkSync(path.join(__dirname, '../', existingFile.filePath));

    const updatedFile = await FileModel.updateFile(id, file.originalname, file.path);
    return updatedFile;
  }

  async deleteFile(id) {
    const file = await FileModel.getFileById(id);
    if (!file) {
      throw new Error('File not found');
    }

    // Remove file from disk
    fs.unlinkSync(path.join(__dirname, '../', file.filePath));

    await FileModel.deleteFile(id);
    return { message: 'File deleted successfully' };
  }
}

module.exports = new FileService();
