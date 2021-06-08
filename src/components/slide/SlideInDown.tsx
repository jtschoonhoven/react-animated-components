import animationFactory from '../../animation-factory'
import config from '../../globals'
import { slideInDown as keyframes } from '../../keyframes'

const Animation = animationFactory({
  keyframes,
  defaultDurationMs: config.durationMs.fast,
  defaultTimingFunc: config.timingFunc.easeOut,
  defaultIterations: config.iterations.once,
  defaultFillMode: config.fillModes.enterAnimationDefault,
})

export default Animation
