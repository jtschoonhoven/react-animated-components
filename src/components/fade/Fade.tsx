import React from 'react'
import FadeIn from './FadeIn'
import FadeOut from './FadeOut'
import { BaseAnimationProps } from '../../animation-factory'

export interface FadeProps extends BaseAnimationProps {
  out?: boolean
}

const Fade: React.FC<FadeProps> = React.forwardRef(({ out, ...props }, ref) => {
  if (out) {
    return <FadeOut {...props} ref={ref} />
  } else {
    return <FadeIn {...props} ref={ref} />
  }
})

export default Fade
