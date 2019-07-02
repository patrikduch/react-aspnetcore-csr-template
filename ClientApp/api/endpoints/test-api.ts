import { getRequest} from '../utils/request-utils';

export default class TestApi {

    static getTestData() {        
        return getRequest('https://jsonplaceholder.typicode.com/posts', true)
    }
}
