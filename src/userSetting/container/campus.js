import React,{Component,PropTypes} from 'react';
import {connect} from 'react-redux';
import {updateSearchParams,search,updatePage,changePage,delUser,addUser} from '../actions';
import ActionBar from '../campus/components/actionBar';
import SearchBar from '../components/SearchBar';
import SearchResult from '../campus/components/searchResult';
import Paging from '../components/pagination'

class App extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {searchParams} = this.props;
        this.props.onSearch();
    }

    render() {
        const total = 100;
        const current = 1;
        const {searchParams,searchResult,onUpdateSearchParams,onPageChange,onUpdatePage,onSearch,onDelUser,onAddUser} = this.props;
        return (
                <div className="main-wrap">
                    <ActionBar onAddUser={onAddUser}/>
                    <SearchBar {...searchParams} onUpdateSearchParams={onUpdateSearchParams} onUpdatePage={onUpdatePage}
                                                 onSearch={onSearch}/>
                    <SearchResult {...searchResult} onPageChange={onPageChange} onSearch={onSearch} onDelUser={onDelUser}/>
                    <Paging total={total} current={current}/>
                </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        searchParams: state.searchParams,
        searchResult: state.searchResult
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch,
        onUpdateSearchParams: (params)=>dispatch(updateSearchParams(params)),
        onPageChange: (curPage)=>dispatch(changePage(curPage)),
        onUpdatePage: (curPage)=>dispatch(updatePage(curPage)),
        onDelUser:(id)=>dispatch(delUser(id)),
        onAddUser:(user,fn)=>dispatch(addUser(user,fn)),
        onSearch: ()=>dispatch(search())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

