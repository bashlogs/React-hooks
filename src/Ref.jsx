import React, { useRef } from "react";

// Easiest way to access and manupilcate DOM element

export default function Ref() {
    const inputRef = useRef(null);

    const onClick = () => {
        // inputRef.current.focus();
        inputRef.current.value = "";
    };

    return (
        <div>
            <h1>Hello</h1>
            <input type="text" placeholder="Ex. " ref={inputRef}/>
            <button onClick={onClick}>Change Name</button>
        </div>
    )
};