import asyncHandler from 'express-async-handler'
import Resident from '../models/residentsModel.js'
// @desc Fetch all residents
// @route GET /api/residents
// @access Public
const getResidents = asyncHandler(async (req, res) => {
  const residents = await Resident.find({})
  res.json(residents)
})

const getResidentById = asyncHandler(async (req, res) => {
  const resident = await Resident.findById(req.params.id)
  if (resident) {
    res.json(resident)
  } else {
    throw new Error('Resident not found')
  }
})

// @desc    Delete a resident
// @route   DELETE /api/residents/:id
// @access  Private/Admin
const deleteResident = asyncHandler(async (req, res) => {
  const resident = await Resident.findById(req.params.id)

  if (resident) {
    await resident.remove()
    res.json({ message: 'Resident removed' })
  } else {
    res.status(404)
    throw new Error('Resident not found')
  }
})

// @desc    Create a resident
// @route   POST /api/residents
// @access  Private/admin
const createResident = asyncHandler(async (req, res) => {
  const resident = new Resident({
    idNumber: '2020-000',
    firstName: 'sample',
    lastName: 'sample',
    user: req.user._id,
    middleName: 'sample',
    image: 'sample',
    age: -1,
    birthDay: 'sample',
    sex: 'Male',
    phoneNumber: 'sample',
    presentAddress: 'sample',
    currentAddress: 'sample',
    sitio: 'Calamansi',
    isVoter: false,
    isDead: false,
    blotter: false,
  })

  const createdResident = await resident.save()
  res.status(201).json(createdResident)
})

// @desc    Update a resident
// @route   PUT /api/residents/:id
// @access  Private/Admin
const updateResident = asyncHandler(async (req, res) => {
  const {
    idNumber,
    firstName,
    lastName,
    middleName,
    image,
    age,
    birthDay,
    sex,
    phoneNumber,
    presentAddress,
    currentAddress,
    sitio,
    isVoter,
    isDead,
    blotter,
  } = req.body

  const resident = await Resident.findById(req.params.id)

  if (resident) {
    resident.idNumber = idNumber
    resident.firstName = firstName
    resident.lastName = lastName
    resident.middleName = middleName
    resident.image = image
    resident.age = age
    resident.birthDay = birthDay
    resident.sex = sex
    resident.phoneNumber = phoneNumber
    resident.presentAddress = presentAddress
    resident.currentAddress = currentAddress
    resident.sitio = sitio
    resident.isVoter = isVoter
    resident.isDead = isDead
    resident.blotter = blotter

    const updatedResident = await resident.save()
    res.json(updatedResident)
  } else {
    res.status(404)
    throw new Error('Resident not found')
  }
})

export {
  getResidents,
  getResidentById,
  deleteResident,
  createResident,
  updateResident,
}
