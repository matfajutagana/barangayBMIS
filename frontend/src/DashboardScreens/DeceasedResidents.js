import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import DeceasedTable from '../components/DeceasedTable'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listResidents, deleteResident } from '../actions/residentActions'

const DeceasedResidents = ({ history, match }) => {
  const dispatch = useDispatch()

  const residentList = useSelector((state) => state.residentList)
  const { loading, error, residents } = residentList

  const residentDelete = useSelector((state) => state.residentDelete)
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = residentDelete

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listResidents())
    } else {
      history.push('/login')
    }
  }, [dispatch, history, userInfo, successDelete])

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      dispatch(deleteResident(id))
    }
  }

  return (
    <div className="content-wrapper">
      {/* Content Header (Page header) */}
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1> Deceased Residents </h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item active"></li>
              </ol>
            </div>
          </div>
        </div>
        {/* /.container-fluid */}
      </section>
      {/* Main content */}
      {loadingDelete && <Loader />}
      {errorDelete && <Message variant="danger">{errorDelete}</Message>}
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
                  <DeceasedTable
                    res={residents
                      .map((resident, i) => ({
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
                            <Button
                              variant="danger"
                              className="btn-sm"
                              onClick={() => deleteHandler(resident._id)}
                            >
                              <i className="fas fa-trash"></i>
                            </Button>
                          </>,
                        ],
                      }))
                      .filter((res) => {
                        return res.isDead === true
                      })}
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
      {/* /.content */}
    </div>
  )
}

export default DeceasedResidents
