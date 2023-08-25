import { handleResponse } from "@/utils/handleResponse";

const LOGIN = `${import.meta.env.VITE_API_URL}/login`;

export async function login(email: string, password: string): Promise<any | Number> {
    try {
        const response: Response = await fetch(LOGIN, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                "email": email,
                "password": password
            })
        });

        return await handleResponse(response);
    }

    catch {
        return 404;
    }
};


