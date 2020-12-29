const EventEmiter = require('events');
const Emailer = require('./emailer');
// Imagine we are building a SaaS that does a number of things when a user creates an account. When a user record is created, we want to emit a userCreated event. One of the listeners for this will email a confirmation email to that user.

// Build an event emitter to simulate the userCreated event, and an event listener that sends a confirmation email. There is a mock emailer class in the folder that has a method send, which expects an email address and a message body as the parameters.
const emailer = new Emailer();
const eventEmitter = new EventEmiter();
// simulates userCreated event
eventEmitter.on('userCreated', emailer.send);
// sends confirmation email
eventEmitter.emit('userCreate', 'Rafa', 'body of email');
