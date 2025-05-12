//#7 React State & Lifecycle in Class Component

// import React from 'react';

// class Clock extends React.Component {
//   //   constructor(props) {
//   //     super(props); //Calling the constructor of the base class React.Component
//   //     this.state = {
//   //       date: new Date(),
//   //     }; //always be the object
//   //   }

//   // The above constructor can be replaced with the following code
//   state = { date: new Date() };

//   componentDidMount() {
//     console.log('Clock mounted');
//     this.clockTimer = setInterval(() => this.tick(), 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.clockTimer);
//   }

//   tick() {
//     this.setState({
//       date: new Date(),
//     });
//   }

//   render() {
//     return (
//       <h1 className="heading">
//         <span className="text">
//           {this.state.date.toLocaleTimeString(this.props.locale)}
//         </span>
//         <img src="" />
//       </h1>
//     );
//   }
// }

// export default Clock;

//#8 React Event Handling & Control Re Rendering - React Tutorial Bangla Series

import React from 'react';
import Button from './Button';

class Clock extends React.Component {
  //   constructor(props) {
  //     super(props); //Calling the constructor of the base class React.Component
  //     this.state = {
  //       date: new Date(),
  //     }; //always be the object
  //   }

  // The above constructor can be replaced with the following code
  state = { date: new Date(), locale: 'bn-BD' };

  //this is another way to solve the problem of this keyword issue but its better to use arrow function which is easier than dealing with the constrcutor

  // constructor(props) {
  //   super(props); //Calling the constructor of the base class React.Component
  //   this.state = {
  //     date: new Date(),
  //     locale: 'bn-BD',
  //   }; //always be the object
  //   this.handleClick = this.handleClick.bind(this); //Binding the method to the class instance
  // }

  componentDidMount() {
    console.log('Clock mounted');
    this.clockTimer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  handleClick = (locale) => {
    this.setState({
      locale,
    });
  };

  //   render() {
  //     const { date, locale } = this.state;
  //     return (
  //       <div>
  //         <h1 className="heading">
  //           <span className="text">{date.toLocaleTimeString(locale)}</span>
  //           <img src="" />
  //         </h1>
  //         {/* <button type="button " onClick={this.handleClick.bind(this, 'en-US')}> */}
  //         {/* <button type="button " onClick={() => this.handleClick('en-US')}> */}
  //         <Button change={this.handleClick} locale="en-US">
  //           Click Here
  //         </Button>
  //       </div>
  //     );
  //   }
  // }

  // export default Clock;

  //#9 React Conditional Rendering, List and Keys

  render() {
    const { date, locale } = this.state;
    // let button;
    // if (locale === 'bn-BD') {
    //   button = (
    //     <Button change={this.handleClick} locale="en-US">
    //       Click Here
    //     </Button>
    //   );
    // } else {
    //   button = (
    //     <Button change={this.handleClick} locale="bn-BD">
    //       Click Here
    //     </Button>
    //   );
    // }
    return (
      <div>
        <h1 className="heading">
          <span className="text">{date.toLocaleTimeString(locale)}</span>
          <img src="" />
        </h1>
        {/* {button} */}
        {/* //terniary approach */}
        {locale === 'bn-BD' ? (
          <Button
            change={this.handleClick}
            locale="en-US"
            show={false}
            enable
          />
        ) : (
          <Button change={this.handleClick} locale="bn-BD" show enable />
        )}
      </div>
    );
  }
}

export default Clock;
