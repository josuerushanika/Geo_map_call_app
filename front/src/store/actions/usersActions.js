import store from "../store"
import { setOnlineUsers } from "../../MapPage/mapSlice";

export const onlineUsersHandler = (socketId, usersData) => {
    store.dispatch( setOnlineUsers(usersData.map(user => {
       if (user.socketId === socketId) {
        user.myself = true
       }
       return user;
    })
    )
    );
};