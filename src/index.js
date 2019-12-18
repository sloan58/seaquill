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
import store from './store/store'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history'
import { Router, Route, Switch, Redirect } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.css'
import 'assets/scss/now-ui-dashboard.scss?v1.2.0'
import 'assets/css/demo.css'
import './styles/codeMirror.css'
import './styles/tables.css'

import AdminLayout from 'layouts/Admin.jsx'

const hist = createBrowserHistory()

ReactDOM.render(
  <Provider store={store}>
    <Router history={hist}>
      <Switch>
        <Route path='/admin' render={props => <AdminLayout {...props} />} />
        <Redirect to='/admin/dashboard' />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
)
