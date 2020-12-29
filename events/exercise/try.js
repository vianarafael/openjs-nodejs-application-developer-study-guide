// const { EventEmitter } = require('events');
// const Emailer = require('./emailer');
// // Imagine we are building a SaaS that does a number of things when a user creates an account. When a user record is created, we want to emit a userCreated event. One of the listeners for this will email a confirmation email to that user.

// // Build an event emitter to simulate the userCreated event, and an event listener that sends a confirmation email. There is a mock emailer class in the folder that has a method send, which expects an email address and a message body as the parameters.
// const emailer = new Emailer();
// const eventEmitter = new EventEmitter();
// // simulates userCreated event
// function s(a, b) {
//   console.log(`${a} & ${b}`);
// }
// eventEmitter.on('userCreated', (a) => console.log(a));
// // sends confirmation email
// eventEmitter.emit('userCreate', 'Rafa', 'body of email');

// import the class EventEmitter from the events module
const { EventEmitter } = require('events');

// create a listener function. These can be arrow functions, but will
// loose `this` refering to the EventEmitter object
// const send = (a) => {
//   console.log('foo executed.', a);
// };

const Emailer = require('./emailer');
const emailer = new Emailer();
// create an emitter and bind some events to it
const eventEmitter = new EventEmitter();

// Bind the connection event with the listner1 function
eventEmitter.on('userCreated', emailer.send);

eventEmitter.emit('userCreated', 'rafa', 'body');
