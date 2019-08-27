import { BaseService } from "./BaseService";

export class RestApiExampleService extends BaseService {
    static getEmployee() {
    //    return fetch('/api/v1/employee/71434', this.createRequestInit()).then(x => {
    //        return x.json();
    //         // console.log(x.json());
    //     }, error => {
    //         console.log(error);
    //     });
        return this.processResponse(fetch('/api/v1/employee/71443'));
    }
}
export default RestApiExampleService;

// static createRequestInit(method = 'get', data) {
//     var headers = new Headers();
//     return {
//         headers: headers,
//         method: method,
//         body: data,
//     }
// }

// static processResponse(promise) {
//     return promise.then((response) => {
//         if (response.status !== 200) {
//             throw new Error('Fail to get response with status ' + response.status);
//         }
//         return response.json();
//     });
// }