import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUcm } from '../../store/actions/ucmActions'
import { Link, useHistory } from 'react-router-dom'

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardText,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Col,
  Row
} from 'reactstrap'

const UcmList = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const ucms = useSelector(state => state.ucms)

  return (
    <React.Fragment>
      <Row className='pb-4'>
        <Col>
          <Link to='/admin/ucms/create'>
            <Button color='success' className='float-left btn-round'>
              <i className='now-ui-icons ui-1_simple-add font-weight-bold'></i>
            </Button>
          </Link>
        </Col>
      </Row>
      <Row className='row-cols-1 row-cols-md-3'>
        {ucms.map(ucm => {
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
                    <DropdownItem
                      onClick={() => history.push(`/admin/ucms/${ucm.id}`)}
                    >
                      Edit
                    </DropdownItem>
                    <DropdownItem
                      className='text-danger'
                      onClick={() => dispatch(deleteUcm(ucm))}
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

export default UcmList
