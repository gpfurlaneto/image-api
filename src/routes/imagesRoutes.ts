import { Router } from 'express';
import { axiosInstance } from '../libs/axios';
import { createSearch, listAll } from '../controllers/search-controller';

export const router = Router()

// TODO to move to the correct place
const API_KEY = 'pLURtkhVrUXr3KG25Gy5IvzziV5OrZGa'

router.get('/', async (req, res) => {
  await createSearch(req.query.searchTerm)
  const response = await axiosInstance(`/v1/gifs/search?api_key=${API_KEY}&q=${req.query.searchTerm}`)
  return res.status(200).json(response.data)
})

router.get('/all', async (req, res) => {
  return res.status(200).json(await listAll())
})