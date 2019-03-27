import { config } from '../config.js';

const errCodeObj = {
    1: '抱歉，出现了一个错误！'
}

class HTTP {
    request({url,data={},method='GET'}) {
        return new Promise((resolve, reject) => {
            this._request(url,resolve,reject,data,method)
        })
    }

    _request(url,resolve,reject,data={},method='GET') {
        // url data method
        wx.request({
            url: config.api_base_url + url,
            method,
            data,
            header: {
                'content-type': 'application/json'
            },
            success: (res) => {
                let code = res.statusCode.toString();
                if(code.startsWith('2')) {
                    resolve(res.data)
                } else {
                    // 需根据服务器返回errcode显示对应报错信息，这里errcode默认给1
                    reject()
                    this._show_error(1)
                }
            },
            fail: (err) => {
                reject()
                this._show_error(1)
            }
        })
    }

    _show_error(error_code) {
        wx.showToast({
            title: errCodeObj[error_code],
            icon: 'none',
            image: '',
            duration: 1500,
            mask: false,
            success: (result)=>{
                
            },
            fail: ()=>{},
            complete: ()=>{}
        });
    }
}

export { HTTP }