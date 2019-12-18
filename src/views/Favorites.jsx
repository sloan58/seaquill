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

// SeaQuill Imports
import FavoriteList from '../components/Favorite/FavoriteList'

// reactstrap components
import { Card, CardHeader, CardBody, Row, Col } from 'reactstrap'

// core components
import PanelHeader from 'components/PanelHeader/PanelHeader.jsx'

export default function Favorites() {
  return (
    <>
      <PanelHeader size='sm' />
      <div className='content'>
        <Row>
          <Col xs={12} md={12}>
            <Card className='card-chart'>
              <CardHeader tag='h6' className='text-info'>
                Favorites Manager
              </CardHeader>
              <CardBody>
                <FavoriteList />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  )
}
