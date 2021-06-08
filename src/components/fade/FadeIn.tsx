import animationFactory from '../../animation-factory'
import config from '../../globals'
import { fadeIn as keyframes } from '../../keyframes'

const Animation = animationFactory({
  keyframes,
  defaultDurationMs: config.durationMs.medium,
  defaultTimingFunc: config.timingFunc.linear,
  defaultIterations: config.iterations.once,
  defaultFillMode: config.fillModes.enterAnimationDefault,
})

export default Animation
