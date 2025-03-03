import React, { useEffect, useLayoutEffect, useRef} from 'react'


// Get's called before the useEffect
// UI based effect

export default function LayoutEffect() {
    const refvalue = useRef(null);

    useLayoutEffect(() => {
        console.log(refvalue.current.value);
    }, [])

    useEffect(() => {
        refvalue.current.value = "hello";
    }, [])

    return(
        <div>
            <input ref={refvalue} value="Ex..."/>
        </div>
    ) 
}