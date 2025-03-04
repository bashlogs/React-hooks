import React, { useRef } from 'react';
import Button from './Button';

export default function ImperativeHandle() {
    const buttonRef = useRef(null);

    return (
        <div>
            <button onClick={() => {buttonRef.current.alterToggle()}}>Button from Parent</button>
            <Button ref={buttonRef}/>
        </div>
    )
}