import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { listResidents } from '../actions/residentActions'

const DashboardScreen = ({ history, match }) => {
  const dispatch = useDispatch()

  const residentList = useSelector((state) => state.residentList)
  const { residents } = residentList

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listResidents())
    } else {
      history.push('/login')
    }
  }, [dispatch, history, userInfo])

  return (
    <div className="content-wrapper">
      {/* Content Header (Page header) */}
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0 text-dark">Dashboard</h1>
            </div>
            {/* /.col */}
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right"></ol>
            </div>
            {/* /.col */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container-fluid */}
      </div>
      {/* /.content-header */}
      {/* Main content */}
      <section className="content">
        <div className="container-fluid">
          {/* Small boxes (Stat box) */}
          <div className="row">
            <div className="col-lg-3 col-6">
              {/* small box */}
              <div className="small-box bg-dark">
                <div className="inner">
                  <h3>
                    {
                      residents.filter((resident) => {
                        return resident.isDead === false && resident.age !== -1
                      }).length
                    }
                  </h3>
                  <p>Total Residents</p>
                </div>
                <div className="icon">
                  <i class="fas fa-users" />
                </div>
                <Link to="/total" className="small-box-footer">
                  More info <i className="fas fa-arrow-circle-right" />
                </Link>
              </div>
            </div>
          </div>
          {/* ./col */}

          {/* ./col */}

          {/* ./col */}

          <div className="row">
            <div className="col-lg-3 col-6">
              {/* small box */}
              <div className="small-box bg-danger">
                <div className="inner">
                  <h3>
                    {
                      residents.filter((resident) => {
                        return (
                          resident.isDead === false &&
                          resident.age <= 17 &&
                          resident.age >= 0
                        )
                      }).length
                    }
                  </h3>
                  <p>Under 18 Residents</p>
                </div>
                <div className="icon">
                  <i class="fas fa-child" />
                </div>
                <Link to="/under" className="small-box-footer">
                  More info <i className="fas fa-arrow-circle-right" />
                </Link>
              </div>
            </div>
            {/* ./col */}
            <div className="col-lg-3 col-6">
              {/* small box */}
              <div className="small-box bg-danger">
                <div className="inner">
                  <h3>
                    {
                      residents.filter((resident) => {
                        return (
                          resident.age <= 59 &&
                          resident.age >= 18 &&
                          resident.isDead === false
                        )
                      }).length
                    }
                  </h3>
                  <p>Adult Residents</p>
                </div>
                <div className="icon">
                  <i class="fas fa-male" />
                </div>
                <Link to="/adult" className="small-box-footer">
                  More info <i className="fas fa-arrow-circle-right" />
                </Link>
              </div>
            </div>
            {/* ./col */}
            <div className="col-lg-3 col-6">
              {/* small box */}
              <div className="small-box bg-danger">
                <div className="inner">
                  <h3>
                    {
                      residents.filter((resident) => {
                        return (
                          resident.age >= 60 &&
                          resident.age <= 120 &&
                          resident.isDead === false
                        )
                      }).length
                    }
                  </h3>
                  <p>Senior Residents</p>
                </div>
                <div className="icon">
                  <i className="fas fa-wheelchair" />
                </div>
                <Link to="/senior" className="small-box-footer">
                  More info <i className="fas fa-arrow-circle-right" />
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              {/* small box */}
              <div className="small-box bg-danger">
                <div className="inner">
                  <h3>
                    {' '}
                    {
                      residents.filter((resident) => {
                        return resident.isDead === true && resident.age !== -1
                      }).length
                    }
                  </h3>
                  <p>Deceased Residents</p>
                </div>
                <div className="icon">
                  <i class="fas fa-user-alt-slash" />
                </div>
                <Link to="/deceased" className="small-box-footer">
                  More info <i className="fas fa-arrow-circle-right" />
                </Link>
              </div>
            </div>
            {/* ./col */}

            {/* ./col */}
          </div>

          <div className="row">
            <div className="col-lg-3 col-6">
              {/* small box */}
              <div className="small-box bg-success">
                <div className="inner">
                  <h3>
                    {
                      residents.filter((resident) => {
                        return (
                          resident.isVoter === true &&
                          resident.isDead === false &&
                          resident.age !== -1
                        )
                      }).length
                    }
                  </h3>
                  <p>Registered Voter</p>
                </div>
                <div className="icon">
                  <i class="fas fa-vote-yea" />
                </div>
                <Link to="/registered" className="small-box-footer">
                  More info <i className="fas fa-arrow-circle-right" />
                </Link>
              </div>
            </div>
            {/* ./col */}
            <div className="col-lg-3 col-6">
              {/* small box */}
              <div className="small-box bg-success">
                <div className="inner">
                  <h3>
                    {
                      residents.filter((resident) => {
                        return (
                          resident.isVoter === false &&
                          resident.isDead === false &&
                          resident.age !== -1
                        )
                      }).length
                    }
                  </h3>
                  <p>Unregistered Voter</p>
                </div>
                <div className="icon">
                  <i class="fas fa-times" />
                </div>
                <Link to="/unregistered" className="small-box-footer">
                  More info <i className="fas fa-arrow-circle-right" />
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              {/* small box */}
              <div className="small-box bg-success">
                <div className="inner">
                  <h3>
                    {
                      residents.filter((resident) => {
                        return (
                          resident.sex === 'Male' &&
                          resident.isDead === false &&
                          resident.age !== -1
                        )
                      }).length
                    }
                  </h3>
                  <p>Male Residents</p>
                </div>
                <div className="icon">
                  <i class="fas fa-male" />
                </div>
                <Link to="/male" className="small-box-footer">
                  More info <i className="fas fa-arrow-circle-right" />
                </Link>
              </div>
            </div>
            {/* ./col */}
            <div className="col-lg-3 col-6">
              {/* small box */}
              <div className="small-box bg-success">
                <div className="inner">
                  <h3>
                    {
                      residents.filter((resident) => {
                        return (
                          resident.sex === 'Female' &&
                          resident.isDead === false &&
                          resident.age !== -1
                        )
                      }).length
                    }
                  </h3>
                  <p>Female Residents</p>
                </div>
                <div className="icon">
                  <i className="fas fa-female" />
                </div>
                <Link to="/female" className="small-box-footer">
                  More info <i className="fas fa-arrow-circle-right" />
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            {/* ./col */}
            <div className="col-lg-3 col-6">
              {/* small box */}

              <div className="small-box bg-info">
                <div className="inner">
                  <h3>
                    {
                      residents.filter((resident) => {
                        return (
                          resident.sitio === 'Calamansi' &&
                          resident.isDead === false &&
                          resident.age !== -1
                        )
                      }).length
                    }
                  </h3>
                  <p>Calamansi Residents</p>
                </div>
                <div className="icon">
                  <i className="fas fa-users" />
                </div>
                <Link to="/calamansi" className="small-box-footer">
                  More info <i className="fas fa-arrow-circle-right" />
                </Link>
              </div>
            </div>
            {/* ./col */}
            <div className="col-lg-3 col-6">
              {/* small box */}
              <div className="small-box bg-info">
                <div className="inner">
                  <h3>
                    {
                      residents.filter((resident) => {
                        return (
                          resident.sitio === 'Lanzones' &&
                          resident.isDead === false &&
                          resident.age !== -1
                        )
                      }).length
                    }
                  </h3>
                  <p>Lanzones Residents</p>
                </div>
                <div className="icon">
                  <i className="fas fa-users" />
                </div>
                <Link to="/lanzones" className="small-box-footer">
                  More info <i className="fas fa-arrow-circle-right" />
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              {/* small box */}
              <div className="small-box bg-info">
                <div className="inner">
                  <h3>
                    {' '}
                    {
                      residents.filter((resident) => {
                        return (
                          resident.sitio === 'Mansanas' &&
                          resident.isDead === false &&
                          resident.age !== -1
                        )
                      }).length
                    }
                  </h3>
                  <p>Mansanas Residents</p>
                </div>
                <div className="icon">
                  <i className="fas fa-users" />
                </div>
                <Link to="/mansanas" className="small-box-footer">
                  More info <i className="fas fa-arrow-circle-right" />
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              {/* small box */}
              <div className="small-box bg-info">
                <div className="inner">
                  <h3>
                    {' '}
                    {
                      residents.filter((resident) => {
                        return (
                          resident.sitio === 'Niyugan' &&
                          resident.isDead === false &&
                          resident.age !== -1
                        )
                      }).length
                    }
                  </h3>
                  <p>Niyugan Residents</p>
                </div>
                <div className="icon">
                  <i className="fas fa-users" />
                </div>
                <Link to="/niyugan" className="small-box-footer">
                  More info <i className="fas fa-arrow-circle-right" />
                </Link>
              </div>
            </div>
            {/* ./col */}
          </div>
          <div className="row">
            {/* ./col */}
            <div className="col-lg-3 col-6">
              {/* small box */}

              <div className="small-box bg-warning">
                <div className="inner">
                  <h3>
                    {
                      residents.filter((resident) => {
                        return (
                          resident.sitio === 'Palayan' &&
                          resident.isDead === false &&
                          resident.age !== -1
                        )
                      }).length
                    }
                  </h3>
                  <p>Palayan Residents</p>
                </div>
                <div className="icon">
                  <i className="fas fa-users" />
                </div>
                <Link to="/palayan" className="small-box-footer">
                  More info <i className="fas fa-arrow-circle-right" />
                </Link>
              </div>
            </div>
            {/* ./col */}
            <div className="col-lg-3 col-6">
              {/* small box */}
              <div className="small-box bg-warning">
                <div className="inner">
                  <h3>
                    {
                      residents.filter((resident) => {
                        return (
                          resident.sitio === 'Sampaloc' &&
                          resident.isDead === false &&
                          resident.age !== -1
                        )
                      }).length
                    }
                  </h3>
                  <p>Sampaloc Residents</p>
                </div>
                <div className="icon">
                  <i className="fas fa-users" />
                </div>
                <Link to="/sampaloc" className="small-box-footer">
                  More info <i className="fas fa-arrow-circle-right" />
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              {/* small box */}
              <div className="small-box bg-warning">
                <div className="inner">
                  <h3>
                    {' '}
                    {
                      residents.filter((resident) => {
                        return (
                          resident.sitio === 'Sinturis' &&
                          resident.isDead === false &&
                          resident.age !== -1
                        )
                      }).length
                    }
                  </h3>
                  <p>Sinturis Residents</p>
                </div>
                <div className="icon">
                  <i className="fas fa-users" />
                </div>
                <Link to="/sinturis" className="small-box-footer">
                  More info <i className="fas fa-arrow-circle-right" />
                </Link>
              </div>
            </div>

            {/* ./col */}
          </div>
          {/* /.row */}
          {/* Main row */}
        </div>
        {/* /.container-fluid */}
      </section>
      {/* /.content */}
    </div>
  )
}

export default DashboardScreen
