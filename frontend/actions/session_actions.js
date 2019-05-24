import { ajax_signup, ajax_login, ajax_logout } from '../util/session_api_util';
import { Session } from 'inspector';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

// Neither logout nor logoutCurrentUser will accept an argument. 
// receiveErrors will take an array. 
// All other action creators accept a user object.

// (thunk action creator)
export const login = (user) => {
    return dispatch => {
        return SessionApiUtil.ajax_login(user).then(userFromServer => {
            return dispatch({type: receiveCurrentUser, user: userFromServer});
        });
    };
};

// (thunk action creator)
export const logout = () => {
    return dispatch => {
        return SessionApiUtil.ajax_logout(user).then(userFromServer => {
            return dispatch({type: LOGOUT_CURRENT_USER, user: userFromServer});
        });
    };
};

// (thunk action creator)
export const signup = (user) => {
    return dispatch => {
        return Session.ajax_signup(user).then(userFromServer => {
            return dispatch({type: RECEIVE_CURRENT_USER, user: userFromServer});
        });
    };
};

// we don't export these three bc we export them up top.
// (regular action creator)
const receiveCurrentUser = (currentUser) => ({
    type: RECEIVE_CURRENT_USER,
    currentUser,
});

// (regular action creator)
const logoutCurrentUser = (current_user) => ({
    type: LOGOUT_CURRENT_USER,
    current_user,
});

// (regular action creator)
const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors,
});
