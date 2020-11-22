# next-file-upload
> Simple xhr for file upload.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-file-upload
```

## usage
```js
import '@jswork/next-file-upload';

nx.fileUpload('/api/upload', { file: inFile }).then(function(response) {
  console.log(response);
});
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-file-upload/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-file-upload
[version-url]: https://npmjs.org/package/@jswork/next-file-upload

[license-image]: https://img.shields.io/npm/l/@jswork/next-file-upload
[license-url]: https://github.com/afeiship/next-file-upload/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-file-upload
[size-url]: https://github.com/afeiship/next-file-upload/blob/master/dist/next-file-upload.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-file-upload
[download-url]: https://www.npmjs.com/package/@jswork/next-file-upload
