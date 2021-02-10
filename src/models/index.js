import mongoose from 'mongoose';
import { DATABASE_URL } from '../config'

import Catalogue from './catalogue';
import Category from './category';

const connectDb = () => {
  return mongoose.connect(DATABASE_URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
};

const models = { Catalogue, Category };

export { Catalogue, Category }
export { connectDb };

export default models;
