export default (uri: string, params ?: any, options ?: RequestInit): Promise<Response> => {
    const optionsCreated: RequestInit = {
        method: options?.method || 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: options?.mode || 'cors', // no-cors, *cors, same-origin
        cache: options?.cache || 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: options?.credentials || 'same-origin', // include, *same-origin, omit
        headers: options?.headers || {
            'Content-Type': 'application/json', // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: options?.redirect || 'follow', // manual, *follow, error
        referrerPolicy: options?.referrerPolicy || 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: params ? JSON.stringify(params) : null,
    }
    uri = uri.trim();
    uri = uri.charAt(0) === '/' ? uri.slice(1) : uri;
    return fetch(`${process.env.NEXT_PUBLIC_BASE_URI || process.env.NEXT_PUBLIC_DEFAULT_BASE_URI}/${uri}`, optionsCreated);
}
