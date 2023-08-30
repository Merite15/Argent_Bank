/**
 * The function `handleResponse` takes a response object and returns the token from the response body
 * or the response status code.
 * @param {Response} response - The `response` parameter is of type `Response`, which represents the
 * response to a request made by the `fetch` function.
 * @returns an object or a number.
 */
export async function handleResponse(response: Response): Promise<object | Number> {
    const responseBody: any = await response.json();
    if (responseBody.status !== 200 && !responseBody.body) { return responseBody.status; }
    return responseBody.body.token ?? responseBody.body;
}