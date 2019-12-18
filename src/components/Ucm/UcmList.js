import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteUcm } from '../../store/actions/ucmActions'
import { Link } from 'react-router-dom'

// reactstrap components
import { Button, Card, CardHeader, CardBody, Col, Row } from 'reactstrap'

export class UcmList extends Component {
  render() {
    return (
      <React.Fragment>
        <Row>
          <Col>
            <Link to='/admin/ucms/create'>
              <button type='button' className='btn btn-success float-left'>
                Add New
              </button>
            </Link>
          </Col>
        </Row>
        <Row className='row-cols-1 row-cols-md-3'>
          {this.props.ucms.map(ucm => {
            return (
              <Col md='3' key={ucm.id}>
                <Card className='shadow border-0'>
                  <CardHeader>
                    <h5 className='card-title'>{ucm.name}</h5>
                    <hr />
                  </CardHeader>
                  <CardBody>
                    <p className='card-text'>IP Address: {ucm.ip}</p>
                    <p className='card-text'>Username: {ucm.username}</p>
                    <p className='card-text'>API Version: {ucm.version}</p>
                    <Link to={`/admin/ucms/${ucm.id}`}>
                      <Button color='info'>Edit</Button>
                    </Link>
                    <Button
                      onClick={() => this.props.deleteUcm(ucm)}
                      color='danger'
                    >
                      Delete
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            )
          })}
        </Row>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    ucms: state.ucms
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteUcm: ucm => dispatch(deleteUcm(ucm))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UcmList)
