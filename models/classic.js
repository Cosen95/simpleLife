import { HTTP } from '../util/http.js';

class ClassicModel extends HTTP {
    prefix = 'classic'

    getLatest(callback) {
        this.request({
            url: 'classic/latest',
            success: (res) => {
                let key = this._fullKey(res.data.index);
                wx.setStorageSync(key, res.data);
                this._setLatestIndex(res.data.index);
                callback(res);
            }
          })
    }

    getClassic(index, nextOrPrev,callback) {
        let key = nextOrPrev === 'next' ? this._fullKey(index + 1) :
            this._fullKey(index - 1);
        let classic = wx.getStorageSync(key);
        if(!classic) {
            this.request({
                url: `classic/${nextOrPrev}`,
                success: (res) => {
                    let key = this._fullKey(res.data.index);
                    wx.setStorageSync(key,res.data);
                    callback(res);
                }
            })
        } else {
            callback(classic)
        }
        
    }

    isFirst(index) {
        return index === 1 ? true : false
    }

    isLatest(index) {
        let latestIndex = this._getLatestIndex();
        return index === latestIndex ? true : false
    }

    // 在缓存中存放最新一期的期数
    _setLatestIndex(index) {
        wx.setStorageSync('latestIndex', index)
    }

    _getLatestIndex() {
      let index = wx.getStorageSync('latestIndex');
      return index;
    }

    _fullKey(partKey) {
        let key = this.prefix + '-' + partKey;
        return key
    }
}

export { ClassicModel }