import React from "react";

const LoginButton = ({ onClickHandler, disabled }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClickHandler}
      className="l_page_login_button"
    >
      Login
    </button>
  );
};

export default LoginButton;
