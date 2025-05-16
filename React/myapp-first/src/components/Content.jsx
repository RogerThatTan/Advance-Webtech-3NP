// #16 React Context API - How to use React Context API

import Counter from './Counter';
import HoverCounter from './HoverCounter';
import ThemeContext from '../contexts/themeContext';
import { useContext } from 'react';
// export default function Content() {
//   return (
//     <div>
//       <h1>This is a content</h1>
//       <Counter>
//         {(counter, incrementCount) => (
//           <ThemeContext.Consumer>
//             {({ theme, switchTheme }) => (
//               <HoverCounter
//                 count={counter}
//                 incrementCount={incrementCount}
//                 theme={theme}
//                 switchTheme={switchTheme}
//               />
//             )}
//           </ThemeContext.Consumer>
//         )}
//       </Counter>
//     </div>
//   );
// }

//#17 React Context API - contextType & useContext hook - React Tutorial Bangla Series
//if it is class component

// export default class Content extends React.Component {
//   componentDidMount() {
//     console.log(this.context);
//   }

//   render() {
//     const { theme, switchTheme } = this.context;
//     return (
//       <div>
//         <h1>This is a content</h1>
//         <Counter>
//           {(counter, incrementCount) => (
//             <HoverCounter
//               count={counter}
//               incrementCount={incrementCount}
//               theme={theme}
//               switchTheme={switchTheme}
//             />
//           )}
//         </Counter>
//       </div>
//     );
//   }
// }

// Content.contextType = ThemeContext;

//if it is functional component
export default function Content() {
  const context = useContext(ThemeContext);
  const { theme, switchTheme } = context;
  console.log('Content Rendered');
  return (
    <div>
      <h1>This is a content</h1>
      <Counter>
        {(counter, incrementCount) => (
          <HoverCounter
            count={counter}
            incrementCount={incrementCount}
            theme={theme}
            switchTheme={switchTheme}
          />
        )}
      </Counter>
    </div>
  );
}
