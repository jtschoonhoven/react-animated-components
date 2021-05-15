import React from 'react'
import { Story, Meta } from '@storybook/react'
import Rotate from './components/rotate/Rotate'
import FadeIn from './components/fade/FadeIn'
import SlideInDown from './components/slide/SlideInDown'

const Template: Story = () => {
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
      <Rotate parentAnimation={FadeIn} childAnimation={SlideInDown} ref={ref}>
        <h1>💅</h1>
      </Rotate>
    </>
  )
}

export const ParentAndChildProps = Template.bind({})

// https://storybook.js.org/docs/react/essentials/controls
export default { title: 'Animations/Advanced' } as Meta
