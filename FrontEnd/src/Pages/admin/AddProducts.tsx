import React from 'react';
// Import the AddProductsForm component 
import AddProductsForm from '../../Admin/AddProductsForm/AddProductsForm';
// Import the AdminMenu component 
import AdminMenu from '../../Admin/AdminMenu/AdminMenu';

const AddProducts: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-8">
        <div className="flex">
          <div className="w-1/4 p-4 bg-white shadow-md">
            <AdminMenu />
          </div>
          <div className="w-3/4 p-4 ml-4 bg-white shadow-md">
            <AddProductsForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProducts;
