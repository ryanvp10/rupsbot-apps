'use client';

import Link from "next/link";
import { usePathname } from "next/navigation"; // Gunakan next/navigation yang standar
import { LayoutDashboard, Users, ChevronLeft, X, Receipt, PiggyBank, Settings, CircleDollarSign } from "lucide-react";

// 1. Definisikan Interface Props
interface SidebarProps {
    isSidebarOpen: boolean;
    toggleSidebar: () => void;
}

const Sidebar = ({ isSidebarOpen, toggleSidebar }: SidebarProps) => {
    const pathname = usePathname();
    const isActive = (path: string) => pathname === path;

    const handleLinkClick = () => {
        // Otomatis tutup sidebar jika di layar mobile
        if (window.innerWidth < 768) {
            toggleSidebar();
        }
    };

    const navItems = [
        { label: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
        { label: 'Expenses', icon: Receipt, path: '/expenses' },
        { label: 'Budget', icon: PiggyBank, path: '/budget' },
        { label: 'Members', icon: Users, path: '/member' },
        { label: 'Settings', icon: Settings, path: '/setting' }
    ];

    return (
        <aside className={`fixed md:sticky top-0 left-0 z-50 h-screen bg-white border-r border-gray-200 flex flex-col transition-all duration-300 ease-in-out shadow-2xl md:shadow-none shrink-0
            ${isSidebarOpen ? 'w-56 translate-x-0' : 'w-20 -translate-x-full md:translate-x-0'}`}>
            <div className="flex items-center border-b px-3 h-16 shrink-0 justify-center relative">
            <div className={`flex items-center gap-3 transition-all duration-300 ${isSidebarOpen ? 'w-full px-3' : 'w-auto justify-center'}`}>
                    <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center shrink-0 shadow-sm">
                        <CircleDollarSign className="text-white w-5 h-5" />
                    </div>
        
        {/* Teks hanya muncul jika sidebar terbuka */}
                {isSidebarOpen && (
                    <h1 className="text-lg font-bold text-gray-700 tracking-wider whitespace-nowrap animate-in fade-in duration-500">
                            Rups Bot
                    </h1>
                                )}
            </div>

    {/* Tombol Toggle */}
    <button onClick={toggleSidebar}
        className="absolute -right-3 bottom-2 -translate-y-1/2 w-6 h-6 bg-white border border-gray-300 rounded-full flex items-center justify-center text-gray-900 hover:bg-emerald-500 hover:text-white transition-all z-50 shadow-sm cursor-pointer">
        <div className="hidden md:block">
            <ChevronLeft size={14} className={`transition-transform duration-300 ${!isSidebarOpen ? 'rotate-180' : ''}`} />
        </div>
        <div className="md:hidden block">
            <X size={14} />
        </div>
    </button>
</div>

            <nav className="flex-1 py-6 px-3 space-y-2 overflow-x-hidden overflow-y-auto custom-scrollbar">
                {navItems.map((item) => (
                    <Link
                        key={item.path}
                        href={item.path}
                        onClick={handleLinkClick}
                        className={`flex items-center px-3 py-3 rounded-md transition-all duration-300 group relative whitespace-nowrap ${
                            isActive(item.path)
                                ? 'bg-emerald-500 text-white shadow-md shadow-emerald-100'
                                : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                        } ${!isSidebarOpen ? 'justify-center' : 'gap-3'}`}
                        title={!isSidebarOpen ? item.label : ''}
                    >
                        <item.icon className={`w-5 h-5 shrink-0 ${isActive(item.path) ? 'text-white' : 'text-gray-400 group-hover:text-gray-900'}`} />
                        <span className={`font-medium transition-all duration-300 ${isSidebarOpen ? 'opacity-100 w-auto' : 'opacity-0 w-0 overflow-hidden'}`}>
                            {item.label}
                        </span>
                    </Link>
                ))}
            </nav>

            <div className="p-4 border-t shrink-0">
                <div className={`text-[10px] text-gray-400 text-center transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0'}`}>
                    v1.0.0 | Ryan
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;