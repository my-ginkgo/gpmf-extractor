const gpmfExtract = require('../');
const fs = require('fs');

const file = fs.readFileSync('./samples/gnk.LRV');

gpmfExtract(file)
  .then(result => {
    console.log('Length of data received:', result.rawData.length);
    console.log('Framerate of data received:', result.timing.frameDuration);
  })
  .catch(error => console.log(error));

