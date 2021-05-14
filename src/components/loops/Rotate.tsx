import animationFactory from '../../animation-factory'
import config from '../../globals'
import { rotate } from '../../keyframes'

const Animation = animationFactory({
  keyframes: rotate,
  defaultDurationMs: config.durationMs.slow,
  defaultTimingFunc: config.timingFunc.linear,
  defaultIterations: config.iterations.infinite,
})

export default Animation
