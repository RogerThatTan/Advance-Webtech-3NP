// #13 React Higher Order Components (HOC)
import withCounter from './hoc/withCounter';

const HoverCounter = (props) => {
  const { count, incrementCount } = props;
  return (
    <div>
      <h1 onMouseOver={incrementCount}>Clicked {count} Times</h1>
    </div>
  );
};

export default withCounter(HoverCounter);
