import React from "react";
import { useSelector } from "react-redux";

import { calculateDistanceBetweenCoords } from "../../utils/location";
import ActionButtons from "./ActionButtons";

const Label = ({ fontSize, text }) => {
  return (
    <p className="map_page_card_label" style={{ fontSize }}>
      {text}
    </p>
  );
};

const UserInfoCard = ({ username, userLocation, socketId }) => {
  const myLocation = useSelector((state) => state.map.myLocation);

  return (
    <div className="map_page_card_container">
      <Label text={username} fontSize="16px" />
      <Label
        fontSize="14px"
        text={`${calculateDistanceBetweenCoords(myLocation, userLocation)}km`}
      />
      <ActionButtons socketId={socketId} username={username} />
    </div>
  );
};

export default UserInfoCard;
