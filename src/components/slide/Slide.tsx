import React from 'react'
import SlideInDown from './SlideInDown'
import SlideInUp from './SlideInUp'
import SlideInLeft from './SlideInLeft'
import SlideInRight from './SlideInRight'
import SlideOutDown from './SlideOutDown'
import SlideOutUp from './SlideOutUp'
import SlideOutLeft from './SlideOutLeft'
import SlideOutRight from './SlideOutRight'
import { BaseAnimationProps } from '../../animation-factory'

export interface SlideProps extends BaseAnimationProps {
  out?: boolean
  up?: boolean
  right?: boolean
  down?: boolean
  left?: boolean
}

const Slide: React.FC<SlideProps> = React.forwardRef(({ out, up, right, down, left, ...props }, ref) => {
  // Slide out
  if (out) {
    if (right) {
      return <SlideOutRight {...props} ref={ref} />
    }
    if (down) {
      return <SlideOutDown {...props} ref={ref} />
    }
    if (left) {
      return <SlideOutLeft {...props} ref={ref} />
    }
    return <SlideOutUp {...props} ref={ref} />
  }

  // Slide in
  if (right) {
    return <SlideInRight {...props} ref={ref} />
  }
  if (up) {
    return <SlideInUp {...props} ref={ref} />
  }
  if (left) {
    return <SlideInLeft {...props} ref={ref} />
  }
  return <SlideInDown {...props} ref={ref} />
})

export default Slide
