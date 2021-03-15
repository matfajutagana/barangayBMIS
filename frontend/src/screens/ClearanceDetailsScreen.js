import React, { useState, useEffect } from 'react'
import { Form, Button, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainerResident from '../components/FormContainerResident'
import { listImageDetails, updateImage } from '../actions/imageActions'
import { IMAGE_UPDATE_RESET } from '../constants/imageConstants'

const ClearanceDetailsScreen = ({ history }) => {
  const imageId = '6024d751fdb580252cb09c81'
  const [loginImage, setLoginImage] = useState('')
  const [slideImage1, setSlideImage1] = useState('')
  const [slideImage2, setSlideImage2] = useState('')
  const [slideImage3, setSlideImage3] = useState('')
  const [slideImage4, setSlideImage4] = useState('')
  const [slideImage5, setSlideImage5] = useState('')
  const [kapitan, setKapitan] = useState('')
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
  const [kapitanImage, setKapitanImage] = useState('')

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
      history.push('/clearance')
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

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      updateImage({
        _id: '6024d751fdb580252cb09c81',
        loginImage: loginImage,
        slideImage1: slideImage1,
        slideImage2: slideImage2,
        slideImage3: slideImage3,
        slideImage4: slideImage4,
        slideImage5: slideImage5,
        kapitan: kapitan,
        kagawad1: kagawad1,
        kagawad1Image: kagawad1Image,
        kagawad2: kagawad2,
        kagawad2Image: kagawad2Image,
        kagawad3: kagawad3,
        kagawad3Image: kagawad3Image,
        kagawad4: kagawad4,
        kagawad4Image: kagawad4Image,
        kagawad5: kagawad5,
        kagawad5Image: kagawad5Image,
        kagawad6: kagawad6,
        kagawad6Image: kagawad6Image,
        kagawad7: kagawad7,
        kagawad7Image: kagawad7Image,
        secretary: secretary,
        secretaryImage: secretaryImage,
        treasurer: treasurer,
        treasurerImage: treasurerImage,
        SKkapitan: SKkapitan,
        SKkapitanImage: SKkapitanImage,
        SKkagawad1: SKkagawad1,
        SKkagawad1Image: SKkagawad1Image,
        SKkagawad2: SKkagawad2,
        SKkagawad2Image: SKkagawad2Image,
        SKkagawad3: SKkagawad3,
        SKkagawad3Image: SKkagawad3Image,
        SKkagawad4: SKkagawad4,
        SKkagawad4Image: SKkagawad4Image,
        SKkagawad5: SKkagawad5,
        SKkagawad5Image: SKkagawad5Image,
        SKkagawad6: SKkagawad6,
        SKkagawad6Image: SKkagawad6Image,
        SKkagawad7: SKkagawad7,
        SKkagawad7Image: SKkagawad7Image,
        SKsecretary: SKsecretary,
        SKsecretaryImage: SKsecretaryImage,
        SKtreasurer: SKtreasurer,
        SKtreasurerImage: SKtreasurerImage,
        clearanceNo,
        kapitanImage: kapitanImage,
        communityTaxNo,
        purpose,
      })
    )
  }

  function refreshPage() {
    window.location.reload()
  }

  return (
    <>
      <FormContainerResident>
        <h1> Clearance Details </h1>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group as={Col} controlId="clearanceNo">
              <Form.Label>Clearance No.</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Clearance No."
                value={clearanceNo}
                onChange={(e) => setClearanceNo(e.target.value)}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="communityTaxNo">
              <Form.Label>Community Tax No.</Form.Label>
              <Form.Control
                type="text"
                placeholder="Community Tax No"
                value={communityTaxNo}
                onChange={(e) => setCommunityTaxNo(e.target.value)}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="purpose">
              <Form.Label>Purpose:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Purpose"
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
              />
            </Form.Group>
            <Button type="submit" onClick={refreshPage} variant="primary">
              Update Clearance Details
            </Button>
            <Form.Group
              as={Col}
              controlId="communityTaxNo"
              style={{ opacity: 0 }}
            ></Form.Group>
            <Form.Group>
              <Button type="submit" variant="success">
                Proceed
              </Button>
            </Form.Group>
          </Form>
        )}
      </FormContainerResident>
    </>
  )
}

export default ClearanceDetailsScreen
