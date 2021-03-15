import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import BlotterTable from '../components/BlotterTable'
import Message from '../components/Message'
import Loader from '../components/Loader'
import {
  listBlotters,
  createBlotter,
  deleteBlotter,
} from '../actions/blotterActions'
import { BLOTTER_CREATE_RESET } from '../constants/blotterConstants'

const BlotterScreen = ({ history, match }) => {
  const dispatch = useDispatch()

  const blotterList = useSelector((state) => state.blotterList)
  const { loading, error, blotters } = blotterList

  const blotterDelete = useSelector((state) => state.blotterDelete)
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = blotterDelete

  const blotterCreate = useSelector((state) => state.blotterCreate)
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    blotter: createdBlotter,
  } = blotterCreate

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    dispatch({ type: BLOTTER_CREATE_RESET })

    if (!userInfo.isAdmin) {
      history.push('/login')
    }

    if (successCreate) {
      history.push(`/admin/blotter/${createdBlotter._id}/edit`)
    } else {
      dispatch(listBlotters())
    }
  }, [
    dispatch,
    history,
    userInfo,
    successDelete,
    successCreate,
    createdBlotter,
  ])

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      dispatch(deleteBlotter(id))
    }
  }

  const createBlotterHandler = () => {
    dispatch(createBlotter())
  }

  return (
    <div className="content-wrapper">
      {/* Content Header (Page header) */}

      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1> Peace and Order</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item active">
                  <button
                    type="button"
                    class="btn btn-block btn-success"
                    onClick={createBlotterHandler}
                  >
                    + Create Blotter
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
                  <BlotterTable
                    res={blotters.map((blotter, i) => ({
                      ...blotter,
                      details: [
                        <Link
                          to={`/admin/blotter/${blotter._id}/edit`}
                          className="btn btn-success btn-sm"
                        >
                          View
                        </Link>,
                      ],
                      edit: [
                        <>
                          <LinkContainer
                            to={`/admin/blotter/${blotter._id}/edit`}
                          >
                            <Button variant="light" className="btn-sm">
                              <i className="fas fa-edit"></i>
                            </Button>
                          </LinkContainer>
                          <Button
                            variant="danger"
                            className="btn-sm"
                            onClick={() => deleteHandler(blotter._id)}
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

export default BlotterScreen
