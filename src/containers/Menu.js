import {connect} from "react-redux";
import {addBook, removeBook} from "../actions/cart";
import Menu from "../components/Menu";

const mapStateToProps = state => ({
    totalPrice: state.cart.items.reduce((total, book) => total + book.price, 0),
    count: state.cart.items.length
});


export default connect(mapStateToProps, {addBook, removeBook})(Menu);