# 🥧 react-animated-components 🥧

##### Easy-as-pie CSS animations for React.

_Because animations should be as easy as `<Rotate>🥧</Rotate>`_

[Live Demo with Storybook](https://jtschoonhoven.github.io/react-animated-components)

Built with Typescript. Just one dependency (`styled-components` 💅).

## Install

```sh
npm install --save react-animated-components
```

## Use

```tsx
import { Rotate } from 'react-animated-components'

/** Pie is boring... let's animate it! **/
const BoringPie = () => <span>🥧</span>

/** Pie is more delicious when it's rotating **/
const RotatingPie = () => {
  return (
    <Rotate>
      <BoringPie />
    </Rotate>
  )
}
```

## Docs

[jtschoonhoven.github.io/react-animated-components](https://jtschoonhoven.github.io/react-animated-components)

## Components

### Loops

- `<Rotate>`

### Entrances

- `<FadeIn>`
- `<SlideInDown>`
- `<SlideInUp>`
- `<SlideInLeft>`
- `<SlideInRight>`

# Exits

- `<FadeOut>`
- `<SlideOutDown>`
- `<SlideOutUp>`
- `<SlideOutLeft>`
- `<SlideOutRight>`

## Component API

Animated components all accept the following **optional** properties.

#### durationMs [number]

The total duration (in milliseconds) of one iteration of the animation.

#### timingFunc [string]

Defines how animations progress through each cycle. Accepts any valid value of the [`animation-timing-function`](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function) CSS property.

#### iterations [number | "infinite"]

The number of times to loop the animation, or "infinite".

#### onComplete [() => void]

Callback function, called when animation is complete. Useful for garbage collecting components that have exited, or for composing complex chains of effects.
