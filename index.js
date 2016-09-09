const encoding = 'gzip';

import {
  Gunzip as Decoder,
  Gzip as Encoder
} from 'zlib';

export const codec = {
  Decoder,
  Encoder,
  encoding
};

export function decoder() {
  return {
    encoding,
    create: () => new Decoder()
  };
}

export function encoder() {
  return {
    encoding,
    create: () => new Encoder()
  };
}
