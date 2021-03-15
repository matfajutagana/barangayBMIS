import React from 'react'
import { useSelector } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

const Menu = withRouter((props) => {
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const menus = (to, icon, name) => {
    return (
      <li className="nav-item">
        <Link
          to={to}
          className={
            to === props.location.pathname ? 'nav-link active' : 'nav-link'
          }
        >
          <i className={icon} />
          <p>{name}</p>
        </Link>
      </li>
    )
  }

  return (
    <>
      {userInfo ? (
        <aside className="main-sidebar sidebar-dark-red elevation-4">
          {/* Brand Logo */}
          <Link to="/" className="brand-link">
            <img
              src="dist/img/calingag.png"
              alt="AdminLTE Logo"
              className="brand-image img-circle elevation-3"
              style={{ opacity: '0.8' }}
            />
            <span className="brand-text font-weight-light">
              Brgy. Raymart MIS
            </span>
          </Link>
          {/* Sidebar */}
          <div className="sidebar">
            {/* Sidebar user panel (optional) */}
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
              <div className="image">
                <img
                  src="image/admin.png"
                  className="img-circle elevation-2"
                  alt="admin"
                />
              </div>
              <div className="info">
                <Link to="#" className="d-block">
                  Admin
                </Link>
              </div>
            </div>
            {/* Sidebar Menu */}
            <nav className="mt-2">
              <ul
                className="nav nav-pills nav-sidebar flex-column"
                data-widget="treeview"
                role="menu"
                data-accordion="false"
              >
                {/* Add icons to the links using the .nav-icon class
   with font-awesome or any other icon font library */}
                {menus(
                  '/dashboard',
                  'nav-icon fas fa-tachometer-alt',
                  'Dashboard'
                )}
                {menus(
                  '/profiling',
                  'nav-icon fas fa-users',
                  'Resident Profiling'
                )}
                {menus(
                  '/clearanceDetails',
                  'nav-icon far fa-file-alt',
                  'Barangay Clearance'
                )}
                {menus(
                  '/residency',
                  'nav-icon fas fa-file-contract',
                  'Barangay Residency'
                )}
                {menus('/blotter', 'nav-icon fas fa-gavel', 'Peace and Order')}
                {menus(
                  '/officials',
                  'nav-icon fas fa-landmark',
                  'Barangay Officials'
                )}
                {menus('/SK', 'nav-icon far fa-building', 'SK Officials')}
              </ul>
            </nav>
            {/* /.sidebar-menu */}
          </div>
          {/* /.sidebar */}
        </aside>
      ) : (
        ''
      )}
    </>
  )
})

export default Menu
