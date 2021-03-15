import express from 'express'

const router = express.Router()
import {
  getImages,
  getImageById,
  updateImage,
} from '../controllers/imagesController.js'

import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/').get(getImages)
router.route('/:id').get(getImageById).put(protect, admin, updateImage)
export default router
