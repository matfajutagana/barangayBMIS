import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Carousel } from 'react-bootstrap'
import { listImages } from '../actions/imageActions'

const HomeScreen = ({ location, history }) => {
  const dispatch = useDispatch()

  const imageList = useSelector((state) => state.imageList)
  const { images } = imageList

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listImages())
    } else {
      history.push('/login')
    }
  }, [dispatch, history, userInfo])

  return (
    <div className="content-wrapper">
      {images.map((image) => (
        <section className="content">
          <div className="row bg-light d-flex justify-content-center">
            <div className="col-9">
              {/* /.card */}

              <Carousel>
                <Carousel.Item interval={1000}>
                  <img
                    className="d-block w-100"
                    src={image.slideImage1}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                  <img
                    className="d-block w-100"
                    src={image.slideImage2}
                    alt="2nd slide"
                  />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                  <img
                    className="d-block w-100"
                    src={image.slideImage3}
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                  <img
                    className="d-block w-100"
                    src={image.slideImage4}
                    alt="Fourth slide"
                  />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                  <img
                    className="d-block w-100"
                    src={image.slideImage5}
                    alt="Fifth  slide"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
            {/* /.card-body */}

            {/* /.col */}
          </div>
          <div className="row text-center">
            <div className="p-2 col-12 col d-flex justify-content-center">
              <h1> Barangay Officials </h1>
            </div>
          </div>
          <div className="row p-4">
            <div className="col-4 col d-flex justify-content-center">
              <div className="card bg-dark" style={{ width: '300px' }}>
                <img
                  className="card-img-top mx-auto"
                  src={image.secretaryImage}
                  alt="Card"
                  style={{ width: '50%' }}
                />
                <div className="card-body mx-auto bg-danger">
                  <h1 className="card-title">{image.secretary}</h1>
                  <p className="card-text">Secretary to the Sanggunian</p>
                </div>
              </div>
            </div>
            <div className="col-4 col d-flex justify-content-center">
              <div className="card bg-dark" style={{ width: '300px' }}>
                <img
                  className="card-img-top mx-auto"
                  src={image.kapitanImage}
                  alt="Card"
                  style={{ width: '50%' }}
                />
                <div className="card-body mx-auto bg-danger">
                  <h1 className="card-title">{image.kapitan}</h1>
                  <p className="card-text">Barangay Captain</p>
                </div>
              </div>
            </div>
            <div className="col-4 col d-flex justify-content-center">
              <div className="card bg-dark" style={{ width: '300px' }}>
                <img
                  className="card-img-top mx-auto"
                  src={image.treasurerImage}
                  alt="Card"
                  style={{ width: '50%' }}
                />
                <div className="card-body mx-auto bg-danger">
                  <h1 className="card-title">{image.treasurer}</h1>
                  <p className="card-text">Barangay Treasurer</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row p-4">
            <div className="col-4 col d-flex justify-content-center">
              <div className="card bg-dark" style={{ width: '300px' }}>
                <img
                  className="card-img-top mx-auto"
                  src={image.kagawad1Image}
                  alt="Card"
                  style={{ width: '50%' }}
                />
                <div className="card-body mx-auto bg-danger">
                  <h1 className="card-title">{image.kagawad1}</h1>
                  <p className="card-text">Barangay Kagawad</p>
                  <p className="card-text">Committee on Agriculture</p>
                </div>
              </div>
            </div>
            <div className="col-4 col d-flex justify-content-center">
              <div className="card bg-dark" style={{ width: '300px' }}>
                <img
                  className="card-img-top mx-auto"
                  src={image.kagawad2Image}
                  alt="Card"
                  style={{ width: '50%' }}
                />
                <div className="card-body mx-auto bg-danger">
                  <h1 className="card-title">{image.kagawad2}</h1>
                  <p className="card-text">Barangay Kagawad</p>
                  <p className="card-text">Committee on Education</p>
                </div>
              </div>
            </div>
            <div className="col-4 col d-flex justify-content-center">
              <div className="card bg-dark" style={{ width: '300px' }}>
                <img
                  className="card-img-top mx-auto"
                  src={image.kagawad3Image}
                  alt="Card"
                  style={{ width: '50%' }}
                />
                <div className="card-body mx-auto bg-danger">
                  <h1 className="card-title">{image.kagawad3}</h1>
                  <p className="card-text">Barangay Kagawad</p>
                  <p className="card-text">Committee on Transportation</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row p-4">
            <div className="col-4 col d-flex justify-content-center">
              <div className="card bg-dark" style={{ width: '300px' }}>
                <img
                  className="card-img-top mx-auto"
                  src={image.kagawad4Image}
                  alt="Card"
                  style={{ width: '50%' }}
                />
                <div className="card-body mx-auto bg-danger">
                  <h1 className="card-title">{image.kagawad4}</h1>
                  <p className="card-text">Barangay Kagawad</p>
                  <p className="card-text">Committee on Finance and VAWC</p>
                </div>
              </div>
            </div>
            <div className="col-4 col d-flex justify-content-center">
              <div className="card bg-dark" style={{ width: '300px' }}>
                <img
                  className="card-img-top mx-auto"
                  src={image.kagawad5Image}
                  alt="Card"
                  style={{ width: '50%' }}
                />
                <div className="card-body mx-auto bg-danger">
                  <h1 className="card-title">{image.kagawad5}</h1>
                  <p className="card-text">Barangay Kagawad</p>
                  <p className="card-text">Committee on Infrastructure</p>
                </div>
              </div>
            </div>
            <div className="col-4 col d-flex justify-content-center">
              <div className="card bg-dark" style={{ width: '300px' }}>
                <img
                  className="card-img-top mx-auto"
                  src={image.kagawad6Image}
                  alt="Card"
                  style={{ width: '50%' }}
                />
                <div className="card-body mx-auto bg-danger">
                  <h1 className="card-title">{image.kagawad6}</h1>
                  <p className="card-text">Barangay Kagawad</p>
                  <p className="card-text">Committee on Peace and Order</p>
                </div>
              </div>
            </div>
            <div className="col-4 col d-flex justify-content-center">
              <div className="card bg-dark" style={{ width: '300px' }}>
                <img
                  className="card-img-top mx-auto"
                  src={image.kagawad7Image}
                  alt="Card"
                  style={{ width: '50%' }}
                />
                <div className="card-body mx-auto bg-danger">
                  <h1 className="card-title">{image.kagawad7}</h1>
                  <p className="card-text">Barangay Kagawad</p>
                  <p className="card-text">
                    Committee on Health and Sanitation
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row text-center">
            <div className="p-2 col-12 col d-flex justify-content-center">
              <h1> Sangguniang Kabataan Officials </h1>
            </div>
          </div>
          <div className="row p-4">
            <div className="col-4 col d-flex justify-content-center">
              <div className="card bg-dark" style={{ width: '300px' }}>
                <img
                  className="card-img-top mx-auto"
                  src={image.SKsecretaryImage}
                  alt="Card"
                  style={{ width: '50%' }}
                />
                <div className="card-body mx-auto bg-danger">
                  <h1 className="card-title">{image.SKsecretary}</h1>
                  <p className="card-text">SK Secretary</p>
                </div>
              </div>
            </div>
            <div className="col-4 col d-flex justify-content-center">
              <div className="card bg-dark" style={{ width: '300px' }}>
                <img
                  className="card-img-top mx-auto"
                  src={image.SKkapitanImage}
                  alt="Card"
                  style={{ width: '50%' }}
                />
                <div className="card-body mx-auto bg-danger">
                  <h1 className="card-title">{image.SKkapitan}</h1>
                  <p className="card-text">
                    SK Chairperson / Ex-Officio Member
                  </p>
                </div>
              </div>
            </div>
            <div className="col-4 col d-flex justify-content-center">
              <div className="card bg-dark" style={{ width: '300px' }}>
                <img
                  className="card-img-top mx-auto"
                  src={image.SKtreasurerImage}
                  alt="Card"
                  style={{ width: '50%' }}
                />
                <div className="card-body mx-auto bg-danger">
                  <h1 className="card-title">{image.SKtreasurer}</h1>
                  <p className="card-text">SK Treasurer</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row p-4">
            <div className="col-4 col d-flex justify-content-center">
              <div className="card bg-dark" style={{ width: '300px' }}>
                <img
                  className="card-img-top mx-auto"
                  src={image.SKkagawad1Image}
                  alt="Card"
                  style={{ width: '50%' }}
                />
                <div className="card-body mx-auto bg-danger">
                  <h1 className="card-title">{image.SKkagawad1}</h1>
                  <p className="card-text">SK Councilor</p>
                  <p className="card-text">Committee on Education</p>
                </div>
              </div>
            </div>
            <div className="col-4 col d-flex justify-content-center">
              <div className="card bg-dark" style={{ width: '300px' }}>
                <img
                  className="card-img-top mx-auto"
                  src={image.SKkagawad2Image}
                  alt="Card"
                  style={{ width: '50%' }}
                />
                <div className="card-body mx-auto bg-danger">
                  <h1 className="card-title">{image.SKkagawad2}</h1>
                  <p className="card-text">SK Councilor</p>
                  <p className="card-text">
                    Committee on Sports and Development
                  </p>
                </div>
              </div>
            </div>
            <div className="col-4 col d-flex justify-content-center">
              <div className="card bg-dark" style={{ width: '300px' }}>
                <img
                  className="card-img-top mx-auto"
                  src={image.SKkagawad3Image}
                  alt="Card"
                  style={{ width: '50%' }}
                />
                <div className="card-body mx-auto bg-danger">
                  <h1 className="card-title">{image.SKkagawad3}</h1>
                  <p className="card-text">SK Councilor</p>
                  <p className="card-text">Committee on Gender Development</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row p-4">
            <div className="col-4 col d-flex justify-content-center">
              <div className="card bg-dark" style={{ width: '300px' }}>
                <img
                  className="card-img-top mx-auto"
                  src={image.SKkagawad4Image}
                  alt="Card"
                  style={{ width: '50%' }}
                />
                <div className="card-body mx-auto bg-danger">
                  <h1 className="card-title">{image.SKkagawad4}</h1>
                  <p className="card-text">SK Councilor</p>
                  <p className="card-text">
                    Committee on Youth Employment and Development
                  </p>
                </div>
              </div>
            </div>
            <div className="col-4 col d-flex justify-content-center">
              <div className="card bg-dark" style={{ width: '300px' }}>
                <img
                  className="card-img-top mx-auto"
                  src={image.SKkagawad5Image}
                  alt="Card"
                  style={{ width: '50%' }}
                />
                <div className="card-body mx-auto bg-danger">
                  <h1 className="card-title">{image.SKkagawad5}</h1>
                  <p className="card-text">SK Councilor</p>
                  <p className="card-text">
                    Committee on Health, Health Services and Reproductive Health
                  </p>
                </div>
              </div>
            </div>
            <div className="col-4 col d-flex justify-content-center">
              <div className="card bg-dark" style={{ width: '300px' }}>
                <img
                  className="card-img-top mx-auto"
                  src={image.SKkagawad6Image}
                  alt="Card"
                  style={{ width: '50%' }}
                />
                <div className="card-body mx-auto bg-danger">
                  <h1 className="card-title">{image.SKkagawad6}</h1>
                  <p className="card-text">SK Councilor</p>
                  <p className="card-text">
                    Committee on Environment, Climate Change Adaptation, and
                    Disaster Reduction and Resiliency{' '}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-4 col d-flex justify-content-center">
              <div className="card bg-dark" style={{ width: '300px' }}>
                <img
                  className="card-img-top mx-auto"
                  src={image.SKkagawad7Image}
                  alt="Card"
                  style={{ width: '50%' }}
                />
                <div className="card-body mx-auto bg-danger">
                  <h1 className="card-title">{image.SKkagawad7}</h1>
                  <p className="card-text">SK Councilor</p>
                  <p className="card-text">
                    Committee on Anti-Drug Abuse and Social Protection
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* /.row */}
        </section>
      ))}
    </div>
  )
}

export default HomeScreen
