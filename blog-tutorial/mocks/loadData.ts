import typesense from 'typesense'

module.exports = (async () => {
    //Configure Typesense
  const TYPESENSE_CONFIG = {
    nodes: [
      {
        host: process.env.TYPESENSE_HOST, // For Typesense Cloud use xxx.a1.typesense.net
        port: '443', // For Typesense Cloud use 443
        protocol: 'https', // For Typesense Cloud use https
      },
    ],
    apiKey: process.env.TYPESENSE_APIKEY,
  };

//Create and instance of Typesense client
  const typesense = new Typesense.Client(TYPESENSE_CONFIG);

// Build Schema
  const schema = {
    name: 'books',
    "fields": [
      {
        "facet": false,
        "index": true,
        "name": "title",
        "optional": false,
        "type": "string"
      },
      {
        "facet": true,
        "index": true,
        "name": "authors",
        "optional": false,
        "type": "string[]"
      },
      {
        "facet": true,
        "index": true,
        "name": "publication_year",
        "optional": false,
        "type": "int32"
      },
      {
        "facet": false,
        "index": true,
        "name": "ratings_count",
        "optional": false,
        "type": "int32"
      },
      {
        "facet": false,
        "index": true,
        "name": "average_rating",
        "optional": false,
        "type": "float"
      }
    ],
  };

// Import book.json
  const books = require('./dataset/books.json');

//Checks if the collection exists
  try {
    await typesense.collections('books').retrieve();
    console.log('Found existing collection of books');
  } catch (err) {
    console.error(err);
  }

// Create Booke schema
  await typesense.collections().create(schema);
  console.log('Creating schema...');

//Upload book.json to Typesense Database
  try {
    const returnData = await typesense
      .collections('books')
      .documents()
      .import(books);
  } catch (err) {
    console.error(err);
  }
})();