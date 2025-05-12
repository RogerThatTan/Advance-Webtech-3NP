//#7 React State & Lifecycle in Class Component
// import Clock from './components/Clock';

// function App() {
//   return (
//     <div>
//       <h2>Live Clock Below:</h2>
//       <Clock locale="bn-BD" />
//     </div>
//   );
// }

// export default App;

//#8 React Event Handling & Control Re Rendering - React Tutorial Bangla Series
import ClockList from './components/ClockList';
function App() {
  const quantities = [1, 2, 3];
  return (
    <div>
      <h2>Live Clock Below:</h2>
      <ClockList quantities={quantities} />
    </div>
  );
}

export default App;
