import React ,{PropTyps,Component} from 'react';
// import '@alife/next-pagination/lib/index.scss';
import Pagination from '@alife/next-pagination';
import Balloon,{Tooltip} from '@alife/next-balloon';
import Dialog from '@alife/next-dialog';

//const Tooltip = Balloon.Tooltip;

class SearchResult extends Component {

    pageChange(curPage) {
        this.props.onPageChange(curPage);
    }

    test() {
        alert(1);
    }

    delConfirm(user) {
        return Dialog.confirm({
            content: 'confirm',
            locale: {
                ok: '确认',
                cancel: '取消'
            },
            className: 'confirm',
            onOk: ()=> {
                //todo 删除
                this.props.onDelUser(user.id);
            }
        })
    }
    _renderBody() {
        const {userList=[]} = this.props;
        //todo 为空处理
        return userList.map((item)=> {
            let desDom = <span>{item.userTypeDes}</span>;
            return (
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.mobile}</td>
                        <td>
                            {item.createTime}
                        </td>
                        <td>
                            <Tooltip trigger={desDom} align="t" text="TODO疑难用户解释"/>
                        </td>
                        <td>
                            <button className="btn" onClick={this.delConfirm.bind(this,item)}>删除</button>
                        </td>
                    </tr>
            );
        });
    }

    render() {
        const {curPage,totalPage,totalSize} = this.props;
        return (
                <div className="result-box">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>姓名</th>
                            <th>电话</th>
                            <th>添加时间</th>
                            <th>用户类型</th>
                            <th>操作</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this._renderBody()}
                        </tbody>
                    </table>
                </div>

        );
    }
}
//<Pagination current={curPage} total={totalPage} onChange={this.pageChange.bind(this)}/>
export default SearchResult;