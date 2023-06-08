import * as socketConn from "../../socketConnection/socketConn";

export const proceedWithLogin = (data) => {
  socketConn.login(data);
};
