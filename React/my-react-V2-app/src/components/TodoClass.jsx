// #19 React Hooks Bangla - React useState hook

import React from "react";
class Todo extends React.Component {    
    state = {
        todo: " ",
        warning:null,
    };

    handleInput = (e) => {
        const inputValue = e.target.value;
        const warning = inputValue.includes('.js')? 'Please do not include .js in the todo' : null;
        this.setState({
            todo : inputValue,
            warning,
        });
    };
    render() {
        const{ todo, warning } = this.state;
        return (
            <div>
               <p>{todo}</p>
               <p>
                <textarea name="todo" value={todo} onChange={this.handleInput}/>
               </p>
               <hr />
               <h2>{warning || 'Good Choice'}</h2>
            </div>
        );
    }
}
export default Todo;