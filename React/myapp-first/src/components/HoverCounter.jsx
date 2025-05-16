// #13 React Higher Order Components (HOC)
// import withCounter from './hoc/withCounter';

// const HoverCounter = (props) => {
//   const { count, incrementCount } = props;
//   return (
//     <div>
//       <h1 onMouseOver={incrementCount}>Clicked {count} Times</h1>
//     </div>
//   );
// };

// export default withCounter(HoverCounter);

// #14 React Render Props
import React from 'react';
export default function HoverCounter({
  count,
  incrementCount,
  theme,
  switchTheme,
}) {
  const style =
    theme === 'dark' ? { backgroundColor: '#000000', color: '#ffffff' } : null;
  console.log('HoverCounter Rendered');
  return (
    <div>
      <h1 onMouseOver={incrementCount} style={style}>
        Hovered {count} Times
      </h1>
      <button onClick={switchTheme}>Change Theme</button>
    </div>
  );
}
