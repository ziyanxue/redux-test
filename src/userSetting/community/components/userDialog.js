import React,{PropTypes,Component} from 'react';
import Dialog from '@alife/next-dialog';
import Select,{Option} from '@alife/next-select';
import '@alife/next-dialog/lib/index.scss';
import '@alife/next-select/lib/index.scss';
class UserDialog extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: props.nama || '',
            mobile: props.mobile || '',
            partition: props.partition || '',
            errorFields: null
        }

    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            name: nextProps.nama || '',
            mobile: nextProps.mobile || '',
            partition: nextProps.partition || '',
            errorFields: null
        });
    }

    onOk() {
        //todo 成功后关闭
        debugger
        var errorFields = this._validate();
        if (!this.isEmptyObject(errorFields)) {
            this.setState({
                'errorFields': errorFields
            });
            return false;
        }
        let params = {};
        Object.keys(this.state).map((key)=> {
            params[key] = this.state[key];
        });

        this.props.onAddUser(params);
    }


    onClose(e) {
        this.props.onAddVisibleChange(false);
    }

    onSelect(type, value) {
        this.setState({
            [type]: value
        });
    }

    onIptChange(name, e) {
        var value = e.target.value;
        this.setState({
            [name]: value
        });
    }

    isEmptyObject(e) {
        var t;
        for (t in e)
            return !1;
        return !0
    }

    isStringType(val) {
        return typeof val === "string";
    }

    _validate() {
        let errorFields = {};
        if (!this._vailRequired('name')) {
            errorFields['name'] = '请填写完整！';
        }
        if (!this._vailRequired('mobile')) {
            errorFields['mobile'] = '请填写完整！';
        }
        if (!this._vailMobile('mobile')) {
            errorFields['mobile'] = '请填写正确的手机号码！';
        }
        if (!this._vailRequired('partition')) {
            errorFields['partition'] = '请填写完整！';
        }
        return errorFields;
    }

    _vailRequired(name) {
        let value = this.state[name];
        value = this.isStringType(value)  ? value.trim() : value;
        return !!value;
    }

    _vailMobile(name) {
        const reg= /^(1\d{10}|([^1]\d{2,3})-?(\d{3,8})-?(\d{1,6}))$/;
        let value = this.state[name];
        value = this.isStringType(value)  ? value.trim() : value;
        if(!value) return true;
        return reg.test(reg);
    }

    render() {
        const {title,visible} = this.props;
        const {name,mobile,partition,errorFields} = this.state;

        return (
                <Dialog title={title} visible={visible} className="dialog user-dialog" footerAlign="center"
                        onOk={this.onOk.bind(this)} onCancel={this.onClose.bind(this)}
                        onClose={this.onClose.bind(this)}>
                    <div className="form">
                        <div className="fields">
                            <div className="row">
                                <div className="col">
                                    <label className="label">姓名</label>
                                    <input type="text" className="ipt" placeholder="请输入姓名"
                                           onChange={this.onIptChange.bind(this,'name')} value={name}/>
                                    {errorFields && errorFields['name'] ? <div className="err-tip">{errorFields['name']}</div> : null}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <label className="label">手机</label>
                                    <input type="text" className="ipt" placeholder="请输入手机"
                                           onChange={this.onIptChange.bind(this,'mobile')} value={mobile}/>
                                    {errorFields && errorFields['mobile'] ? <div className="err-tip">{errorFields['mobile']}</div> : null}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <label className="label">分区</label>
                                    <Select placeholder="选择分区" onChange={this.onSelect.bind(this,'partition')}>
                                        {
                                            Array.from({length: 10}, (v, i)=>(<Option key={i} value={i}>{i}</Option>))
                                        }
                                    </Select>
                                    {errorFields && errorFields['partition'] ?
                                            <div className="err-tip">{errorFields['partition']}</div> : null}
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
    partition: ''
};

export default UserDialog;