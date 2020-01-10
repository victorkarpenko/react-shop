import React from 'react'
import { Menu, Input} from 'semantic-ui-react'

const Filter = (props) => {
    const handleItemClick = (e, {name}) => {
        props.setFilter(name);
    };

    const onChangeSearchInput = (e) =>{
        props.setQuery(e.target.value);
    };

    return (
        <Menu secondary>
            <Menu.Item
                name='all'
                active={props.filterBy === 'all'}
                onClick={handleItemClick}
            > Все</Menu.Item>
            <Menu.Item
                name='popular'
                active={props.filterBy === 'popular'}
                onClick={handleItemClick}
            >Популярные</Menu.Item>
            <Menu.Item
                name='priceUp'
                active={props.filterBy === 'priceUp'}
                onClick={handleItemClick}
            >Цена (дорогие)</Menu.Item>
            <Menu.Item
                name='priceDown'
                active={props.filterBy === 'priceDown'}
                onClick={handleItemClick}
            >Цена (дешевые)</Menu.Item>
            <Menu.Item
                name='authors'
                active={props.filterBy === 'authors'}
                onClick={handleItemClick}
            >Автор</Menu.Item>
            <Menu.Item><Input icon={"search"} value={props.searchQuery} onChange={onChangeSearchInput} placeholder={"Введите запрос"}/></Menu.Item>
        </Menu>
    );
};

export default Filter;