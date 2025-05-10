//index.js previously

import React from 'react';
import { createRoot } from 'react-dom/client';

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

//Another syntax to create a component Class syntax(JS ES6)

class Clock {
  print() {
    return (
      <h1 className="heading">
        <span className="text">Hello {new Date().toLocaleTimeString()}</span>
        <img src="" />
      </h1>
    );
  }
}

const ClockComponent = new Clock();
const root = createRoot(document.getElementById('root'));
root.render(ClockComponent.print());
