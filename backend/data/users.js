import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    username: 'calingagBMIS',
    password: bcrypt.hashSync('calingag123', 10),
    isAdmin: true,
  },
]

export default users
