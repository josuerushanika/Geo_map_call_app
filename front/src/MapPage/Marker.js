import React from 'react'
import locationIcon from '../resources/images/location-icon.svg'

const Marker = (props) => {
    const {
         myself, socketId, username, coords
    } = props;
  return (
    <div className='map_page_marker_container'>
       <img src={locationIcon} alt={username} className='map_page_marker_img'/>
    </div>
  )
}

export default Marker