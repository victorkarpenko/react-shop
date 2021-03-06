import React from 'react';
import {Card, Icon, Image, Button, Rating} from "semantic-ui-react";

const BookCard = (props) => {
    return (
        <Card>
            <Image src={props.image} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{props.title}</Card.Header>
                <Card.Meta>
                    <span className='date'>{props.author}</span>
                </Card.Meta>
            </Card.Content>
            <Card.Content extra>
                <span>
                    {props.price} <Icon name={'rub'}/>
                </span>
                <Rating icon='star' defaultRating={props.rating} maxRating={5} disabled/>
            </Card.Content>
            <Button onClick={() => props.addBook(props)}>Добавить в корзину {props.addedCount>0 && `(${props.addedCount})`}</Button>
        </Card>
    );
};

export default BookCard;