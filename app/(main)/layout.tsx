// app/(main)/layout.tsx
import Sidebar from "@/components/common/sidebar";
import Header from "@/components/common/header";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header />
        {children}
      </div>
    </div>
  );
}