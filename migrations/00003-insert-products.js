//Insert products into database
exports.up = async (sql) => {
  sql`
		INSERT INTO products(name, quantity, price, url, description, audio) VALUES
			('JUPITER-X', 1, 2199, '/jupiter.jpg', 'JUPITER-X combines classic Roland design and premium build quality with a powerful new synth engine. It faithfully recreates sought-after instruments from our long history of genre-defining sounds. And with multiple layers, loads of polyphony, and deep hands-on control, you can craft huge, spacious sounds that have as much sparkle as they have warmth and punch.', 'sound1.mp3'),
			('JUPITER-Xm', 1, 2050, '/jupiter-xm.jpg', 'JUPITER-Xm combines classic Roland design and premium build quality with a powerful new synth engine. It faithfully recreates sought-after instruments from our long history of genre-defining sounds. And with multiple layers, loads of polyphony, and deep hands-on control, you can craft huge, spacious sounds that have as much sparkle as they have warmth and punch.', 'sound2.mp3'),
			('JD-XA', 1, 1800, '/jd-xa.jpg', 'The JD-XA is a unique crossover synth that brings together analog warmth and digital versatility in one super-creative, no- compromise instrument. First, there’s a four-part, all-analog monster with true analog filters and a direct dry output.', 'sound3.mp3'),
			('JD-Xi', 1, 2100, '/jd-xi.jpg', 'Tiny, mighty, and affordable, the JD-Xi puts a true analog synth engine, Roland’s famous SuperNATURAL synth sounds, and many other creative tools under one hood.', 'sound4.mp3'),
			('SYSTEM-8', 1, 1680, '/system-8.jpg', 'The SYSTEM-8 is a direct result of over four decades of synthesizer development at Roland, including some of the most iconic instruments ever made. It absolutely nails the sound and behavior of our most sought-after classics, like the included JUPITER-8, JUNO-106 and JX-3P synthesizers—and yet it does so much more.', 'sound5.mp3'),
			('SYSTEM-1', 1, 1200, '/system-1.jpg', 'In the spirit of its predecessors, the SYSTEM-1 breaks new ground with remarkable flexibility and access to a vast palette of tones with the bold, unmistakable character associated with Roland synthesizers for nearly four decades.', 'sound6.mp3'),
			('MICRO-LAB', 1, 1200, '/microlab-image.png', 'Want to get hands on with your music software? MicroLab gives you instant, effective control, letting you play all your soft-synths and virtual instruments, wherever, whenever.', 'sound7.mp3'),
			('GAIA SH-01', 1, 1720, '/gaia-sh.jpg', 'With its massive sound, hands-on ease, and affordable price, the GAIA SH-01 is a high-performance value with old-school charm. The triple-stacked engine puts potent virtual analog synthesis under your fingertips, yet the control panel is so fun, friendly, and inviting, even first-timers can create great sounds.', 'sound8.mp3'),
			('KEYSTEP', 1, 1380, '/keystep.png', 'KeyStep Pro works the way you want it to, and removes the barriers between you and the music you want to create.', 'sound9.mp3'),
			('Arturia-MicroFreak', 1, 1540, '/arturia.jpg', 'A synthesizer like no other, MicroFreak is a peculiar, exceptional instrument that rewards the curious musician. It blends wavetable and digital oscillators with analog filters. It features a unique poly-aftertouch flat keyboard. It adds controlled randomness to sequences. This isn’t a revolution, it’s a mutiny.', 'sound10.mp3')
  `;
};

//Remove products from database
exports.down = async (sql) => {
  sql`
		DELETE FROM products 
		  WHERE name IN ('JUPITER-X', 'JUPITER-Xm', 'JD-XA', 'JD-Xi', 'SYSTEM-8', 'SYSTEM-1', 'MICRO-LAB', 'GAIA SH-01', 'KEYSTEP', 'Arturia-MicroFreak')
  `;
};
