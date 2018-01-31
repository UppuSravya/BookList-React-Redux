import React,{ Component } from 'react';
import { connect } from 'react-redux';
class selectBook extends Component {
    render() {
        if(this.props.book === null) {
            return <h1>Please select book</h1>
        }
        return(

        <h1>{this.props.book.title}</h1>
    );
}
}

function mapStateToProps(state) {
    return {
        book: state.activeBook
    }
}

export default connect(mapStateToProps)(selectBook);
