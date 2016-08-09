import App  from './detectApp'
import AlipayApi from './alipayApi'

class Hybrid {
    constructor() {
        if (App.isAlipay()) {//支付宝
            this.app = new AlipayApi();
        }
    }

    isLogin(cfg) {
        this.app.isLogin(cfg);
    }

    login(cfg) {
        this.app.login(cfg);
    }

    pushWindow(cfg) {
        this.app.pushWindow(cfg);
    }

    popWindow(cfg) {
        this.app.popWindow(cfg);
    }

    toast(cfg) {
        this.app.toast(cfg);
    }

    setTitle(cfg) {
        this.app.setTitle(cfg);
    }
}

export default Hybrid;
