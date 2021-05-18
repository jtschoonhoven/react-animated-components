import React from 'react'
import WipeInX from './WipeInX'
import WipeInY from './WipeInY'
import WipeOutX from './WipeOutX'
import WipeOutY from './WipeOutY'
import FadeIn from '../fade/FadeIn'
import FadeOut from '../fade/FadeOut'
import SlideInDown from '../slide/SlideInDown'
import SlideOutLeft from '../slide/SlideOutLeft'
import SlideOutUp from '../slide/SlideOutUp'
import { BaseAnimationProps } from '../../animation-factory'
import SlideInRight from '../slide/SlideInRight'

export interface WipeProps extends BaseAnimationProps {
  out?: boolean
  x?: boolean
  direction?: 'x' | 'y'
  fade?: boolean
  slide?: boolean
}

const Wipe: React.FC<WipeProps> = React.forwardRef(({ out, x, direction, fade, slide, children, ...props }, ref) => {
  let WipeComponent: React.FC<BaseAnimationProps>
  let SlideComponent: React.FC<BaseAnimationProps>
  let FadeComponent: React.FC<BaseAnimationProps>

  // Wipe in
  WipeComponent = WipeInY
  FadeComponent = FadeIn
  SlideComponent = SlideInDown

  if (x || direction === 'x') {
    WipeComponent = WipeInX
    SlideComponent = SlideInRight
  }

  // Wipe out
  if (out) {
    FadeComponent = FadeOut
    WipeComponent = WipeOutY
    SlideComponent = SlideOutUp

    if (x || direction === 'x') {
      SlideComponent = SlideOutLeft
      WipeComponent = WipeOutX
    }
  }

  if (slide && fade) {
    return (
      <WipeComponent ref={ref} {...props}>
        <SlideComponent {...props}>
          <FadeComponent {...props}>{children}</FadeComponent>
        </SlideComponent>
      </WipeComponent>
    )
  }

  if (slide) {
    return (
      <WipeComponent ref={ref} {...props}>
        <SlideComponent {...props}>{children}</SlideComponent>
      </WipeComponent>
    )
  }

  if (fade) {
    return (
      <WipeComponent ref={ref} {...props}>
        <FadeComponent {...props}>{children}</FadeComponent>
      </WipeComponent>
    )
  }

  return (
    <WipeComponent ref={ref} {...props}>
      {children}
    </WipeComponent>
  )
})

export default Wipe
