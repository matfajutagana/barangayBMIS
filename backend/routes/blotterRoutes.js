import express from 'express'

const router = express.Router()
import {
  getBlotters,
  getBlotterById,
  deleteBlotter,
  createBlotter,
  updateBlotter,
} from '../controllers/blotterController.js'

import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/').get(getBlotters).post(protect, admin, createBlotter)
router
  .route('/:id')
  .get(getBlotterById)
  .delete(protect, admin, deleteBlotter)
  .put(protect, admin, updateBlotter)
export default router
