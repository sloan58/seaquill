const soap = require('strong-soap').soap
const _ = require('lodash')
const path = require('path')

function executeSqlQuery(query, target) {
  const auth =
    'Basic ' +
    Buffer.from(`${target.username}:${target.password}`).toString('base64')
  const url = path.join(__dirname, `schema/${target.version}/AXLAPI.wsdl`)

  return new Promise(function(resolve, reject) {
    soap.createClient(url, (err, client) => {
      client.setEndpoint(`https://${target.ip}:8443/axl/`)
      client.addHttpHeader('Authorization', auth)
      client.addHttpHeader('Content-Type', 'text/xml; charset=utf-8')
      client.addHttpHeader(
        'SOAPAction',
        `CUCM:DB ver=${target.version} executeSQLQuery`
      )

      client.setSecurity(
        new soap.ClientSSLSecurity(undefined, undefined, undefined, {
          rejectUnauthorized: false
        })
      )

      client.executeSQLQuery(
        {
          sql: query
        },
        (err, result) => {
          if (err) {
            let message
            let statusCode = _.get(err, 'response.statusCode', false)
            let faultString = _.get(
              err,
              'root.Envelope.Body.Fault.faultstring',
              false
            )

            if (!statusCode) {
              message = `Could not connect - Please check the IP address and try again.`
            } else if (statusCode === '401') {
              message = `Unauthorized - Please check the AXL account information and try again.\n`
            } else if (faultString) {
              message = faultString
            } else {
              message = `An unknown error occurred - AXL API Response: ${err.response.statusMessage} ${statusCode}`
            }
            console.log('AXL Error:', message, statusCode, faultString)
            return reject(message)
          }

          if (result.return === 'undefined') {
            return reject('No Results')
          }

          let results =
            result.return !== undefined
              ? Array.isArray(result.return.row)
                ? result.return.row
                : [result.return.row]
              : []
          resolve(results)
        },
        { timeout: 5000 }
      )
    })
  })
}

module.exports.executeSqlQuery = executeSqlQuery
