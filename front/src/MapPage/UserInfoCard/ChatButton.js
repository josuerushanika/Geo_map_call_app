import React from "react";
import chatIcon from "../../resources/images/chat-icon.svg";

const ChatButton = ({ socketId, username }) => {
  const handleAddChatbox = () => {};

  return (
    <img
      src={chatIcon}
      className="map_page_card_img"
      onClick={handleAddChatbox}
    ></img>
  );
};

export default ChatButton;
