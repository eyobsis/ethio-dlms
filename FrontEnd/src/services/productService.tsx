// A function to send a POST request to create a new product
const createProduct = async (formData: any, loggedInUserToken: string): Promise<Response> => {
    const requestOptions: RequestInit = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "x-access-token": loggedInUserToken,
        },
        body: JSON.stringify(formData),
    };

    try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/signup`, requestOptions);
        if (!response.ok) {
            throw new Error(`Failed to create product: ${response.statusText}`);
        }
        return response;
    } catch (error) {
        console.error("Error creating product:", error);
        throw error;
    }
};

// A function to send a GET request to get all products
const getAllProducts = async (token: string): Promise<Response> => {
    const requestOptions: RequestInit = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "x-access-token": token,
        },
    };

    try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/getAllProducts`, requestOptions);
        if (!response.ok) {
            throw new Error(`Failed to fetch products: ${response.statusText}`);
        }
        return response;
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
    }
};

export {createProduct}
export {getAllProducts}

