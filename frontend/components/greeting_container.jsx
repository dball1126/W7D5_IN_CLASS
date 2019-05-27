import React from 'react';
import {connect} from 'react-redux';
import Greeting from './greeting';
import {logout} from '../actions/session_actions';

const msp = (state) => {
    const currentUser = state.entities.users[state.session.id];
    return {
        currentUser: currentUser
    }   
}

const mdp = (dispatch) => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(msp, mdp)(Greeting)