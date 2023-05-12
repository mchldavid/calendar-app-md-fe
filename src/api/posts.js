import axios from "axios"

export function getPostsLogin(email, pass) {
  return axios
    .post(`http://localhost:3000/login`, {
      email: email,
      password: pass,
    })
    .then((res) => res.data)
}
