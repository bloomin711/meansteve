import mongoose from 'mongoose';
import dbConst from '../constants/db.json';

export default class DBConfig {
    static init() {
      const URL = (process.env.NODE_ENV === 'production') ? process.env.MONGOLAB_WHITE_URI
                                                          : dbConst.localhost;

      mongoose.connect(URL);
      mongoose.connection.on('error', console.error.bind(console, 'An error ocurred with the DB connection: '));
    }
};
