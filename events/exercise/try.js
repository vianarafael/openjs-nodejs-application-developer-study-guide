const { EventEmitter } = require('events');
const Emailer = require('./emailer');

const emailer = new Emailer();
const eventEmitter = new EventEmitter();

eventEmitter.on('userCreated', emailer.send);
eventEmitter.emit('userCreated', 'TO', 'BODY');
