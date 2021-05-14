import animationFactory from '../../animation-factory'
import config from '../../globals'
import { rotateCw } from '../../keyframes'

const Animation = animationFactory({
  keyframes: rotateCw,
  defaultDurationMs: config.durationMs.slow,
  defaultTimingFunc: config.timingFunc.linear,
  defaultIterations: config.iterations.infinite,
})

export default Animation
