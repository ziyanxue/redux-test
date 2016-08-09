import BaseApi from './baseApi'

class GuoguoApi extends BaseApi {
    constructor() {
        super();
    }

    isLogin() {
        console.log('Guoguo客户端isLogin方法！');
    }

    login() {
        console.log('Guoguo客户端login方法!');
    }

    pushWindow() {
        console.log('Guoguo客户端pushWindow方法!');
    }

    popWindow() {
        console.log('Guoguo客户端popWindow方法!');
    }

    toast() {
        console.log('Guoguo客户端toast方法!');
    }

    setTitle() {
        console.log('Guoguo客户端setTitle方法!');
    }
}

export default GuoguoApi;