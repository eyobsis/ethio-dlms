import axios from 'axios';

const API_URL = `${import.meta.env.VITE_BACKEND_URL}`;

export const uploadProductImages = (images: FileList) => {
  const formData = new FormData();
  Array.from(images).forEach(image => {
    formData.append('images', image);
  });
  return axios.post(`${API_URL}/api/uploadMultipleImages`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
};



  export const uploadProductImage = (image: File) => {
    const formData = new FormData();
    formData.append('image', image);
  
    return axios.post(`${API_URL}/api/uploadSingleImage`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(response => {
      return response.data.url; // Assuming the response contains the URL of the uploaded image
    }).catch(error => {
      console.error('Error uploading image:', error);
      throw new Error('Failed to upload image');
    });
  };
  



 




export const getAllImages = () => {
  return axios.get(`${API_URL}/getAllImages`);
};

export const deleteImage = (id: string) => {
  return axios.delete(`${API_URL}/deleteImage/${id}`);
};
//fetchImages
export const fetchImages = async () => {
  try {
    const response = await axios.get(`${API_URL}/getAllImages`);

    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching images');
  }
};
