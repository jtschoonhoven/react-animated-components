import React from 'react';
import { Keyframes } from 'styled-components';
import { Property } from 'csstype';
/**
 * Declare valid component types that can be animated.
 */
export declare type ComponentType = keyof JSX.IntrinsicElements | React.FC | React.ComponentType<any>;
/**
 * Common properties for all animation components.
 */
export interface BaseAnimationProps extends Record<string, any> {
    component?: ComponentType;
    durationMs?: number;
    timingFunc?: Property.AnimationTimingFunction;
    iterations?: Property.AnimationIterationCount;
}
/**
 * Arguments to animationFactory function.
 */
export interface AnimationFactoryProps {
    keyframes: Keyframes;
    defaultComponent?: ComponentType;
    defaultDurationMs?: number;
    defaultTimingFunc?: Property.AnimationTimingFunction;
    defaultIterations?: Property.AnimationIterationCount;
}
/**
 * Factory function to configure and return an animated function component.
 */
declare const animationFactory: ({ keyframes, defaultComponent, defaultDurationMs, defaultTimingFunc, defaultIterations, }: AnimationFactoryProps) => React.FC<BaseAnimationProps>;
export default animationFactory;
