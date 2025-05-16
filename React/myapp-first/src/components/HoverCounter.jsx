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
export default class HoverCounter extends React.Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <h1 onMouseOver={incrementCount}>Hovered {count} Times</h1>
      </div>
    );
  }
}
