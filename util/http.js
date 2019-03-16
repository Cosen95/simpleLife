import { config } from '../config.js';

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
                    success(res.data)
                } else {

                }
            },
            fail: (err) => {

            }
        })
    }
}

export { HTTP }