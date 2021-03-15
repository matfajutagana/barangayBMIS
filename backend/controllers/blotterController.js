import asyncHandler from 'express-async-handler'
import Blotter from '../models/blotterModel.js'
// @desc Fetch all residents
// @route GET /api/residents
// @access Public
const getBlotters = asyncHandler(async (req, res) => {
  const blotters = await Blotter.find({})
  res.json(blotters)
})

const getBlotterById = asyncHandler(async (req, res) => {
  const blotter = await Blotter.findById(req.params.id)
  if (blotter) {
    res.json(blotter)
  } else {
    throw new Error('Blotter not found')
  }
})

// @desc    Delete a resident
// @route   DELETE /api/residents/:id
// @access  Private/Admin
const deleteBlotter = asyncHandler(async (req, res) => {
  const blotter = await Blotter.findById(req.params.id)

  if (blotter) {
    await blotter.remove()
    res.json({ message: 'Blotter removed' })
  } else {
    res.status(404)
    throw new Error('Blotter not found')
  }
})

// @desc    Create a resident
// @route   POST /api/residents
// @access  Private/admin
const createBlotter = asyncHandler(async (req, res) => {
  const blotter = new Blotter({
    complainant: 'sample',
    complainee: 'sample',
    user: req.user._id,
    information: 'sample',
    isResolve: 'Unresolve',
  })

  const createdBlotter = await blotter.save()
  res.status(201).json(createdBlotter)
})

// @desc    Update a resident
// @route   PUT /api/residents/:id
// @access  Private/Admin
const updateBlotter = asyncHandler(async (req, res) => {
  const { complainant, complainee, information, isResolve } = req.body

  const blotter = await Blotter.findById(req.params.id)

  if (blotter) {
    blotter.complainant = complainant
    blotter.complainee = complainee
    blotter.information = information
    blotter.isResolve = isResolve

    const updatedBlotter = await blotter.save()
    res.json(updatedBlotter)
  } else {
    res.status(404)
    throw new Error('Blotter not found')
  }
})

export {
  getBlotters,
  getBlotterById,
  deleteBlotter,
  createBlotter,
  updateBlotter,
}
