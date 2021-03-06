const ADD_BOOK_TO_CART = 'shop/cart/ADD_BOOK_TO_CART';
const REMOVE_BOOK_FROM_CART = 'shop/cart/REMOVE_BOOK_FROM_CART';

const initState = {
    items: [

    ]
};

const cartReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_BOOK_TO_CART :
            return {
                ...state,
                items: [
                    ...state.items,
                    action.payload
                ]
            };
        case REMOVE_BOOK_FROM_CART:
            const newItems = state.items.filter(b => b.id !== action.payload);
            return {
                ...state,
                items: newItems
            };
        default:
            return state;
    }
};

export const addBook = (book) => ({
    type: ADD_BOOK_TO_CART,
    payload: book
});

export const removeBook = (bookId) => ({
    type: REMOVE_BOOK_FROM_CART,
    payload: bookId
});

export default cartReducer