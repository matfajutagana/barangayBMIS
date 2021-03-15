import asyncHandler from 'express-async-handler'
import Image from '../models/imagesModel.js'
// @desc Fetch all residents
// @route GET /api/residents
// @access Public
const getImages = asyncHandler(async (req, res) => {
  const images = await Image.find({})
  res.json(images)
})

const getImageById = asyncHandler(async (req, res) => {
  const image = await Image.findById(req.params.id)
  if (image) {
    res.json(image)
  } else {
    throw new Error('Image not found')
  }
})

// @desc    Update a resident
// @route   PUT /api/residents/:id
// @access  Private/Admin
const updateImage = asyncHandler(async (req, res) => {
  const {
    loginImage,
    slideImage1,
    slideImage2,
    slideImage3,
    slideImage4,
    slideImage5,
    kapitan,
    kapitanImage,
    kagawad1,
    kagawad1Image,
    kagawad2,
    kagawad2Image,
    kagawad3,
    kagawad3Image,
    kagawad4,
    kagawad4Image,
    kagawad5,
    kagawad5Image,
    kagawad6,
    kagawad6Image,
    kagawad7,
    kagawad7Image,
    secretary,
    secretaryImage,
    treasurer,
    treasurerImage,
    SKkapitan,
    SKkapitanImage,
    SKkagawad1,
    SKkagawad1Image,
    SKkagawad2,
    SKkagawad2Image,
    SKkagawad3,
    SKkagawad3Image,
    SKkagawad4,
    SKkagawad4Image,
    SKkagawad5,
    SKkagawad5Image,
    SKkagawad6,
    SKkagawad6Image,
    SKkagawad7,
    SKkagawad7Image,
    SKsecretary,
    SKsecretaryImage,
    SKtreasurer,
    SKtreasurerImage,
    clearanceNo,
    communityTaxNo,
    purpose,
  } = req.body

  const image = await Image.findById(req.params.id)

  if (image) {
    image.loginImage = loginImage
    image.slideImage1 = slideImage1
    image.slideImage2 = slideImage2
    image.slideImage3 = slideImage3
    image.slideImage4 = slideImage4
    image.slideImage5 = slideImage5
    image.kapitan = kapitan
    image.kapitanImage = kapitanImage
    image.kagawad1 = kagawad1
    image.kagawad1Image = kagawad1Image
    image.kagawad2 = kagawad2
    image.kagawad2Image = kagawad2Image
    image.kagawad3 = kagawad3
    image.kagawad3Image = kagawad3Image
    image.kagawad4 = kagawad4
    image.kagawad4Image = kagawad4Image
    image.kagawad5 = kagawad5
    image.kagawad5Image = kagawad5Image
    image.kagawad6 = kagawad6
    image.kagawad6Image = kagawad6Image
    image.kagawad7 = kagawad7
    image.kagawad7Image = kagawad7Image
    image.secretary = secretary
    image.secretaryImage = secretaryImage
    image.treasurer = treasurer
    image.treasurerImage = treasurerImage
    image.SKkapitan = SKkapitan
    image.SKkapitanImage = SKkapitanImage
    image.SKkagawad1 = SKkagawad1
    image.SKkagawad1Image = SKkagawad1Image
    image.SKkagawad2 = SKkagawad2
    image.SKkagawad2Image = SKkagawad2Image
    image.SKkagawad3 = SKkagawad3
    image.SKkagawad3Image = SKkagawad3Image
    image.SKkagawad4 = SKkagawad4
    image.SKkagawad4Image = SKkagawad4Image
    image.SKkagawad5 = SKkagawad5
    image.SKkagawad5Image = SKkagawad5Image
    image.SKkagawad6 = SKkagawad6
    image.SKkagawad6Image = SKkagawad6Image
    image.SKkagawad7 = SKkagawad7
    image.SKkagawad7Image = SKkagawad7Image
    image.SKsecretary = SKsecretary
    image.SKsecretaryImage = SKsecretaryImage
    image.SKtreasurer = SKtreasurer
    image.SKtreasurerImage = SKtreasurerImage
    image.clearanceNo = clearanceNo
    image.communityTaxNo = communityTaxNo
    image.purpose = purpose
    const updatedImage = await image.save()
    res.json(updatedImage)
  } else {
    res.status(404)
    throw new Error('Image not found')
  }
})

export { getImages, getImageById, updateImage }
