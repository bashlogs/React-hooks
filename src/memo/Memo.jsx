import React, {useEffect, useState, useMemo} from 'react';
import axios from 'axios';

export default function Memo(){
    const [data, setData] = useState("");
    const [toggle, setToggle] = useState(true);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments").then((response) => {
            setData(response.data)
            console.log("API IS Called");
        })
    }, []);

    const findlargestname = (comments) => {
        if(!comments) return null;

        let long = "";
        for(let i=0; i<comments.length; i++){
            let currentName = comments[i].name;
            if(currentName.length > long.length){
                long = currentName;
            }
        }
        console.log("Function IS Called");
        return long;
    }   
    // when value is changes the function will run again
    const getLongestName = useMemo(() => findlargestname(data), [data]);
    return (
        <div>
            <h1>{getLongestName}</h1>
            <button onClick={() => {
                setToggle(!toggle);
            }}>Toggle</button>
        </div>
    )
}