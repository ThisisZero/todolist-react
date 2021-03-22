import React from 'react';
import { Helmet } from 'react-helmet';

const TITLE = 'REACT TODO LIST'

class Header extends React.PureComponent {
  render () {
    return (
      <>
        <Helmet>
          <title>{ TITLE }</title>
        </Helmet>
      </>
    )
  }
}

export default Header
