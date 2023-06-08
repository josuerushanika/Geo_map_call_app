import React from "react";

const LoginInput = (props) => {
  const { username, setUsername } = props;

  const handleValueChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <input
      className="l_page_input"
      value={username}
      onChange={handleValueChange}
    />
  );
};

export default LoginInput;
