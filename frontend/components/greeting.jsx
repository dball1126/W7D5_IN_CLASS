import React from 'react';
import { Link } from 'react-router-dom';


class Greeting extends React.Component{

render(){
    return(
        <div>
        
            <Link to={'/api/users/new'}>
                Sign Up
            </Link>
            <Link to={'/api/session/new'}>
                Sign In
            </Link>
        
        </div>
        )
    }
}

export default Greeting;