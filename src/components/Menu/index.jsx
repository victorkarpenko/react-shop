
import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class MenuMain extends Component {
    state = {};

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        const { activeItem } = this.state;

        return (
            <Menu>
                <Menu.Item
                    name='logo'
                >
                    Магазин книг
                </Menu.Item>


                <Menu.Menu position='right'>
                    <Menu.Item
                    >
                        Итого: &nbsp; <b> 0 </b> руб.
                    </Menu.Item>

                    <Menu.Item
                        name='cart'
                        active={activeItem === 'cart'}
                        onClick={this.handleItemClick}
                    >
                        Корзина (0)
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        )
    }
}