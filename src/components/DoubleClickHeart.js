import React, { Fragment, useState } from 'react'

const DoubleClickHeart = () => {
  const [likes, setLikes] = useState(0)
  const [showHeart, setShowHeart] = useState(false)
  const [heartPosition, setHeartPosition] = useState({})

  const doubleClickHandler = (e) => {
    setShowHeart(false)
    console.log('double click event')

    const x = e.clientX
    const y = e.clientY

    const leftOffset = e.target.offsetLeft
    const topOffset = e.target.offsetTop

    const xInside = x - leftOffset
    const yInside = y - topOffset

    setHeartPosition(
      (heartPosition) =>
        (heartPosition = { ...heartPosition, xInside, yInside })
    )

    setShowHeart(true)

    setLikes((likes) => likes + 1)

    setTimeout(() => {
      setShowHeart(false)
    }, 1000)
  }

  return (
    <Fragment>
      <h3>
        Double click on the image to <i className='fas fa-heart'></i> it
      </h3>
      <small>
        You liked it <span id='times'>{likes}</span> times
      </small>

      <div className='loveMe' onDoubleClick={(e) => doubleClickHandler(e)}>
        {showHeart && (
          <i
            className='fas fa-heart'
            style={{
              top: `${heartPosition.yInside}px`,
              left: `${heartPosition.xInside}px`,
            }}
          ></i>
        )}
      </div>
    </Fragment>
  )
}

export default DoubleClickHeart
