// app/page.tsx
import { redirect } from "next/navigation";

export default function RootPage() {
  // Di sini nantinya kamu bisa cek session/cookie login
  // const isAuthenticated = checkAuth(); 
  
  // Untuk sekarang, kita arahkan langsung ke login
  redirect("/login");

  // Fungsi ini tidak perlu return UI karena user langsung dipindahkan
  return null;
}