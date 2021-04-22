const baseURL = `http://localhost:4000`;

//
export const signUpRequest = (username, displayName, password) => {
  return fetch(baseURL + "users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username,
      displayName,
      password,
    }),
  })
    .then((res) => res.json())
    .then((res) => res);
};
