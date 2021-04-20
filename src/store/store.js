// imports here...
import create from "zustand";
import { devtools } from "zustand/middleware";
const initialState = { user: { token: "" } };
export const useStore = create(
  devtools((set) => ({
    initialState,
    setNewUser: (url, formData) => {
      return fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          displayName: formData.displayName,
          password: formData.password,
        }),
      })
        .then((res) => res.json())
        .then((data) =>
          set({
            user: {
              name: data.name,
              displayName: data.displayName,
              token: initialState.user.token,
            },
          })
        );
    },
    setUserLogin: (url, formData) => {
      return fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          password: formData.password,
        }),
      })
        .then((res) => res.json())
        .then((data) =>
          set({
            user: {
              id: data.id,
              name: data.name,
              // displayName: data.displayName,
              token: data.accessToken,
            },
          })
        )
        .then(() => console.log(initialState.user.token));
    },
    getProfile: (url) => {
      return fetch(url, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) =>
          set({
            user: {
              name: data.name,
              displayName: data.displayName,
            },
          })
        );
    },
  }))
);

// export const getUserInfo = (username) => {
//   console.log(username);
//   return fetch(baseURL + `users/${username}`)
//     .then((res) => res.json())

//     .catch((error) => console.log(error));
// };

// return fetch(baseURL + "users", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(registerData),
// })
//   .then((res) => res.json())
//   .then((data) => console.log(data))
