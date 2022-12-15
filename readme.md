# GPMF Extractor


Install:

```shell
$ npm i @my-ginkgo/gpmf-extractor
```

Use:

```js
const gpmfExtract = require('gpmf-extract');
gpmfExtract(file).then(res => {
  console.log('Length of data received:', res.rawData.length);
  console.log('Framerate of data received:', 1 / res.timing.frameDuration);
  // Do what you want with the data
});
```

You can specify some options in an object as a second argument:

- **browserMode**: Default: _false_. Change behaviour to use in browser. This is optional for debugging reasons
- **useWorker**: Default: _true_. In browser mode, use a web worker to avoid locking the browser. This is optional as it seems to crash on some recent browsers
- **progress**: Pass a function to read the processed percentage updates
- **cancellationToken**: An optional object, containing a cancelled property, that allows for cancelling the extraction process. Currently only supported in browser mode. If cancelled, the extraction process will fail with the error message "Canceled by user".

```js
const gpmfExtract = require('gpmf-extract');
const progress = percent => console.log(`${percent}% processed`);
const cancellationToken = { cancelled: false };
gpmfExtract(file, { browserMode: true, progress, cancellationToken }).then(
  res => {
    if (!res) return; //cancelled
    // Do what you want with the data
  }
);
// Some other processes
cancellationToken.cancelled = true;
```

## About

This project is possible thanks to the [gpmf-parser documentation](https://github.com/gopro/gpmf-parser), open sourced by GoPro.

## Contribution

Please make your changes to the **dev** branch, so that automated tests can be run before merging to **master**. Also, if possible, provide tests for new functionality.
