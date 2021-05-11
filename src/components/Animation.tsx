import React from 'react'
import { Keyframes } from 'styled-components'
import animationFactory, { BaseAnimationProps } from '../animation-factory'

export interface AnimationComponentProps extends BaseAnimationProps {
  keyframes: Keyframes
}

/**
 * Generic animation component that accepts custom keyframes.
 */
const Animation: React.FC<AnimationComponentProps> = ({
  keyframes,
  component,
  durationMs,
  timingFunc,
  iterations,
  children,
  ...props
}) => {
  const AnimatedComponent = React.useMemo(() => {
    return animationFactory({ keyframes })
  }, [keyframes])
  return (
    <AnimatedComponent
      component={component}
      durationMs={durationMs}
      timingFunc={timingFunc}
      iterations={iterations}
      {...props}
    >
      {children}
    </AnimatedComponent>
  )
}

export default Animation
