import React, {Component} from 'react';
import {connect} from "react-redux";
import {setBooks} from "./actions/books";


class App extends Component {
    render() {
        const {books} = this.props.books;
        return (
            <div className="App">
               <h1>{books[0].title}</h1>
                <div>
                    <button onClick={()=>this.props.setBooks([{
                        id: 0,
                        title: "you are lox"
                    }])}>Set new books</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ( {
    ...state
});



export default connect(mapStateToProps, {setBooks})(App);
