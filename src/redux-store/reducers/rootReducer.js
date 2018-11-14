import {combineReducers} from 'redux';
import reducerPosts from './ReducerPosts';
import reducerComments from './ReducerComments';
import reducerUsers from './ReducerUsers';

const rootReducer=combineReducers({
    rPosts: reducerPosts,
    rComments: reducerComments,
    rUsers:reducerUsers
});

export default rootReducer;