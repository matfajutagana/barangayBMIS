import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ResidencyTable from '../components/ResidencyTable'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listResidents } from '../actions/residentActions'
import { RESIDENT_CREATE_RESET } from '../constants/residentConstants'
import { Alert } from 'react-bootstrap'

const ResidentScreen = ({ history }) => {
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
  return (
    <div className="content-wrapper">
      {/* Content Header (Page header) */}

      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Residency Certificate</h1>
              <p className="text-danger">
                (Kindly refresh the page before generating certificate)
              </p>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right"></ol>
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
                  <ResidencyTable
                    res={residents.map((resident, i) => ({
                      ...resident,
                      Create: [
                        <Link
                          to={`/residency/${resident._id}`}
                          className="btn btn-success btn-sm"
                        >
                          Create
                        </Link>,
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

export default ResidentScreen
