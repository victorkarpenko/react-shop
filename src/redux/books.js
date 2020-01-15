import axios from "axios";

const SET_BOOKS = 'shop/books/SET_BOOKS';

const initState = {
    isReady: false,
    items: null,
};

const booksReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_BOOKS :
            return {
                ...state,
                items: action.payload,
                isReady: true
            };
        default:
            return state;
    }
};

const setBooks = (items) => ({
    type: SET_BOOKS,
    payload: items
});

//thunk
export const getBooks = () => (dispatch) => {
    axios.get('/books.json').then(
        ({data}) => {
            dispatch(setBooks(data));
        }
    )
};

export default booksReducer