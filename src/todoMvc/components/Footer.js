import React,{Component,PropTypes} from 'react'

class Footer extends Component{
    constructor(props){
        super(props)
    }
    renderFilter(filter,name){
        return (
            <a href="javascript:void(0);" onClick={()=>(this.props.onFilterChange(filter))}>{name}</a>
        )
    }
    render(){
        return (
            <div>
                Show:
                {' '}
                {this.renderFilter('SHOW_ALL', 'All')}
                {', '}
                {this.renderFilter('SHOW_COMPLETED', 'Completed')}
                {', '}
                {this.renderFilter('SHOW_ACTIVE', 'Active')}
            </div>
        )
    }
}

Footer.propTypes = {
    onFilterChange: PropTypes.func.isRequired,
    filter: PropTypes.oneOf([
        'SHOW_ALL',
        'SHOW_COMPLETED',
        'SHOW_ACTIVE'
    ])
};

export default Footer;