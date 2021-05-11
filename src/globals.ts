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
    easeInOut: 'ease-in-out',
  },
  iterations: {
    once: 1,
    infinite: 'infinite',
  },
  components: {
    default: styled.span`
      display: inline-block;
    `,
  },
} as const

export default config
