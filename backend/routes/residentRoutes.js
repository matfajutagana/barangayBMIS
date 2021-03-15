import express from 'express'

const router = express.Router()
import {
  getResidents,
  getResidentById,
  deleteResident,
  createResident,
  updateResident,
} from '../controllers/residentController.js'

import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/').get(getResidents).post(protect, admin, createResident)
router
  .route('/:id')
  .get(getResidentById)
  .delete(protect, admin, deleteResident)
  .put(protect, admin, updateResident)
export default router
