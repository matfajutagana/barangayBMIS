import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { login } from '../actions/userActions'
import styled from 'styled-components'
import { listImages } from '../actions/imageActions'

const Wrapper = styled.section`
  background-size: cover;
  min-height: 100%;
  min-width: 1024px;
  width: 100%;
  height: auto;
  position: fixed;
  top: 0;
  left: 0;
`

const LoginScreen = ({ location, history }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const imageList = useSelector((state) => state.imageList)
  const { images } = imageList

  useEffect(() => {
    dispatch(listImages())
  }, [dispatch])

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  const redirect = location.search ? location.search.split('=')[1] : '/home'

  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(username, password))
  }

  return (
    <>
      {images.map((image) => (
        <Wrapper
          style={{
            backgroundImage: `url(${image.loginImage.replace(/\\/, '/')})`,
          }}
        >
          <FormContainer>
            <h1 className="text-light bg-danger"> Calingag BMIS </h1>
            <h2 className="text-light"> Sign In </h2>
            {error && <Message varaint="danger">{error}</Message>}
            {loading && <Loader />}
            <Form onSubmit={submitHandler}>
              <Form.Group controlId="username">
                <Form.Label className="text-light">Username</Form.Label>
                <Form.Control
                  type="username"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId="password">
                <Form.Label className="text-light">Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Button type="submit" variant="success" className="my-3">
                Sign In
              </Button>
            </Form>
          </FormContainer>
        </Wrapper>
      ))}
    </>
  )
}

export default LoginScreen
