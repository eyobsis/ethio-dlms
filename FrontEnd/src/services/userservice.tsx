// Import from the env
//userservice.tsx


// A function to send post request to create a new User
const createUser = async (formData, loggedInUserToken: string) => {
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "x-access-token": loggedInUserToken,
        },
        body: JSON.stringify(formData),
    };
    console.log(requestOptions);
    console.log(import.meta.env);

    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/signup`, requestOptions);
    return response;
};

// A function to send get request to get all Users
const getAllUsers = async (token) => {
    console.log(token);
    const requestOptions = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "x-access-token": token,
        },
    };
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/getAllUsers`, requestOptions);
    return response;
};

// Export all the functions
const UserService = {
    createUser,
    getAllUsers,
};
export default UserService;
