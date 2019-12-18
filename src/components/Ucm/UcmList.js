import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteUcm } from '../../store/actions/ucmActions'
import { Link } from 'react-router-dom'

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Col,
  Row
} from 'reactstrap'

export class UcmList extends Component {
  render() {
    return (
      <React.Fragment>
        <Row>
          <Col>
            <Link to='/admin/ucms/create'>
              <Button color='success' className='float-left btn-round'>
                <i className='now-ui-icons ui-1_simple-add font-weight-bold'></i>
              </Button>
            </Link>
          </Col>
        </Row>
        <Row className='row-cols-1 row-cols-md-3'>
          {this.props.ucms.map(ucm => {
            return (
              <Col md='4' key={ucm.id}>
                <Card className='shadow border-0'>
                  <CardHeader className='text-info font-weight-bold' tag='h4'>
                    {ucm.name}
                    <hr className='mt-4' />
                  </CardHeader>
                  <UncontrolledDropdown>
                    <DropdownToggle
                      className='btn-round btn-outline-default btn-icon'
                      color='default'
                    >
                      <i className='now-ui-icons loader_gear' />
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>
                        <Link to={`/admin/ucms/${ucm.id}`}>Edit</Link>
                      </DropdownItem>
                      <DropdownItem
                        onClick={() => this.props.deleteUcm(ucm)}
                        color='danger'
                      >
                        Delete
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <CardBody>
                    <CardText>
                      <b className='text-muted'>IP Address:</b> {ucm.ip}
                    </CardText>
                    <CardText>
                      <b className='text-muted'>Username: </b>
                      {ucm.username}
                    </CardText>
                    <CardText>
                      <b className='text-muted'>API Version:</b> {ucm.version}
                    </CardText>
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
