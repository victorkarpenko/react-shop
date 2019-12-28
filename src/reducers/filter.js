const initState = {
    filterBy: 'all',
    searchQuery: ''
};

const filterReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SET_FILTER' :
            return {
                ...state,
                filterBy: action.payload
            };
        case 'SET_QUERY' :
            return {
                ...state,
                searchQuery: action.payload
            };
        default:
            return state;
    }
};

export default filterReducer