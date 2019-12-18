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
/*eslint-disable*/
import React from 'react'
import { Container } from 'reactstrap'
// used for making the prop types of this component
import PropTypes from 'prop-types'

class Footer extends React.Component {
  render() {
    return (
      <footer
        className={'footer' + (this.props.default ? ' footer-default' : '')}
      >
        <Container fluid={this.props.fluid ? true : false}>
          <nav>
            <ul>
              <li>
                <a href='https://www.karmatek.io' target='_blank'>
                  karmatek.io
                </a>
              </li>
              <li>
                <a href='https://www.karmatek.io/about' target='_blank'>
                  About Us
                </a>
              </li>
              <li>
                <a href='https://www.karmatek.io/blog' target='_blank'>
                  Blog
                </a>
              </li>
            </ul>
          </nav>
        </Container>
      </footer>
    )
  }
}

Footer.propTypes = {
  default: PropTypes.bool,
  fluid: PropTypes.bool
}

export default Footer
