// #16 React Context API - How to use React Context API
class Context {
  constructor(value) {
    this.value = this.value;
  }

  //lets make a provider component
  Provider = ({ children, value }) => {
    this.value = value;
    return children;
  };
  //Consumer Component
  Consumer = ({ children }) => children(this.value);
}

function createContext(value = null) {
  const context = new Context(value);
  return {
    Provider: context.Provider,
    Consumer: context.Consumer,
  };
}
export default createContext;
