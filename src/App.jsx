import React, { useState } from 'react';
import "./App.css";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Count  count={count} setCount={setCount} />
    </div>
  );
}

function Count({ count, setCount }) {
  return <div>
    <CountRenderer count={count} />
    <Buttons count={count} setCount={setCount}></Buttons>
    </div>;
}

function CountRenderer({count}) {
  return <div>
    {count}
  </div>
}
function Buttons({ count, setCount }) {
  return (
    <div>
    <button onClick={() => {
      setCount(count + 1)
    }}>Increase</button>

    <button onClick={() => {
      setCount(count - 1)
    }}>Decrease</button>
    </div>
  );
}

export default App;


//if we put  <Buttons count={count} setCount={setCount} /> inside function count() then we have to pass
//set count as a component here as a prop even count doesn't really need setCount. it just taking it and passing down to another child.
// there is a parent component (function app()) which renders child component which child component renders another
//child component. dada ke pass set count hai and uske pote ko setcount chahiye ho dada ke bache as a messenger ki tarah pass kerenge apne childrens ko
//like a mediator which makes it ugly code. -- that;s called prop drilling
/////c1 (have) iske paas isliye hai may be iske dusre children ko bhi chahiye hoga 
///////c2(no need) still c1 ke props pass karenge so that c4 ko pahuch jaye
/////////c3(no need) passing down
///////////c4 (need)------ this is what prop drilling and which makes code unmanageable.--- it has nothing to do with re-rendering. 
// makes code unappealing to look.

