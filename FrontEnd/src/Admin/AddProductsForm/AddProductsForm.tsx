import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { uploadProductImages } from '../../services/imageService'


// import product.service.js 
import productService from '../../../services/product.service';
// Import the useAuth hook 
import { useAuth } from "../../../Contexts/AuthContext";

interface FormData {
  name: string;
  price: string;
  imageLink: string;
  category: string;
  description: string;
  tags: string;
  inventory: string;
  status: string;
}

const AddProductsForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    description: '',
    category: '',
    imageLink: '',
    price: '',
    inventory: '',
    tags: '',
    status: 'active',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleCategoryChange = (value: string) => {
    setFormData({ ...formData, category: value });
  };

  const handleStatusChange = (value: string) => {
    setFormData({ ...formData, status: value });
  };

  const handleImageUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const uploadFormData = new FormData();
      uploadFormData.append('file', file);

      const response = await uploadProductImages(uploadFormData);

      setFormData({ ...formData, imageLink: response.data.imageUrl });
      toast.success("Image uploaded successfully!", { position: "top-center", autoClose: 3000 });
    } catch (error) {
      console.error('Error uploading image:', error);
      toast.error("Failed to upload image!", { position: "top-center", autoClose: 3000 });
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/addProducts', formData);
      console.log('Product added successfully:', response.data);
      toast.success("Product added successfully!", { position: "top-center", autoClose: 3000 });
    } catch (error) {
      console.error('Error adding product:', error);
      toast.error("Failed to add product!", { position: "top-center", autoClose: 3000 });
    }
  };

  return (
    <div>
      <ToastContainer />
      <Card className="w-full max-w-2xl rounded-xl shadow-lg">
        <CardHeader className="bg-gradient-to-r from-[#082F49] to-[#082F48] text-white px-8 py-6 rounded-t-xl">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl font-bold">Add New Product</CardTitle>
              <CardDescription className="text-lg">Fill out the form to add a new product.</CardDescription>
            </div>
            <PlusIcon className="w-6 h-6" />
          </div>
        </CardHeader>
        <CardContent className="px-8 py-6">
          <form className="grid gap-8" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-4">
                <Label className="text-lg font-medium" htmlFor="name">
                  Product Name
                </Label>
                <Input
                  className="rounded-md px-4 py-3 text-lg"
                  id="name"
                  placeholder="Enter product name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-4">
                <Label className="text-lg font-medium" htmlFor="price">
                  Price
                </Label>
                <Input
                  className="rounded-md px-4 py-3 text-lg"
                  id="price"
                  placeholder="Enter price"
                  type="number"
                  value={formData.price}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-4">
                <Label className="text-lg font-medium" htmlFor="imageLink">
                  Image Link
                </Label>
                <Input
                  className="rounded-md px-4 py-3 text-lg"
                  id="imageLink"
                  placeholder="Enter image link"
                  value={formData.imageLink}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-4">
                <Label className="text-lg font-medium" htmlFor="category">
                  Category
                </Label>
                <Select
                  className="rounded-md px-4 py-3 text-lg"
                  id="category"
                  value={formData.category}
                  onValueChange={handleCategoryChange}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Smartphones">Smartphones</SelectItem>
                    <SelectItem value="Laptops">Laptops</SelectItem>
                    <SelectItem value="Tablets">Tablets</SelectItem>
                    <SelectItem value="Televisions">Televisions</SelectItem>
                    <SelectItem value="Cameras">Cameras</SelectItem>
                    <SelectItem value="Audio Equipment">Audio Equipment</SelectItem>
                    <SelectItem value="Wearables">Wearables</SelectItem>
                    <SelectItem value="Home Appliances">Home Appliances</SelectItem>
                    <SelectItem value="Gaming Consoles">Gaming Consoles</SelectItem>
                    <SelectItem value="Networking">Networking</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-4">
              <Label className="text-lg font-medium" htmlFor="description">
                Description
              </Label>
              <Textarea
                className="rounded-md px-4 py-3 text-lg min-h-[120px]"
                id="description"
                placeholder="Enter product description"
                value={formData.description}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-4">
              <Label className="text-lg font-medium" htmlFor="tags">
                Tags
              </Label>
              <Input
                className="rounded-md px-4 py-3 text-lg"
                id="tags"
                placeholder="Enter tags (separated by commas)"
                value={formData.tags}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-4">
              <Label className="text-lg font-medium" htmlFor="inventory">
                Inventory
              </Label>
              <Input
                className="rounded-md px-4 py-3 text-lg"
                id="inventory"
                placeholder="Enter inventory count"
                type="number"
                value={formData.inventory}
                onChange={handleChange}
              />
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-4">
                <Label className="text-lg font-medium" htmlFor="imageUpload">
                  Upload Image
                </Label>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </div>
            </div>
            <div className="space-y-4">
              <Label className="text-lg font-medium" htmlFor="status">
                Status
              </Label>
              <RadioGroup
                defaultValue="active"
                id="status"
                value={formData.status}
                onValueChange={handleStatusChange}
              >
                <div className="flex items-center gap-4">
                  <Label className="flex items-center gap-2 cursor-pointer" htmlFor="status-active">
                    <RadioGroupItem id="status-active" value="active" />
                    Active
                  </Label>
                  <Label className="flex items-center gap-2 cursor-pointer" htmlFor="status-draft">
                    <RadioGroupItem id="status-draft" value="draft" />
                    Draft
                  </Label>
                  <Label className="flex items-center gap-2 cursor-pointer" htmlFor="status-archived">
                    <RadioGroupItem id="status-archived" value="archived" />
                    Archived
                  </Label>
                </div>
              </RadioGroup>
            </div>
            <CardFooter className="bg-gradient-to-r from-[#6366f1] to-[#4f46e5] px-8 py-4 rounded-b-xl flex justify-end gap-4">
              <Button
                className="rounded-md px-6 py-3 text-lg text-white bg-gradient-to-r from-[#082F49] to-[#082F48] hover:from-[#4f46e5] hover:to-[#6366f1]"
                variant="outline"
                type="button"
              >
                Cancel
              </Button>
              <Button
                className="rounded-md px-6 py-3 text-lg bg-gradient-to-r from-[#082F49] to-[#082F48] text-white hover:from-[#4f46e5] hover:to-[#6366f1]"
                type="submit"
              >
                Save Product
              </Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

function PlusIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

export default AddProductsForm;
