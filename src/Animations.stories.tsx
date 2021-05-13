import React from 'react'
import { Story, Meta } from '@storybook/react'
import Animation from './components/Animation'
import FadeIn from './components/FadeIn'
import FadeOut from './components/FadeOut'
import Rotate from './components/Rotate'

const Template: Story = ({ Component, ...args }) => {
  return (
    <>
      <Component {...args}>💅</Component>
    </>
  )
}

export const _FadeIn = Template.bind({})
_FadeIn.args = { Component: FadeIn }

export const _FadeOut = Template.bind({})

_FadeOut.args = { Component: FadeOut }

export const _Rotate = Template.bind({})
_Rotate.args = { Component: Rotate }

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
