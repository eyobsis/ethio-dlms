const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const cors = require('cors');

const app = express();

app.use(cors({
  origin: ['http://localhost:5174'], // Allow requests from this origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  headers: ['Content-Type', 'Authorization']
}));

const upload = multer({
  dest: './uploads/',
  limits: {
    fileSize: 20000000 // 20MB
  },
  fileFilter(req, file, cb) {
    if (file.mimetype === 'application/pdf' || file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  }
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/upload', upload.single('file'), (req, res) => {
  const file = req.file;
  console.log(file);
  const filePath = `/uploads/${file.originalname}`;
  const fileUrl = `http://localhost:3000${filePath}`;

  // Save the file to disk
  fs.writeFileSync(path.join(__dirname, filePath), file.buffer);

  res.json({ fileUrl });
});

app.use('/uploads', express.static('uploads'));

app.listen(3000, () => {
  console.log('Server started on port 3000');
 
});