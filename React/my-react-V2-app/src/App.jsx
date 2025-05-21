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

import React, { useState } from 'react';
import MyComponent from './components/MyComponent';
export default function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="app">
      <div>{show && <MyComponent />}</div>
      <p>
        <button type="button" onClick={() => setShow((prevShow) => !prevShow)}>
          {show ? 'Hide' : 'Show'}
        </button>
      </p>
    </div>
  );
}
