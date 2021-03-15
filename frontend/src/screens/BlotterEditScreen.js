import React, { useState, useEffect } from 'react'
import { Form, Button, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainerResident from '../components/FormContainerResident'
import { listBlotterDetails, updateBlotter } from '../actions/blotterActions'
import { BLOTTER_UPDATE_RESET } from '../constants/blotterConstants'

const BlotterEditScreen = ({ match, history }) => {
  const blotterId = match.params.id
  const [complainant, setComplainant] = useState('')
  const [complainee, setComplainee] = useState('')
  const [information, setInformation] = useState('')
  const [isResolve, setIsResolve] = useState('')

  const dispatch = useDispatch()

  const blotterDetails = useSelector((state) => state.blotterDetails)
  const { loading, error, blotter } = blotterDetails

  const blotterUpdate = useSelector((state) => state.blotterUpdate)
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = blotterUpdate

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: BLOTTER_UPDATE_RESET })
      history.push('/blotter')
    } else {
      if (blotter._id !== blotterId) {
        dispatch(listBlotterDetails(blotterId))
      } else {
        setComplainant(blotter.complainant)
        setComplainee(blotter.complainee)
        setInformation(blotter.information)
        setIsResolve(blotter.isResolve)
      }
    }
  }, [dispatch, history, blotterId, blotter, successUpdate])

  const displayEmpty = (editDisplay) => {
    if (editDisplay === 'sample') {
      editDisplay = ''
    }
    return editDisplay
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      updateBlotter({
        _id: blotterId,
        complainant,
        complainee,
        information,
        isResolve,
      })
    )
  }

  return (
    <>
      <FormContainerResident>
        {blotter.complainant === 'sample' ? (
          <h1>Add Blotter</h1>
        ) : (
          <h1>View/Edit Blotter</h1>
        )}
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group as={Col} controlId="complainant">
              <Form.Label>Complainant Name: (Nag Reklamo)</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Complainant Name"
                value={displayEmpty(complainant)}
                onChange={(e) => setComplainant(e.target.value)}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="complainee">
              <Form.Label>Complainee Name: (Inereklamo)</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Complainee Name"
                value={displayEmpty(complainee)}
                onChange={(e) => setComplainee(e.target.value)}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="information">
              <Form.Label>Information</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                type="text"
                placeholder="Enter Information"
                value={displayEmpty(information)}
                onChange={(e) => setInformation(e.target.value)}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="isResolve">
              <Form.Label>Status</Form.Label>
              <Form.Control
                as="select"
                defaultValue="Choose..."
                value={displayEmpty(isResolve)}
                onChange={(e) => setIsResolve(e.target.value)}
              >
                <option> Unresolve</option>
                <option>Resolve</option>
              </Form.Control>
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

export default BlotterEditScreen
