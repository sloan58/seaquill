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
import React from 'react'
import { connect } from 'react-redux'
import { getUcms } from '../store/actions/ucmActions'
import { getFavorites } from '../store/actions/favoriteActions'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from 'perfect-scrollbar'

// reactstrap components
import { Route, Switch, Redirect } from 'react-router-dom'

// core components
import Navbar from 'components/Navbars/Navbar.jsx'
import Footer from 'components/Footer/Footer.jsx'
import Sidebar from 'components/Sidebar/Sidebar.jsx'

import routes from 'routes.js'

var ps

class Dashboard extends React.Component {
  state = {
    backgroundColor: 'blue'
  }
  mainPanel = React.createRef()
  componentDidMount() {
    this.props.getUcms()
    this.props.getFavorites()

    if (navigator.platform.indexOf('Win') > -1) {
      ps = new PerfectScrollbar(this.mainPanel.current)
      document.body.classList.toggle('perfect-scrollbar-on')
    }
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf('Win') > -1) {
      ps.destroy()
      document.body.classList.toggle('perfect-scrollbar-on')
    }
  }
  componentDidUpdate(e) {
    if (e.history.action === 'PUSH') {
      this.mainPanel.current.scrollTop = 0
      document.scrollingElement.scrollTop = 0
    }
  }
  handleColorClick = color => {
    this.setState({ backgroundColor: color })
  }
  render() {
    return (
      <div className='wrapper'>
        <Sidebar
          {...this.props}
          routes={routes}
          backgroundColor={this.state.backgroundColor}
        />
        <div className='main-panel' ref={this.mainPanel}>
          <Navbar {...this.props} />
          <ToastContainer autoClose={2000} />
          <Switch>
            {routes.map((prop, key) => {
              return (
                <Route
                  path={prop.layout + prop.path}
                  component={prop.component}
                  key={key}
                />
              )
            })}
            <Redirect from='/' to='/dashboard' />
          </Switch>
          <Footer fluid />
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUcms: () => dispatch(getUcms()),
    getFavorites: () => dispatch(getFavorites())
  }
}

export default connect(null, mapDispatchToProps)(Dashboard)
