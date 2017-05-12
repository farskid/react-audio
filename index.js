import React, { Component, PropTypes, defaultProps } from 'react'
import { generateUniqueId, logger } from './utils'

export default class Audio extends Component {

  constructor(props) {
    super(props)
    
    this.uniqueId = generateUniqueId()
    this.audio = null
  }

  componentDidMount() {

    /* Get ref */
    this.audio = this.refs[`audio-${this.uniqueId}`]

    /* Looping Logic */
    this.audio.addEventListener('ended', () => {
      if (!this.props.pause && this.props.loop) {
        logger('Audio Looped, Playing...')
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
      logger('Pausing Audio...')
      this.audio.pause()
    } else {
      logger('Playing Audio...')
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
  loop: false
}

