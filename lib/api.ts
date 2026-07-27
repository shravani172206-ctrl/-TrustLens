const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export async function apiRequest(
  endpoint: string,
  options: RequestInit = {}
) {
  const token =
    typeof window !== "undefined"
      ? localStorage.getItem("token")
      : null;

  const response = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token && {
        Authorization: `Bearer ${token}`,
      }),
      ...(options.headers || {}),
    },
  });

  if (!response.ok) {
    throw new Error("Request failed");
  }

  return response.json();
}