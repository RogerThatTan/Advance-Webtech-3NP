import React from 'react';

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit',
};

export default function TempratureInput({
  temprature,
  scale,
  onTemporatureChange,
}) {
  return (
    <fieldset>
      <legend>Enter Tempreture in {scaleNames[scale]}:</legend>
      <input
        type="text"
        value={temprature}
        onChange={(event) => onTemporatureChange(event, scale)}
      />
    </fieldset>
  );
}
