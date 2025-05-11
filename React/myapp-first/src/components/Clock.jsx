//#7 React State & Lifecycle in Class Component

import { clear } from 'console';
import React from 'react';

class Clock extends React.Component {
  //   constructor(props) {
  //     super(props); //Calling the constructor of the base class React.Component
  //     this.state = {
  //       date: new Date(),
  //     }; //always be the object
  //   }

  // The above constructor can be replaced with the following code
  state = { date: new Date() };

  componentDidMount() {
    setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <h1 className="heading">
        <span className="text">
          {this.state.date.toLocaleTimeString(this.props.locale)}
        </span>
        <img src="" />
      </h1>
    );
  }
}

export default Clock;
