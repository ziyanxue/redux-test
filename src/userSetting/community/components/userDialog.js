import React,{PropTypes,Component} from 'react';
import Dialog from '@alife/next-dialog';

class UserDialog extends Component {
    constructor(props) {
        super(props);
    }

    onOk() {
        //todo 成功后关闭
        let params = {};
        Object.keys(this.refs).map((key, i)=> {
            params[key] = this.refs[key].value;
        });
        this.props.onAddUser(params);
    }

    onClose() {
        this.props.onAddVisibleChange(false);
    }

    render() {
        const {title,visible,name,mobile,partition} = this.props;
        return (
                <Dialog title={title} visible={visible} className="dialog" footerAlign="center"
                        onOk={this.onOk.bind(this)} onCancel={this.onClose.bind(this)}
                        onClose={this.onClose.bind(this)}>
                    <div className="form">
                        <div className="fields">
                            <div className="row">
                                <div className="col">
                                    <label className="label">姓名</label>
                                    <input type="text" className="ipt" placeholder="请输入姓名" ref="name" defaultValue={name}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <label className="label">手机</label>
                                    <input type="text" className="ipt" placeholder="请输入姓名" ref="mobile" defaultValue={mobile}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <label className="label">手机</label>
                                    <select ref="partition" default={partition}>
                                        <option>请选择</option>

                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </Dialog>
        )
    }
}

UserDialog.defaultProps = {
    title: '添加疑难用户',
    visible: false,
    name: '',
    mobile: '',
    partition:''
};

export default UserDialog;