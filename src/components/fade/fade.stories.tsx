import React from 'react'
import { Story, Meta } from '@storybook/react'
import Fade from './Fade'

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
      <Fade {...args} ref={ref}>
        <h1 style={{ textAlign: 'center', fontSize: '9rem' }}>💅</h1>
      </Fade>
    </>
  )
}

export const _Fade = Template.bind({})
_Fade.args = {}

// https://storybook.js.org/docs/react/essentials/controls
export default {
  title: 'Animations/Fade',
  component: Fade,
} as Meta
