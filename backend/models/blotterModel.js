import mongoose from 'mongoose'

const blotterSchema = mongoose.Schema(
  {
    complainant: {
      type: String,
      required: true,
    },
    complainee: {
      type: String,
      required: true,
    },
    information: {
      type: String,
      required: true,
    },
    isResolve: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const Blotter = mongoose.model('Blotter', blotterSchema)

export default Blotter
