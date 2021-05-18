import animationFactory from '../../animation-factory'
import config from '../../globals'
import { wipeInY as keyframes } from '../../keyframes'

const Animation = animationFactory({
  keyframes,
  defaultDurationMs: config.durationMs.medium,
  defaultTimingFunc: config.timingFunc.easeIn,
  defaultIterations: config.iterations.once,
})

export default Animation
