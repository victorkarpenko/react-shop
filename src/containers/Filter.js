import {connect} from "react-redux";
import Filter from "../components/Filter";
import {setFilter, setQuery} from "../actions/filter";

const mapStateToProps = state => ({
    filterBy: state.filter.filterBy,
    searchQuery: state.filter.searchQuery
});


export default connect(mapStateToProps, {setFilter, setQuery})(Filter);