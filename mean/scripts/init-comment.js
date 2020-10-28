const mongoose = require('mongoose');
const util = require('util');
const debug = require('debug')('express-mongoose-es6-rest-api:index');

const config = require('../server/config/config');

const Comment = require('../server/models/comment.model');

// connect to mongo db
const mongoUri = config.mongo.host;
mongoose.connect(mongoUri, { keepAlive: 1 });
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${mongoUri}`);
});

// const place = [];


const reviews = [
  {
    id: 1,
    place_name: 'อุบล',
    review: {
      name: 'fame',
      message: 'nice'
    }
  },
];

// Comment.insertMany(reviews, (error, docs) => {
//   if (error) {
//     console.error(error);
//   } else {
//     console.log(docs);
//   }
//   mongoose.connection.close();
// });

Comment.deleteMany({}, (error, docs) => {
  if (error) {
    console.error(error);
  } else {
    console.log(docs);
  }
  mongoose.connection.close();
});
