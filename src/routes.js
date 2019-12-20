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
import Query from 'views/Query.jsx'
import Favorites from 'views/Favorites.jsx'
import UcmListView from 'views/Ucm/UcmListView.jsx'
import UcmEditView from 'views/Ucm/UcmEditView.jsx'
import UcmCreateView from 'views/Ucm/UcmCreateView.jsx'

var dashRoutes = [
  // {
  //   path: '/dashboard',
  //   name: 'Dashboard',
  //   icon: 'design_app',
  //   component: Dashboard,
  //   layout: '/admin'
  // },
  {
    path: '/dashboard',
    name: 'Query',
    icon: 'design_palette',
    component: Query,
    layout: '/admin'
  },
  {
    path: '/ucms/create',
    name: "UCM's",
    icon: 'tech_tv',
    component: UcmCreateView,
    layout: '/admin',
    invisible: true
  },
  {
    path: '/ucms/:id',
    name: "UCM's",
    icon: 'tech_tv',
    component: UcmEditView,
    layout: '/admin',
    invisible: true
  },
  {
    path: '/ucms',
    name: "UCM's",
    icon: 'tech_tv',
    component: UcmListView,
    layout: '/admin'
  },
  {
    path: '/favorites',
    name: 'Favorites',
    icon: 'location_bookmark',
    component: Favorites,
    layout: '/admin'
  }
]
export default dashRoutes
