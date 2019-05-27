import { ajax_signup, ajax_login, ajax_logout } from '../util/session_api_util';


export const CLEAR_ERRORS = "CLEAR_ERRORS";
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const login = (user) => {
    return dispatch => {
        return ajax_login(user).then(userFromServer => {
            return dispatch(receiveCurrentUser(userFromServer));
        });
    };
};


export const logout = (user) => {
    return dispatch => {
        return ajax_logout(user).then(() => {
            return dispatch(logoutCurrentUser());
        });
    };
};


export const signup = (user) => {
    return dispatch => {
        return ajax_signup(user).then(userFromServer => {
            return dispatch(receiveCurrentUser(userFromServer));
        });
    };
};




const receiveCurrentUser = (currentUser) => ({
    type: RECEIVE_CURRENT_USER,
    currentUser,
});


const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});


export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});


