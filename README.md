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

## Demo

[jtschoonhoven.github.io/react-animated-components](https://jtschoonhoven.github.io/react-animated-components)

## Component API

### `<Rotate>`

**Props:**

- `ccw` [boolean]: If true, rotates counter-clockwise (default false)

##### Sub-components

- `<RotateCw>`
- `<RotateCcw>`

### `<Fade>`

**Props:**

- `out` [boolean]: If true, fades out and exits the DOM (default false)

##### Sub-components

- `<FadeIn>`
- `<FadeOut>`

### `<Slide>`

**Props:**

- `up` [boolean]: Slide up
- `down` [boolean]: Slide down
- `left` [boolean]: Slide left
- `right` [boolean]: Slide right
- `out` [boolean]: If true, slides out and exits the DOM (default false)

##### Sub-components

- `<SlideInDown>`
- `<SlideInUp>`
- `<SlideInLeft>`
- `<SlideInRight>`
- `<SlideOutDown>`
- `<SlideOutUp>`
- `<SlideOutLeft>`
- `<SlideOutRight>`

## Common Component API

Animated components all accept the following **optional** properties.

#### active

**[boolean]**

Controls when the animation begins. _Except for exit animations_, this defaults to true and animations begin automatically on mount. Exit animations do not run until `active` is set explicitly.

#### delayMs

**[number]**

Delays the animation start by the given number of milliseconds.

#### durationMs

**[number]**

The total duration (in milliseconds) of one iteration of the animation.

#### timingFunc

**[string]**

Defines how animations progress through each cycle. Accepts any valid value of the [`animation-timing-function`](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function) CSS property.

#### iterations

**[number | "infinite"]**

The number of times to loop the animation, or "infinite".

#### onComplete

**[() => void]**

Callback function, called when animation is complete. Useful for garbage collecting components that have exited, or for composing complex chains of effects.

#### onActive

**[() => void]**

Callback function, called when animation begins. Useful for chaining delayed animations.

#### display

**["inline-block" | "block"]**

A shorthand to set the CSS "display" property. **Do not use "inline"** this cannot be animated. Any valid CSS display property is valid, but in practice you should use either "inline-block" (the default) or "block".
