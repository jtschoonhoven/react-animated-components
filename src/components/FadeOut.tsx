import { keyframes } from 'styled-components'
import animationFactory from '../animation-factory'
import config from '../globals'

const fadeOutKeyframes = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`
const FadeOut = animationFactory({
  keyframes: fadeOutKeyframes,
  defaultDurationMs: config.durationMs.medium,
  defaultTimingFunc: config.timingFunc.linear,
  defaultIterations: config.iterations.once,
  defaultExitOnComplete: true,
})

export default FadeOut
