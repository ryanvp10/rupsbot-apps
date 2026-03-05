'use client';

import { useState } from "react";
import Sidebar from "@/components/common/sidebar";
import Header from "@/components/common/header";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* 1. Sidebar dikontrol dari sini */}
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* 2. Content Area: flex-1 membuatnya mengisi sisa ruang secara otomatis */}
      <div className="flex flex-col flex-1 min-w-0 transition-all duration-300">
        <Header />
        <main className="p-4 md:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}