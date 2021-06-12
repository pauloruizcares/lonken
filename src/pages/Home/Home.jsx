import React from 'react'
// import PropTypes from 'prop-types';
import Principal from '../../layout/Principal/Principal'

const Home = (props) => {
  console.log(props)
  return (<div data-testid='Home'>
    <Principal>
      Home Component
    </Principal>
  </div>)
}

Home.propTypes = {}

Home.defaultProps = {}

export default Home
