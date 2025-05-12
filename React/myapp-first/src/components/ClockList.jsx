import Clock from './Clock';
//Dont use ever array index for the key prop
export default function ClockList({ quantities = [] }) {
  return (
    <div>
      {quantities.map(() => (
        <Clock key={Math.random()} />
      ))}
    </div>
  );
}
