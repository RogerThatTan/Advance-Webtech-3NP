const fs = require("fs");
const filePath = "eventCounts.json";
//import EventEmitter Class
const EventEmitter = require("events");
//Create an instance of EventEmitter
const emitter = new EventEmitter();

const loadEventCount = () => {
  try {
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, "utf-8");
      return JSON.parse(data);
    }
  } catch (error) {
    console.error(error);
  }
  return {
    "user-login": 0,
    "user-logout": 0,
    "user-purchase": 0,
    "profile-update": 0,
  };
};

const saveEventCount = () => {
  try {
    fs.writeFileSync(
      "eventCounts.json",
      JSON.stringify(eventCounts, null, 2),
      "utf8"
    );
  } catch (error) {
    console.error(error);
  }
};
const eventCounts = loadEventCount();

emitter.on("user-login", (username) => {
  eventCounts["user-login"]++;
  console.log(`${username} logged in!`);
  saveEventCount();
});

emitter.on("user-purchase", (username, item) => {
  eventCounts["user-purchase"]++;
  console.log(`${username} purchased ${item}!`);
  saveEventCount();
});

emitter.on("profile-update", (username, field) => {
  eventCounts["profile-update"]++;
  console.log(`${username} updated their ${field}!`);
  saveEventCount();
});

emitter.on("user-logout", (username) => {
  eventCounts["user-logout"]++;
  console.log(`${username} logged out!`);
  saveEventCount();
});

emitter.on("summary", () => {
  console.log(eventCounts);
});
//emit events
emitter.emit("user-login", "Tanvir");
emitter.emit("user-purchase", "Tanvir", "Laptop");
emitter.emit("profile-update", "Tanvir", "email");
emitter.emit("user-logout", "Tanvir");

//show summary
emitter.emit("summary");
