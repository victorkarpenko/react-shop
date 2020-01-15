const SET_FILTER = 'shop/filters/SET_FILTER';
const SET_QUERY = 'shop/filters/SET_QUERY';

const initState = {
    filters: [
        {
            name: 'all',
            title: 'Все'
        },
        {
            name: 'popular',
            title: 'Популярные'
        },
        {
            name: 'priceUp',
            title: 'Цена (дорогие)'
        },
        {
            name: 'priceDown',
            title: 'Цена (дешевые)'
        },
        {
            name: 'authors',
            title: 'Автор'
        },
    ],
    filterBy: 'all',
    searchQuery: ''
};

const filterReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_FILTER :
            return {
                ...state,
                filterBy: action.payload
            };
        case SET_QUERY:
            return {
                ...state,
                searchQuery: action.payload
            };
        default:
            return state;
    }
};

export const setFilter = (filter) => ({
    type:  SET_FILTER,
    payload: filter
});

export const setQuery = (query) => ({
    type: SET_QUERY,
    payload: query
});

export default filterReducer