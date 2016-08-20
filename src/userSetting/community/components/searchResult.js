import React ,{PropTyps,Component} from 'react';
import Balloon from '@alife/next-balloon';
import Dialog from '@alife/next-dialog';
import Pagination from '../../components/pagination'

import '@alife/next-balloon/lib/index.scss';
import '@alife/next-dialog/lib/index.scss';

const Tooltip = Balloon.Tooltip;


class SearchResult extends Component {

    pageChange(curPage) {
        this.props.onPageChange(curPage);
    }

    delConfirm(user) {
        return Dialog.confirm({
            content: '是否删除该用户？',
            locale: {
                ok: '删除',
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
                            {item.partition}
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
                            <th>分拣区号</th>
                            <th>操作</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this._renderBody()}
                        </tbody>
                    </table>
                    <div className="paging-box">
                        <Pagination current={curPage} total={totalSize} onChange={this.pageChange.bind(this)}/>
                    </div>
                </div>

        );
    }
}
export default SearchResult;