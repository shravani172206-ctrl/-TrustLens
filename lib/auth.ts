import { apiRequest } from "./api";

export interface LoginData {
  email: string;
  password: string;
}

export interface SignupData {
  name: string;
  email: string;
  password: string;
}

export async function login(data: LoginData) {
  return apiRequest("/auth/login", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export async function signup(data: SignupData) {
  return apiRequest("/auth/signup", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export function saveToken(token: string) {
  localStorage.setItem("token", token);
}

export function getToken() {
  return localStorage.getItem("token");
}

export function logout() {
  localStorage.removeItem("token");
}