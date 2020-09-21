const {Presentation} = require('./presentation');
const { Service } = require('./service')

const service = new Service();
const presentation = new Presentation(service);

console.log('** Administration Hotel **');

presentation.start();