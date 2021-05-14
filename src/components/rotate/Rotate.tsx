import React from 'react'
import RotateCcw from './RotateCcw'
import RotateCw from './RotateCw'
import { BaseAnimationProps } from '../../animation-factory'

export interface RotateProps extends BaseAnimationProps {
  ccw?: boolean
}

const Rotate: React.FC<RotateProps> = React.forwardRef(({ ccw, ...props }, ref) => {
  if (ccw) {
    return <RotateCcw {...props} ref={ref} />
  }
  return <RotateCw {...props} ref={ref} />
})

export default Rotate
