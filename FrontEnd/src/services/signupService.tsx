//signupservice.tsx
export interface FormData {
    fullName: string;
    email: string;
    username: string;
    password: string;
    confirmPassword: string;
    phone: string;
    gender: string;
    user_role_id: number;
    active_user: number;
}

export async function signup(formData: FormData): Promise<void> {
    const response = await fetch("http://localhost:8000/api/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to sign up");
    }
}
