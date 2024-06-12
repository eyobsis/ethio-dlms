const FileModel = require("../models/file.models");
const fs = require("fs");
const path = require("path");

const uploadFile = async (file, userId) => {
  const newFile = await FileModel.createFile(
    file.originalname,
    file.path,
    userId
  );
  console.log(userId);

  return newFile;
};

const getFiles = async () => {
  const files = await FileModel.getFiles();
  return files;
};

const getFileById = async (id) => {
  const file = await FileModel.getFileById(id);
  return file;
};

const updateFile = async (id, file) => {
  const existingFile = await FileModel.getFileById(id);
  if (!existingFile) {
    throw new Error("File not found");
  }

  // Remove old file
  fs.unlinkSync(path.join(__dirname, "../", existingFile.filePath));

  const updatedFile = await FileModel.updateFile(
    id,
    file.originalname,
    file.path
  );
  return updatedFile;
};

const deleteFile = async (id) => {
  const file = await FileModel.getFileById(id);
  if (!file) {
    throw new Error("File not found");
  }

  // Remove file from disk
  fs.unlinkSync(path.join(__dirname, "../", file.filePath));

  await FileModel.deleteFile(id);
  return { message: "File deleted successfully" };
};

module.exports = { uploadFile, getFiles, getFileById, updateFile, deleteFile };
