import React from 'react';
import styled, { css, keyframes } from 'styled-components';

const config = {
    durationMs: {
        fast: 500,
        medium: 1000,
        slow: 2000,
    },
    timingFunc: {
        linear: 'linear',
        easeIn: 'ease-in',
        easeInOut: 'ease-in-out',
    },
    iterations: {
        once: 1,
        infinite: 'infinite',
    },
    components: {
        default: styled.span `
      display: inline-block;
    `,
    },
};

/**
 * Factory function to configure and return an animated function component.
 */
const animationFactory = ({ keyframes, defaultComponent, defaultDurationMs, defaultTimingFunc, defaultIterations, }) => {
    defaultComponent = defaultComponent || config.components.default;
    defaultDurationMs = defaultDurationMs || config.durationMs.slow;
    defaultTimingFunc = defaultTimingFunc || config.timingFunc.linear;
    defaultIterations = defaultIterations || config.iterations.once;
    // Configure a function component
    const Animation = ({ component, durationMs, timingFunc, iterations, children, ...props }) => {
        // Memoize styled components to avoid regenerating on each render
        const Component = React.useMemo(() => {
            const animationCss = css `
        animation-name: ${keyframes};
        animation-duration: ${durationMs || defaultDurationMs}ms;
        animation-timing-function: ${timingFunc || defaultTimingFunc};
        animation-iteration-count ${iterations || defaultIterations};
      `;
            // Handle string component declarations
            if (typeof component === 'string') {
                // @ts-ignore
                // prettier-ignore
                return styled[component] `${animationCss}`;
            }
            // Handle an undefined (default) component declaration
            if (typeof component === 'undefined') {
                // @ts-ignore
                // prettier-ignore
                return styled(defaultComponent) `${animationCss}`;
            }
            // Handle a real component declaration
            return styled(component) `
        ${animationCss}
      `;
        }, [component, keyframes, durationMs, timingFunc, iterations]);
        return React.createElement(Component, Object.assign({}, props), children);
    };
    return Animation;
};

/**
 * Generic animation component that accepts custom keyframes.
 */
const Animation = ({ keyframes, component, durationMs, timingFunc, iterations, children, ...props }) => {
    const AnimatedComponent = React.useMemo(() => {
        return animationFactory({ keyframes });
    }, [keyframes]);
    return (React.createElement(AnimatedComponent, Object.assign({ component: component, durationMs: durationMs, timingFunc: timingFunc, iterations: iterations }, props), children));
};

const rotateKeyframes = keyframes `
  from { transform: rotate(0deg); }
  to { transform: rotate(359deg); }
`;
const Rotate = animationFactory({
    keyframes: rotateKeyframes,
    defaultDurationMs: config.durationMs.slow,
    defaultTimingFunc: config.timingFunc.linear,
    defaultIterations: config.iterations.infinite,
});

const fadeInKeyframes = keyframes `
  from { opacity: 0; }
  to { opacity: 1; }
`;
const FadeIn = animationFactory({
    keyframes: fadeInKeyframes,
    defaultDurationMs: config.durationMs.medium,
    defaultTimingFunc: config.timingFunc.linear,
    defaultIterations: config.iterations.once,
});

const fadeOutKeyframes = keyframes `
  from { opacity: 1; }
  to { opacity: 0; }
`;
const FadeOut = animationFactory({
    keyframes: fadeOutKeyframes,
    defaultDurationMs: config.durationMs.medium,
    defaultTimingFunc: config.timingFunc.linear,
    defaultIterations: config.iterations.once,
});

export { Animation, FadeIn, FadeOut, Rotate, animationFactory, config as globals };
//# sourceMappingURL=index.js.map
