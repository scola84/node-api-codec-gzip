const zlib = require('zlib');

module.exports = {
  encoding: 'gzip',
  Decoder: zlib.Gunzip,
  Encoder: zlib.Gzip
};
