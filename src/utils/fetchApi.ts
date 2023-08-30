import { handleResponse } from "./handleResponse";

export async function fetchApi(url: string, method: string, token?: string, body?: object): Promise<object | Number> {
	try {
		const options: RequestInit = {
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`,
			},
			method: method,

		};

		if (body) {
			options.body = JSON.stringify(body);
		}

		const response: Response = await fetch(url, options);
		return await handleResponse(response);
	}

	catch {
		return 404;
	}
};
