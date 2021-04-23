import { GETMESSAGES } from "./store/store";

const baseURL = `http://localhost:3000/`;
//
export const signUpRequest = (name, displayName, password) => {
  return fetch(baseURL + "users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name,
      displayName,
      password,
    }),
  }).then((res) => res.json());
};

export const loginRequest = (name, password) => {
  return fetch(baseURL + "users/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name,
      password,
    }),
  }).then((res) => res.json());
};

export const getUserList = () => {
  return fetch(baseURL + "users", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
};

export const getUser = (id) => {
  return fetch(baseURL + "/users/:" + id, {
    method: GET,
    headers: { "Content-Type": "application/json" },
  });
};

// export const postMessage = (message) => {
//   return fetch(baseURL + "messages", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       text,
//     }),
//   }).then((res) => res.json());
// };
// export const getMessage = (messageId) => {
//   return fetch(baseURL + `messages/${messageId}`).then((res) => res.json());
// };
// export const patchUser = (username, newUserInfo) => {
//   return fetch(baseURL + `users/${username}`, {
//     method: "PATCH",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(newUserInfo),
//   }).then((res) => res.json());
// }
