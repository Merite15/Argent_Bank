import { fetchApi } from "@/utils/fetchApi";

const LOGIN = `${import.meta.env.VITE_API_URL}/login`;
const PROFILE = `${import.meta.env.VITE_API_URL}/profile`;

/**
 * The above function is an asynchronous function that takes an email and password as parameters and
 * sends a login request to a server using the fetch API.
 * @param {string} email - The email parameter is a string that represents the user's email address. It
 * is used to identify the user during the login process.
 * @param {string} password - The `password` parameter is a string that represents the user's password.
 * @returns The login function is returning a Promise that resolves to either any type or a Number.
 */
export async function login(email: string, password: string): Promise<any | Number> {
	const body = {
		"email": email,
		"password": password
	};
	
	return fetchApi(LOGIN, 'POST', '', body);
};


/**
 * The updateUser function updates the user's first name and last name by making a PUT request to the
 * PROFILE endpoint with the provided token.
 * @param {string} firstName - The first name of the user that needs to be updated.
 * @param {string} lastName - The `lastName` parameter is a string that represents the last name of the
 * user.
 * @param {string} token - The `token` parameter is a string that represents the authentication token
 * for the user. It is used to authorize the request to update the user's profile.
 * @returns a Promise that resolves to an object or a number.
 */

export async function updateUser(firstName: string, lastName: string, token: string): Promise<object | Number> {
	const body = {
		"firstName": firstName,
		"lastName": lastName
	};
	
	return fetchApi(PROFILE, 'PUT', token, body);
};

/**
 * The function `getUser` makes an asynchronous request to fetch a user's profile using a token and
 * returns the response or a 404 error code.
 * @param {string} token - The `token` parameter is a string that represents the authentication token
 * for the user. It is used to authorize the request to the server and retrieve the user's profile
 * information.
 * @returns either an object or a number.
 */
export async function getUser(token: string): Promise<object | Number> {
	return fetchApi(PROFILE, 'POST', token);
};


