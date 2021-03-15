// import React, { useState, useEffect } from 'react'
// import axios from 'axios'
// import { Link } from 'react-router-dom'
// import Message from './Message'
// import { Modal, Button, Form, Col, Row } from 'react-bootstrap'
// import { createResident } from '../actions/residentActions'
// import { RESIDENT_CREATE_RESET } from '../constants/residentConstants'

// const RegisterModal = ({ location, history }) => {
//   const [firstName, setFirstName] = useState('')
//   const [lastName, setLastName] = useState('')
//   const [middleName, setMiddleName] = useState('')
//   const [image, setImage] = useState('')
//   const [age, setAge] = useState('')
//   const [birthDay, setBirthDay] = useState('')
//   const [sex, setSex] = useState('')
//   const [phoneNumber, setPhoneNumber] = useState('')
//   const [presentAddress, setPresentAddress] = useState('')
//   const [currentAddress, setCurrentAddress] = useState('')
//   const [sitio, setSitio] = useState('')
//   const [isVoter, setIsVoter] = useState(false)

//   const [message, setMessage] = useState(null)

//   const dispatch = useDispatch()

//   const [show, setShow] = useState(false)

//   const handleClose = () => setShow(false)
//   const handleShow = () => setShow(true)

//   useEffect(() => {
//     dispatch({ type: RESIDENT_CREATE_RESET })
//   }, [dispatch, history, userInfo, createdProduct])

//   const uploadFileHandler = async (e) => {
//     const file = e.target.files[0]
//     const formData = new FormData()
//     formData.append('image', file)
//     setUploading(true)

//     try {
//       const config = {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       }

//       const { data } = await axios.post('/api/upload', formData, config)

//       setImage(data)
//       setUploading(false)
//     } catch (error) {
//       console.error(error)
//       setUploading(false)
//     }
//   }

//   const submitHandler = (e) => {
//     e.preventDefault()
//     dispatch(
//       createResident(
//         firstName,
//         middleName,
//         lastName,
//         image,
//         age,
//         sex,
//         birthDay,
//         phoneNumber,
//         presentAddress,
//         currentAddress,
//         sitio,
//         isVoter
//       )
//     )
//   }

//   return (
//     <>
//       <button
//         type="button"
//         class="btn btn-block btn-success"
//         onClick={handleShow}
//       >
//         + Add Resident
//       </button>

//       <Modal
//         show={show}
//         onHide={handleClose}
//         backdrop="static"
//         keyboard={false}
//         size="lg"
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>Create Resident</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
;<Form onSubmit={submitHandler}>
  <Form.Row>
    <Form.Group as={Col} controlId="firstName">
      <Form.Label>First Name</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
    </Form.Group>
    <Form.Group as={Col} controlId="middleName">
      <Form.Label>Middle Name</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter Middle Name"
        value={middleName}
        onChange={(e) => setMiddleName(e.target.value)}
      />
    </Form.Group>
    <Form.Group as={Col} controlId="lastName">
      <Form.Label>Last Name</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="presentAddress">
    <Form.Label>Present Address</Form.Label>
    <Form.Control
      placeholder="1234 Main St"
      value={presentAddress}
      onChange={(e) => setPresentAddress(e.target.value)}
    />
  </Form.Group>

  <Form.Group controlId="currentAddress">
    <Form.Label>Permanent Address</Form.Label>
    <Form.Control
      placeholder="Apartment, studio, or floor"
      value={currentAddress}
      onChange={(e) => setCurrentAddress(e.target.value)}
    />
  </Form.Group>
  <Form.Group controlId="phoneNumber">
    <Form.Label>Phone Number</Form.Label>
    <Form.Control
      placeholder="0917......."
      value={phoneNumber}
      onChange={(e) => setPhoneNumber(e.target.value)}
    />
  </Form.Group>
  <Form.Group controlId="birthDay">
    <Form.Label>BirthDay</Form.Label>
    <Form.Control
      type="date"
      placeholder="Enter Birthday"
      value={birthDay}
      onChange={(e) => setBirthDay(e.target.value)}
    />
  </Form.Group>
  <Form.Row>
    <Form.Group as={Col} controlId="sex">
      <Form.Label>Gender</Form.Label>
      <Form.Control
        as="select"
        defaultValue="Choose..."
        value={sex}
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
        value={sitio}
        onChange={(e) => setSitio(e.target.value)}
      >
        <option>Lanzones</option>
        <option>Sampaloc</option>
        <option>Palayan</option>
        <option>Niyugan</option>
        <option>Mansanas</option>
        <option>Sinturis</option>
        <option>Calamansi</option>
      </Form.Control>
    </Form.Group>
  </Form.Row>
  <Form.Group as={Col} controlId="image">
    <Form.Label>Image</Form.Label>
    <Form.Control
      type="text"
      placeholder="Enter image url"
      value={image}
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
      value={firstName}
      onChange={(e) => setIsVoter(e.target.checked)}
    />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
//         </Modal.Body>
//       </Modal>
//     </>
//   )
// }

// export default RegisterModal
