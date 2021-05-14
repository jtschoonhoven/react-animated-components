import React from 'react'
import { Story, Meta } from '@storybook/react'
import Slide from './Slide'

const Template: Story = ({ ...args }) => {
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
      <Slide {...args} ref={ref}>
        <h1>💅</h1>
      </Slide>
    </>
  )
}

export const _Slide = Template.bind({})
_Slide.args = {}

// https://storybook.js.org/docs/react/essentials/controls
export default {
  title: 'Animations/Slide',
  component: Slide,
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
    exitOnComplete: {
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
    active: {
      type: 'boolean',
      defaultValue: true,
    },
    display: {
      type: 'text',
      options: ['inline-block', 'block'],
    },
    style: {
      type: 'object',
    },
    delayMs: {
      type: 'number',
      defaultValue: 250,
    },
  },
} as Meta
