import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/auth/register", // 🔥 Foydalanuvchilar avval ro‘yxatdan o‘tishi kerak
  },
});

export const config = {
  matcher: ["/dashboard/:path*"], // 🔥 `/dashboard` sahifasi faqat login bo‘lganlar uchun
};
