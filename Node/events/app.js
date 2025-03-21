//import EventEmitter Class
const EventEmitter = require("events");

//Create an instance of EventEmitter

const emitter = new EventEmitter();

//1. Define an event listener (addListener)

emitter.on("greet", () => {
  console.log("Hello Tanvir");
});

//2. Trigger (emit) the "greet" event

emitter.emit("greet");

///We can also pass arguments while emitting.

emitter.on("argu", (username, prof) => {
  console.log(`Hello ${username},You are a ${prof}`);
});

emitter.emit("argu", "Tanvir Hassan", "CSE");

// best idea to take e single argument as an object

emitter.on("obu", (arg) => {
  console.log(`Hello ${arg.name},You are a ${arg.prof}`);
});

emitter.emit("obu", { name: "Tanvir", prof: "CSE Studente" });
