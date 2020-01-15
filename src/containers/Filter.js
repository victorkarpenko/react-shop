import {connect} from "react-redux";
import Filter from "../components/Filter";
import {setFilter, setQuery} from "../redux/filter";

const mapStateToProps = state => ({
    filters: state.filter.filters,
    filterBy: state.filter.filterBy,
    searchQuery: state.filter.searchQuery
});


export default connect(mapStateToProps, {setFilter, setQuery})(Filter);