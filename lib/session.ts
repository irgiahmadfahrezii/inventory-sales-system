import { cookies } from "next/headers";

const SESSION_KEY = "user_id";

export async function getSession(): Promise<string | null> {
  const cookieStore = await cookies();
  const session = cookieStore.get(SESSION_KEY);
  return session?.value ?? null;
}
