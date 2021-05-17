import React from 'react'
import { Story, Meta } from '@storybook/react'
import Rotate from './components/rotate/Rotate'
import FadeIn from './components/fade/FadeIn'
import SlideInDown from './components/slide/SlideInDown'
import FadeOut from './components/fade/FadeOut'

export default { title: 'Animations/Advanced' } as Meta

const Template: Story = ({ Component }) => {
  return <Component />
}

export const ParentAndChildProps = Template.bind({})
ParentAndChildProps.args = {
  Component: () => {
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
          <h1 style={{ textAlign: 'center', fontSize: '9rem' }}>💅</h1>
        </Rotate>
      </>
    )
  },
}

export const AutoVanishingAlerts = Template.bind({})
AutoVanishingAlerts.args = {
  Component: () => {
    const initialState: Array<number> = []
    const [items, setItems] = React.useState(initialState)

    const createItem = () => {
      setItems((oldItems) => [...oldItems, Date.now()])
    }

    const deleteItem = (item: number) => {
      setItems((oldItems) => [...oldItems.filter((i) => i !== item)])
    }

    const Items = items.map((item) => {
      return (
        <FadeOut
          active
          key={item}
          durationMs={1500}
          onComplete={() => {
            deleteItem(item)
          }}
          display="block"
        >
          <p>Alert!</p>
        </FadeOut>
      )
    })

    return (
      <>
        <div>
          <p>Num alerts: {items.length}</p>
          <button onClick={createItem}>Create</button>
          <button onClick={() => items.length && deleteItem(items[0])}>Delete</button>
        </div>
        {Items}
      </>
    )
  },
}
