import React from 'react'
import About from './About'

export default {
  title: 'Lonken/Pages/About',
  component: About,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const Template = (args) => <About {...args} />

export const Default = Template.bind({})
Default.args = {
  text: 'About',
}
