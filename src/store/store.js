import create from "zustand";
import { devtools, redux } from "zustand/middleware";

const initialState = {
  user: { _id: "", name: "", displayName: "" },
  messages: [
    {
      id: 0,
      createdBy: "intialTestUsr",
      subject: "Subject1",
      message: "text1",
      createdAt: "11:36 am",
    },
    {
      id: 1,
      createdBy: "intialTestUsr",
      subject: "Subject2",
      message: "text2",
      createdAt: "11:36 pm",
    },
  ],
};

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SIGNUP = "SIGNUP";
export const GETMESSAGES = "GETMESSAGES";
export const MESSAGEPOST = "MESSAGEPOST";
export const USERPROFILE = "USERPROFILE";
export const UPDATEUSERPROFILE = "UPDATEUSERPROFILE";

// define reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      return { user: action.payload };
    case LOGOUT:
      return { user: "" };
    case SIGNUP:
      console.log(action.payload);
      return {
        ...state,
        user: action.payload,
      };
    case GETMESSAGES:
      return state.messages;
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
export const [useStore, store] = create(devtools(redux(reducer, initialState)));
