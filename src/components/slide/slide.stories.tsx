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
        <div style={{ fontSize: '9rem', width: '180px' }}>💅</div>
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
} as Meta
