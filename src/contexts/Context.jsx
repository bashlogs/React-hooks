import React, { createContext, useState } from 'react';
import User from './User';
import Login from './Login'

// Use context hooks comes with the context API
// It's the collections of the state throughout the tree of components;

export const AppContext = createContext(null);

export default function Context(){
    const [username, setUsername] = useState("");

    return (
        <AppContext.Provider value={{username, setUsername}}>
            <Login /> <User />
        </AppContext.Provider >
    )
}