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
  onActive?: () => void
  exitOnComplete?: boolean
  active?: boolean
  display?: Property.Display
  style?: React.CSSProperties
  delayMs?: number
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
  const Animation: React.FC<BaseAnimationProps> = React.forwardRef(
    ({ active, style, display, delayMs, onActive, onComplete, exitOnComplete, children, ...props }, ref) => {
      exitOnComplete = exitOnComplete !== undefined ? !!exitOnComplete : !!defaultExitOnComplete
      style = style !== undefined ? { display, ...style } : { display }

      const isActiveInitialState = active !== undefined ? !!active : !!defaultActive || delayMs === 0
      const durationMs = props.durationMs || defaultDurationMs
      const iterations = props.iterations || defaultIterations
      const [isActive, setIsActive] = React.useState(isActiveInitialState)
      const [isComplete, setIsComplete] = React.useState(false)

      // Add a "reset" method to the forwarded ref
      React.useImperativeHandle(ref, () => ({
        reset() {
          setIsComplete(false)
          setIsActive(false)
        },
      }))

      // Detect if active prop changes from false to true and update state
      React.useEffect(() => {
        !isActive && active && setIsActive(true)
      }, [active])

      // Call onActive function when animation first becomes active
      React.useEffect(() => {
        isActive && onActive && onActive()
      }, [isActive])

      // Detect when animation is complete then set isComplete and call onComplete
      React.useEffect(() => {
        let timeoutId: NodeJS.Timeout | undefined
        if (isActive) {
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

      // Detect when a delayed animation becomes active and set isActive
      React.useEffect(() => {
        let timeoutId: NodeJS.Timeout | undefined
        if (!isActive && typeof delayMs === 'number') {
          timeoutId = setTimeout(() => {
            setIsActive(true)
          }, delayMs)
        }
        // Teardown
        return () => {
          timeoutId && clearTimeout(timeoutId)
        }
      }, [isActive, delayMs])

      // If animation is not yet active, render only child components
      if (!isActive && !isComplete) {
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
    },
  )
  return Animation
}

export default animationFactory
