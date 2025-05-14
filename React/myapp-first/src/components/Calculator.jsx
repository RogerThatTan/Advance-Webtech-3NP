import React from 'react';
import BoilingVerdict from './BoilingVerdict';
import TempratureInput from './TempratureInput';
import { convert, toCelsius, toFahrenheit } from '../lib/converter';

export default class Calculator extends React.Component {
  state = {
    temprature: '',
    scale: 'c',
  };

  handleChange = (event, scale) => {
    this.setState({
      temprature: event.target.value,
      scale: scale,
    });
  };

  render() {
    const { temprature, scale } = this.state;
    const celsius = scale === 'f' ? convert(temprature, toCelsius) : temprature;
    const fahrenheit =
      scale === 'c' ? convert(temprature, toFahrenheit) : temprature;
    return (
      <>
        <TempratureInput
          scale="c"
          temprature={celsius}
          onTemporatureChange={this.handleChange}
        />
        <TempratureInput
          scale="f"
          temprature={fahrenheit}
          onTemporatureChange={this.handleChange}
        />
        <BoilingVerdict celsius={parseFloat(temprature)} />
      </>
    );
  }
}
