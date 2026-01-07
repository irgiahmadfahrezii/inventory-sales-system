import { cookies } from "next/headers";

const SESSION_KEY = "user_id";

export function setSession(userId: string) {
  cookies().set(SESSION_KEY, userId, {
    httpOnly: true,
    path: "/",
  });
}

export function getSession() {
  return cookies().get(SESSION_KEY)?.value;
}

export function clearSession() {
  cookies().delete(SESSION_KEY);
}
