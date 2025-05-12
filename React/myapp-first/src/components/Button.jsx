import React from 'react';

class Button extends React.Component {
  shouldComponentUpdate(nextProps) {
    // console.log('Button component shouldComponentUpdate');
    // Check if the props have changed
    const { change: currentChange } = this.props;
    const { change: nextChange } = nextProps;
    if (currentChange === nextChange) {
      return false; // Do not re-render the component
    }
    return true; // Re-render the component
  }
  render() {
    console.log('Button component rendered');
    const { change, locale } = this.props;
    return (
      <button type="button " onClick={() => change(locale)}>
        Click Here
      </button>
    );
  }
}

export default Button;
