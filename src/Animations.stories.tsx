import React from 'react'
import { Story, Meta } from '@storybook/react'
import Animation from './components/Animation'

// Loops
import Rotate from './components/loops/Rotate'

// Entrances
import FadeIn from './components/entrances/FadeIn'
import SlideInDown from './components/entrances/SlideInDown'
import SlideInUp from './components/entrances/SlideInUp'
import SlideInLeft from './components/entrances/SlideInLeft'
import SlideInRight from './components/entrances/SlideInRight'

// Exits
import FadeOut from './components/exits/FadeOut'
import SlideOutDown from './components/exits/SlideOutDown'
import SlideOutUp from './components/exits/SlideOutUp'
import SlideOutLeft from './components/exits/SlideOutLeft'
import SlideOutRight from './components/exits/SlideOutRight'

const Template: Story = ({ Component, ...args }) => {
  return (
    <>
      <Component {...args}>💅</Component>
    </>
  )
}

// Loops
export const _Rotate = Template.bind({})
_Rotate.args = { Component: Rotate }

// Entrances
export const _FadeIn = Template.bind({})
_FadeIn.args = { Component: FadeIn }

export const _SlideInDown = Template.bind({})
_SlideInDown.args = { Component: SlideInDown }

export const _SlideInUp = Template.bind({})
_SlideInUp.args = { Component: SlideInUp }

export const _SlideInLeft = Template.bind({})
_SlideInLeft.args = { Component: SlideInLeft }

export const _SlideInRight = Template.bind({})
_SlideInRight.args = { Component: SlideInRight }

// Exits
export const _FadeOut = Template.bind({})
_FadeOut.args = { Component: FadeOut }
export const _SlideOutDown = Template.bind({})
_SlideOutDown.args = { Component: SlideOutDown }
export const _SlideOutUp = Template.bind({})
_SlideOutUp.args = { Component: SlideOutUp }
export const _SlideOutLeft = Template.bind({})
_SlideOutLeft.args = { Component: SlideOutLeft }
export const _SlideOutRight = Template.bind({})
_SlideOutRight.args = { Component: SlideOutRight }

export default {
  title: 'Animations',
  component: Animation,
  argTypes: {
    durationMs: {
      type: 'number',
    },
    timingFunc: {
      type: 'text',
    },
    iterations: {
      type: 'text',
    },
    Component: {
      table: {
        disable: true,
      },
    },
    keyframes: {
      table: {
        disable: true,
      },
    },
    component: {
      table: {
        disable: true,
      },
    },
    onComplete: {
      table: {
        disable: true,
      },
    },
  },
} as Meta
