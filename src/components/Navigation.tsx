"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Wallet, TrendingUp, User, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const Navigation = () => {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "Gastos", path: "/gastos", icon: Wallet },
    { name: "Diskarte", path: "/diskarte", icon: Sparkles },
    { name: "Ipon", path: "/ipon", icon: TrendingUp },
    { name: "Profile", path: "/profile", icon: User },
  ];

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-md">
      <div className="bg-white border-[3px] border-black p-2 flex justify-between items-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-sm">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          const Icon = item.icon;

          return (
            <Link key={item.path} href={item.path} className="relative group flex-1">
              <div className="flex flex-col items-center gap-1">
                <motion.div
                  whileTap={{ scale: 0.9 }}
                  className={`p-2 transition-all duration-100 ${
                    isActive 
                      ? "bg-accent border-2 border-black -translate-y-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" 
                      : "text-gray-600 hover:text-black"
                  }`}
                >
                  <Icon size={18} strokeWidth={isActive ? 3 : 2} />
                </motion.div>
                <span className={`text-[9px] font-black uppercase tracking-tighter transition-opacity ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
                  {item.name}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation;
