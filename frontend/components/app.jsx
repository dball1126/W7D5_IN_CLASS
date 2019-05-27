import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GreetingContainer from './greeting_container';

// Switch renders the component (and its children) from the first path that matches the current path
// For rendering multiple NON-nested components, don't use switch
const App = () => (
            <div>
                <header>   
                    <h1>Bench BnB</h1>
                    <GreetingContainer />
                </header>
            </div>
);

export default App;