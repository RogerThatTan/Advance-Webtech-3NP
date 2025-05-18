import { useState } from "react";

function Todo(){

const [todo,setTodo] = useState({
    title: "",
    description: "",
});
// const [warning,setWarning] = useState("");


//comment out to check the object issue 
//  const handleInput = (e) => {
//         const inputValue = e.target.value;
//         const updatedWarning = inputValue.includes('.js')? 'Please do not include .js in the todo' : null;
//         setTodo(inputValue);
//         setWarning(warning);
//     }


const {title, description} = todo;
 return (
            <div>
               {/* <p>{todo}</p> */}
               {title}
               <p>
                <input type="text" value={title} onChange={(e)=>setTodo({
                    ...todo,
                    title: e.target.value,
                })} />
               </p>
               <p>
                {/* <textarea name="todo" value={todo} onChange={handleInput}/> */}
                <textarea name="todo" value={description} onChange={(e)=>setTodo({
                    ...todo,
                    description: e.target.value,
                })} />
               </p>
               {/* <hr />
               <h2>{warning || 'Good Choice'}</h2> */}
            </div>
        ); 
    }

export default Todo;