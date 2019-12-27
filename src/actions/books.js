import axios from "axios";

const setBooks = (items) => ({
    type: 'SET_BOOKS',
    payload: items
});

export const setReady = (ready) => ({
    type: 'SET_READY',
    payload: ready
});

export const setFilter = (filter) => ({
    type: 'SET_FILTER',
    payload: filter
});

//thunk
export const getBooks = () => (dispatch) => {
    axios.get('/books.json').then(
        ({data}) => {
            dispatch(setBooks(data));
        }
    )
};