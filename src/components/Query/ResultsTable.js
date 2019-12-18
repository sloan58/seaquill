import React from 'react'
import { useSelector } from 'react-redux'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css'
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css'
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css'
import BootstrapTable from 'react-bootstrap-table-next'
import filterFactory from 'react-bootstrap-table2-filter'
import paginationFactory from 'react-bootstrap-table2-paginator'
import ToolkitProvider from 'react-bootstrap-table2-toolkit'
import { useDispatch } from 'react-redux'
import { exportResults } from '../../store/actions/queryActions'

// reactstrap components
import { Button, Card, CardHeader, CardBody, Row } from 'reactstrap'

const ResultsTable = () => {
  const dispatch = useDispatch()
  const queryManager = useSelector(state => state.queryManager)

  const handleExport = () => {
    dispatch(exportResults(queryManager.results.rows))
  }

  return (
    queryManager.results.rows.length > 0 && (
      <Row>
        <Card className='card-chart'>
          <CardBody>
            <ToolkitProvider
              keyField='id'
              data={queryManager.results.rows}
              columns={queryManager.results.columns}
              bootstrap4={true}
              columnToggle
            >
              {props => (
                <React.Fragment>
                  {queryManager.exportInProgress ? (
                    <Button color='info' className='mb-1' disabled>
                      <span
                        className='spinner-grow spinner-grow-sm'
                        role='status'
                        aria-hidden='true'
                      ></span>{' '}
                      Exporting...
                    </Button>
                  ) : (
                    <Button
                      onClick={handleExport}
                      alt='Download'
                      color='info'
                      className='mb-1'
                    >
                      Export
                    </Button>
                  )}
                  <BootstrapTable
                    {...props.baseProps}
                    wrapperClasses='table-responsive mt-1'
                    filter={filterFactory()}
                    pagination={paginationFactory()}
                  />
                </React.Fragment>
              )}
            </ToolkitProvider>
          </CardBody>
        </Card>
      </Row>
    )
  )
}

export default ResultsTable
