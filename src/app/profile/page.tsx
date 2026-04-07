"use client";

import React from "react";
import { motion } from "framer-motion";
import { User, Settings, Shield, Bell, HelpCircle, LogOut, ChevronRight, Award } from "lucide-react";

export default function ProfilePage() {
  const user = {
    name: "User Name",
    email: "user@example.com",
    level: "Matipid Master",
    totalSaved: 44900.50
  };

  const menuItems = [
    { icon: Bell, label: "Notifications", sub: "Sahod alert & reminders" },
    { icon: Shield, label: "Security", sub: "Password & PIN" },
    { icon: Settings, label: "Preferences", sub: "Dark mode & Currency" },
    { icon: HelpCircle, label: "Support", sub: "Mag-tanong sa Admin" },
  ];

  return (
    <div className="flex flex-col gap-8 pb-10">
      <header>
        <h1 className="text-3xl font-bold font-outfit text-gradient">Akaunt Ko</h1>
        <p className="text-gray-400 text-sm">Manage your budget settings</p>
      </header>

      {/* Profile Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card p-6 flex flex-col items-center gap-4 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-4">
          <div className="bg-accent/10 text-accent p-2 rounded-xl border border-accent/20">
            <Award size={20} />
          </div>
        </div>

        <div className="w-24 h-24 rounded-full glass border-2 border-accent/20 p-1">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-accent/20 to-transparent flex items-center justify-center text-accent">
            <User size={48} />
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-xl font-bold font-outfit">{user.name}</h2>
          <p className="text-sm text-gray-500">{user.email}</p>
          <div className="inline-block mt-3 px-3 py-1 bg-accent text-background text-[10px] font-bold rounded-full uppercase tracking-widest">
            {user.level}
          </div>
        </div>

        <div className="w-full h-px bg-white/5 my-2" />

        <div className="w-full flex justify-around text-center">
          <div>
            <p className="text-xs text-gray-500 uppercase font-bold tracking-tighter">Total Ipon</p>
            <p className="font-bold font-outfit text-success">₱{user.totalSaved.toLocaleString()}</p>
          </div>
          <div className="w-px bg-white/5" />
          <div>
            <p className="text-xs text-gray-500 uppercase font-bold tracking-tighter">Ranking</p>
            <p className="font-bold font-outfit text-accent">Top 5%</p>
          </div>
        </div>
      </motion.div>

      {/* Menu List */}
      <div className="space-y-3">
        {menuItems.map((item, index) => (
          <motion.button
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="w-full glass p-4 rounded-2xl flex items-center justify-between hover:bg-white/5 transition-all group"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/5 rounded-xl text-gray-400 group-hover:text-accent transition-colors">
                <item.icon size={20} />
              </div>
              <div className="text-left">
                <p className="text-sm font-bold">{item.label}</p>
                <p className="text-[10px] text-gray-500">{item.sub}</p>
              </div>
            </div>
            <ChevronRight size={18} className="text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
          </motion.button>
        ))}
      </div>

      <button className="w-full flex items-center justify-center gap-2 p-5 rounded-2xl text-warning border border-warning/10 hover:bg-warning/5 transition-all font-bold text-sm mt-4">
        <LogOut size={18} /> Logout
      </button>

      <p className="text-center text-[10px] text-gray-600 font-bold uppercase tracking-[0.2em] mt-4">
        BudgetMo v1.0.0
      </p>
    </div>
  );
}
