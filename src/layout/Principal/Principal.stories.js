import React from 'react'
import Principal from './Principal'

export default {
  title: 'Lonken/Layout/Principal',
  component: Principal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const Template = (args) => <Principal {...args} />

export const Default = Template.bind({})
Default.args = {
  text: 'Principal',
}
