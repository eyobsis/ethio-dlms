import React, { useState, useEffect } from'react';
import axios from 'axios';

const FileList = () => {
  const [files, setFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/files')
     .then(response => {
        setFiles(response.data);
      })
     .catch(error => {
        console.error(error);
      });
  }, []);

  const handleViewFile = (file) => {
    const fileUrl = `http://localhost:3000/uploads/${file.name}`;
    const fileExtension = file.fileExtension;

    // Check if the file is a blob or inline
    if (fileExtension === '.pdf') {
      // Display the PDF file in an iframe
      const iframe = document.createElement('iframe');
      iframe.src = fileUrl;
      iframe.width = '100%';
      iframe.height = '500px';
      document.body.appendChild(iframe);
    } else {
      // Display the image file in an img tag
      const img = document.createElement('img');
      img.src = fileUrl;
      img.width = '100%';
      img.height = '500px';
      document.body.appendChild(img);
    }
  };

  return (
    <div>
      <h1>File List</h1>
      <ul>
        {files.map((file) => (
          <li key={file.name}>
            {file.name}
            <button onClick={() => handleViewFile(file)}>View</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileList;