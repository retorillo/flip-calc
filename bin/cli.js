#!/usr/bin/env node

const gnuopt = require('gnu-option');

const optmap = {
  'w':  '&width',
  'width': 'integer',
};

const opt = gnuopt.parse(optmap);

if (!opt.hasOwnProperty('width')) {
  throw new Error("--width option is mandatory");
}
const w = opt.width;

for (const arg of opt.$) {
  try {
    const f = parseFloat(arg);
    const offset = f - (w / 2);
    console.log(`${arg} => ${(w / 2) - offset}`);
  }
  catch (e) {
    console.log(`${arg} => NaN`);
  }
}

