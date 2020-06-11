require('dotenv').config();

const postgres = require('postgres');
const sql = postgres();

// const products = [
//   {
//     id: '1',
//     name: 'JUPITER-X',
//     quantity: 1,
//     price: 2199,
//     url: '/jupiter.jpg',
//     description:
//       'JUPITER-X combines classic Roland design and premium build quality with a powerful new synth engine. It faithfully recreates sought-after instruments from our long history of genre-defining sounds. And with multiple layers, loads of polyphony, and deep hands-on control, you can craft huge, spacious sounds that have as much sparkle as they have warmth and punch.',
//   },
//   {
//     id: '2',
//     name: 'JUPITER-Xm',
//     quantity: 1,
//     price: 2050,
//     url: '/jupiter-xm.jpg',
//     description:
//       'JUPITER-Xm combines classic Roland design and premium build quality with a powerful new synth engine. It faithfully recreates sought-after instruments from our long history of genre-defining sounds. And with multiple layers, loads of polyphony, and deep hands-on control, you can craft huge, spacious sounds that have as much sparkle as they have warmth and punch.',
//   },
//   {
//     id: '3',
//     name: 'JD-XA',
//     quantity: 1,
//     price: 1800,
//     url: '/jd-xa.jpg',
//     description:
//       'The JD-XA is a unique crossover synth that brings together analog warmth and digital versatility in one super-creative, no- compromise instrument. First, there’s a four-part, all-analog monster with true analog filters and a direct dry output.',
//   },
//   {
//     id: '4',
//     name: 'JD-Xi',
//     quantity: 1,
//     price: 2100,
//     url: '/jd-xi.jpg',
//     description:
//       'Tiny, mighty, and affordable, the JD-Xi puts a true analog synth engine, Roland’s famous SuperNATURAL synth sounds, and many other creative tools under one hood. ',
//   },
//   {
//     id: '5',
//     name: 'SYSTEM-8',
//     quantity: 1,
//     price: 1680,
//     url: '/system-8.jpg',
//     description:
//       'The SYSTEM-8 is a direct result of over four decades of synthesizer development at Roland, including some of the most iconic instruments ever made. It absolutely nails the sound and behavior of our most sought-after classics, like the included JUPITER-8, JUNO-106 and JX-3P synthesizers—and yet it does so much more.',
//   },
//   {
//     id: '6',
//     name: 'SYSTEM-1',
//     quantity: 1,
//     price: 1200,
//     url: '/system-1.jpg',
//     description:
//       'In the spirit of its predecessors, the SYSTEM-1 breaks new ground with remarkable flexibility and access to a vast palette of tones with the bold, unmistakable character associated with Roland synthesizers for nearly four decades.',
//   },
//   {
//     id: '7',
//     name: 'MICRO-LAB',
//     quantity: 1,
//     price: 1200,
//     url: '/microlab-image.png',
//     description:
//       'Want to get hands on with your music software? MicroLab gives you instant, effective control, letting you play all your soft-synths and virtual instruments, wherever, whenever.',
//   },
//   {
//     id: '8',
//     name: 'GAIA SH-01',
//     quantity: 1,
//     price: 1720,
//     url: '/gaia-sh.jpg',
//     description:
//       'With its massive sound, hands-on ease, and affordable price, the GAIA SH-01 is a high-performance value with old-school charm. The triple-stacked engine puts potent virtual analog synthesis under your fingertips, yet the control panel is so fun, friendly, and inviting, even first-timers can create great sounds. ',
//   },
//   {
//     id: '9',
//     name: 'KEYSTEP',
//     quantity: 1,
//     price: 1380,
//     url: '/keystep.png',
//     description:
//       'KeyStep Pro works the way you want it to, and removes the barriers between you and the music you want to create.',
//   },
//   {
//     id: '10',
//     name: 'Arturia-MicroFreak',
//     quantity: 1,
//     price: 1540,
//     url: '/arturia.jpg',
//     description:
//       'A synthesizer like no other, MicroFreak is a peculiar, exceptional instrument that rewards the curious musician. It blends wavetable and digital oscillators with analog filters. It features a unique poly-aftertouch flat keyboard. It adds controlled randomness to sequences. This isn’t a revolution, it’s a mutiny.',
//   },
// ];

export async function getProducts() {
  const products = await sql`
    select * from products
  `;
  return products;
}

export async function getProductsById(id) {
  const product = await sql`
    select * from products where id = ${id}
  `;
  return product;
}
// export function getProductsById(id) {
//   return products.find((product) => product.id === id);
