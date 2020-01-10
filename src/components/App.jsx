import React from 'react';
import Menu from "../containers/Menu";
import {Card, Container} from "semantic-ui-react";
import BookCard from "../containers/BookCard";
import Preloader from "./PreloaderComponent";
import Filter from "../containers/Filter";


const App = ({books, isReady}) => {
    return (
        <Container>
            <Menu/>
            <Filter />

            {isReady ?

                <Card.Group>
                    {books.map(book => (
                        <BookCard key={book.id} {...book}/>
                    ))}
                </Card.Group>


                : <Preloader/>
            }

        </Container>
    );
};

export default App
