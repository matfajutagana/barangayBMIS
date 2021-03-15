import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Form, Button, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainerResident from '../components/FormContainerResident'
import { listImageDetails, updateImage } from '../actions/imageActions'
import { IMAGE_UPDATE_RESET } from '../constants/imageConstants'

const ImageEditScreen = ({ match, history }) => {
  const imageId = '6024d751fdb580252cb09c81'
  const [loginImage, setLoginImage] = useState('')
  const [slideImage1, setSlideImage1] = useState('')
  const [slideImage2, setSlideImage2] = useState('')
  const [slideImage3, setSlideImage3] = useState('')
  const [slideImage4, setSlideImage4] = useState('')
  const [slideImage5, setSlideImage5] = useState('')
  const [kapitan, setKapitan] = useState('')
  const [kapitanImage, setKapitanImage] = useState('')
  const [kagawad1, setKagawad1] = useState('')
  const [kagawad2, setKagawad2] = useState('')
  const [kagawad3, setKagawad3] = useState('')
  const [kagawad4, setKagawad4] = useState('')
  const [kagawad5, setKagawad5] = useState('')
  const [kagawad6, setKagawad6] = useState('')
  const [kagawad7, setKagawad7] = useState('')
  const [secretary, setSecretary] = useState('')
  const [treasurer, setTreasurer] = useState('')

  const [SKkapitan, setSKKapitan] = useState('')
  const [SKkapitanImage, setSKKapitanImage] = useState('')
  const [SKkagawad1, setSKKagawad1] = useState('')
  const [SKkagawad2, setSKKagawad2] = useState('')
  const [SKkagawad3, setSKKagawad3] = useState('')
  const [SKkagawad4, setSKKagawad4] = useState('')
  const [SKkagawad5, setSKKagawad5] = useState('')
  const [SKkagawad6, setSKKagawad6] = useState('')
  const [SKkagawad7, setSKKagawad7] = useState('')
  const [SKsecretary, setSKSecretary] = useState('')
  const [SKtreasurer, setSKTreasurer] = useState('')

  const [kagawad1Image, setKagawad1Image] = useState('')
  const [kagawad2Image, setKagawad2Image] = useState('')
  const [kagawad3Image, setKagawad3Image] = useState('')
  const [kagawad4Image, setKagawad4Image] = useState('')
  const [kagawad5Image, setKagawad5Image] = useState('')
  const [kagawad6Image, setKagawad6Image] = useState('')
  const [kagawad7Image, setKagawad7Image] = useState('')
  const [secretaryImage, setSecretaryImage] = useState('')
  const [treasurerImage, setTreasurerImage] = useState('')

  const [SKkagawad1Image, setSKKagawad1Image] = useState('')
  const [SKkagawad2Image, setSKKagawad2Image] = useState('')
  const [SKkagawad3Image, setSKKagawad3Image] = useState('')
  const [SKkagawad4Image, setSKKagawad4Image] = useState('')
  const [SKkagawad5Image, setSKKagawad5Image] = useState('')
  const [SKkagawad6Image, setSKKagawad6Image] = useState('')
  const [SKkagawad7Image, setSKKagawad7Image] = useState('')
  const [SKsecretaryImage, setSKSecretaryImage] = useState('')
  const [SKtreasurerImage, setSKTreasurerImage] = useState('')

  const [clearanceNo, setClearanceNo] = useState('')
  const [communityTaxNo, setCommunityTaxNo] = useState('')
  const [purpose, setPurpose] = useState('')
  const [uploading, setUploading] = useState(false)

  const dispatch = useDispatch()

  const imageDetails = useSelector((state) => state.imageDetails)
  const { loading, error, image } = imageDetails

  const imageUpdate = useSelector((state) => state.imageUpdate)
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = imageUpdate

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: IMAGE_UPDATE_RESET })
      history.push('/home')
    } else {
      if (image._id !== imageId) {
        dispatch(listImageDetails(imageId))
      } else {
        setLoginImage(image.loginImage)
        setSlideImage1(image.slideImage1)
        setSlideImage2(image.slideImage2)
        setSlideImage3(image.slideImage3)
        setSlideImage4(image.slideImage4)
        setSlideImage5(image.slideImage5)
        setKapitan(image.kapitan)
        setKapitanImage(image.kapitanImage)
        setKagawad1(image.kagawad1)
        setKagawad1Image(image.kagawad1Image)
        setKagawad2(image.kagawad2)
        setKagawad2Image(image.kagawad2Image)
        setKagawad3(image.kagawad3)
        setKagawad3Image(image.kagawad3Image)
        setKagawad4(image.kagawad4)
        setKagawad4Image(image.kagawad4Image)
        setKagawad5(image.kagawad5)
        setKagawad5Image(image.kagawad5Image)
        setKagawad6(image.kagawad6)
        setKagawad6Image(image.kagawad6Image)
        setKagawad7(image.kagawad7)
        setKagawad7Image(image.kagawad7Image)
        setSecretary(image.secretary)
        setSecretaryImage(image.secretaryImage)
        setTreasurer(image.treasurer)
        setTreasurerImage(image.treasurerImage)
        setSKKapitan(image.SKkapitan)
        setSKKapitanImage(image.SKkapitanImage)
        setSKKagawad1(image.SKkagawad1)
        setSKKagawad1Image(image.SKkagawad1Image)
        setSKKagawad2(image.SKkagawad2)
        setSKKagawad2Image(image.SKkagawad2Image)
        setSKKagawad3(image.SKkagawad3)
        setSKKagawad3Image(image.SKkagawad3Image)
        setSKKagawad4(image.SKkagawad4)
        setSKKagawad4Image(image.SKkagawad4Image)
        setSKKagawad5(image.SKkagawad5)
        setSKKagawad5Image(image.SKkagawad5Image)
        setSKKagawad6(image.SKkagawad6)
        setSKKagawad6Image(image.SKkagawad6Image)
        setSKKagawad7(image.SKkagawad7)
        setSKKagawad7Image(image.SKkagawad7Image)
        setSKSecretary(image.SKsecretary)
        setSKSecretaryImage(image.SKsecretaryImage)
        setSKTreasurer(image.SKtreasurer)
        setSKTreasurerImage(image.SKtreasurerImage)
        setClearanceNo(image.clearanceNo)
        setCommunityTaxNo(image.communityTaxNo)
        setPurpose(image.purpose)
      }
    }
  }, [dispatch, history, imageId, image, successUpdate])

  const slideFileHandler1 = async (d) => {
    const file = d.target.files[0]
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
      setSlideImage1(data)
      setUploading(false)
    } catch (error) {
      console.error(error)
      setUploading(false)
    }
  }

  const slideFileHandler2 = async (f) => {
    const file = f.target.files[0]
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
      setSlideImage2(data)
      setUploading(false)
    } catch (error) {
      console.error(error)
      setUploading(false)
    }
  }

  const slideFileHandler3 = async (g) => {
    const file = g.target.files[0]
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
      setSlideImage3(data)
      setUploading(false)
    } catch (error) {
      console.error(error)
      setUploading(false)
    }
  }

  const slideFileHandler4 = async (h) => {
    const file = h.target.files[0]
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
      setSlideImage4(data)
      setUploading(false)
    } catch (error) {
      console.error(error)
      setUploading(false)
    }
  }

  const slideFileHandler5 = async (i) => {
    const file = i.target.files[0]
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
      setSlideImage5(data)
      setUploading(false)
    } catch (error) {
      console.error(error)
      setUploading(false)
    }
  }

  const loginImageHandler = async (c) => {
    const file = c.target.files[0]
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
      setLoginImage(data)
      setUploading(false)
    } catch (error) {
      console.error(error)
      setUploading(false)
    }
  }

  const kapitanImageHandler = async (b) => {
    const file = b.target.files[0]
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
      setKapitanImage(data)
      setUploading(false)
    } catch (error) {
      console.error(error)
      setUploading(false)
    }
  }

  const kagawad1ImageHandler = async (b) => {
    const file = b.target.files[0]
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
      setKagawad1Image(data)
      setUploading(false)
    } catch (error) {
      console.error(error)
      setUploading(false)
    }
  }

  const kagawad2ImageHandler = async (b) => {
    const file = b.target.files[0]
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
      setKagawad2Image(data)
      setUploading(false)
    } catch (error) {
      console.error(error)
      setUploading(false)
    }
  }

  const kagawad3ImageHandler = async (b) => {
    const file = b.target.files[0]
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
      setKagawad3Image(data)
      setUploading(false)
    } catch (error) {
      console.error(error)
      setUploading(false)
    }
  }

  const kagawad4ImageHandler = async (b) => {
    const file = b.target.files[0]
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
      setKagawad4Image(data)
      setUploading(false)
    } catch (error) {
      console.error(error)
      setUploading(false)
    }
  }

  const kagawad5ImageHandler = async (b) => {
    const file = b.target.files[0]
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
      setKagawad5Image(data)
      setUploading(false)
    } catch (error) {
      console.error(error)
      setUploading(false)
    }
  }

  const kagawad6ImageHandler = async (b) => {
    const file = b.target.files[0]
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
      setKagawad6Image(data)
      setUploading(false)
    } catch (error) {
      console.error(error)
      setUploading(false)
    }
  }

  const kagawad7ImageHandler = async (b) => {
    const file = b.target.files[0]
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
      setKagawad7Image(data)
      setUploading(false)
    } catch (error) {
      console.error(error)
      setUploading(false)
    }
  }

  const treasurerImageHandler = async (b) => {
    const file = b.target.files[0]
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
      setTreasurerImage(data)
      setUploading(false)
    } catch (error) {
      console.error(error)
      setUploading(false)
    }
  }

  const secretaryImageHandler = async (b) => {
    const file = b.target.files[0]
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
      setSecretaryImage(data)
      setUploading(false)
    } catch (error) {
      console.error(error)
      setUploading(false)
    }
  }

  const SKkapitanImageHandler = async (b) => {
    const file = b.target.files[0]
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
      setSKKapitanImage(data)
      setUploading(false)
    } catch (error) {
      console.error(error)
      setUploading(false)
    }
  }

  const SKkagawad1ImageHandler = async (b) => {
    const file = b.target.files[0]
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
      setSKKagawad1Image(data)
      setUploading(false)
    } catch (error) {
      console.error(error)
      setUploading(false)
    }
  }

  const SKkagawad2ImageHandler = async (b) => {
    const file = b.target.files[0]
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
      setSKKagawad2Image(data)
      setUploading(false)
    } catch (error) {
      console.error(error)
      setUploading(false)
    }
  }

  const SKkagawad3ImageHandler = async (b) => {
    const file = b.target.files[0]
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
      setSKKagawad3Image(data)
      setUploading(false)
    } catch (error) {
      console.error(error)
      setUploading(false)
    }
  }

  const SKkagawad4ImageHandler = async (b) => {
    const file = b.target.files[0]
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
      setSKKagawad4Image(data)
      setUploading(false)
    } catch (error) {
      console.error(error)
      setUploading(false)
    }
  }

  const SKkagawad5ImageHandler = async (b) => {
    const file = b.target.files[0]
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
      setSKKagawad5Image(data)
      setUploading(false)
    } catch (error) {
      console.error(error)
      setUploading(false)
    }
  }

  const SKkagawad6ImageHandler = async (b) => {
    const file = b.target.files[0]
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
      setSKKagawad6Image(data)
      setUploading(false)
    } catch (error) {
      console.error(error)
      setUploading(false)
    }
  }

  const SKkagawad7ImageHandler = async (b) => {
    const file = b.target.files[0]
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
      setSKKagawad7Image(data)
      setUploading(false)
    } catch (error) {
      console.error(error)
      setUploading(false)
    }
  }

  const SKtreasurerImageHandler = async (b) => {
    const file = b.target.files[0]
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
      setSKTreasurerImage(data)
      setUploading(false)
    } catch (error) {
      console.error(error)
      setUploading(false)
    }
  }

  const SKsecretaryImageHandler = async (b) => {
    const file = b.target.files[0]
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
      setSKSecretaryImage(data)
      setUploading(false)
    } catch (error) {
      console.error(error)
      setUploading(false)
    }
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      updateImage({
        _id: '6024d751fdb580252cb09c81',
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
        clearanceNo: clearanceNo,
        communityTaxNo: communityTaxNo,
        purpose: purpose,
      })
    )
  }

  return (
    <>
      <FormContainerResident>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group as={Col} controlId="loginImage">
              <Form.Label>Login Image</Form.Label>
              <Form.Control
                type="text"
                placeholder="image url"
                value={loginImage}
                onChange={(c) => setLoginImage(c.target.value)}
              ></Form.Control>
              <Form.File
                id="image-files"
                label="Choose File"
                custom
                onChange={loginImageHandler}
              ></Form.File>
              {uploading && <Loader />}
            </Form.Group>

            <Form.Group as={Col} controlId="slideImage1">
              <Form.Label>Slide Image 1</Form.Label>
              <Form.Control
                type="text"
                placeholder="image url"
                value={slideImage1}
                onChange={(d) => setSlideImage1(d.target.value)}
              ></Form.Control>
              <Form.File
                id="image-file"
                label="Choose File"
                custom
                onChange={slideFileHandler1}
              ></Form.File>
              {uploading && <Loader />}
            </Form.Group>

            <Form.Group as={Col} controlId="slideImage2">
              <Form.Label>Slide Image 2</Form.Label>
              <Form.Control
                type="text"
                placeholder="image url"
                value={slideImage2}
                onChange={(f) => setSlideImage2(f.target.value)}
              ></Form.Control>
              <Form.File
                id="image-file"
                label="Choose File"
                custom
                onChange={slideFileHandler2}
              ></Form.File>
              {uploading && <Loader />}
            </Form.Group>

            <Form.Group as={Col} controlId="slideImage3">
              <Form.Label>Slide Image 3</Form.Label>
              <Form.Control
                type="text"
                placeholder="image url"
                value={slideImage3}
                onChange={(g) => setSlideImage3(g.target.value)}
              ></Form.Control>
              <Form.File
                id="image-file"
                label="Choose File"
                custom
                onChange={slideFileHandler3}
              ></Form.File>
              {uploading && <Loader />}
            </Form.Group>

            <Form.Group as={Col} controlId="slideImage4">
              <Form.Label>Slide Image 4</Form.Label>
              <Form.Control
                type="text"
                placeholder="image url"
                value={slideImage4}
                onChange={(h) => setSlideImage4(h.target.value)}
              ></Form.Control>
              <Form.File
                id="image-file"
                label="Choose File"
                custom
                onChange={slideFileHandler4}
              ></Form.File>
              {uploading && <Loader />}
            </Form.Group>

            <Form.Group as={Col} controlId="slideImage5">
              <Form.Label>Slide Image 5</Form.Label>
              <Form.Control
                type="text"
                placeholder="image url"
                value={slideImage5}
                onChange={(i) => setSlideImage5(i.target.value)}
              ></Form.Control>
              <Form.File
                id="image-file"
                label="Choose File"
                custom
                onChange={slideFileHandler5}
              ></Form.File>
              {uploading && <Loader />}
            </Form.Group>
            <Form.Group as={Col} controlId="kapitan">
              <Form.Label>Kapitan Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Kapitan Name"
                value={kapitan}
                onChange={(e) => setKapitan(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="kapitanImage">
              <Form.Label>Kapitan Image: </Form.Label>
              <Form.Control
                type="text"
                placeholder="image url"
                value={kapitanImage}
                onChange={(b) => setKapitanImage(b.target.value)}
              ></Form.Control>
              <Form.File
                id="image-file"
                label="Choose File"
                custom
                onChange={kapitanImageHandler}
              ></Form.File>
              {uploading && <Loader />}
            </Form.Group>
            <Form.Group as={Col} controlId="treasurer">
              <Form.Label>Teasurer Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Treasurer Name"
                value={treasurer}
                onChange={(e) => setTreasurer(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="treasurerImage">
              <Form.Label>Treasurer Image: </Form.Label>
              <Form.Control
                type="text"
                placeholder="image url"
                value={treasurerImage}
                onChange={(b) => setTreasurerImage(b.target.value)}
              ></Form.Control>
              <Form.File
                id="image-file"
                label="Choose File"
                custom
                onChange={treasurerImageHandler}
              ></Form.File>
              {uploading && <Loader />}
            </Form.Group>

            <Form.Group as={Col} controlId="secretary">
              <Form.Label>Secretary Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Treasurer Name"
                value={secretary}
                onChange={(e) => setSecretary(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="secretaryImage">
              <Form.Label>Secretary Image: </Form.Label>
              <Form.Control
                type="text"
                placeholder="image url"
                value={secretaryImage}
                onChange={(b) => setSecretaryImage(b.target.value)}
              ></Form.Control>
              <Form.File
                id="image-file"
                label="Choose File"
                custom
                onChange={secretaryImageHandler}
              ></Form.File>
              {uploading && <Loader />}
            </Form.Group>
            <Form.Group as={Col} controlId="kagawad1">
              <Form.Label>Kagawad 1 Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Kagawad Name"
                value={kagawad1}
                onChange={(e) => setKagawad1(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="kagawad1Image">
              <Form.Label>Kagawad 1 Image: </Form.Label>
              <Form.Control
                type="text"
                placeholder="image url"
                value={kagawad1Image}
                onChange={(b) => setKagawad1Image(b.target.value)}
              ></Form.Control>
              <Form.File
                id="image-file"
                label="Choose File"
                custom
                onChange={kagawad1ImageHandler}
              ></Form.File>
              {uploading && <Loader />}
            </Form.Group>

            <Form.Group as={Col} controlId="kagawad2">
              <Form.Label>Kagawad 2 Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Kagawad Name"
                value={kagawad2}
                onChange={(e) => setKagawad2(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="kagawad2Image">
              <Form.Label>Kagawad 2 Image: </Form.Label>
              <Form.Control
                type="text"
                placeholder="image url"
                value={kagawad2Image}
                onChange={(b) => setKagawad2Image(b.target.value)}
              ></Form.Control>
              <Form.File
                id="image-file"
                label="Choose File"
                custom
                onChange={kagawad2ImageHandler}
              ></Form.File>
              {uploading && <Loader />}
            </Form.Group>

            <Form.Group as={Col} controlId="kagawad3">
              <Form.Label>Kagawad 3 Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Kagawad Name"
                value={kagawad3}
                onChange={(e) => setKagawad3(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="kagawad3Image">
              <Form.Label>Kagawad 3 Image: </Form.Label>
              <Form.Control
                type="text"
                placeholder="image url"
                value={kagawad3Image}
                onChange={(b) => setKagawad3Image(b.target.value)}
              ></Form.Control>
              <Form.File
                id="image-file"
                label="Choose File"
                custom
                onChange={kagawad3ImageHandler}
              ></Form.File>
              {uploading && <Loader />}
            </Form.Group>

            <Form.Group as={Col} controlId="kagawad4">
              <Form.Label>Kagawad 4 Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Kagawad Name"
                value={kagawad4}
                onChange={(e) => setKagawad4(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="kagawad4Image">
              <Form.Label>Kagawad 4 Image: </Form.Label>
              <Form.Control
                type="text"
                placeholder="image url"
                value={kagawad4Image}
                onChange={(b) => setKagawad4Image(b.target.value)}
              ></Form.Control>
              <Form.File
                id="image-file"
                label="Choose File"
                custom
                onChange={kagawad4ImageHandler}
              ></Form.File>
              {uploading && <Loader />}
            </Form.Group>

            <Form.Group as={Col} controlId="kagawad5">
              <Form.Label>Kagawad 5 Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Kagawad Name"
                value={kagawad5}
                onChange={(e) => setKagawad5(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="kagawad5Image">
              <Form.Label>Kagawad 5 Image: </Form.Label>
              <Form.Control
                type="text"
                placeholder="image url"
                value={kagawad5Image}
                onChange={(b) => setKagawad5Image(b.target.value)}
              ></Form.Control>
              <Form.File
                id="image-file"
                label="Choose File"
                custom
                onChange={kagawad5ImageHandler}
              ></Form.File>
              {uploading && <Loader />}
            </Form.Group>

            <Form.Group as={Col} controlId="kagawad6">
              <Form.Label>Kagawad 6 Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Kagawad Name"
                value={kagawad6}
                onChange={(e) => setKagawad6(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="kagawad6Image">
              <Form.Label>Kagawad 6 Image: </Form.Label>
              <Form.Control
                type="text"
                placeholder="image url"
                value={kagawad6Image}
                onChange={(b) => setKagawad6Image(b.target.value)}
              ></Form.Control>
              <Form.File
                id="image-file"
                label="Choose File"
                custom
                onChange={kagawad6ImageHandler}
              ></Form.File>
              {uploading && <Loader />}
            </Form.Group>

            <Form.Group as={Col} controlId="kagawad7">
              <Form.Label>Kagawad 7 Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Kagawad Name"
                value={kagawad7}
                onChange={(e) => setKagawad7(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="kagawad7Image">
              <Form.Label>Kagawad 7 Image: </Form.Label>
              <Form.Control
                type="text"
                placeholder="image url"
                value={kagawad7Image}
                onChange={(b) => setKagawad7Image(b.target.value)}
              ></Form.Control>
              <Form.File
                id="image-file"
                label="Choose File"
                custom
                onChange={kagawad7ImageHandler}
              ></Form.File>
              {uploading && <Loader />}
            </Form.Group>

            {/*Sk stuff */}
            <Form.Group as={Col} controlId="SKkapitan">
              <Form.Label>SK Chairman Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Kapitan Name"
                value={SKkapitan}
                onChange={(e) => setSKKapitan(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="SKkapitanImage">
              <Form.Label>SK Chairman Image: </Form.Label>
              <Form.Control
                type="text"
                placeholder="image url"
                value={SKkapitanImage}
                onChange={(b) => setSKKapitanImage(b.target.value)}
              ></Form.Control>
              <Form.File
                id="image-file"
                label="Choose File"
                custom
                onChange={SKkapitanImageHandler}
              ></Form.File>
              {uploading && <Loader />}
            </Form.Group>
            <Form.Group as={Col} controlId="treasurer">
              <Form.Label>SK Teasurer Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Treasurer Name"
                value={SKtreasurer}
                onChange={(e) => setSKTreasurer(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="SKtreasurerImage">
              <Form.Label>SK Treasurer Image: </Form.Label>
              <Form.Control
                type="text"
                placeholder="image url"
                value={SKtreasurerImage}
                onChange={(b) => setSKTreasurerImage(b.target.value)}
              ></Form.Control>
              <Form.File
                id="image-file"
                label="Choose File"
                custom
                onChange={SKtreasurerImageHandler}
              ></Form.File>
              {uploading && <Loader />}
            </Form.Group>

            <Form.Group as={Col} controlId="SKsecretary">
              <Form.Label>SK Secretary Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Secretary Name"
                value={SKsecretary}
                onChange={(e) => setSKSecretary(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="SKsecretaryImage">
              <Form.Label>SK Secretary Image: </Form.Label>
              <Form.Control
                type="text"
                placeholder="image url"
                value={SKsecretaryImage}
                onChange={(b) => setSKSecretaryImage(b.target.value)}
              ></Form.Control>
              <Form.File
                id="image-file"
                label="Choose File"
                custom
                onChange={SKsecretaryImageHandler}
              ></Form.File>
              {uploading && <Loader />}
            </Form.Group>
            <Form.Group as={Col} controlId="SKkagawad1">
              <Form.Label>SK Councilor 1 Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Kagawad Name"
                value={SKkagawad1}
                onChange={(e) => setSKKagawad1(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="SKkagawad1Image">
              <Form.Label>SK Councilor 1 Image: </Form.Label>
              <Form.Control
                type="text"
                placeholder="image url"
                value={SKkagawad1Image}
                onChange={(b) => setSKKagawad1Image(b.target.value)}
              ></Form.Control>
              <Form.File
                id="image-file"
                label="Choose File"
                custom
                onChange={SKkagawad1ImageHandler}
              ></Form.File>
              {uploading && <Loader />}
            </Form.Group>

            <Form.Group as={Col} controlId="SKkagawad2">
              <Form.Label>SK Councilor 2 Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Kagawad Name"
                value={SKkagawad2}
                onChange={(e) => setSKKagawad2(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="SKkagawad2Image">
              <Form.Label>SK Councilor 2 Image: </Form.Label>
              <Form.Control
                type="text"
                placeholder="image url"
                value={SKkagawad2Image}
                onChange={(b) => setSKKagawad2Image(b.target.value)}
              ></Form.Control>
              <Form.File
                id="image-file"
                label="Choose File"
                custom
                onChange={SKkagawad2ImageHandler}
              ></Form.File>
              {uploading && <Loader />}
            </Form.Group>

            <Form.Group as={Col} controlId="SKkagawad3">
              <Form.Label>SK Councilor 3 Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Kagawad Name"
                value={SKkagawad3}
                onChange={(e) => setSKKagawad3(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="SKkagawad3Image">
              <Form.Label>SK Councilor 3 Image: </Form.Label>
              <Form.Control
                type="text"
                placeholder="image url"
                value={SKkagawad3Image}
                onChange={(b) => setSKKagawad3Image(b.target.value)}
              ></Form.Control>
              <Form.File
                id="image-file"
                label="Choose File"
                custom
                onChange={SKkagawad3ImageHandler}
              ></Form.File>
              {uploading && <Loader />}
            </Form.Group>

            <Form.Group as={Col} controlId="SKkagawad4">
              <Form.Label>SK Councilor 4 Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Kagawad Name"
                value={SKkagawad4}
                onChange={(e) => setSKKagawad4(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="SKkagawad4Image">
              <Form.Label>SK Councilor 4 Image: </Form.Label>
              <Form.Control
                type="text"
                placeholder="image url"
                value={SKkagawad4Image}
                onChange={(b) => setSKKagawad4Image(b.target.value)}
              ></Form.Control>
              <Form.File
                id="image-file"
                label="Choose File"
                custom
                onChange={SKkagawad4ImageHandler}
              ></Form.File>
              {uploading && <Loader />}
            </Form.Group>

            <Form.Group as={Col} controlId="SKkagawad5">
              <Form.Label>SK Councilor 5 Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Kagawad Name"
                value={SKkagawad5}
                onChange={(e) => setSKKagawad5(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="SKkagawad5Image">
              <Form.Label>SK Councilor 5 Image: </Form.Label>
              <Form.Control
                type="text"
                placeholder="image url"
                value={SKkagawad5Image}
                onChange={(b) => setSKKagawad5Image(b.target.value)}
              ></Form.Control>
              <Form.File
                id="image-file"
                label="Choose File"
                custom
                onChange={SKkagawad5ImageHandler}
              ></Form.File>
              {uploading && <Loader />}
            </Form.Group>

            <Form.Group as={Col} controlId="SKkagawad6">
              <Form.Label>SK Councilor 6 Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Kagawad Name"
                value={SKkagawad6}
                onChange={(e) => setSKKagawad6(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="SKkagawad6Image">
              <Form.Label>SK Councilor 6 Image: </Form.Label>
              <Form.Control
                type="text"
                placeholder="image url"
                value={SKkagawad6Image}
                onChange={(b) => setSKKagawad6Image(b.target.value)}
              ></Form.Control>
              <Form.File
                id="image-file"
                label="Choose File"
                custom
                onChange={SKkagawad6ImageHandler}
              ></Form.File>
              {uploading && <Loader />}
            </Form.Group>

            <Form.Group as={Col} controlId="SKkagawad7">
              <Form.Label>SK Councilor 7 Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Kagawad Name"
                value={SKkagawad7}
                onChange={(e) => setSKKagawad7(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="SKkagawad7Image">
              <Form.Label>SK Councilor 7 Image: </Form.Label>
              <Form.Control
                type="text"
                placeholder="image url"
                value={SKkagawad7Image}
                onChange={(b) => setSKKagawad7Image(b.target.value)}
              ></Form.Control>
              <Form.File
                id="image-file"
                label="Choose File"
                custom
                onChange={SKkagawad7ImageHandler}
              ></Form.File>
              {uploading && <Loader />}
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

export default ImageEditScreen
