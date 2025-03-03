import './App.css';
import State from './State';
import React from 'react';
import State2 from './State2';
import Reducer from './Reducer';
import Effect from './Effect';
import Ref from './Ref';
import LayoutEffect from './LayoutEffect';
import ImperativeHandle from './ImperativeHandle';
import Context from './contexts/Context';
import Memo from './memo/Memo';
import Callback from './callback/Callback'

function App() {
  return (
    <>
      <div className="App">
        {/* <State /> */}
        {/* <State2 /> */}
        {/* <Reducer className="Reducer center"/>  */}
        {/* <Effect/> */}
        <Ref/>
        {/* <LayoutEffect /> */}
        {/* <ImperativeHandle /> */}
        {/* <Context /> */}
        {/* <Memo /> */}
        {/* <Callback/> */}
      </div>
    </>
  );
}

export default App;
