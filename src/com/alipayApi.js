import BaseApi from './baseApi'

class AlipayApi extends BaseApi {
    constructor() {
        super();
    }

    isLogin(cfg) {
        //todo
        console.log('Alipay客户端isLogin方法！');
    }

    login() {
        console.log('Alipay客户端login方法!');
    }

    pushWindow() {
        console.log('Alipay客户端pushWindow方法!');
    }

    popWindow() {
        console.log('Alipay客户端popWindow方法!');
    }

    toast() {
        console.log('Alipay客户端toast方法!');
    }

    setTitle() {
        console.log('Alipay客户端setTitle方法!');
    }
}

export default AlipayApi;