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

```jsx
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

_Scroll down for more examples!_

## Demo

[jtschoonhoven.github.io/react-animated-components](https://jtschoonhoven.github.io/react-animated-components)

## High-Level Component API

### `<Rotate>`

**Props:**

- `ccw` [`boolean`]: If true, rotates counter-clockwise (default false)

**Sub-components:**

- `<RotateCw>`
- `<RotateCcw>`

### `<Fade>`

**Props:**

- `out` [`boolean`]: If true, fades out and exits the DOM (default false)

**Sub-components:**

- `<FadeIn>`
- `<FadeOut>`

### `<Slide>`

**Props:**

- `out` [`boolean`]: If true, slides out and exits the DOM (default false)
- `fade` [`boolean`]: If true, adds a fade animation
- `up` [`boolean`]: Slide up
- `down` [`boolean`]: Slide down
- `left` [`boolean`]: Slide left
- `right` [`boolean`]: Slide right
- `direction` [`"up" | "down" | "left" | "right"`]: Slide direction, an alternative to boolean direction props

**Sub-components:**

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

### `active`

**[`boolean`]:** Controls when the animation begins. _Except for exit animations_, this defaults to true and animations begin automatically on mount. Exit animations do not run until `active` is set explicitly.

### `delayMs`

**[`number`]:** Delays the animation start by the given number of milliseconds.

### `durationMs`

**[`number`]:** The total duration (in milliseconds) of one iteration of the animation.

### `timingFunc`

**[`string`]:** Defines how animations progress through each cycle. Accepts any valid value of the [`animation-timing-function`](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function) CSS property.

### `iterations`

**[`number | "infinite"`]:** The number of times to loop the animation, or "infinite".

### `inline`

**[`boolean`]:** Toggle the display mode from `display:block` (the default) to `display:inline-block`. Inline may be more appropriate for animating icons, or for anything that appears inside a text block. _NEVER_ override this to `display:inline` as these can't be animated.

### `onActive`

**[`() => void`]:** Callback function, called when animation begins. Useful for chaining delayed animations.

### `onComplete`

**[`() => void`]:** Callback function, called when animation is complete. Useful for garbage collecting components that have exited, or for composing complex chains of effects.

### `childAnimation`

**[`React.FC<BaseAnimationProps>`]:** Wrap another animated component inside the current animation. Both animations will receive the same props. This can be a nice way to reduce boilerplate when combining animations with identical props.

### `parentAnimation`

**[`React.FC<BaseAnimationProps>`]:** Same as the `childAnimation` prop, but the current component becomes the child of the new parent.

## Examples

### Composing Combined Effects

```jsx
import { Rotate } from 'react-animated-components'
import { FadeIn } from 'react-animated-components'

// Create a composite effect that fades in a rotating pie
const ComposedFadeInAndRotate = () => {
  return (
    <FadeIn>
      <Rotate>🥧</Rotate>
    </FadeIn>
  )
}

// ...or with `childAnimation` prop
const FadeInAndRotateChildAnimation = ({ children }) => {
  return <FadeIn childAnimation={Rotate}>🥧</FadeIn>
}
```

### Timed Transitions

```jsx
import { SlideInDown } from 'react-animated-components'
import { FadeOut } from 'react-animated-components'

// Slide in a pie from above, then fade out after 3 seconds
const SlideInAndFadeout = () => {
  return (
    <FadeOut delayMs={3000}>
      <SlideInDown durationMs={500}>🥧</SlideInDown>
    </FadeOut>
  )
}
```

### Chained Transitions

```jsx
import { SlideInDown } from 'react-animated-components'
import { FadeOut } from 'react-animated-components'

// Wait for the slide entrance to complete before exiting
const SlideInAndFadeout = () => {
  const [didEnter, setDidEnter] = React.useState(false)
  const onDidEnter = () => setDidEnter(true)
  return (
    <FadeOut active={didEnter}>
      <SlideInDown onComplete={onDidEnter}>🥧</SlideInDown>
    </FadeOut>
  )
}
```

### Custom Animations

```jsx
import { keyframes } from 'styled-components'
import { animationFactory } from 'react-animated-components'

const myKeyframes = keyframes`
  from { transform: rotate(359deg); }
  to { transform: rotate(0deg); }
`

// Use the animationFactory to create a reausable animated component
const CustomAnimation = animationFactory({ keyframes: myKeyframes })

// Use custom animations just like any other animated component
const UseCustomAnimation = () => {
  return <CustomAnimation durationMs={500}>🥧</CustomAnimation>
}
```
