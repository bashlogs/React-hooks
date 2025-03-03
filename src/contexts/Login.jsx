import React, { useContext } from 'react';
import {AppContext} from './Context';

export default function Login(){
    const {setUsername} = useContext(AppContext);
    return (
        <input type="text" onChange={(event) => {
            setUsername(event.target.value);
        }}
        />
    )
}