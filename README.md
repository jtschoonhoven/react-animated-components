# react-animated-components

##### Easy CSS animations for React.

_Because animations should be as easy as `<Rotate>🥧</Rotate>`_

[jtschoonhoven.github.io/react-animated-components](https://jtschoonhoven.github.io/react-animated-components)

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

## Component API

Animated components all accept the following optional properties.

#### durationMs [number]

The total duration (in milliseconds) of one cycle of the animation.

#### timingFunc [string]

Defines how animations progress through each cycle. Accepts any valid value of the [`animation-timing-function`](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function) CSS property.

#### iterations [number | "infinite"]

The number of times to loop the animation.

#### component

The component to apply the animations to. This can be any valid tag name ("div", "span") or an actual React component type. By default, animations are applied to a `<span style="display: inline-block;">`.

> **NOTE:** Animations cannot be applied directly to components with `display: inline`, which is the default for tags like `<a>` and `<span>`. If you want to animate these directly, set `display: inline-block` and everything will be groovy.
> In addition, custom components must pass through the `classNames` property.
