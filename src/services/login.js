import axios from "axios";

export default async function login(credentials) {
  const response = await axios.post("http://localhost:3003/api/login", credentials);
  return response.data;
}
