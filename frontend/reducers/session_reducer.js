import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from '../actions/session_actions';
import {merge} from 'lodash';

const nullState = {};

const sessionReducer = (oldState = nullState, action) => {
  Object.freeze(oldState)
    let newState = merge({}, oldState);
    // debugger
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return {id: action.currentUser.id};
        case LOGOUT_CURRENT_USER:
             return newState;
        default:
            return oldState;
    }
};

export default sessionReducer;
