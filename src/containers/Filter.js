import {connect} from "react-redux";
import Filter from "../components/Filter";
import {setFilter} from "../actions/books";

const mapStateToProps = state => ({
    filterBy: state.books.filterBy
});


export default connect(mapStateToProps, {setFilter})(Filter);