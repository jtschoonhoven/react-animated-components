import React from 'react'
import { Story, Meta } from '@storybook/react'
import Animation from './components/Animation'

// Fades
import FadeIn from './components/fade/FadeIn'
import FadeOut from './components/fade/FadeOut'

// Rotations
import RotateCw from './components/rotate/RotateCw'
import RotateCcw from './components/rotate/RotateCcw'

// Slides
import SlideInDown from './components/slide/SlideInDown'
import SlideInUp from './components/slide/SlideInUp'
import SlideInLeft from './components/slide/SlideInLeft'
import SlideInRight from './components/slide/SlideInRight'
import SlideOutDown from './components/slide/SlideOutDown'
import SlideOutUp from './components/slide/SlideOutUp'
import SlideOutLeft from './components/slide/SlideOutLeft'
import SlideOutRight from './components/slide/SlideOutRight'

// Wipes
import WipeOutY from './components/wipe/WipeOutY'
import WipeOutX from './components/wipe/WipeOutX'
import WipeInY from './components/wipe/WipeInY'
import WipeInX from './components/wipe/WipeInX'

const Template: Story = ({ Component, ...args }) => {
  const ref = React.useRef(null)
  return (
    <>
      <div>
        <button
          onClick={() => {
            ref.current && ref.current.reset()
          }}
        >
          Reset
        </button>
      </div>
      <Component ref={ref} {...args}>
        <div style={{ fontSize: '9rem', width: '180px' }}>💅</div>
      </Component>
    </>
  )
}

// Rotations
export const _RotateCw = Template.bind({})
_RotateCw.args = { Component: RotateCw }

export const _RotateCcw = Template.bind({})
_RotateCcw.args = { Component: RotateCcw }

// Fades
export const _FadeIn = Template.bind({})
_FadeIn.args = { Component: FadeIn }

export const _FadeOut = Template.bind({})
_FadeOut.args = { Component: FadeOut }

// Slides
export const _SlideOutDown = Template.bind({})
_SlideOutDown.args = { Component: SlideOutDown }

export const _SlideOutUp = Template.bind({})
_SlideOutUp.args = { Component: SlideOutUp }

export const _SlideOutLeft = Template.bind({})
_SlideOutLeft.args = { Component: SlideOutLeft }

export const _SlideOutRight = Template.bind({})
_SlideOutRight.args = { Component: SlideOutRight }

export const _SlideInDown = Template.bind({})
_SlideInDown.args = { Component: SlideInDown }

export const _SlideInUp = Template.bind({})
_SlideInUp.args = { Component: SlideInUp }

export const _SlideInLeft = Template.bind({})
_SlideInLeft.args = { Component: SlideInLeft }

export const _SlideInRight = Template.bind({})
_SlideInRight.args = { Component: SlideInRight }

// Wipes
export const _WipeOutY = Template.bind({})
_WipeOutY.args = { Component: WipeOutY }

export const _WipeOutX = Template.bind({})
_WipeOutX.args = { Component: WipeOutX }

export const _WipeInY = Template.bind({})
_WipeInY.args = { Component: WipeInY }

export const _WipeInX = Template.bind({})
_WipeInX.args = { Component: WipeInX }

// https://storybook.js.org/docs/react/essentials/controls
export default {
  title: 'Animations/LowLevel',
  component: Animation,
  argTypes: {
    inline: {
      type: 'boolean',
    },
    durationMs: {
      type: 'number',
    },
    delayMs: {
      type: 'number',
      defaultValue: 0,
    },
    timingFunc: {
      type: 'text',
    },
    iterations: {
      type: 'text',
    },
    exitOnComplete: {
      type: 'boolean',
    },
    active: {
      type: 'boolean',
      defaultValue: true,
    },
    style: {
      type: 'object',
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
    onActive: {
      table: {
        disable: true,
      },
    },
  },
} as Meta
