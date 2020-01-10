import React from 'react'
import {Menu, Popup} from 'semantic-ui-react'
import CartPopup from "./CartPopup";

export default (props) => {
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
                    Итого: &nbsp; <b> {props.totalPrice} </b> руб.
                </Menu.Item>

                <Popup trigger={
                    <Menu.Item
                        name='cart'
                    >
                        Корзина ({props.count})
                    </Menu.Item>
                } content={props.items.length ? <CartPopup removeBook={props.removeBook} items={props.items}/> : 'Корзина пуста'} on={'click'} hideOnScroll/>

            </Menu.Menu>
        </Menu>
    )
}
