import React from 'react'
import {Button, Image, List} from 'semantic-ui-react'

const CartPopup = ({items, removeBook}) => {
    return (
        <List selection divided verticalAlign='middle'>
            {items.map(item => (

                <List.Item>
                    <List.Content floated='right'>
                        <Button color={"red"} onClick={()=>removeBook(item.id)}>Удалить</Button>
                    </List.Content>
                    <Image avatar src={item.image}/>
                    <List.Content>{item.title}</List.Content>
                </List.Item>

            ))}
        </List>
    )
};

export default CartPopup