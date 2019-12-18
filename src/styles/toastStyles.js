import { css } from 'glamor'

const toastStylingSuccess = {
  className: css({
    textAlign: 'center'
  }),
  bodyClassName: css({
    fontSize: '20px'
  }),
  progressClassName: css({
    background:
      'repeating-radial-gradient(circle at center, red 0, blue, green 30px)'
  })
}

export default toastStylingSuccess
