"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Wallet, TrendingUp, User } from "lucide-react";
import { motion } from "framer-motion";

const Navigation = () => {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "Gastos", path: "/gastos", icon: Wallet },
    { name: "Ipon", path: "/ipon", icon: TrendingUp },
    { name: "Akaunt", path: "/profile", icon: User },
  ];

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md">
      <div className="glass-card px-6 py-4 flex justify-between items-center shadow-2xl">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          const Icon = item.icon;

          return (
            <Link key={item.path} href={item.path} className="relative group">
              <div className="flex flex-col items-center gap-1">
                <motion.div
                  whileTap={{ scale: 0.9 }}
                  className={`p-2 rounded-xl transition-all duration-300 ${
                    isActive 
                      ? "bg-accent text-background scale-110 shadow-[0_0_15px_rgba(255,215,0,0.4)]" 
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  <Icon size={20} />
                </motion.div>
                <span className={`text-[10px] font-medium transition-opacity ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
                  {item.name}
                </span>
              </div>
              {isActive && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent rounded-full"
                />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation;
