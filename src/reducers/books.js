const initState = {
    books: [
        {
            id: 0,
            title: 'Джордж Оруел'
        }
    ]
};

export default (state = initState, action) => {
    switch (action.type) {
        case 'SET_BOOKS' :
            return {
                ...state,
                books: action.payload
            };
        case 'ADD_BOOK' :
            return {
                ...state,
                books: [
                    ...state.books,
                    action.payload
                ]
            };
        default:
            return state;
    }
}