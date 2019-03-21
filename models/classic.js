import { HTTP } from '../util/http.js';

class ClassicModel extends HTTP {
    getLatest(callback) {
        this.request({
            url: 'classic/latest',
            success: (res) => {
                callback(res);
                this._setLatestIndex(res.data[0].index);
            }
          })
    }

    getClassic(nextOrPrev,callback) {
        this.request({
            url: `classic/${nextOrPrev}`,
            success: (res) => {
                callback(res);
            }
        })
    }

    isFirst(index) {
        return index === 1 ? true : false
    }

    isLatest(index) {
        let latestIndex = this._getLatestIndex();
        return index === latestIndex ? true : false
    }

    _setLatestIndex(index) {
        wx.setStorageSync('latestIndex', index)
    }

    _getLatestIndex() {
      let index = wx.getStorageSync('latestIndex');
      return index;
    }
}

export { ClassicModel }