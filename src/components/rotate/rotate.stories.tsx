import React from 'react'
import { Story, Meta } from '@storybook/react'
import Rotate from './Rotate'

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
      <Rotate {...args} ref={ref}>
        <h1 style={{ textAlign: 'center', fontSize: '9rem' }}>💅</h1>
      </Rotate>
    </>
  )
}

export const _Rotate = Template.bind({})
_Rotate.args = {}

// https://storybook.js.org/docs/react/essentials/controls
export default {
  title: 'Animations/Rotate',
  component: Rotate,
} as Meta
