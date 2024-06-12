type User = {
  active_user: number;
  created_at: string;
  email: string;
  full_name: string;
  gender: string;
  password: string;
  phone: string;
  role_name: string;
  user_id: number;
  user_role_id: number;
  username: string;
  user_token: string; // Assuming user_token is also a property returned by getAuth
  user_role: string;  // Assuming user_role is also a property returned by getAuth
}






// Function to read the data from the user's local storage  
const getAuth = async () => {
    const token = JSON.parse(localStorage.getItem('token') || '{}');
    const user: User = JSON.parse(localStorage.getItem('user') || '{}');
    console.log(user)
    if (user && token) {
      const decodedToken = await decodeTokenPayload(token);
      console.log(`the decoded token is ==============> ${decodedToken}`)
      const user_data_from_token = decodedToken.user.data
      

      
      console.log(user_data_from_token.user_id)
      return user_data_from_token;
    } else {
      return {};
    }
  };
  
  // Function to decode the payload from the token
  // The purpose of this code is to take a JWT token, extract its payload, decode it from Base64Url encoding, and then convert the decoded payload into a JavaScript object for further use and manipulation
  const decodeTokenPayload = (token:string) => {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
        .join('')
    );
    return JSON.parse(jsonPayload);
  };
  
  export default getAuth;