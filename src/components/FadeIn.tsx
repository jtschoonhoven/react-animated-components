import { keyframes } from 'styled-components'
import animationFactory from '../animation-factory'
import config from '../globals'

const fadeInKeyframes = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`
const FadeIn = animationFactory({
  keyframes: fadeInKeyframes,
  defaultDurationMs: config.durationMs.medium,
  defaultTimingFunc: config.timingFunc.linear,
  defaultIterations: config.iterations.once,
})

export default FadeIn
