import React,{Component} from 'react';

class Search extends Component{
    constructor(props){
        super(props);
    }
    _getParams(){
        let refs = this.refs;
        //todo 条件添加
        let params = {
            name : refs.name.value,
            mobile :refs.mobile.value,
            startTime : refs.startTime.value,
            endTime : refs.endTime.value
        }

        return params;
    }
    searchHandle(e){
        e.preventDefault();
        let params = this._getParams();
        this.props.searchForm(params);
    }
    render(){
            // const {name=""} = this.props;
            // console.log("name="+this.refs && this.refs.name && this.refs.name.value);

        return (
            <form className="form">
                <div className="fields">
                    <div className="row">
                        <div className="col">
                            <label className="label">姓名</label>
                            <input type="text" ref="name" className="ipt" placeholder="请输入姓名" defaultValue=""/>
                        </div>
                        <div className="col">
                            <label className="label">联系电话</label>
                            <input type="text" ref="mobile" className="ipt" placeholder="请输入联系电话" defaultValue=""/>
                        </div>
                        <div className="col">
                            <label className="label">时间段</label>
                            <input type="text" ref="startTime" className="ipt" placeholder="请输入开始时间" defaultValue=""/>
                            <input type="text" ref="endTime" className="ipt" placeholder="请输入结束时间" defaultValue=""/>

                        </div>
                    </div>
                </div>
                <div className="operate">
                    <button className="btn" onClick={this.searchHandle.bind(this)}>查询</button>
                </div>
            </form>
            
        )
    }
}

export default Search;