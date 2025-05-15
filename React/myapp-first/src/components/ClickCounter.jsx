// #13 React Higher Order Components (HOC)
import withCounter from './hoc/withCounter';

const ClickCounter = (props) => {
  const { count, incrementCount } = props;
  return (
    <div>
      <button type="button" onClick={incrementCount}>
        Clicked {count} Times
      </button>
    </div>
  );
};

export default withCounter(ClickCounter);
