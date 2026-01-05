'use client';

import {useState} from "react";
import Link from "next/link";
import {usePathname} from "next/dist/client/components/navigation";
import {LayoutDashboard, Users, ChevronLeft, X, Receipt, PiggyBank, Settings, CircleDollarSign } from "lucide-react";

const Sidebar = ()=> {
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

    return (
        <>
        <aside className={`inset-y-0 left-0 z-50 h-screen bg-white border-r border-gray-200 flex flex-col fixed transition-all duration-300 ease-in-out shadow-2xl md:shadow-none 
                ${isSidebarOpen ? 'translate-x-0 w-64' : '-translate-x-full md:translate-x-0 md:w-20'}`}>
                    
            <div className="p-6 flex items-center border-b justify-center relative min-h-22 shrink-0">
                <div className={`flex items-center gap-3 transition-all duration-300 absolute left-6 ${isSidebarOpen ? 'opacity-100 translate-x-0 delay-100' : '-translate-x-0 pointer-events-none hidden md:flex'}`}>
                <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center shrink-0">
                    <CircleDollarSign className="text-white w-5 h-5" />
                </div>
                <h1 className={`text-2xl font-display font-bold text-gray-700 tracking-wider whitespace-nowrap ${isSidebarOpen ? '' : 'opacity-0'}`}>Rups Bot</h1>
                </div>

                <button onClick={toggleSidebar}
                    className={`absolute -right-3 top-19 w-6 h-6 bg-gray-200 border border-gray-400 rounded-full flex 
                    items-center justify-center text-gray-900 hover:text-white hover:bg-emerald-500 transition-colors
                    z-50 shadow-md ${!isSidebarOpen ? 'hidden md:flex' : 'flex'}`} >
                    <div className="md:block hidden">
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
                        className={`flex items-center gap-3 px-3 py-3 rounded-md transition-all duration-300 group relative overflow-hidden whitespace-nowrap ${
                            isActive(item.path)
                                ? 'bg-emerald-500 text-white shadow-md shadow-emerald-200'
                                : 'text-gray-400 hover:bg-gray-50 hover:text-gray-900'
                        } ${!isSidebarOpen ? 'justify-center md:pl-[1.6rem] px-3' : 'px-3'}`}
                        title={!isSidebarOpen ? item.label : ''}
                    >
                        <item.icon className={`w-5 h-5 shrink-0 transition-colors duration-300 ${isActive(item.path) ? 'text-lol-blue' : 'text-gray-500 group-hover:text-gray-900'}`} />
                        <span className={`font-medium whitespace-nowrap transition-all duration-300 ${isSidebarOpen ? 'opacity-100 translate-x-0 w-auto' : 'md:opacity-0 md:translate-x-2 md:w-0 overflow-hidden'}`}>
                            {item.label}
                        </span>
                    </Link>
                ))}
            </nav>

            <div className="p-4 border-t overflow-hidden shrink-0">
                <div className={`mt-4 text-xs text-gray-600 px-4 whitespace-nowrap transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'md:opacity-0 md:hidden'}`}>
                    v1.0.0 | C9xJB Hackathon
                </div>
            </div>
        </aside>
        </>
    )


};
export default Sidebar;