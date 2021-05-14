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
  active?: boolean
  display?: Property.Display
  style?: React.CSSProperties
}

/**
 * Arguments to animationFactory function.
 */
export interface AnimationFactoryProps {
  keyframes: Keyframes
  component?: ComponentType
  defaultDurationMs?: number
  defaultTimingFunc?: Property.AnimationTimingFunction
  defaultIterations?: Property.AnimationIterationCount
  defaultExitOnComplete?: boolean
  defaultActive?: boolean
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
  defaultActive,
}: AnimationFactoryProps): React.FC<BaseAnimationProps> => {
  component = component || config.components.default
  defaultActive = defaultActive !== undefined ? !!defaultActive : true
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
  const Animation: React.FC<BaseAnimationProps> = ({
    onComplete,
    exitOnComplete,
    active,
    style,
    display,
    children,
    ...props
  }) => {
    exitOnComplete = exitOnComplete !== undefined ? !!exitOnComplete : !!defaultExitOnComplete
    active = active !== undefined ? !!active : !!defaultActive
    style = style !== undefined ? { display, ...style } : { display }

    const [isComplete, setIsComplete] = React.useState(false)
    const durationMs = props.durationMs || defaultDurationMs
    const iterations = props.iterations || defaultIterations

    // Detect when animation is complete then set isComplete and call onComplete
    React.useEffect(() => {
      let timeoutId: NodeJS.Timeout | undefined

      if (active) {
        if (typeof iterations === 'number' && typeof durationMs === 'number') {
          timeoutId = setTimeout(() => {
            setIsComplete(true)
            onComplete && onComplete()
            // @ts-ignore
          }, durationMs * iterations)
        }
      }
      // Teardown
      return () => {
        timeoutId && clearTimeout(timeoutId)
      }
    }, [durationMs, iterations, active])

    // If animation is not yet active, render only child components
    if (!active && !isComplete) {
      return <>{children}</>
    }
    // Else if animation exits on complete, remove from DOM if complete
    if (isComplete && exitOnComplete) {
      return <></>
    }
    // Else render animated component
    return (
      <Component {...props} style={style}>
        {children}
      </Component>
    )
  }
  return Animation
}

export default animationFactory
