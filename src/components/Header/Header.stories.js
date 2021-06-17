import React from 'react'
import Header from './Header'
import Home from '../../pages/Home'
import About from '../../pages/About'

export default {
  title: 'Lonken/Header',
  component: Header,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const routes = [
  {
    to: '/',
    exact: true,
    title: 'Home',
    Page: () => <Home/>,
  },
  {
    to: '/about',
    title: 'About',
    Page: () => <About/>,
  },
]

const Template = (args) => <Header {...args} />

export const Default = Template.bind({})
Default.args = {
  routes,
}
