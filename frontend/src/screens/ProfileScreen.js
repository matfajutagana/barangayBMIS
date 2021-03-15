import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import ProfileTable from '../components/ProfileTable'
import Message from '../components/Message'
import Loader from '../components/Loader'
import {
  listResidents,
  createResident,
  deleteResident,
} from '../actions/residentActions'
import { RESIDENT_CREATE_RESET } from '../constants/residentConstants'

const ProfileScreen = ({ history, match }) => {
  const dispatch = useDispatch()

  const residentList = useSelector((state) => state.residentList)
  const { loading, error, residents } = residentList

  const residentDelete = useSelector((state) => state.residentDelete)
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = residentDelete

  const residentCreate = useSelector((state) => state.residentCreate)
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    resident: createdResident,
  } = residentCreate

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    dispatch({ type: RESIDENT_CREATE_RESET })

    if (!userInfo.isAdmin) {
      history.push('/login')
    }

    if (successCreate) {
      history.push(`/admin/resident/${createdResident._id}/edit`)
    } else {
      dispatch(listResidents())
    }
  }, [
    dispatch,
    history,
    userInfo,
    successDelete,
    successCreate,
    createdResident,
  ])

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      dispatch(deleteResident(id))
    }
  }

  const createResidentHandler = () => {
    dispatch(createResident())
  }

  return (
    <div className="content-wrapper">
      {/* Content Header (Page header) */}

      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1> 🚻 Resident Profiling</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item active">
                  <button
                    type="button"
                    class="btn btn-block btn-success"
                    onClick={createResidentHandler}
                  >
                    + Add Resident
                  </button>
                </li>
              </ol>
            </div>
          </div>
        </div>
        {/* /.container-fluid */}
      </section>
      {/* Main content */}
      {loadingDelete && <Loader />}
      {errorDelete && <Message variant="danger">{errorDelete}</Message>}
      {loadingCreate && <Loader />}
      {errorCreate && <Message variant="danger">{errorCreate}</Message>}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <section className="content">
          <div className="row">
            <div className="col-12">
              {/* /.card */}
              <div className="card ">
                {/* /.card-header */}
                <div className="card-body">
                  <ProfileTable
                    res={residents.map((resident, i) => ({
                      ...resident,
                      view: [
                        <Link
                          to={`/profile/${resident._id}`}
                          className="btn btn-success btn-sm"
                        >
                          View
                        </Link>,
                      ],
                      edit: [
                        <>
                          <LinkContainer
                            to={`/admin/resident/${resident._id}/edit`}
                          >
                            <Button variant="light" className="btn-sm">
                              <i className="fas fa-edit"></i>
                            </Button>
                          </LinkContainer>
                          <Button
                            variant="danger"
                            className="btn-sm"
                            onClick={() => deleteHandler(resident._id)}
                          >
                            <i className="fas fa-trash"></i>
                          </Button>
                        </>,
                      ],
                    }))}
                  />
                </div>
                {/* /.card-body */}
              </div>
              {/* /.card */}
            </div>
            {/* /.col */}
          </div>

          {/* /.row */}
        </section>
      )}
    </div>
  )
}

export default ProfileScreen
