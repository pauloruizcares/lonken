import React from 'react'
// import PropTypes from 'prop-types';
import Principal from '../../layout/Principal/Principal'


const About = (props) => {
  console.log(props)
  return (<div data-testid='About'>
    <Principal>
      About Component
    </Principal>
  </div>)
}

About.propTypes = {}

About.defaultProps = {}

export default About
