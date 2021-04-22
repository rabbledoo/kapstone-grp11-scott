import create from "zustand";
import { devtools, redux } from "zustand/middleware";

const initialState = {
  user: { token: "" },
  displayName: "",
  messages: [],
};

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SIGNUP = "SIGNUP";
export const MESSAGELIST = "MESSAGELIST";
export const MESSAGEPOST = "MESSAGEPOST";
export const USERPROFILE = "USERPROFILE";
export const UPDATEUSERPROFILE = "UPDATEUSERPROFILE";

// define reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      return { user: action.payload };
    case LOGOUT:
      return { user: {} };
    case SIGNUP:
      return {
        username: action.payload,
        //user: action.payload.user,
        displayName: action.payload,
        //displayName: action.payload.displayName,
      };
    case MESSAGELIST:
      return {
        messages: action.payload.messages,
      };
    case MESSAGEPOST:
      return {
        inputText: action.payload,
      };
    case USERPROFILE:
      return {
        userInfo: action.payload.user,
      };
    case UPDATEUSERPROFILE:
      return {
        userInfo: action.payload.user,
      };
    default:
      return state;
  }
};

// create useStore hook
export const useStore = create(devtools(redux(reducer, initialState)));
