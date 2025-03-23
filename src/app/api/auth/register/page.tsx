"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RegisterPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  console.log("Foydalanuvchi sessiyasi:", session);

  console.log("SESSION STATUS:", status); // 🔥 Konsolga chiqaramiz

  useEffect(() => {
    if (status === "authenticated") {
      router.replace("/dashboard"); // 🔥 Foydalanuvchi oldin ro‘yxatdan o‘tgan bo‘lsa, uni `dashboard`ga yo‘naltiramiz
    }
  }, [status, router]);

  if (status === "loading") return <p>Yuklanmoqda...</p>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold">Ro‘yxatdan o‘tish</h1>
      <button onClick={() => signIn("google")} className="p-3 bg-blue-500 text-white rounded-md mt-4">
        Google bilan ro‘yxatdan o‘tish
      </button>
    </div>
  );
}
