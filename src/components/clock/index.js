import React from 'react'
import PropTypes from 'prop-types'

const Clock = ({ city, addressFirstLine, addressSecondLine, hours, minutes, src }) => {

    return (
        <div className='clock'>
            <div className='header'>
                <img src={src} alt='clock' className='clock-img' />
                <h3 className='header-title'>{city}</h3>
            </div>
            <p>{addressFirstLine}</p>
            <p>{addressSecondLine}</p>
            <h2><time>{hours}:{minutes}</time></h2>
        </div>
    )
}

Clock.propTypes = {
    city: PropTypes.string.isRequired,
    addressFirstLine: PropTypes.string.isRequired,
    addressSecondLine: PropTypes.string.isRequired,
    hours: PropTypes.number.isRequired,
    minutes: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired
  };

export default Clock