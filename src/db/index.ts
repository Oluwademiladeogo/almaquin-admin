import mongoose from 'mongoose';
import { Database, Resource } from '@adminjs/mongoose';
import AdminJS from 'adminjs';

AdminJS.registerAdapter({ Database, Resource });

const initialize = async () => {
  const db = await mongoose
    .connect(process.env.DATABASE_URL as string)
    .then(() => {
      console.log('Connected to db');
      mongoose.set('debug', true);
    })
    .catch((error) => {
      console.log('Error connecting to mongo DB');
      console.log(error);
    });

  return { db };
};

export default initialize;
