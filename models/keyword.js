import { HTTP } from '../util/http-promise.js';

class KeywordModel extends HTTP {
    key = 'q'
    maxLen = 5
    getHistory() {
        const words = wx.getStorageSync(this.key);
        if(!words) {
            return []
        }
        return words
    }

    getHot() {
        return this.request({
            url: 'book/hot_keyword'
        })
    }

    addToHistory(keyword) {
        let words = this.getHistory();
        if(words.length >= this.maxLen) {
            words.pop();
        }
        const has = words.includes(keyword);
        if(!has) {
            words.unshift(keyword);
            wx.setStorageSync(this.key, words);
        }
    }
}

export { KeywordModel }