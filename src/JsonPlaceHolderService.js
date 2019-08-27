import { BaseService } from "./BaseService";

export class JsonPlaceHolderService extends BaseService {
    static getTodo() {
        return this.processResponse(fetch('/todos/1'));
    }
}

export default JsonPlaceHolderService;