import animationFactory from '../../animation-factory'
import config from '../../globals'
import { slideOutRight as keyframes } from '../../keyframes'

const Animation = animationFactory({
  keyframes,
  defaultDurationMs: config.durationMs.fast,
  defaultTimingFunc: config.timingFunc.easeIn,
  defaultIterations: config.iterations.once,
  defaultExitOnComplete: true,
  defaultActive: false,
})

export default Animation
