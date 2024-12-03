"use client";

import type { ReactNode } from "react";
import { createContext, useMemo, useState } from "react";

interface User {
  name: string;
  email: string;
  avatar: string | null;
}

export const AuthContext = createContext<{
  user: User | null;
  signIn: () => void;
  signOut: () => void;
}>({
      user: null,
      signIn: () => {},
      signOut: () => {}
    });

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user] = useState<User | null>({
    name: "Admin",
    email: "admin@admin.com",
    avatar: null
  });

  const values = useMemo(() => ({ user, signIn: () => {}, signOut: () => {} }), [user]);

  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  );
}
