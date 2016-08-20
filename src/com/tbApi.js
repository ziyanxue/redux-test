import BaseApi from './baseApi'

class TBApi extends BaseApi {
    constructor() {
        super();
    }

    isLogin() {
        console.log('Taobao客户端isLogin方法！');
    }

    login() {
        console.log('Taobao客户端login方法!');
    }

    pushWindow() {
        console.log('Taobao客户端pushWindow方法!');
    }

    popWindow() {
        console.log('Taobao客户端popWindow方法!');
    }

    toast() {
        console.log('Taobao客户端toast方法!');
    }

    setTitle() {
        console.log('Taobao客户端setTitle方法!');
    }
}

export default TBApi;