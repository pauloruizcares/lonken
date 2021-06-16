import React from 'react'
import Navbar from './Navbar'

export default {
  title: 'Lonken/Navbar',
  component: Navbar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const Template = (args) => <Navbar {...args} />

export const Default = Template.bind({})
Default.args = {
  text: 'Navbar',
}
