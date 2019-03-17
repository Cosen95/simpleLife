import { config } from '../config.js';

const errCodeObj = {
    1: '抱歉，出现了一个错误！'
}

class HTTP {
    request(params) {
        // url data method
        const { url='', data={}, method='GET', success } = params;
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
                    success && success(res.data)
                } else {
                    // 需根据服务器返回errcode显示对应报错信息，这里errcode默认给1
                    this._show_error(1)
                }
            },
            fail: (err) => {
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