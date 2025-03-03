import React, { useEffect } from 'react';

export default function Child({returnComment}){
    useEffect(() => {
        console.log("Function was called");
    }, [returnComment])

    return <div>{returnComment(" mayur")}</div>
}