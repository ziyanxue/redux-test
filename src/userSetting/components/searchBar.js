import React,{Component} from 'react';
import DatePicker,{RangePicker} from '@alife/next-date-picker';

class SearchBar extends Component {
    constructor(props) {
        super(props);
    }

    handleSearch(e) {
        e.preventDefault();
        this.props.onUpdatePage(1);
        this.props.onSearch();
    }

    disabledStartDate(showTime) {
        const {endTime} = this.props;
        if (!showTime || !endTime) return false;
        if (showTime >= +(new Date(endTime))) return true;
    }

    disabledEndDate(showTime) {
        const {startTime} = this.props;
        if (!showTime || !startTime) return false;
        if (showTime <= +(new Date(startTime))) return true;
    }

    onStartTimeChange(time, date) {
        var params = {
            startTime: date
        };
        this.props.onUpdateSearchParams(params);
    }

    onEndTimeChange(time, date) {
        var params = {
            endTime: date
        };
        this.props.onUpdateSearchParams(params);
    }

    onFieldChange(name, e) {
        var params = {
            [name]: e.target.value
        };
        this.props.onUpdateSearchParams(params);
    }

    render() {
        const {type,name,mobile,startTime,endTime} = this.props;
        return (
                <div className="search-bar">
                    <form className="form">
                        <input type="hidden" value={type}/>

                        <div className="fields">
                            <div className="row">
                                <div className="col">
                                    <label className="label">姓名</label>
                                    <input type="text" className="ipt" placeholder="请输入姓名" value={name}
                                           onChange={this.onFieldChange.bind(this,'name')}/>
                                </div>
                                <div className="col">
                                    <label className="label">联系电话</label>
                                    <input type="text" className="ipt" placeholder="请输入联系电话" value={mobile}
                                           onChange={this.onFieldChange.bind(this,'mobile')}/>
                                </div>
                                <div className="col">
                                    <label className="label">时间段</label>
                                    <DatePicker disabledDate={this.disabledStartDate.bind(this)} value={startTime}
                                                onChange={this.onStartTimeChange.bind(this)}/>
                                    <span>至</span>
                                    <DatePicker disabledDate={this.disabledEndDate.bind(this)} value={endTime}
                                                onChange={this.onEndTimeChange.bind(this)}/>
                                </div>
                            </div>
                        </div>
                        <div className="operate">
                            <button className="btn" onClick={this.handleSearch.bind(this)}>查询</button>
                        </div>
                    </form>
                </div>

        )
    }
}

export default SearchBar;