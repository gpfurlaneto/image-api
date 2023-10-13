import { Router } from 'express';

import {
  create as createUser,
  listAll,
} from '../controllers/user-controller';

export const router = Router()

router.post('/',async (req, res) => {
  await createUser(req.body)
  return res.status(200).send()
})

router.get('/',async (req, res) => {
  return res.status(200).json(await listAll())
})