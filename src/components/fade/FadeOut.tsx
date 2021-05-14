import animationFactory from '../../animation-factory'
import config from '../../globals'
import { fadeOut as keyframes } from '../../keyframes'

const Animation = animationFactory({
  keyframes,
  defaultDurationMs: config.durationMs.medium,
  defaultTimingFunc: config.timingFunc.linear,
  defaultIterations: config.iterations.once,
  defaultExitOnComplete: true,
  defaultActive: false,
})

export default Animation
