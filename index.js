const encoding = 'gzip';

import {
  Gunzip as Decoder,
  Gzip as Encoder
} from 'zlib';

export const codec = {
  Decoder,
  Encoder
};

export function decoder(options) {
  return {
    encoding,
    create: () => new Decoder(options)
  };
}

export function encoder(options) {
  return {
    encoding,
    create: () => new Encoder(options)
  };
}
