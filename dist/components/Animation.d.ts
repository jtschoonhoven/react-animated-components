import React from 'react';
import { Keyframes } from 'styled-components';
import { BaseAnimationProps } from '../animation-factory';
export interface AnimationComponentProps extends BaseAnimationProps {
    keyframes: Keyframes;
}
/**
 * Generic animation component that accepts custom keyframes.
 */
declare const Animation: React.FC<AnimationComponentProps>;
export default Animation;
