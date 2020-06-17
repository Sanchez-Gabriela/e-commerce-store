// 	Create the products table
exports.up = async (sql) => {
  sql`
	  CREATE TABLE products(
		id SERIAL PRIMARY KEY,
		name VARCHAR NOT NULL,
		quantity INT NOT NULL, 
		price INT NOT NULL, 
		url VARCHAR NOT NULL, 
		description TEXT,
		audio VARCHAR NOT NULL
	  )
	`;
};

//Delete the products table
exports.down = async (sql) => {
  sql` 
	  DROP TABLE products
	`;
};
