import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { listResidentDetails } from '../actions/residentActions'
import Loader from '../components/Loader'
import Message from '../components/Message'

const ViewProfileScreen = ({ match }) => {
  const dispatch = useDispatch()

  const residentDetails = useSelector((state) => state.residentDetails)

  const { loading, error, resident } = residentDetails

  useEffect(() => {
    dispatch(listResidentDetails(match.params.id))
  }, [dispatch, match])

  return (
    <>
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        {/* <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <Link to="/profiling">👈 back</Link>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"></li>
                  <li className="breadcrumb-item active">View Profile</li>
                </ol>
              </div>
            </div>
          </div>
        </section> */}
        {/* Main content */}
        <section className="content">
          <div className="container-fluid">
            {/* SELECT2 EXAMPLE */}
            <div className="card card-default">
              <div className="card-header bg-danger">
                <h3 className="card-title"> 🚹 Profile Information</h3>
                <div className="card-tools">
                  <button
                    type="button"
                    className="btn btn-tool"
                    data-card-widget="collapse"
                  >
                    <i className="fas fa-minus" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-tool"
                    data-card-widget="remove"
                  >
                    <i className="fas fa-times" />
                  </button>
                </div>
              </div>
              {loading ? (
                <Loader />
              ) : error ? (
                <Message variant="danger">{error}</Message>
              ) : (
                <div className="card-body">
                  <div className="row">
                    <div className="col d-flex justify-content-center">
                      <div className="container">
                        <div className="row my-2">
                          <div className="col-lg-8 order-lg-2">
                            <ul className="nav nav-tabs">
                              <li className="nav-item">
                                <Link
                                  data-target="#profile"
                                  data-toggle="tab"
                                  className="nav-link active"
                                >
                                  Profile
                                </Link>
                              </li>
                            </ul>
                            <div className="tab-content py-4">
                              <div className="tab-pane active" id="profile">
                                <h5 className="mb-3">🙂 Resident's Profile</h5>
                                <div className="row">
                                  <div className="col-md-6">
                                    <h6>Full Name</h6>
                                    <p>{`${resident.lastName}, ${resident.firstName} ${resident.middleName}`}</p>
                                    <h6>Age:</h6>
                                    <p> {resident.age} </p>
                                    <h6>Phone Number:</h6>
                                    <p> {resident.phoneNumber} </p>
                                  </div>
                                  <div className="col-md-6">
                                    <h6> Birthday: </h6>
                                    <p> {resident.birthDay} </p>
                                    <h6>Permanent Address:</h6>
                                    <p> {resident.presentAddress} </p>
                                    <h6> Present Address: </h6>
                                    <p> {resident.currentAddress} </p>
                                  </div>
                                  <div className="col-md-12">
                                    <h5 className="mt-2">
                                      <span className="fa fa-clock-o ion-clock float-right" />{' '}
                                      Other Information:
                                    </h5>
                                    <table className="table table-sm table-hover table-striped">
                                      <tbody>
                                        <tr>
                                          <td>
                                            <strong>Sitio: </strong>

                                            {resident.sitio}
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <strong></strong>{' '}
                                            {resident.isVoter
                                              ? '✅ Registered Voter'
                                              : '❌ Unregistered Voter'}
                                          </td>
                                        </tr>

                                        <tr>
                                          <td></td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                                {/*/row*/}
                              </div>
                              <div className="tab-pane" id="messages">
                                <div className="alert alert-info alert-dismissable">
                                  <Link
                                    className="panel-close close"
                                    data-dismiss="alert"
                                  >
                                    ×
                                  </Link>{' '}
                                  This is an <strong>.alert</strong>. Use this
                                  to show important messages to the user.
                                </div>
                                <table className="table table-hover table-striped">
                                  <tbody>
                                    <tr>
                                      <td>
                                        <span className="float-right font-weight-bold">
                                          3 hrs ago
                                        </span>{' '}
                                        Here is your a link to the latest
                                        summary report from the..
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <span className="float-right font-weight-bold">
                                          Yesterday
                                        </span>{' '}
                                        There has been a request on your account
                                        since that was..
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <span className="float-right font-weight-bold">
                                          9/10
                                        </span>{' '}
                                        Porttitor vitae ultrices quis, dapibus
                                        id dolor. Morbi venenatis lacinia
                                        rhoncus.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <span className="float-right font-weight-bold">
                                          9/4
                                        </span>{' '}
                                        Vestibulum tincidunt ullamcorper eros
                                        eget luctus.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <span className="float-right font-weight-bold">
                                          9/4
                                        </span>{' '}
                                        Maxamillion ais the fix for tibulum
                                        tincidunt ullamcorper eros.
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-3 order-lg-1 text-center">
                            <img
                              class="img-fluid img-thumbnail mb-2"
                              src={resident.image}
                              alt="User profile"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* /.card-body */}
              <div className="card-footer"></div>
            </div>

            {/* /.row */}
          </div>
          {/* /.container-fluid */}
        </section>
        {/* /.content */}
      </div>
      {/* /.content-wrapper */}
    </>
  )
}

export default ViewProfileScreen
