import React,{PropTypes,Component} from 'react';
import UserDialog from './userDialog';

class ActionBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addDialogVisible: false
        };
    }

    onAddUser(user) {
        console.log(user);
        this.props.onAddUser(user,()=>{
            this.onAddVisibleChange(false);
        });
        /*$.ajax({
            url: `/json/userSetting/getUserList.json`,
            method: 'POST',
            dataType: 'json',
            data: user
        }).done((res)=> {
            if (res.isSuccess) {
                this.props.onSearch();
                this.onAddVisibleChange(false);
            } else {
                //todo
            }
        }).fail(function (e) {
            //todo
        }).always(function (e) {
        });*/
    }

    showAddUserDialog() {
        this.onAddVisibleChange(true);
    }

    onAddVisibleChange(visible) {
        this.setState({
            addDialogVisible: visible
        });
    }

    render() {
        const {addDialogVisible} = this.state;
        const user = {
            name: '111',
            mobile: '2222'
        };
        return (
                <div className="operate-bar">
                    <button className="btn fn-right" onClick={this.showAddUserDialog.bind(this)}>添加用户</button>
                    <UserDialog  visible={addDialogVisible} onAddUser={this.onAddUser.bind(this)}
                                             onAddVisibleChange={this.onAddVisibleChange.bind(this)}/>
                </div>
        );
    }
}

export default ActionBar;


