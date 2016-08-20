class BaseApi {
    constructor() {

    }

    isLogin() {
        console.log('isLogin方法必须被重写!');
    }

    login() {
        console.log('login方法必须被重写!');
    }

    pushWindow() {
        console.log('pushWindow方法必须被重写!');
    }

    popWindow() {
        console.log('popWindow方法必须被重写!');
    }

    toast() {
        console.log('toast方法必须被重写!');
    }

    setTitle() {
        console.log('setTitle方法必须被重写!');
    }

}

export default  BaseApi;