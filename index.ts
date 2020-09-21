import {Presentation} from './presentation';
import {Service} from './service';

const service = new Service();
const presentation = new Presentation(service);

console.log('** Administration Hotel **');

presentation.start();