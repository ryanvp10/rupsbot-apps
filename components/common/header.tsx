'use client';

import Link from "next/link";
import {useState} from "react";
import {usePathname} from "next/dist/client/components/navigation";
import {LayoutDashboard, Users, ChevronLeft, X, Receipt, PiggyBank, Settings, CircleDollarSign } from "lucide-react";

const Header = ()=> {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    const closeMobile = () => setIsSidebarOpen(false);
    const pathname = usePathname();
    const isActive = (path:string) => pathname === path;
    const handleLinkClick = () => {
        if (window.innerWidth < 768 && closeMobile) {
            closeMobile();
        }
    };

    const navItems = [
        {label:'Dashboard', icon:LayoutDashboard, path:'/dashboard'},
        {label:'Expenses', icon:Receipt, path:'/expenses'},
        {label:'Budget', icon:PiggyBank, path:'/budget'},
        {label:'Members', icon:Users, path:'/members'},
        {label:'Settings', icon:Settings, path:'/settings'}
    ];
    
    return  (
      <header className="w-full bg-white border-b border-gray-200 flex items-center justify-between px-6 h-16 sticky top-0 left-0 right-0 z-40 shadow-sm">
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className={`font-medium ${isActive('/') ? 'text-blue-500' : 'text-gray-700'}`} onClick={handleLinkClick}>
            Home
          </Link>
          <Link href="/about" className={`font-medium ${isActive('/about') ? 'text-blue-500' : 'text-gray-700'}`} onClick={handleLinkClick}>
            About
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
            Sign In
          </button>
        </div>
      </header>
    );
}
export default Header;