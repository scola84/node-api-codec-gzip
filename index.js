const zlib = require('zlib');
const Decoder = zlib.Gunzip;
const Encoder = zlib.Gzip;
const encoding = 'gzip';

function decoder(options) {
  return {
    encoding,
    create: () => new Decoder(options)
  };
}

function encoder(options) {
  return {
    encoding,
    create: () => new Encoder(options)
  };
}

module.exports = {
  encoding,
  decoder,
  encoder,
  Decoder,
  Encoder
};
