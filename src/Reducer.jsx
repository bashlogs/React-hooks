import React from 'react';


// Some information


// The current state of this state variable, initially set to the initial state you provided.
// The dispatch function that lets you change it in response to interaction.

// To update what’s on the screen, call dispatch with an object representing what the user did, called an action:

// function handleClick() {
//      dispatch({ type: 'incremented_age' });
// }

// React will pass the current state and the action to your reducer function. Your reducer will calculate and return the next state. 
// React will store that next state, render your component with it, and update the UI.

// If there is more than one action you want to use the useReducer is best option since you don't have to write multiple state.

const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { count : state.count + 1, showText: state.showText };
        case "toggleShowText":
            return { count : state.count, showText: !state.showText };
        default:
            return state
    }
};

function Reducer() {
    const [state, dispatch] = React.useReducer(reducer, {count : 0, showText: true});

    return (
        <div>
            <h1>{state.count}</h1>
            <button onClick = { () => {
                dispatch({type: 'INCREMENT'});
            }}>Increment
            </button>
            <button onClick={() => {
                dispatch({type: "toggleShowText"});
            }}>
                Show Text
            </button>
            {state.showText && <p>This is the text</p>}
        </div>
    )
}

export default Reducer;