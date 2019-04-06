class KeywordModel {
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