import mongoose from 'mongoose'

const residentSchema = mongoose.Schema(
  {
    idNumber: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    middleName: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    birthDay: {
      type: String,
      required: true,
    },
    sex: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    presentAddress: {
      type: String,
      required: true,
    },
    currentAddress: {
      type: String,
      required: true,
    },
    sitio: {
      type: String,
      required: true,
    },
    isVoter: {
      type: Boolean,
      required: true,
      default: false,
    },
    isDead: {
      type: Boolean,
      required: true,
      default: false,
    },
    blotter: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
)

const Resident = mongoose.model('Resident', residentSchema)

export default Resident
