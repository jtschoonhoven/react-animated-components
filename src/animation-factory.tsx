import React from 'react'
import styled, { css, Keyframes } from 'styled-components'
import { Property } from 'csstype'
import config from './globals'

/**
 * Declare valid component types that can be animated.
 */
export type ComponentType = keyof JSX.IntrinsicElements | React.FC | React.ComponentType<any>

/**
 * Common properties for all animation components.
 */
export interface BaseAnimationProps extends Record<string, any> {
  component?: ComponentType
  durationMs?: number
  timingFunc?: Property.AnimationTimingFunction
  iterations?: Property.AnimationIterationCount
}

/**
 * Arguments to animationFactory function.
 */
export interface AnimationFactoryProps {
  keyframes: Keyframes
  defaultComponent?: ComponentType
  defaultDurationMs?: number
  defaultTimingFunc?: Property.AnimationTimingFunction
  defaultIterations?: Property.AnimationIterationCount
}

/**
 * Factory function to configure and return an animated function component.
 */
const animationFactory = ({
  keyframes,
  defaultComponent,
  defaultDurationMs,
  defaultTimingFunc,
  defaultIterations,
}: AnimationFactoryProps): React.FC<BaseAnimationProps> => {
  defaultComponent = defaultComponent || config.components.default
  defaultDurationMs = defaultDurationMs || config.durationMs.slow
  defaultTimingFunc = defaultTimingFunc || config.timingFunc.linear
  defaultIterations = defaultIterations || config.iterations.once

  // Configure a function component
  const Animation: React.FC<BaseAnimationProps> = ({
    component,
    durationMs,
    timingFunc,
    iterations,
    children,
    ...props
  }) => {
    // Memoize styled components to avoid regenerating on each render
    const Component = React.useMemo(() => {
      const animationCss = css`
        animation-name: ${keyframes};
        animation-duration: ${durationMs || defaultDurationMs}ms;
        animation-timing-function: ${timingFunc || defaultTimingFunc};
        animation-iteration-count ${iterations || defaultIterations};
      `
      // Handle string component declarations
      if (typeof component === 'string') {
        return styled[component]`
          ${animationCss}
        `
      }
      // Handle an undefined (default) component declaration
      if (typeof component === 'undefined') {
        return styled(defaultComponent)`
          ${animationCss}
        `
      }
      // Handle a real component declaration
      return styled(component)`
        ${animationCss}
      `
    }, [component, keyframes, durationMs, timingFunc, iterations])
    return <Component {...props}>{children}</Component>
  }
  return Animation
}

export default animationFactory
