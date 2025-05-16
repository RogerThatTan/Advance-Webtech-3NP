//#7 React State & Lifecycle in Class Component
// import Clock from './components/Clock';

// function App() {
//   return (
//     <div>
//       <h2>Live Clock Below:</h2>
//       <Clock locale="bn-BD" />
//     </div>
//   );
// }

// export default App;

//#8 React Event Handling & Control Re Rendering - React Tutorial Bangla Series
// import ClockList from './components/ClockList';
// function App() {
//   const quantities = [1, 2, 3];
//   return (
//     <div>
//       <h2>Live Clock Below:</h2>
//       <ClockList quantities={quantities} />
//     </div>
//   );
// }

// export default App;

//#10 React Form Handling - Controlled vs Uncontrolled Component- React Tutorial Bangla Series
// import Form from './components/Form';
// function App() {
//   return (
//     <div>
//       <Form />
//     </div>
//   );
// }

// export default App;

// #11 React Lifting State Up - React Tutorial Bangla Series

// import Calculator from './components/Calculator';
// function App() {
//   return <Calculator />;
// }

// export default App;

// #12 React Composition vs Inheritance
// import Text from './components/inheritance/Text';
// import Emoji from './components/composition/Emoji';
// import Text from './components/composition/Text';
// import Bracket from './components/composition/Bracket';
// function App() {
//   return (
//     <div
//       style={{
//         backgroundColor: '#282a2c',
//         color: '#a274cb',
//         minHeight: '100vh',
//       }}
//     >
//       <Emoji>
//         {({ addEmoji }) => (
//           <Bracket>
//             {({ addBracket }) => (
//               <Text addEmoji={addEmoji} addBracket={addBracket} />
//             )}
//           </Bracket>
//         )}
//       </Emoji>
//     </div>
//   );
// }

// export default App;

// #13 React Higher Order Components (HOC)
// import ClickCounter from './components/ClickCounter';
// import HoverCounter from './components/HoverCounter';
// import Counter from './components/Counter';

// function App() {
//   return (
//     <div className="app">
//       <Counter>
//         {(counter, incrementCount) => (
//           <ClickCounter count={counter} incrementCount={incrementCount} />
//         )}
//       </Counter>

//       <Counter>
//         {(counter, incrementCount) => (
//           <HoverCounter count={counter} incrementCount={incrementCount} />
//         )}
//       </Counter>
//     </div>
//   );
// }
// export default App;

// #16 React Context API - How to use React Context API
import React from 'react';
import ClickCounter from './components/ClickCounter';
import Counter from './components/Counter';
import Section from './components/Section';
import ThemeContext from './contexts/themeContext';
export default class App extends React.Component {
  state = {
    theme: 'dark',
    switchTheme: () => {
      this.setState(({ theme }) => {
        if (theme === 'dark') {
          return { theme: 'light' };
        }
        return { theme: 'dark' };
      });
    },
  };

  render() {
    return (
      <div className="app">
        <Counter>
          {(counter, incrementCount) => (
            <ClickCounter count={counter} incrementCount={incrementCount} />
          )}
        </Counter>
        <ThemeContext.Provider value={this.state}>
          <Section />
        </ThemeContext.Provider>
      </div>
    );
  }
}
