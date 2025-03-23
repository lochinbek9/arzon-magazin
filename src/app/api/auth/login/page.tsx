"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LoginPage() {
    
  const { data: session, status } = useSession();
  const router = useRouter();
  console.log("Foydalanuvchi sessiyasi:", session);


  console.log("SESSION STATUS:", status); 

  useEffect(() => {
    if (status === "authenticated") {
      router.replace("/dashboard"); 
    }
  }, [status, router]);

  if (status === "loading") return <p>Yuklanmoqda...</p>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold">Tizimga kirish</h1>
      <button onClick={() => signIn("google")} className="p-3 bg-green-500 text-white rounded-md mt-4">
        Google bilan kirish
      </button>
    </div>
  );
}
