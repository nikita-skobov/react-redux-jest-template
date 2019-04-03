import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './randomDog.css'

class RandomDog extends Component {
  renderDogSection() {
    const { dogUrl } = this.props

    if (dogUrl) {
      return <img className="dog-image" src={dogUrl} alt="doggo" />
    }

    return (
      <div className="dog-placeholder">
        No dog loaded yet. Get some!
      </div>
    )
  }

  render() {
    const { fetchDog } = this.props

    return (
      <div className="random-dog-container">
        <button type="button" className="dog-button" onClick={() => fetchDog()}>
          GET ME A DOG
        </button>
        {this.renderDogSection()}
      </div>
    )
  }
}

RandomDog.defaultProps = {
  dogUrl: '',
  fetchDog: () => {},
}

RandomDog.propTypes = {
  dogUrl: PropTypes.string,
  fetchDog: PropTypes.func,
}

export default RandomDog
