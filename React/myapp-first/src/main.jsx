//index.js previously

import React from 'react';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import App from './App.jsx';

// REACT JSX ELEMENT & RENDERING ELEMENT
// const element = React.createElement('h1', null, 'Hello World');

/**
 * const index = 0;
setInterval(() => {
  const element = (
    <h1 className="heading" tabIndex={index}>
      <span className="text">Hello {new Date().toLocaleTimeString()}</span>
      <img src="" />
    </h1>
  );
  const root = createRoot(document.getElementById('root'));
  root.render(element);
}, 1000);
 */

//React Components and Props Core Concept
//1 is functional component
// function Clock({ locale }) {
//   return (
//     <h1 className="heading">
//       <span className="text">
//         Hello {new Date().toLocaleTimeString(locale)}
//       </span>
//       <img src="" />
//     </h1>
//   );
// }
// const root = createRoot(document.getElementById('root'));
// root.render(<Clock locale="bn-BD" />);

//Another syntax to create a component Class syntax(JS ES6) - for stateful components

// class Clock extends React.Component {
//   render() {
//     return (
//       <h1 className="heading">
//         <span className="text">
//           Hello -{this.props.children}
//           {new Date().toLocaleTimeString(this.props.locale)}
//         </span>
//         <img src="" />
//       </h1>
//     );
//   }
// }

// const root = createRoot(document.getElementById('root'));
// root.render(<Clock locale="bn-BD">test</Clock>);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
