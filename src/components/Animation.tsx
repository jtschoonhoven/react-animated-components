import React from 'react'
import { Keyframes } from 'styled-components'
import animationFactory, { BaseAnimationProps, ComponentType } from '../animation-factory'

export interface AnimationComponentProps extends BaseAnimationProps {
  keyframes: Keyframes
  component: ComponentType
}

/**
 * Generic animation component that wraps the animation factory for full customization.
 *
 * WARNING: Even though this is memoized, creating a styled-component from inside a function component is unsupported
 * by styled-components and they will log a violation to the console. Use this component at your own risk. If in doubt,
 * use animationFactory to safely create a reusable animated component.
 */
const Animation: React.FC<AnimationComponentProps> = ({ keyframes, component, children, ...props }) => {
  const AnimatedComponent = React.useMemo(() => {
    return animationFactory({ keyframes, component })
  }, [keyframes])
  return <AnimatedComponent {...props}>{children}</AnimatedComponent>
}

export default Animation
