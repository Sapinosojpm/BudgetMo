"use client";

import React from "react";
import { motion } from "framer-motion";
import { User, Settings, Shield, Bell, HelpCircle, LogOut, ChevronRight, Award, Plus } from "lucide-react";

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
    <div className="flex flex-col gap-8 pb-32">
      <header className="bg-white border-[3px] border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <h1 className="text-3xl font-black font-outfit uppercase italic">Akaunt Ko</h1>
        <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest mt-1">Manage your budget settings</p>
      </header>

      {/* Profile Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white border-[4px] border-black p-8 flex flex-col items-center gap-6 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden"
      >
        <div className="absolute top-4 right-4">
          <div className="bg-accent border-2 border-black p-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <Award size={20} strokeWidth={3} />
          </div>
        </div>

        <div className="w-24 h-24 border-[4px] border-black bg-white p-2 shadow-[4px_4px_0px_0px_rgba(34,197,94,1)]">
          <div className="w-full h-full bg-accent border-2 border-black flex items-center justify-center text-black">
            <User size={48} strokeWidth={3} />
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-black font-outfit uppercase italic">{user.name}</h2>
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-tighter">{user.email}</p>
          <div className="inline-block mt-4 px-4 py-1.5 bg-black text-white text-[10px] font-black rounded-none shadow-[3px_3px_0px_0px_rgba(34,197,94,1)] uppercase tracking-[0.2em]">
            {user.level}
          </div>
        </div>

        <div className="w-full h-[3px] bg-black my-2" />

        <div className="w-full flex justify-around text-center">
          <div>
            <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest">Total Ipon</p>
            <p className="text-xl font-black font-outfit text-success">₱{user.totalSaved.toLocaleString()}</p>
          </div>
          <div className="w-[3px] bg-black" />
          <div>
            <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest">Ranking</p>
            <p className="text-xl font-black font-outfit text-warning">Top 5%</p>
          </div>
        </div>
      </motion.div>

      {/* Menu List */}
      <div className="space-y-4">
        {menuItems.map((item, index) => (
          <motion.button
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="w-full bg-white border-[3px] border-black p-4 flex items-center justify-between shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all group"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-black text-white border-2 border-black group-hover:bg-accent group-hover:text-black transition-colors">
                <item.icon size={20} strokeWidth={3} />
              </div>
              <div className="text-left">
                <p className="text-sm font-black uppercase italic">{item.label}</p>
                <p className="text-[9px] text-gray-500 font-black uppercase">{item.sub}</p>
              </div>
            </div>
            <ChevronRight size={20} strokeWidth={4} className="text-black group-hover:translate-x-1 transition-all" />
          </motion.button>
        ))}
      </div>

      {/* E-Wallet Sync */}
      <section className="mt-4 bg-white border-[3px] border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
        <h3 className="text-[10px] uppercase font-black text-black tracking-[0.3em] mb-6 text-center italic">Connect Your Accounts</h3>
        <div className="flex gap-4 justify-center">
            <button className="w-14 h-14 bg-white border-[3px] border-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(59,130,246,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(59,130,246,1)] transition-all">
                <span className="text-[9px] font-black text-blue-600">GCASH</span>
            </button>
            <button className="w-14 h-14 bg-white border-[3px] border-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(34,197,94,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(34,197,94,1)] transition-all">
                <span className="text-[9px] font-black text-emerald-500">MAYA</span>
            </button>
            <button className="w-14 h-14 bg-white border-[3px] border-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(29,78,216,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(29,78,216,1)] transition-all">
                <span className="text-[9px] font-black text-blue-800">BDO</span>
            </button>
            <button className="w-14 h-14 bg-white border-[3px] border-black border-dashed flex items-center justify-center text-gray-400 hover:border-solid hover:text-black transition-all">
                <Plus size={20} strokeWidth={4} />
            </button>
        </div>
      </section>

      <button className="w-full flex items-center justify-center gap-3 p-5 bg-warning border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all font-black text-sm uppercase italic mt-4">
        <LogOut size={20} strokeWidth={4} /> Logout
      </button>

      <div className="mt-8 bg-black text-white p-2 text-center border-2 border-black rotate-[-1deg] shadow-[4px_4px_0px_0px_rgba(255,215,0,1)]">
        <p className="text-[10px] font-black uppercase tracking-[0.5em]">
            BudgetMo v1.0.0-BRUTAL
        </p>
      </div>
    </div>
  );
}
