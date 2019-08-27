export class BaseService {
    static createRequestInit(method = 'get', data) {
        var headers = new Headers();
        return {
            headers: headers,
            method: method,
            body: data,
        }
    }

    static processResponse(promise) {
        return promise.then((response) => {
            if (response.status !== 200) {
                throw new Error('Fail to get response with status ' + response.status);
            }
            return response.json();
        });
    }
}
