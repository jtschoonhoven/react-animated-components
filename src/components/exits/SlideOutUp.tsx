import animationFactory from '../../animation-factory'
import config from '../../globals'
import { slideOutUp as keyframes } from '../../keyframes'

const Animation = animationFactory({
  keyframes,
  defaultDurationMs: config.durationMs.fast,
  defaultTimingFunc: config.timingFunc.easeIn,
  defaultIterations: config.iterations.once,
  defaultExitOnComplete: true,
})

export default Animation
