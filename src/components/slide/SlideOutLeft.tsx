import animationFactory from '../../animation-factory'
import config from '../../globals'
import { slideOutLeft as keyframes } from '../../keyframes'

const Animation = animationFactory({
  keyframes,
  defaultDurationMs: config.durationMs.fast,
  defaultTimingFunc: config.timingFunc.easeIn,
  defaultIterations: config.iterations.once,
  defaultFillMode: config.fillModes.exitAnimationDefault,
  defaultExitOnComplete: true,
  defaultActive: false,
})

export default Animation
