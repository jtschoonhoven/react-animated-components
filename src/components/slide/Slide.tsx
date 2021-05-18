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
import WipeInX from '../wipe/WipeInX'
import WipeInY from '../wipe/WipeInY'
import WipeOutX from '../wipe/WipeOutX'
import WipeOutY from '../wipe/WipeOutY'
import { BaseAnimationProps } from '../../animation-factory'

export interface SlideProps extends BaseAnimationProps {
  out?: boolean
  up?: boolean
  right?: boolean
  down?: boolean
  left?: boolean
  direction?: 'up' | 'right' | 'down' | 'left'
  fade?: boolean
  wipe?: boolean
}

const Slide: React.FC<SlideProps> = React.forwardRef(
  ({ out, up, right, down, left, direction, fade, wipe, children, ...props }, ref) => {
    let SlideComponent: React.FC<BaseAnimationProps>
    let FadeComponent: React.FC<BaseAnimationProps> | undefined
    let WipeComponent: React.FC<BaseAnimationProps> | undefined

    // Slide in
    SlideComponent = SlideInDown
    FadeComponent = FadeIn
    WipeComponent = WipeInY

    if (right || direction === 'right') {
      SlideComponent = SlideInRight
      WipeComponent = WipeInX
    }
    if (up || direction === 'up') {
      SlideComponent = SlideInUp
    }
    if (left || direction === 'left') {
      SlideComponent = SlideInLeft
      WipeComponent = WipeInX
    }

    // Slide out
    if (out) {
      FadeComponent = FadeOut
      SlideComponent = SlideOutUp
      WipeComponent = WipeOutY

      if (right || direction === 'right') {
        SlideComponent = SlideOutRight
        WipeComponent = WipeOutX
      }
      if (down || direction === 'down') {
        SlideComponent = SlideOutDown
      }
      if (left || direction === 'left') {
        SlideComponent = SlideOutLeft
        WipeComponent = WipeOutX
      }
    }

    if (wipe && fade) {
      return (
        <WipeComponent {...props} ref={ref}>
          <FadeComponent {...props}>
            <SlideComponent {...props}>{children}</SlideComponent>
          </FadeComponent>
        </WipeComponent>
      )
    }

    if (wipe) {
      return (
        <WipeComponent {...props} ref={ref}>
          <SlideComponent {...props}>{children}</SlideComponent>
        </WipeComponent>
      )
    }

    if (fade) {
      return (
        <FadeComponent {...props} ref={ref}>
          <SlideComponent {...props}>{children}</SlideComponent>
        </FadeComponent>
      )
    }

    return (
      <SlideComponent ref={ref} {...props}>
        {children}
      </SlideComponent>
    )
  },
)

export default Slide
