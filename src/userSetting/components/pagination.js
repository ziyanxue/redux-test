import React,{PropTypes,Component} from 'react';
import classNames from 'classnames';
import './pagination.less';

class Pagination extends Component {
    constructor(props) {
        super(props);
    }

    componentDidUpdate(nextProps) {
        this.textValue = nextProps.current;
        this.refs.textNum.value = this.textValue;
    }

    renderTotalNum(total) {
        return <span className="paging-total-num">共{total}条</span>;
    }

    renderPre(current) {
        const className = classNames({
            'paging-pre': true,
            disabled: (current <= 1)
        });
        return <button onClick={this.preHandle.bind(this)} className={className}></button>
    }

    renderNext(current) {
        const totalPage = this.totalPage;
        const className = classNames({
            'paging-next': true,
            disabled: (current >= totalPage)
        });
        return <button onClick={this.nextHandle.bind(this)} className={className}></button>;
    }

    renderPageItem(num) {
        const {current} =this.props;
        const className = classNames({
            'paging-item': true,
            current: (num == current)
        });
        return <span onClick={this.pageChangeHandle.bind(this,num)} className={className} key={num}>{num}</span>
    }

    renderEllipsis() {
        return <span className="page-dot">...</span>;
    }

    renderMiddlePages() {
        const {current,total,siblings} = this.props;
        const totalPage = this.totalPage;
        let pages = [];
        //const showLeftEllipsis = (current - siblings) > 2;
        //const showRightEllipsis = (current + siblings + 1) < totalPage;
        for (var n = 2; n < totalPage; n++) {
            if (n <= current) {
                if ((n + siblings) >= current) {
                    pages.push(this.renderPageItem(n));
                }
            } else {
                if ((n - current) <= siblings) {
                    pages.push(this.renderPageItem(n));
                }
            }
            /*// 当前页前展示的页码
             if (current <= siblings) {
             if (n < current) {
             pages.push(this.renderPageItem(n, current));
             }
             } else {
             if (n >= current - siblings) {
             if (n < current) {
             pages.push(this.renderPageItem(n, current));
             }
             }
             }
             // 显示当前页
             if (n === current) {
             pages.push(this.renderPageItem(n, current));
             }
             // 当前页后展示的页码
             if (n > current && n <= current + siblings) {
             pages.push(this.renderPageItem(n, current));
             }*/
        }
        return pages;
    }

    renderList() {
        const {current,total,siblings} = this.props;
        const totalPage = this.totalPage;
        const showLeftEllipsis = (current - siblings) > 2;
        const showRightEllipsis = (current + siblings + 1) < totalPage;
        console.log(current + siblings + 1);
        return (
                <div className="paging-list">
                    {this.renderPageItem(1)}
                    {showLeftEllipsis ? this.renderEllipsis() : null}
                    {this.renderMiddlePages()}
                    {showRightEllipsis ? this.renderEllipsis() : null}
                    {totalPage > 1 ? this.renderPageItem(totalPage) : null}
                </div>
        )
    }


    renderPageJump() {
        const {current} = this.props;
        return (
                <div className="paging-jump">
                    去第
                        <span>
                            <input type="text" className="text" ref="textNum" onChange={this.textChangeHandle.bind(this)}
                                   defaultValue={current}/>
                        </span>
                    页
                    <button className="go-to" onClick={this.jumpHandle.bind(this)}>跳转</button>
                </div>
        )
    }

    preHandle(e) {
        const {current} = this.props;
        if (current <= 1) return;
        this.props.onChange(current - 1);
    }

    nextHandle(e) {
        const totalPage = this.totalPage;
        const {current} = this.props;
        if (current >= totalPage) return;
        this.props.onChange(current + 1);
    }

    jumpHandle(e) {
        const totalPage = this.totalPage;
        const {current} = this.props;
        var value = this.textValue * 1;
        if (!Number.isInteger(value) || value < 1) {
            this.refs.textNum.value = 1;
            value = 1;
        } else if (value > totalPage) {
            this.refs.textNum.value = totalPage;
            value = totalPage;
        }

        if (value == current) return;
        this.props.onChange(value);
    }


    pageChangeHandle(num, e) {
        const {current} = this.props;
        if (num != current) {
            this.props.onChange(num);
        }
    }

    textChangeHandle(e) {
        var value = e.target.value;
        this.textValue = value;
        /*this.setState({
            textValue: value
        });*/
        console.log(value);
    }

    render() {
        const {current,total,pageSize,siblings} = this.props;
        this.totalPage = Math.ceil(total / pageSize);
        return (
                <div className="paging">
                    {this.renderTotalNum(total)}
                    {this.renderPre(current)}
                    {this.renderList()}
                    {this.renderNext(current)}
                    {this.renderPageJump()}
                </div>
        )
    }
}

Pagination.defaultProps = {
    pageSize: 10,
    current: 1,
    total: 1,
    siblings: 2
};

export default Pagination;