const diTools = require('lab-di/tools')();
const path = require('path');

const config = require('lab-config');
const configMemory = require('lab-config/implementations/memory');
diTools.registerDir(path.join(__dirname, 'external'));
diTools.registerDir(path.join(__dirname, 'internal'));

const di = diTools.getDI();

di.registerModule(config, 'config');
di.registerModule(configMemory, 'lab-config-memory');

export default di;
