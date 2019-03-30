import { HTTP } from '../util/http-promise.js';

class BookModel extends HTTP {
    getHotList() {
        return this.request({
            url: 'book/hot_list'
        })
    }

    getBookDetail() {
        return this.request({
            url: 'book/detail'
        })
    }

    getLikeStatus() {
        return this.request({
            url: 'book/favor'
        })
    }

    getComment() {
        return this.request({
            url: 'book/short_comment'
        })
    }
}

export { BookModel }