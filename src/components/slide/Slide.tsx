import React from 'react'
import SlideInDown from './SlideInDown'
import SlideInUp from './SlideInUp'
import SlideInLeft from './SlideInLeft'
import SlideInRight from './SlideInRight'
import SlideOutDown from './SlideOutDown'
import SlideOutUp from './SlideOutUp'
import SlideOutLeft from './SlideOutLeft'
import SlideOutRight from './SlideOutRight'
import FadeIn from '../fade/FadeIn'
import FadeOut from '../fade/FadeOut'
import { BaseAnimationProps } from '../../animation-factory'

export interface SlideProps extends BaseAnimationProps {
  out?: boolean
  up?: boolean
  right?: boolean
  down?: boolean
  left?: boolean
  direction?: 'up' | 'right' | 'down' | 'left'
  fade?: boolean
}

const Slide: React.FC<SlideProps> = React.forwardRef(
  ({ out, up, right, down, left, direction, fade, ...props }, ref) => {
    let SlideComponent: React.FC<BaseAnimationProps>
    let FadeComponent: React.FC<BaseAnimationProps> | undefined

    // Slide in
    SlideComponent = SlideInDown
    FadeComponent = FadeIn
    if (right || direction === 'right') {
      SlideComponent = SlideInRight
    }
    if (up || direction === 'up') {
      SlideComponent = SlideInUp
    }
    if (left || direction === 'left') {
      SlideComponent = SlideInLeft
    }

    // Slide out
    if (out) {
      FadeComponent = FadeOut
      SlideComponent = SlideOutUp
      if (right || direction === 'right') {
        SlideComponent = SlideOutRight
      }
      if (down || direction === 'down') {
        SlideComponent = SlideOutDown
      }
      if (left || direction === 'left') {
        SlideComponent = SlideOutLeft
      }
    }

    // Optionally add a fade transition as well
    if (fade) {
      return (
        <FadeComponent {...props} ref={ref}>
          <SlideComponent {...props} />
        </FadeComponent>
      )
    }
    return <SlideComponent {...props} ref={ref} />
  },
)

export default Slide
