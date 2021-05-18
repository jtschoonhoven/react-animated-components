import { Keyframes, keyframes } from 'styled-components'
import { KeyframeProps } from './animation-factory'

/**
 * Fades
 */
export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`

/**
 * Rotations
 */
export const rotateCw = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`

export const rotateCcw = keyframes`
  from {
    transform: rotate(359deg);
  }
  to {
    transform: rotate(0deg);
  }
`

/**
 * Slides
 */
export const slideInDown = keyframes`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, 0, 0);
  }
`

export const slideInUp = keyframes`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, 0, 0);
  }
`

export const slideInRight = keyframes`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, 0, 0);
  }
`

export const slideInLeft = keyframes`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, 0, 0);
  }
`

export const slideOutDown = keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`

export const slideOutUp = keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`

export const slideOutRight = keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`

export const slideOutLeft = keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`

/**
 * Wipes
 */
export const wipeOutY = (props: KeyframeProps): Keyframes => {
  return keyframes`
  from {
    height: ${props.heightPx}px;
   }
   to {
    height: 0px;
    visibility: hidden;
   }
  `
}

export const wipeOutX = (props: KeyframeProps): Keyframes => {
  return keyframes`
  from {
    width: ${props.widthPx}px;
   }
   to {
    width: 0px;
    visibility: hidden;
   }
  `
}

export const wipeInY = (props: KeyframeProps): Keyframes => {
  return keyframes`
  0% {
    visibility: hidden;
    position: absolute;
    z-index: -999;
    left: -2000px;
    bottom: -2000px;
  }
  1% {
    height: 0px;
    position: relative;
    visibility: visible;
  }
  100% {
     height: ${props.heightPx}px;
   }
  `
}

export const wipeInX = (props: KeyframeProps): Keyframes => {
  return keyframes`
  0% {
    visibility: hidden;
    position: absolute;
    z-index: -999;
    left: -2000px;
    bottom: -2000px;
  }
  1% {
    width: 0px;
    position: relative;
    visibility: visible;
  }
  100% {
    width: ${props.widthPx}px;
   }
  `
}
