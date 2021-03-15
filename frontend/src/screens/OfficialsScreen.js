import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listImages } from '../actions/imageActions'

const OfficialsScreen = ({ history }) => {
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
          {/* /.row */}
        </section>
      ))}
    </div>
  )
}

export default OfficialsScreen
