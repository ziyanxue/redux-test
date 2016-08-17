import React ,{PropTyps,Component} from 'react';
// import '@alife/next-pagination/lib/index.scss';
import Pagination from '@alife/next-pagination';

class List extends Component {
    
    delUser (user,e){
        //todo
        console.log(user);
        this.props.delUser(user);
    }
    pageChange (curPage){
        this.props.pageChange(curPage);
    }
    _renderBody(){debugger
        const {list=[]} = this.props;
        return list.map((item)=>{
            return (
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.mobile}</td>
                        <td>{item.createTime}</td>
                        <td>{item.userTypeDes}</td>
                        <td>
                            <button className="btn" onClick={this.delUser.bind(this,item)}>删除</button>
                        </td>
                    </tr>
            );
        });
    }
    render() {
        const {list=[],curPage=1,totalPage=1} = this.props;
        debugger
        return (
                <div>
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
                    <Pagination current={curPage} total={totalPage} onChange={this.pageChange.bind(this)}/>
                </div>
                
        );
    }
}
export default List;