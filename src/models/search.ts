import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const SearchSchema = new Schema({
  searchTearm: {
    type: String,
  },
  date: {
    type: Date,
  },
});