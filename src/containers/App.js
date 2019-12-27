import React, {Component} from 'react';
import {connect} from "react-redux";
import {getBooks} from "../actions/books";
import App from "../components/App";
import orderBy from 'lodash/orderBy'

const sortBy = (books, filterBy) => {
    let newBooks = [];
    switch (filterBy) {
        case 'all':
            newBooks = books;
            break;
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
        default:
            newBooks = books;
            break;
    }
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
    books: sortBy(state.books.items, state.books.filterBy),
    isReady: state.books.isReady,
});


export default connect(mapStateToProps, {getBooks})(AppContainer);
