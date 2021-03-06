import styled from 'styled-components'

const config = {
  durationMs: {
    fast: 500,
    medium: 1000,
    slow: 2000,
  },
  timingFunc: {
    linear: 'linear',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
  },
  fillModes: {
    default: 'none',
    exitAnimationDefault: 'forwards',
    enterAnimationDefault: 'backwards',
  },
  iterations: {
    once: 1,
    infinite: 'infinite',
  },
  components: {
    default: styled.div`
      overflow: clip;
      box-sizing: border-box;
    `,
  },
} as const

export default config
