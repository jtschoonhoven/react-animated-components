import React from 'react'
import { Keyframes } from 'styled-components'
import animationFactory, { BaseAnimationProps, ComponentType } from '../animation-factory'

export interface AnimationComponentProps extends BaseAnimationProps {
  keyframes: Keyframes
  component: ComponentType
}

/**
 * Generic animation component that wraps the animation factory for full customization.
 */
const Animation: React.FC<AnimationComponentProps> = ({ keyframes, component, children, ...props }) => {
  const AnimatedComponent = React.useMemo(() => {
    return animationFactory({ keyframes, component })
  }, [keyframes])
  return <AnimatedComponent {...props}>{children}</AnimatedComponent>
}

export default Animation
