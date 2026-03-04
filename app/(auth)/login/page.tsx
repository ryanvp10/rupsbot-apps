"use client"; // Wajib ada!

import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = () => {
    console.log("Tombol diklik!"); // Cek di console browser (F12)
    // Di sini nantinya tempat logic API login
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96 space-y-6 relative z-50">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">Sign In</h2>
        <div className="space-y-4">
          <input type="email" placeholder="Email" className="w-full p-3 border rounded-lg text-black" />
          <input type="password" placeholder="Password" className="w-full p-3 border rounded-lg text-black" />
          
          <button 
            onClick={handleLogin}
            type="button"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition active:scale-95"
          >
            Login Sekarang
          </button>
        </div>
      </div>
    </div>
  );
}