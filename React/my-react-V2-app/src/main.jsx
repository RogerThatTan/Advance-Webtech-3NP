// import React from "react";
// import { createRoot } from 'react-dom/client';
// import { StrictMode } from 'react';
// // import { stat } from 'fs';
// // import App from './App.jsx';


// //This is a custom implementation of useState hook
// let states =[]; //[0: [value,setter],1: [value,setter]] 
// let stateIndex = -1;
// function useState(defaultValue){
//   const index = ++stateIndex;
//   if(states[index]) return states[index];

//   const setValue=(newValue)=>{
//     states[index][0] = newValue;
//     renderWithTan();
//   };
//   const returnArray = [defaultValue,setValue];
//   states[index] = returnArray;
//   return returnArray;

// }


// function App(){

// const [todo,setTodo] = useState("");
// const [warning,setWarning] = useState("");

//  const handleInput = (e) => {
//         const inputValue = e.target.value;
//         const updatedWarning = inputValue.includes('.js')? 'Please do not include .js in the todo' : null;
//         setTodo(inputValue);
//         setWarning(updatedWarning);
//     }

//  return (
//             <div>
//                <p>{todo}</p>
//                <p>
//                 <textarea name="todo" value={todo} onChange={handleInput}/>
//                </p>
//                <hr />
//                <h2>{warning || 'Good Choice'}</h2>
//             </div>
//         ); 
//     }

// function renderWithTan(){
//   stateIndex = -1;
//  createRoot(document.getElementById('root')).render(
//     <App />
// );
// }

// renderWithTan();

import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
