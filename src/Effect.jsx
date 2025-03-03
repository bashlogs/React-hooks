import React, { useEffect, useState } from 'react';
import axios from 'axios';

// useEffect is just a function whenever page is re-render
// Primaryily use to make API calls
// Similar in instagram when you log in the data get fetched

export default function Effect() {
    const [data, setData] = useState("");
    const [count, setCount] = useState(0);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments").then((response) => {
            setData(response.data[0].email)
            console.log("API IS Called");
        })
    }, []);

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => {
                setCount(count + 1);
            }}>Increment</button><br />
            Hello World {data}
        </div>
    )
}