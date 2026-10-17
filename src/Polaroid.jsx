import React from 'react'
const Polaroid = (props) => {
  return (
    <>
      <div className="card-body" style={{ transform: `rotate(${props.tilt ?? 0}deg)` }}>
        <img src={props.image} alt="Polaroid picture" className='cardimg' />
        <p className='caption'>{props.date}</p>
      </div>
    </>
  )
}

export default Polaroid