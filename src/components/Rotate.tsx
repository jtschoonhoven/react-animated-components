import { keyframes } from 'styled-components'
import animationFactory from '../animation-factory'
import config from '../globals'

export const rotateKeyframes = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(359deg); }
`
const Rotate = animationFactory({
  keyframes: rotateKeyframes,
  defaultDurationMs: config.durationMs.slow,
  defaultTimingFunc: config.timingFunc.linear,
  defaultIterations: config.iterations.infinite,
})

export default Rotate
