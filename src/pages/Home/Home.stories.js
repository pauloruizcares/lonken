import React from 'react'
import Home from './Home'

export default {
  title: 'Lonken/Pages/Home',
  component: Home,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const Template = (args) => <Home {...args} />

export const Default = Template.bind({})
Default.args = {
  text: 'Home',
}
