import React from 'react';

const State = () => {
    // const [count, setCount] = React.useState(0);
    // const increment = () => {
    //     setCount(count + 1);
    // }
    // return (
    //     <div>
    //         {count}
    //         <button onClick={increment}>Click Me</button>
    //     </div>
    // );

    const [inputValue, setInputValue] = React.useState("Noting");
    
    let onChange = (event) => {
        const newVal = event.target.value;
        setInputValue(newVal);
    }
    return (
        <div>
            <input placeholder='Enter Something..' onChange={onChange} />
            {inputValue}
        </div>
    )
}


export default State;