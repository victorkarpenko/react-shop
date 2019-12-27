const initState = {
    isReady: false,
    items: null,
    filterBy: 'all'
};

const booksReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SET_BOOKS' :
            return {
                ...state,
                items: action.payload,
                isReady: true
            };
        case 'SET_FILTER' :
            return {
                ...state,
                filterBy: action.payload
            };
        case 'SET_READY':
            return {
                ...state,
                isReady: action.payload
            };
        default:
            return state;
    }
};

export default booksReducer