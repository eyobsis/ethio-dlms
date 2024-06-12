// controllers/fileController.js

const fileService = require('../services/file.service');

// Create
exports.uploadFile = async (req, res) => {
  try {
    const userId = req.headers.userid;
    console.log(userId);
    const newFile = await fileService.uploadFile(req.file, userId);
    console.log(req.body);
    console.log(req.file);

    res.status(201).json(newFile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Read
exports.getFiles = async (req, res) => {
  try {
    const files = await fileService.getFiles();
    res.status(200).json(files);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Read single file
exports.getFile = async (req, res) => {
  try {
    const file = await fileService.getFileById(req.params.id);
    if (!file) {
      return res.status(404).json({ message: 'File not found' });
    }
    res.status(200).json(file);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update
exports.updateFile = async (req, res) => {
  try {
    const updatedFile = await fileService.updateFile(req.params.id, req.file);
    res.status(200).json(updatedFile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete
exports.deleteFile = async (req, res) => {
  try {
    const message = await fileService.deleteFile(req.params.id);
    res.status(200).json(message);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
