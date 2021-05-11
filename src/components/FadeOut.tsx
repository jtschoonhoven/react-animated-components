import { keyframes } from 'styled-components'
import animationFactory from '../animation-factory'
import config from '../globals'

export const fadeOutKeyframes = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`
const FadeOut = animationFactory({
  keyframes: fadeOutKeyframes,
  defaultDurationMs: config.durationMs.medium,
  defaultTimingFunc: config.timingFunc.linear,
  defaultIterations: config.iterations.once,
})

export default FadeOut
