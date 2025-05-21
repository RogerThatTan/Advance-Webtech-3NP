// #19 React Hooks Bangla - React useState hook

// import React from "react";
// // import Todo from "./components/Todo";
// import Counter from "./components/Counter";
// export default class App extends React.Component {

//   render() {
//     return (
//       <div className="app">
//         <Counter />
//         </div>

//     );
//   }
// }

//#20 React Hooks Bangla - React useState hook
// import React from 'react';
// import MyComponent from './components/MyComponent';

// export default class App extends React.Component {
//   render() {
//     return (
//       <div className="app">
//         <div>We shall learn useEffect() today</div>
//         <MyComponent />
//       </div>
//     );
//   }
// }

// import React, { useState } from 'react';
// import MyComponent from './components/MyComponent';
// export default function App() {
//   const [show, setShow] = useState(true);
//   return (
//     <div className="app">
//       <div>{show && <MyComponent />}</div>
//       <p>
//         <button type="button" onClick={() => setShow((prevShow) => !prevShow)}>
//           {show ? 'Hide' : 'Show'}
//         </button>
//       </p>
//     </div>
//   );
// }

// #21 React Hooks Bangla - React useCallback & useMemo hook

import Title from './components/Title';
import { useState, useCallback, useMemo } from 'react';
import ShowCount from './components/ShowCount';
import Button from './components/Button';
function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const incrementByOne = useCallback(() => {
    setCount1((prevCount) => prevCount + 1);
  }, []);

  const incremmentByFive = useCallback(() => {
    setCount2((prevCount) => prevCount + 5);
  }, []);

  const isEvenOrOdd = useMemo(() => {
    let i = 0;
    while (i < 1000000000) {
      i++;
    }
    return count1 % 2 === 0 ? 'Even' : 'Odd';
  }, [count1]);

  return (
    <div className="app">
      <Title />
      <ShowCount count={count1} title="Counter1" />
      <span>{isEvenOrOdd}</span>
      <Button handleClick={incrementByOne}>Increment by One</Button>
      <hr />
      <ShowCount count={count2} title="Counter2" />
      <Button handleClick={incremmentByFive}>Increment by Five</Button>
    </div>
  );
}
export default App;
