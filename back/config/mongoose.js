const mongoose = require('mongoose');
const chalk = require('chalk');

const { debug } = require('./debug');

// ': string' is the type of the constant, since `mongoose.connect` only takes a string
// as first parameter and the environment variables are of type `string | undefined` we need a default string in case
// the environment variable `MONGO_URI` is undefined

// const mongoUri = (true)
//   ? 'mongodb://admin:admin91@ds031329.mlab.com:31329/beautyfool'
//   : 'mongodb+srv://max51guitare:admin@cluster0-df75d.mongodb.net/test?retryWrites=true&w=majority';

const mongoUri = 'mongodb+srv://max51guitare:admin@cluster0-df75d.mongodb.net/test?retryWrites=true&w=majority';

// make the connection to the DB
mongoose.connect(mongoUri,
  {
    useNewUrlParser: true, // use the new URL parser since the old one is deprecated and will be removed in a future version
    useUnifiedTopology: true // use the unified topology since the old one is deprecated and will be removed in a future version
  }
)
  .then(() => debug.mongoose(chalk.green('MongoDB started')))
  .catch(err => {
    console.error(chalk.red(`MongoDB connection error: ${err}`));
    // exit the process because of an error
    process.exit(1);
  });

// set `useFindAndModify` to false because it is deprecated and will be removed in a future version
mongoose.set('useFindAndModify', false);
// `useCreateIndex` is recommanded
mongoose.set('useCreateIndex', true);
