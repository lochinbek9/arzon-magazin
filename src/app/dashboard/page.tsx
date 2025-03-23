"use client";

import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  console.log("SESSION STATUS IN DASHBOARD:", status); // 🔥 Konsolga chiqaramiz

  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/auth/register"); // 🔥 Foydalanuvchi tizimdan chiqsa, uni `register` sahifasiga yuboramiz
    }
  }, [status, router]);

  if (status === "loading") return <p>Yuklanmoqda...</p>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold">Xush kelibsiz, {session?.user?.name}!</h1>
      <button onClick={() => signOut()} className="p-3 bg-red-500 text-white rounded-md mt-4">
        Chiqish
      </button>
    </div>
  );
}
