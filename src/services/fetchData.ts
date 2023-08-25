import { handleResponse } from "@/utils/handleResponse";

const LOGIN = `${import.meta.env.VITE_API_URL}/login`;
const PROFILE = `${import.meta.env.VITE_API_URL}/profile`;

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

export async function updateUser(firstName: string, lastName: string, token: string): Promise<object | Number> {
	try {
		const response: Response = await fetch(PROFILE, {
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`,
			},
			method: "PUT",
			body: JSON.stringify({
				"firstName": firstName,
				"lastName": lastName
			})
		});

		return await handleResponse(response);
	}

	catch {
		return 404;
	}
};

export async function getUser(token: string): Promise<object | Number> {
	try {
		const response: Response = await fetch(PROFILE, {
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`,
			},
			method: "POST",
		});
		return await handleResponse(response);
	}

	catch {
		return 404;
	}
};


