import animationFactory from '../../animation-factory'
import config from '../../globals'
import { rotateCcw } from '../../keyframes'

const Animation = animationFactory({
  keyframes: rotateCcw,
  defaultDurationMs: config.durationMs.slow,
  defaultTimingFunc: config.timingFunc.linear,
  defaultIterations: config.iterations.infinite,
})

export default Animation
