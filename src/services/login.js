import axio from "axios";

export default function login(credentials) {
  return axio.post("/api/login", credentials);
}
