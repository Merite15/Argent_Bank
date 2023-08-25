export async function handleResponse(response: Response): Promise<object | Number> {
    const responseBody: any = await response.json();
    if (responseBody.status !== 200 && !responseBody.body) { return responseBody.status; }
    return responseBody.body.token ?? responseBody.body;
}