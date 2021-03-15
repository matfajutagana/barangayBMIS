const calcAge = (bday) => {
  const from = bday.split('-')
  const birthdateTimeStamp = new Date(from[2], from[0] - 1, from[1])
  const cur = new Date()
  const diff = cur - birthdateTimeStamp
  // This is the difference in milliseconds
  const currentAge = Math.floor(diff / 31557600000)
  // Divide by 1000*60*60*24*365.25
  return currentAge
}

const residents = [
  {
    firstName: 'Mat',
    lastName: 'Fajutagana',
    middleName: 'Rioflorido',
    image: '/image/mat.jpg',
    age: calcAge('08/07/1996'),
    birthDay: '08/17/1996',
    sex: 'M',
    phoneNumber: '09177724647',
    presentAddress: 'Brgy Calingag, Pinamalayan Oriental Mindoro',
    currentAddress: 'Brgy Calingag, Pinamalayan Oriental Mindoro',
    sitio: 'Lanzones',
    isVoter: true,
  },
  {
    firstName: 'Aira Elene',
    lastName: 'Sedaria',
    middleName: 'Amar',
    image: '/image/aira.jpg',
    age: calcAge('02/01/1997'),
    birthDay: '08/06/1997',
    sex: 'F',
    phoneNumber: '09177724648',
    presentAddress: 'Brgy Calingag, Pinamalayan Oriental Mindoro',
    currentAddress: 'Brgy Calingag, Pinamalayan Oriental Mindoro',
    sitio: 'Palayan',
    isVoter: true,
  },
  {
    firstName: 'Kent Lawrence',
    lastName: 'Liwanagan',
    middleName: 'Enriquez',
    image: '/image/kent.jpg',
    age: calcAge('02/01/1997'),
    birthDay: '08/06/2001',
    sex: 'F',
    phoneNumber: '09177724578',
    presentAddress: 'Brgy Calingag, Pinamalayan Oriental Mindoro',
    currentAddress: 'Brgy Calingag, Pinamalayan Oriental Mindoro',
    sitio: 'Sampaloc',
    isVoter: true,
  },
  {
    firstName: 'Kent Lawrence',
    lastName: 'Liwanagan',
    middleName: 'Enriquez',
    image: '/image/kent.jpg',
    age: calcAge('02/01/1997'),
    birthDay: '08/06/2001',
    sex: 'F',
    phoneNumber: '09177724578',
    presentAddress: 'Brgy Calingag, Pinamalayan Oriental Mindoro',
    currentAddress: 'Brgy Calingag, Pinamalayan Oriental Mindoro',
    sitio: 'Niyugan',
    isVoter: true,
  },
]

export default residents
