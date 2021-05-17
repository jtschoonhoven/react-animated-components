import React from 'react'
import { Property } from 'csstype'
import styled, { css, Keyframes, StyledComponent } from 'styled-components'
import config from './globals'

/**
 * Declare valid component types that can be animated.
 */
type ReactComponentType<P = any> = keyof JSX.IntrinsicElements | React.FC<P> | React.ComponentType<P>
export type ComponentType<P = any> = ReactComponentType<P> | StyledComponent<ReactComponentType<P>, any>

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
  style?: React.CSSProperties
  delayMs?: number
  fillMode?: Property.AnimationFillMode
  parentAnimation?: React.FC<BaseAnimationProps>
  childAnimation?: React.FC<BaseAnimationProps>
  inline?: boolean
}

type AnimatedReactComponentType<P extends BaseAnimationProps> = React.FC<P> | React.ComponentType<P>
export type AnimatedComponentType<P extends BaseAnimationProps> =
  | AnimatedReactComponentType<P>
  | StyledComponent<AnimatedReactComponentType<P>, any>

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
  defaultDelayMs?: number
  defaultFillMode?: Property.AnimationFillMode
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
  defaultDelayMs,
  defaultFillMode,
}: AnimationFactoryProps): React.FC<BaseAnimationProps> => {
  component = component || config.components.default
  defaultActive = defaultActive !== undefined ? !!defaultActive : true
  defaultDurationMs = defaultDurationMs || config.durationMs.slow
  defaultTimingFunc = defaultTimingFunc || config.timingFunc.linear
  defaultIterations = defaultIterations || config.iterations.once
  defaultFillMode = defaultFillMode || config.fillModes.default
  defaultDelayMs = defaultDelayMs || 0

  const componentCss = css`
    animation-name: ${keyframes};
    animation-duration: ${(props: BaseAnimationProps) => props.durationMs || defaultDurationMs}ms;
    animation-timing-function: ${(props: BaseAnimationProps) => props.timingFunc || defaultTimingFunc};
    animation-iteration-count: ${(props: BaseAnimationProps) => props.iterations || defaultIterations};
    animation-fill-mode: ${(props: BaseAnimationProps) => props.fillMode || defaultFillMode};
    animation-delay: ${(props: BaseAnimationProps) => props.delayMs || defaultDelayMs}ms;
  `

  // @ts-ignore
  const styledComponent = typeof component === 'string' ? styled[component] : styled(component)
  const DefaultComponent = styledComponent`${componentCss}`

  // Configure a function component
  const Animation: React.FC<BaseAnimationProps> = React.forwardRef(
    (
      {
        active,
        style,
        onActive,
        onComplete,
        exitOnComplete,
        parentAnimation,
        childAnimation,
        inline,
        children,
        ...props
      },
      ref,
    ) => {
      exitOnComplete = exitOnComplete !== undefined ? !!exitOnComplete : !!defaultExitOnComplete
      style = style || {}

      console.log({ inline })
      if (inline) {
        style.display = 'inline-block'
      }

      // Initialize state and constants
      const isActiveInitialState = active !== undefined ? !!active : !!defaultActive || props.delayMs === 0
      const durationMs = props.durationMs || defaultDurationMs
      const iterations = props.iterations || defaultIterations
      const [isActive, setIsActive] = React.useState(isActiveInitialState)
      const [isComplete, setIsComplete] = React.useState(false)
      const [forceRemount, setForceRemount] = React.useState(false)

      // Add "reset" and "activate" methods to the forwarded ref
      React.useImperativeHandle(ref, () => ({
        reset() {
          setIsComplete(false)
          setIsActive(false)
          setForceRemount(true)
        },
        activate() {
          setIsActive(true)
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

      // Reset forceRemount to false if triggered
      React.useEffect(() => {
        forceRemount && setForceRemount(false)
      }, [forceRemount])

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
      }, [durationMs, iterations, isActive])

      // Detect when a delayed animation becomes active and set isActive
      React.useEffect(() => {
        let timeoutId: NodeJS.Timeout | undefined
        if (!isActive && typeof props.delayMs === 'number') {
          timeoutId = setTimeout(() => {
            setIsActive(true)
          }, props.delayMs)
        }
        // Teardown
        return () => {
          timeoutId && clearTimeout(timeoutId)
        }
      }, [isActive, props.delayMs])

      let Component = DefaultComponent

      // Insert a child animation if one is defined
      if (childAnimation) {
        Component = React.useMemo(() => {
          const _Component = Component
          const ChildAnimation = childAnimation
          return (props: BaseAnimationProps) => (
            <_Component {...props}>
              <ChildAnimation {...props}>{children}</ChildAnimation>
            </_Component>
          )
        }, [])
      }

      // Wrap with a parent animation if one is defined
      if (parentAnimation) {
        Component = React.useMemo(() => {
          const _Component = Component
          const ParentAnimation = parentAnimation
          return (props: BaseAnimationProps) => (
            <ParentAnimation {...props}>
              <_Component {...props}>{children}</_Component>
            </ParentAnimation>
          )
        }, [])
      }

      // Force the Component to rerender if forceRemount is true
      if (forceRemount) {
        return <>{children}</>
      }
      // If animation exits on complete, remove from DOM on finish
      if (isComplete && exitOnComplete) {
        return <></>
      }
      // Else render the animated component
      console.log(style)
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
