import {connect} from "react-redux";
import {addBook, removeBook} from "../actions/cart";
import Menu from "../components/Menu";
import uniqBy from 'lodash/uniqBy';

const mapStateToProps = state => ({
    totalPrice: state.cart.items.reduce((total, book) => total + book.price, 0),
    count: state.cart.items.length,
    items: uniqBy(state.cart.items, o => o.id),
});


export default connect(mapStateToProps, {addBook, removeBook})(Menu);