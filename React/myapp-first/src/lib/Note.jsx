// Why React doesnt prefer inheritance?
// 1. Components are tightly coupled.
// 2. From child it is not clear what parent does.
// 3. Not clear about the parent child relationship from the App.jsx.
// 4. Future components are also tightly coupled.
// 5. Nested extend - child that already extends other parent class.

// -------------------------------------------------------------------------

// Why React prefers composition?
// Firstly we will recieve the function as props not the class inheritance.
// There will be no depenedency on the parent class.
// So basically we are doing Composition over Inheritance to avoid the problems of inheritance.
// 1. Components are loosely coupled.
// 2. From child it is clear what parent does.
// 3. Clear about the parent child relationship from the App.jsx.
// 4. Future components are not tightly coupled.
// 5. No nested extend - child that already extends other parent class.
// 6. No need to worry about the order of the parent class.

// -------------------------------------------------------------------------

//What is HOC?
// 1. HOC is a function that takes a component as an argument and returns a new component.
// 2. HOC is a pattern that is used to reuse component logic.
// 3. HOC is not a part of the React API.
// 4. HOC is a pure function.
// 5. HOC is a higher order function.
// 6. HOC is a function that takes a component as an argument and returns a new component.

// -------------------------------------------------------------------------

//What is Render Prop?
// Render prop is a prop that define the waht component will render.
// Render prop is a function prop.
// Render prop is a pattern that is used to share code between components.
