import { User } from "@/types/user";

const API_ENDPOINT = process.env.NEXT_PUBLIC_API_URL;

export async function getAllUsers(): Promise<User[]> {
  const response = await fetch(`${API_ENDPOINT}/users`);
  const users = await response.json();
  return users.filter((user: any) => user.is_active);
}

export async function getSuspendedUsers(): Promise<User[]> {
  const response = await fetch(`${API_ENDPOINT}/users`);
  const users = await response.json();
  return users.filter((user: any) => !user.is_active);
}
