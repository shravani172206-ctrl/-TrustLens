import { getToken } from "./auth";

export function isAuthenticated() {
  return !!getToken();
}