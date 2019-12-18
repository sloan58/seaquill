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
import ResultsTable from '../components/Query/ResultsTable'
import TargetSelector from '../components/Query/TargetSelector'
import QueryEditor from '../components/Query/QueryEditor'
import QueryButtons from '../components/Query/QueryButtons'

// reactstrap components
import { Card, CardHeader, CardBody, NavLink, Row, Col } from 'reactstrap'

// core components
import PanelHeader from 'components/PanelHeader/PanelHeader.jsx'

export default function Query() {
  return (
    <>
      <PanelHeader size='sm' />
      <div className='content'>
        <Row>
          <Col xs={12} md={12}>
            <Card className='card-chart'>
              <CardHeader>
                Query Editor
                <TargetSelector />
              </CardHeader>
              <CardBody>
                <QueryEditor />
                <QueryButtons />
              </CardBody>
            </Card>
          </Col>
        </Row>
        <ResultsTable />
      </div>
    </>
  )
}
