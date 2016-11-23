import React, {Component, PropTypes, defaultProps} from 'react'

export default class Audio extends Component {

  constructor(props) {
    super(props)
    this.rand = Math.floor(9999 * Math.random() + 1)
    this.audio = null
    this.logger = (msg) => {
      if (this.props.logger) {
        console.info(`React-Audio: ${msg}`)
      }
    }
  }

  componentDidMount() {

    /* Get ref */
    this.audio = this.refs[`audio-${this.rand}`]

    /* Looping Logic */
    this.audio.addEventListener('ended', () => {
      if (!this.props.pause && this.props.loop) {
        this.logger('Audio Looped, Playing...')
        this.audio.currentTime = 0
        this.audio.play()
      }
    })
  }

  /* Prevent unnecessary renders */
  shouldComponentUpdate(nextProps) {
    return nextProps.pause != this.props.pause
  }

  /*  */
  componentWillUpdate(nextProps) {
    if (nextProps.pause) {
      this.logger('Pausing Audio...')
      this.audio.pause()
    } else {
      this.logger('Playing Audio...')
      this.audio.play()
    }
  }

  render() {
    return (
      <audio ref={`audio-${this.rand}`} src={this.props.source} />
    )
  }

}

Audio.PropTypes = {
  source: PropTypes.string.isRequired
}

Audio.defaultProps = {
  logger: true,
  loop: false
}

