import React, {useCallback, useEffect, useState} from 'react';
import axios from 'axios';
import Child from './Child';

export default function Memo(){
    const [data, setData] = useState("Yooo");
    const [toggle, setToggle] = useState(true);

    const returnComment = useCallback((name) => {
        return data + name;
    }, [data]);

    return (
        <div>
            <Child returnComment={returnComment}/>
            <button onClick={() => {
                setToggle(!toggle);
            }}>Toggle</button>

            {toggle && <h1>Toggle</h1> }
        </div>
    )
}