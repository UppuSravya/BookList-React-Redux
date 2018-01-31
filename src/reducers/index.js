import { combineReducers } from 'redux';
import BookList from './booklist_reducers';
import selectBook from '../reducers/selectBook_reducers';

const rootReducer = combineReducers({
    books: BookList,
    activeBook: selectBook

});

export default rootReducer;
