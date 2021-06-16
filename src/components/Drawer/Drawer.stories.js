import React from 'react'
import Drawer from './Drawer'

export default {
  title: 'Lonken/Drawer',
  component: Drawer,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const Template = (args) => <Drawer {...args} />

export const Default = Template.bind({})
Default.args = {
  text: 'Drawer',
}
