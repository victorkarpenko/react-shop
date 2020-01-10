import {connect} from "react-redux";
import {addBook, removeBook} from "../actions/cart";
import BookCard from "../components/BookCard";

const mapStateToProps = ({cart}, {id}) => ({
    addedCount: cart.items.length && cart.items.reduce((count, book) => count + (book.id === id ? 1 : 0), 0),
});


export default connect(mapStateToProps, {addBook, removeBook})(BookCard);