import React, { Component } from 'react';
import { connect } from 'react-redux'
import selectBook from "../actions/selectBook";
import {bindActionCreators} from 'redux'

class BookList extends Component {

    render() {

        let renderList = this.props.books.map((book) => {
            return ( <li onClick = {() => this.props.selectBook(book)} key = {book.title}>{book.title} </li>
            );
        })
        // console.log(this.props.books);
        return (
            <ol>
                {renderList}
            </ol>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({selectBook:selectBook},dispatch);
}

function mapStateToProps(state) {
    return {
        books: state.books
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
