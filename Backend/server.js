const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const cors = require('cors');

const app = express();

app.use(cors({
  origin: ['http://localhost:5173'], // Allow requests from this origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  headers: ['Content-Type', 'Authorization']
}));


const upload = multer({
  dest: './uploads/',
  limits: {
    fileSize: 1000000 // 1MB
  },
  fileFilter(req, file, cb) {
    if (file.mimetype === 'application/pdf' || file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  }
});

app.post('/upload', upload.single('file'), (req, res) => {
  const file = req.file;
  const filePath = `/uploads/${file.originalname}`;
  const fileUrl = `http://localhost:3000${filePath}`;

  // Save the file to disk with the correct file extension
  const fileExtension = path.extname(file.originalname);
  fs.writeFileSync(path.join(__dirname, filePath), file.buffer);

  res.json({ fileUrl, fileExtension });
});

app.get('/files', (req, res) => {
  const files = fs.readdirSync('./uploads/');
  const fileList = files.map((file) => {
    const fileExtension = path.extname(file);
    const fileUrl = `http://localhost:3000/uploads/${file}`;
    return { name: file, url: fileUrl, fileExtension };
  });
  res.json(fileList);
});

app.use('/uploads', express.static('uploads'));

app.listen(3000, () => {
  console.log('Server started on port 3000');
});