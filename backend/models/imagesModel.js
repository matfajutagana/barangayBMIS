import mongoose from 'mongoose'

const imageSchema = mongoose.Schema(
  {
    loginImage: {
      type: String,
      required: true,
    },
    slideImage1: {
      type: String,
      required: true,
    },
    slideImage2: {
      type: String,
      required: true,
    },
    slideImage3: {
      type: String,
      required: true,
    },
    slideImage4: {
      type: String,
      required: true,
    },
    slideImage5: {
      type: String,
      required: true,
    },
    kapitan: {
      type: String,
      required: true,
    },
    kapitanImage: {
      type: String,
      required: true,
    },
    kagawad1: {
      type: String,
      required: true,
    },
    kagawad1Image: {
      type: String,
      required: true,
    },
    kagawad2: {
      type: String,
      required: true,
    },
    kagawad2Image: {
      type: String,
      required: true,
    },
    kagawad3: {
      type: String,
      required: true,
    },
    kagawad3Image: {
      type: String,
      required: true,
    },
    kagawad4: {
      type: String,
      required: true,
    },
    kagawad4Image: {
      type: String,
      required: true,
    },
    kagawad5: {
      type: String,
      required: true,
    },
    kagawad5Image: {
      type: String,
      required: true,
    },
    kagawad6: {
      type: String,
      required: true,
    },
    kagawad6Image: {
      type: String,
      required: true,
    },
    kagawad7: {
      type: String,
      required: true,
    },
    kagawad7Image: {
      type: String,
      required: true,
    },
    treasurer: {
      type: String,
      required: true,
    },
    treasurerImage: {
      type: String,
      required: true,
    },
    secretary: {
      type: String,
      required: true,
    },
    secretaryImage: {
      type: String,
      required: true,
    },
    SKkapitan: {
      type: String,
      required: true,
    },
    SKkapitanImage: {
      type: String,
      required: true,
    },
    SKkagawad1: {
      type: String,
      required: true,
    },
    SKkagawad1Image: {
      type: String,
      required: true,
    },
    SKkagawad2: {
      type: String,
      required: true,
    },
    SKkagawad2Image: {
      type: String,
      required: true,
    },
    SKkagawad3: {
      type: String,
      required: true,
    },
    SKkagawad3Image: {
      type: String,
      required: true,
    },
    SKkagawad4: {
      type: String,
      required: true,
    },
    SKkagawad4Image: {
      type: String,
      required: true,
    },
    SKkagawad5: {
      type: String,
      required: true,
    },
    SKkagawad5Image: {
      type: String,
      required: true,
    },
    SKkagawad6: {
      type: String,
      required: true,
    },
    SKkagawad6Image: {
      type: String,
      required: true,
    },
    SKkagawad7: {
      type: String,
      required: true,
    },
    SKkagawad7Image: {
      type: String,
      required: true,
    },
    SKtreasurer: {
      type: String,
      required: true,
    },
    SKtreasurerImage: {
      type: String,
      required: true,
    },
    SKsecretary: {
      type: String,
      required: true,
    },
    SKsecretaryImage: {
      type: String,
      required: true,
    },
    clearanceNo: {
      type: String,
      required: true,
    },
    communityTaxNo: {
      type: String,
      required: true,
    },
    purpose: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
)

const Image = mongoose.model('Image', imageSchema)

export default Image
