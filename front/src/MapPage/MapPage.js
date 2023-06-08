import React from 'react'
import GoogleMapReact from 'google-map-react'
import { useSelector } from 'react-redux';
import './MapPage.css';
import Marker from './Marker';

const MapPage = () => {
  const myLocation = useSelector(state => state.map.myLocation);
  const onlineUsers = useSelector(state => state.map.onlineUsers);

  const defaultMapProps = {
    center: {
      lat: myLocation.lat,
      lng: myLocation.lng,
    },
   // zoom: 11,
  };

  return (
    <div className='map_page_container'>
      <GoogleMapReact>
         bootstrapURLKeys= {{ key: ''}}
         defaultCenter={defaultMapProps.center}
         defaultZoom = {defaultMapProps.zoom}

        {onlineUsers.map((onlineUser)=> {
          return <Marker 
           lat={onlineUser.coords.lat}
           lng={onlineUser.coords.lng}
           key={onlineUser.socketId}
           myself={onlineUser.myself}
           socketId={onlineUser.socketId}
           username={onlineUser.username}
           coords = {onlineUser.coords}
          />
        })} 
      </GoogleMapReact>
    </div>
  )
}

export default MapPage