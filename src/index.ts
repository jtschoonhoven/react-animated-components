export * from './keyframes'
export { default as globals } from './globals'
export { default as animationFactory, AnimationFactoryProps, BaseAnimationProps } from './animation-factory'
export { default as Animation, AnimationComponentProps } from './components/Animation'

// Loops
export { default as Rotate } from './components/loops/Rotate'

// Entrances
export { default as FadeIn } from './components/entrances/FadeIn'
export { default as SlideInDown } from './components/entrances/SlideInDown'
export { default as SlideInUp } from './components/entrances/SlideInUp'
export { default as SlideInLeft } from './components/entrances/SlideInLeft'
export { default as SlideInRight } from './components/entrances/SlideInRight'

// Exits
export { default as FadeOut } from './components/exits/FadeOut'
export { default as SlideOutDown } from './components/exits/SlideOutDown'
export { default as SlideOutUp } from './components/exits/SlideOutUp'
export { default as SlideOutLeft } from './components/exits/SlideOutLeft'
export { default as SlideOutRight } from './components/exits/SlideOutRight'
