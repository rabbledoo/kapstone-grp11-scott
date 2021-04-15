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
          set( { 
            user: { name: data.name, displayName: data.displayName, token: initialState.user.token },
          })
        );
    },
  }))
);

// return fetch(baseURL + "users", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(registerData),
// })
//   .then((res) => res.json())
//   .then((data) => console.log(data))
