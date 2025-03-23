"use client";

import { signIn, signOut, useSession } from "next-auth/react";

const LoginButton = () => {
  const { data: session } = useSession();

  return session ? (
    <button onClick={() => signOut()}>Chiqish</button>
  ) : (
    <button onClick={() => signIn("google")}>Google bilan kirish</button>
  );
};

export default LoginButton;
