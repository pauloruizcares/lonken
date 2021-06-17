import React from 'react'
import Footer from './Footer'

export default {
  title: 'Lonken/Footer',
  component: Footer,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const Template = (args) => <Footer {...args} />

export const Default = Template.bind({})
Default.args = {
  text: 'Footer',
}
