/*!

=========================================================
* Now UI Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from 'react'
import { NavLink } from 'react-router-dom'
import { Nav } from 'reactstrap'
import { useSelector, useDispatch } from 'react-redux'
import {
  downloadUpdate,
  performUpdate
} from '../../store/actions/updateActions'

import { FaBuffer, FaRedo, FaCloudDownloadAlt } from 'react-icons/fa'
import { IconContext } from 'react-icons'

const Sidebar = props => {
  // verifies if routeName is the one active (in browser input)
  const activeRoute = routeName => {
    return props.location.pathname.indexOf(routeName) > -1 ? 'active' : ''
  }

  const updater = useSelector(state => state.updater)
  const dispatch = useDispatch()

  return (
    <div className='sidebar' data-color={props.backgroundColor}>
      <div className='logo'>
        <a href='/' className='simple-text logo-mini mr-0 pb-0'>
          <div className='logo-img'>
            <IconContext.Provider
              value={{
                size: '2em',
                color: '#ffb236'
              }}
            >
              <div>
                <FaBuffer />
              </div>
            </IconContext.Provider>
          </div>
        </a>
        <a href='/' className='simple-text logo-normal pt-1'>
          <p>SeaQuill</p>
        </a>
      </div>
      <div className='sidebar-wrapper'>
        <Nav>
          {props.routes.map((prop, key) => {
            if (prop.redirect || prop.invisible) return null
            return (
              <li
                className={
                  activeRoute(prop.layout + prop.path) +
                  (prop.pro ? ' active active-pro' : '')
                }
                key={key}
              >
                <NavLink
                  to={prop.layout + prop.path}
                  className='nav-link'
                  activeClassName='active'
                >
                  <i className={'now-ui-icons ' + prop.icon} />
                  <p>{prop.name}</p>
                </NavLink>
              </li>
            )
          })}
          {updater.available && (
            <React.Fragment>
              <div className='logo'></div>
              <li onClick={() => dispatch(downloadUpdate())}>
                <NavLink to='#' className='nav-link'>
                  <IconContext.Provider
                    value={{
                      size: '2em',
                      color: '#ffb236',
                      className: 'mr-3'
                    }}
                  >
                    <div>
                      <FaCloudDownloadAlt />
                      Download Update
                    </div>
                  </IconContext.Provider>
                </NavLink>
              </li>
            </React.Fragment>
          )}
          {updater.downloading && (
            <React.Fragment>
              <div className='logo'></div>
              <li>
                <NavLink to='#' className='nav-link'>
                  <span
                    className='spinner-grow spinner-grow-sm text-warning mr-3'
                    role='status'
                    aria-hidden='true'
                  ></span>
                  Downloading Update
                </NavLink>
              </li>
            </React.Fragment>
          )}
          {updater.readyToInstall && (
            <React.Fragment>
              <div className='logo'></div>
              <li onClick={() => dispatch(performUpdate())}>
                <NavLink to='#' className='nav-link'>
                  <IconContext.Provider
                    value={{
                      size: '2em',
                      color: '#ffb236',
                      className: 'mr-3'
                    }}
                  >
                    <div>
                      <FaRedo />
                      Install Update
                    </div>
                  </IconContext.Provider>
                </NavLink>
              </li>
            </React.Fragment>
          )}
        </Nav>
      </div>
    </div>
  )
}

export default Sidebar
