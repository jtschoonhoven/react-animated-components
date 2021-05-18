import animationFactory from '../../animation-factory'
import config from '../../globals'
import { wipeOutY as keyframes } from '../../keyframes'

const Animation = animationFactory({
  keyframes,
  defaultDurationMs: config.durationMs.medium,
  defaultTimingFunc: config.timingFunc.easeOut,
  defaultIterations: config.iterations.once,
  defaultFillMode: config.fillModes.exitAnimationDefault,
  defaultExitOnComplete: true,
  defaultActive: false,
})

export default Animation
