import defaultClient = require('./default');
import andinachile = require('./andinachile');

function getInstance({ bottler }) {
  switch (bottler) {
    case 'andinachile':
      return andinachile;
    default:
      return defaultClient;
  }
}

export = { 
    getInstance
};
