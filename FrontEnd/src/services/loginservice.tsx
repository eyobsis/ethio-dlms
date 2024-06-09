import { userInfo } from "os";

//loginservice.tsx
const api_url = `http://localhost:8000`;

interface LoginForm {
    email: string;
    password: string;
}
// A function to send the login request to the server
const logIn = async (formData: LoginForm): Promise<Response> => {
    const requestOptions: RequestInit = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
    };
    console.log("About to send request");
    console.log(requestOptions.body);
    const response = await fetch(`${api_url}/api/login`, requestOptions);
    const data = await response.json();
    console.log(data);

    if (data.status === "success") {
        const token = data.data.user_token;
        const user = data.data.user.data        // Store the token and user data (e.g., in localStorage or state management)
        localStorage.setItem("token", JSON.stringify(token));
        localStorage.setItem("user", JSON.stringify(user));
        console.log("User logged in successfully", user);
    } else {
        console.error("Login failed:", data.message);
    }
    return response;
};

// A function to log out the user
const logOut = (): void => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
};
export default logOut;
// Export the functions
export { logIn };
