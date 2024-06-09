import React, { useEffect, useState } from "react";
import { getAllProducts } from "./productService"; // Make sure you have this service implemented correctly

import { useDispatch } from "react-redux";
import { addToCart } from "../gebeyacart/features/cart/cartSlice";
import { toast } from "react-toastify";
import { Button } from "@/components/ui/button";
import "react-toastify/dist/ReactToastify.css";

interface Product {
    product_id: number;
    product_name: string;
    description: string;
    category_id: number;
    image_url: string;
    price: string;
    stock: number;
    status: string;
    tags: string;
    created_at: string;
    updated_at: string;
    product_images: string | null;
}

const BackendPro: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const token = localStorage.getItem("token");
                if (!token) {
                    throw new Error("No token found");
                }
                const response = await getAllProducts(token);
                console.log(response);
                const data = await response.json();

                if (!Array.isArray(data)) {
                    throw new Error("Invalid data format");
                }

                setProducts(data);
            } catch (error: any) {
                setError(error.message);
            }
        };

        fetchProducts();
    }, []);

    const dispatch = useDispatch();

    const handleAddToCart = (product: Product) => {
        dispatch(addToCart(product));
        toast.success(`product added to cart!`);
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4 md:p-6 ">
            {products.map((product) => (
                <div
                    key={product.product_id}
                    className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:scale-106 hover:shadow-lg dark:bg-sky-950"
                >
                    <img
                        src={product.image_url}
                        alt={product.product_name}
                        className="w-full h-60 object-cover"
                        height="250"
                        style={{
                            aspectRatio: "300/300",
                            objectFit: "center",
                        }}
                        width="400"
                    />
                    <div className="p-4 space-y-2">
                        <h3 className="text-xl font-bold">
                            {product.product_name}
                        </h3>
                        <p className="text-gray-500 dark:text-gray-400">
                            {product.description}
                        </p>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center justify-between">
                                <span className="text-2xl font-bold">
                                    {product.price}
                                </span>
                            </div>
                            <div className="flex gap-2">
                                <Button
                                    onClick={() => handleAddToCart(product)}
                                    className="bg-[#1e40af] text-white hover:bg-[#1e40af]/90 focus-visible:ring-[#1e40af]"
                                    variant="outline"
                                >
                                    Add to Cart
                                </Button>
                                <Button
                                    onClick={() => alert("Product Detail")}
                                    className="bg-[#1e40af] text-white hover:bg-[#1e40af]/90 focus-visible:ring-[#1e40af]"
                                    variant="outline"
                                >
                                    Product Detail
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BackendPro;
