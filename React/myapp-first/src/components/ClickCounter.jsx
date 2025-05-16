// #13 React Higher Order Components (HOC)
// import withCounter from './hoc/withCounter';

// const ClickCounter = (props) => {
//   const { count, incrementCount } = props;
//   return (
//     <div>
//       <button type="button" onClick={incrementCount}>
//         Clicked {count} Times
//       </button>
//     </div>
//   );
// };

// export default withCounter(ClickCounter);

// #14 React Render Props
//HoverCounter.jsx as a class component because to understatnd the render props concept
export default function ClickCounter({ count, incrementCount }) {
  return (
    <div>
      <button type="button" onClick={incrementCount}>
        Clicked {count} Times
      </button>
    </div>
  );
}
