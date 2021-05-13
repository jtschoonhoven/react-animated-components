import React from 'react'
import { Property } from 'csstype'
import styled, { css, Keyframes } from 'styled-components'
import config from './globals'

/**
 * Declare valid component types that can be animated.
 */
export type ComponentType = keyof JSX.IntrinsicElements | React.FC | React.ComponentType<any>

/**
 * Common properties for all animation components.
 */
export interface BaseAnimationProps extends Record<string, any> {
  durationMs?: number
  timingFunc?: Property.AnimationTimingFunction
  iterations?: Property.AnimationIterationCount
  onComplete?: () => void
  exitOnComplete?: boolean
}

/**
 * Arguments to animationFactory function.
 */
export interface AnimationFactoryProps {
  keyframes: Keyframes | string
  component?: ComponentType
  defaultDurationMs?: number
  defaultTimingFunc?: Property.AnimationTimingFunction
  defaultIterations?: Property.AnimationIterationCount
  defaultExitOnComplete?: boolean
}

/**
 * Factory function to configure and return an animated function component.
 */
const animationFactory = ({
  keyframes,
  component,
  defaultDurationMs,
  defaultTimingFunc,
  defaultIterations,
  defaultExitOnComplete,
}: AnimationFactoryProps): React.FC<BaseAnimationProps> => {
  component = component || config.components.default
  defaultDurationMs = defaultDurationMs || config.durationMs.slow
  defaultTimingFunc = defaultTimingFunc || config.timingFunc.linear
  defaultIterations = defaultIterations || config.iterations.once

  const componentCss = css`
    animation-name: ${keyframes};
    animation-duration: ${(props: BaseAnimationProps) => props.durationMs || defaultDurationMs}ms;
    animation-timing-function: ${(props: BaseAnimationProps) => props.timingFunc || defaultTimingFunc};
    animation-iteration-count ${(props: BaseAnimationProps) => props.iterations || defaultIterations};
  `
  const styledComponent = typeof component === 'string' ? styled[component] : styled(component)
  const Component = styledComponent`${componentCss}`

  // Configure a function component
  const Animation: React.FC<BaseAnimationProps> = ({ onComplete, exitOnComplete, children, ...props }) => {
    const [isComplete, setIsComplete] = React.useState(false)
    const durationMs = props.durationMs || defaultDurationMs
    const iterations = props.iterations || defaultIterations
    exitOnComplete = exitOnComplete !== undefined ? !!exitOnComplete : !!defaultExitOnComplete

    // Detect when animation is complete then set isComplete and call onComplete
    React.useEffect(() => {
      let timeoutId: NodeJS.Timeout | undefined
      if (iterations && !isNaN(iterations)) {
        timeoutId = setTimeout(() => {
          setIsComplete(true)
          onComplete && onComplete()
        }, durationMs * iterations)
      }
      return () => {
        timeoutId && clearTimeout(timeoutId)
      }
    }, [durationMs, iterations])

    if (exitOnComplete && isComplete) {
      return <></>
    }
    return <Component {...props}>{children}</Component>
  }
  return Animation
}

export default animationFactory
