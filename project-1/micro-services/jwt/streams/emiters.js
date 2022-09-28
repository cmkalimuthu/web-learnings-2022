const events = require("events");
//events to trigger listener
const eventEmitter = new events.EventEmitter();
var a = 20,
  b = 10;
function sum() {
  console.log(`sum ${a + b}`);
}
function sum1() {
  console.log(`sum1 ${a + b + 20}`);
}
function sub() {
  console.log(`sum ${a - b}`);
}
eventEmitter.on("add", sum);
eventEmitter.on("add", sum1);
eventEmitter.addListener("sub", sub);

eventEmitter.emit("add");
eventEmitter.removeListener("sub", sub);
eventEmitter.emit("sub");
eventEmitter.emit("add");
console.log(eventEmitter.listenerCount('sub'))
console.log(eventEmitter.listenerCount('add'))

