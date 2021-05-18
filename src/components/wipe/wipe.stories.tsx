import React from 'react'
import { Story, Meta } from '@storybook/react'
import Wipe from './Wipe'

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
      <Wipe {...args} ref={ref}>
        <div style={{ fontSize: '9rem', width: '180px' }}>💅</div>
      </Wipe>
    </>
  )
}

export const _Wipe = Template.bind({})
_Wipe.args = {}

// https://storybook.js.org/docs/react/essentials/controls
export default {
  title: 'Animations/Wipe',
  component: Wipe,
} as Meta
