import React,{PropTypes,Component} from 'react';
import classNames from 'classnames';

class Pagination extends Component {
    constructor(props) {
        super(props);
    }

    getTotalPage() {
        const {total,pageSize} = this.props;
        return Math.ceil(total / pageSize);
    }

    renderTotalNum(total) {
        return <span className="paging-total-num">共{total}条</span>;
    }

    renderPre(current) {
        const className = classNames({
            'paging-pre': true,
            disabled: (current <= 1)
        });
        return <button className={className}>上一页</button>
    }

    renderPageItem(num) {
        const {current} =this.props;
        const className = classNames({
            'paging-item': true,
            current: (num == current)
        });
        return <span className={className} key={num}>{num}</span>
    }

    renderEllipsis() {
        return <span className="page-dot">...</span>;
    }

    renderMiddlePages() {
        const {current,total,siblings} = this.props;
        const totalPage = this.getTotalPage();
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
        const totalPage = this.getTotalPage();
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

    renderNext() {
        return <button className="paging-next">下一页</button>;
    }

    renderPageJump(current) {
        return (
                <div className="paging-jump">
                    去第
                        <span>
                            <input type="text" defaultValue={current}/>
                        </span>
                    页
                    <button>跳转</button>
                </div>
        )
    }

    preHandle() {
    }

    nextHandle() {
    }

    jumpHandle() {
    }

    pageChangeHandle() {
    }

    textChangeHandle() {
    }

    render() {
        const {current,total,pageSize,siblings} = this.props;

        return (
                <div className="paging">
                    {this.renderTotalNum(total)}
                    {this.renderPre(current)}
                    {this.renderList()}
                    {this.renderNext(current)}
                    {this.renderPageJump(current)}
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