import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Form, Button, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainerResident from '../components/FormContainerResident'
import { listResidentDetails, updateResident } from '../actions/residentActions'
import { RESIDENT_UPDATE_RESET } from '../constants/residentConstants'

const ResidentEditScreen = ({ match, history }) => {
  const residentId = match.params.id
  const [idNumber, setIdNumber] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [middleName, setMiddleName] = useState('')
  const [image, setImage] = useState('')
  const [age, setAge] = useState('')
  const [birthDay, setBirthDay] = useState('')
  const [sex, setSex] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [presentAddress, setPresentAddress] = useState('')
  const [currentAddress, setCurrentAddress] = useState('')
  const [sitio, setSitio] = useState('')
  const [isVoter, setIsVoter] = useState(false)
  const [isDead, setIsDead] = useState(false)
  const [blotter, setBlotter] = useState(false)
  const [uploading, setUploading] = useState(false)

  const dispatch = useDispatch()

  const residentDetails = useSelector((state) => state.residentDetails)
  const { loading, error, resident } = residentDetails

  const residentUpdate = useSelector((state) => state.residentUpdate)
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = residentUpdate

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: RESIDENT_UPDATE_RESET })
      history.push('/profiling')
    } else {
      if (resident._id !== residentId) {
        dispatch(listResidentDetails(residentId))
      } else {
        setIdNumber(resident.idNumber)
        setFirstName(resident.firstName)
        setLastName(resident.lastName)
        setMiddleName(resident.middleName)
        setImage(resident.image)
        setAge(resident.age)
        setBirthDay(resident.birthDay)
        setSex(resident.sex)
        setPhoneNumber(resident.phoneNumber)
        setPresentAddress(resident.presentAddress)
        setCurrentAddress(resident.currentAddress)
        setSitio(resident.sitio)
        setIsVoter(resident.isVoter)
        setIsDead(resident.isDead)
        setBlotter(resident.blotter)
      }
    }
  }, [dispatch, history, residentId, resident, successUpdate])

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append('image', file)
    setUploading(true)

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }

      const { data } = await axios.post('/api/upload', formData, config)

      setImage(data)
      setUploading(false)
    } catch (error) {
      console.error(error)
      setUploading(false)
    }
  }

  const calcAge = (bday) => {
    const from = bday.split('-')
    const birthdateTimeStamp = new Date(from[0], from[1] - 1, from[2])
    const cur = new Date()
    const diff = cur - birthdateTimeStamp
    // This is the difference in milliseconds
    const currentAge = Math.floor(diff / 31557600000)
    // Divide by 1000*60*60*24*365.25
    return currentAge
  }

  const displayEmpty = (editDisplay) => {
    editDisplay === 'sample' ? (editDisplay = '') : (editDisplay = editDisplay)
    return editDisplay
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      updateResident({
        _id: residentId,
        idNumber,
        firstName,
        middleName,
        lastName,
        image,
        age: calcAge(birthDay),
        sex,
        birthDay,
        phoneNumber,
        presentAddress,
        currentAddress,
        sitio,
        isVoter,
        isDead,
        blotter,
      })
    )
  }

  return (
    <>
      <FormContainerResident>
        {resident.firstName === 'sample' ? (
          <h1>Add Resident</h1>
        ) : (
          <h1>Edit Resident</h1>
        )}
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="idNumber">
              <Form.Label>ID Number</Form.Label>
              <Form.Control
                placeholder="1234 Main St"
                value={displayEmpty(idNumber)}
                onChange={(e) => setIdNumber(e.target.value)}
              />
            </Form.Group>
            <Form.Row>
              <Form.Group as={Col} controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter First Name"
                  value={displayEmpty(firstName)}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="middleName">
                <Form.Label>Middle Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Middle Name"
                  value={displayEmpty(middleName)}
                  onChange={(e) => setMiddleName(e.target.value)}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Last Name"
                  value={displayEmpty(lastName)}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Form.Group>
            </Form.Row>
            <Form.Group controlId="presentAddress">
              <Form.Label>Present Address</Form.Label>
              <Form.Control
                placeholder="1234 Main St"
                value={displayEmpty(presentAddress)}
                onChange={(e) => setPresentAddress(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="currentAddress">
              <Form.Label>Permanent Address</Form.Label>
              <Form.Control
                placeholder="Apartment, studio, or floor"
                value={displayEmpty(currentAddress)}
                onChange={(e) => setCurrentAddress(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="phoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                maxlength="11"
                placeholder="0917......."
                value={displayEmpty(phoneNumber)}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </Form.Group>
            <Form.Row>
              <Form.Group as={Col} controlId="birthDay">
                <Form.Label>BirthDay</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="Enter Birthday"
                  value={displayEmpty(birthDay)}
                  onChange={(e) => setBirthDay(e.target.value)}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="age">
                <Form.Label>Age</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="age"
                  value={calcAge(birthDay)}
                  onChange={(e) => setAge(e.target.value)}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="sex">
                <Form.Label>Gender</Form.Label>
                <Form.Control
                  as="select"
                  defaultValue="Choose..."
                  value={displayEmpty(sex)}
                  onChange={(e) => setSex(e.target.value)}
                >
                  <option>Male</option>
                  <option>Female</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="sitio">
                <Form.Label>Sitio</Form.Label>
                <Form.Control
                  as="select"
                  defaultValue="Choose..."
                  value={displayEmpty(sitio)}
                  onChange={(e) => setSitio(e.target.value)}
                >
                  <option>Calamansi</option>
                  <option>Lanzones</option>
                  <option>Mansanas</option>
                  <option>Niyugan</option>
                  <option>Palayan</option>
                  <option>Sampaloc</option>
                  <option>Sinturis</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>
            <Form.Group as={Col} controlId="image">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="text"
                placeholder="image url"
                value={displayEmpty(image)}
                onChange={(e) => setImage(e.target.value)}
              ></Form.Control>
              <Form.File
                id="image-file"
                label="Choose File"
                custom
                onChange={uploadFileHandler}
              ></Form.File>
              {uploading && <Loader />}
            </Form.Group>

            <Form.Group id="isVoter">
              <Form.Check
                type="checkbox"
                label="Registered Voter?"
                checked={isVoter}
                onChange={(e) => setIsVoter(e.target.checked)}
              />
            </Form.Group>
            <Form.Group id="isDead">
              <Form.Check
                type="checkbox"
                label="Registered Deceased?"
                checked={isDead}
                onChange={(e) => setIsDead(e.target.checked)}
              />
            </Form.Group>
            <Form.Group id="blotter">
              <Form.Check
                type="checkbox"
                label="Resident involved in a blotter?"
                checked={blotter}
                onChange={(e) => setBlotter(e.target.checked)}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        )}
      </FormContainerResident>
    </>
  )
}

export default ResidentEditScreen
