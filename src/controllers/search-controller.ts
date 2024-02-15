import * as mongoose from 'mongoose';

import { SearchSchema } from '../models/search';

const Search = mongoose.model('Search', SearchSchema);

export function createSearch(searchTearm: any) {
  console.log({
    searchTearm,
    date: new Date()
  })
  const newSearch = new Search({
    searchTearm,
    date: new Date()
  });
  return newSearch.save();
}

export function listAll() {
  return Search.find({}).exec();
}