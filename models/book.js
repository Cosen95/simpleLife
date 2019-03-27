import { HTTP } from '../util/http-promise.js';

class BookModel extends HTTP {
    getHotList() {
        return this.request({
            url: 'book/hot_list'
        })
    }
}

export { BookModel }