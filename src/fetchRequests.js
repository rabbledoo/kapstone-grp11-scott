const baseURL = `https://pretty-branched-skink.glitch.me/`;
//
export const signUpRequest = (username, displayName, password) => {
  return fetch(baseURL + "users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: "username",
      displayName: "displayName",
      password: "password",
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      return res;
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
