import React, {Component} from 'react';
import {connect} from "react-redux";
import {setBooks, setReady} from "./actions/books";
import axios from 'axios';
import Menu from "./components/Menu";
import {Container, Card} from "semantic-ui-react";
import BookCard from "./components/BookCard";

//import React from 'react'
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

const Preloader = () => (
    <Segment>
        <Dimmer active inverted>
            <Loader size='large'>Loading</Loader>
        </Dimmer>

        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
    </Segment>
);

//export default Preloader


class App extends Component {
    componentDidMount() {
        axios.get('/books.json').then(
            ({data}) => {
                this.props.setBooks(data);
                // this.props.setReady(true);
            }
        )
    }

    render() {
        const {books, isReady} = this.props;
        return (
            <Container>
                <Menu/>

                {isReady ?

                    <Card.Group>
                        {books.map(book => (
                            <BookCard key={book.id} {...book}/>
                        ))}
                    </Card.Group>


                    : <Preloader />
                }

            </Container>
        );
    }
}


const mapStateToProps = state => ({
    books: state.books.items,
    isReady: state.books.isReady
});


export default connect(mapStateToProps, {setBooks, setReady})(App);
