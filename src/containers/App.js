import React, {Component} from 'react';
import {connect} from "react-redux";
import {getBooks} from "../actions/books";
import App from "../components/App";
import orderBy from 'lodash/orderBy'

const sortBy = (books, filterBy, searchQuery) => {
    let newBooks = [];

    switch (filterBy) {
        case 'priceUp':
            newBooks = orderBy(books, 'price', 'desc');
            break;
        case 'priceDown':
            newBooks = orderBy(books, 'price', 'asc');
            break;
        case 'popular':
            newBooks = orderBy(books, 'rating', 'desc');
            break;
        case 'authors':
            newBooks = orderBy(books, 'author', 'asc');
            break;
        case 'all':
        default:
            newBooks = books;
            break;
    }

    newBooks = newBooks.filter(book =>
        book.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >=0 ||
        book.author.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0);

    return newBooks;
};

class AppContainer extends Component {
    componentDidMount() {
        this.props.getBooks();
    }

    render() {
        return (
            <App {...this.props}/>
        );
    }
}


const mapStateToProps = state => ({
    books: state.books.items && sortBy(state.books.items, state.filter.filterBy,  state.filter.searchQuery),
    isReady: state.books.isReady,
});


export default connect(mapStateToProps, {getBooks})(AppContainer);
