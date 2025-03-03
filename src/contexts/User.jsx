import React, { useContext } from 'react';
import {AppContext} from './Context';

export default function User(){
    const {username} = useContext(AppContext);
    return (
        <h1>Username: {username}</h1>
    )
}