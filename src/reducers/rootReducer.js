import {combineReducers} from 'redux'
import errorReducer from './errorReducer';
import recordReducer from './RecordReducer';

export default combineReducers ({

    errors:errorReducer,
    record:recordReducer
});