import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBooks } from './../actions';

class HomeContainer extends Component {

    componentWillMount() {
        this.props.dispatch(getBooks(3, 0, 'desc'));
    }

    renderItems = (books) => (
        books.list ?
            books.list.map(item => ('item'))
            :null
    )

    render() {
        console.log(this.props);
        return (
            <div>
                {this.renderItems(this.props.books)}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        books: state.books
    }
}

export default connect(mapStateToProps)(HomeContainer);