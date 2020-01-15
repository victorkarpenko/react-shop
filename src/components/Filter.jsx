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
            {
                props.filters.map((filter) => {
                    return (
                        <Menu.Item
                            name={filter.name}
                            active={props.filterBy === filter.name}
                            onClick={handleItemClick}
                        > {filter.title}</Menu.Item>
                    )
                })
            }
            <Menu.Item><Input icon={"search"} value={props.searchQuery} onChange={onChangeSearchInput} placeholder={"Введите запрос"}/></Menu.Item>
        </Menu>
    );
};

export default Filter;