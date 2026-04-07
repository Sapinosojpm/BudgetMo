"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, 
  Users, 
  PieChart, 
  Smartphone, 
  Plus, 
  ChevronRight, 
  Heart, 
  Zap, 
  Info,
  DollarSign,
  X
} from "lucide-react";

const utilities = [
  { 
    id: "libre", 
    name: "Libre Tracker", 
    desc: "Sino ang may libre sa'yo?", 
    icon: Heart, 
    color: "bg-rose-500",
    accent: "text-white"
  },
  { 
    id: "paluwagan", 
    name: "Paluwagan", 
    desc: "Manage your group savings", 
    icon: Users, 
    color: "bg-blue-500",
    accent: "text-white"
  },
  { 
    id: "diskarte", 
    name: "Sideline Kita", 
    desc: "Track extra income", 
    icon: DollarSign, 
    color: "bg-emerald-500",
    accent: "text-white"
  },
  { 
    id: "load", 
    name: "Load Monitor", 
    desc: "Prepaid data tracking", 
    icon: Smartphone, 
    color: "bg-amber-500",
    accent: "text-white"
  },
];

export default function DiskartePage() {
  const [activeTab, setActiveTab] = useState<string | null>(null);

  return (
    <div className="flex flex-col gap-6">
      <header className="bg-white border-[3px] border-black p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <div className="flex items-center gap-2 mb-1">
          <Sparkles size={18} strokeWidth={3} className="text-warning" />
          <span className="text-[10px] uppercase font-black tracking-[0.3em] text-black">Pinoy Power Hub</span>
        </div>
        <h1 className="text-4xl font-black font-outfit uppercase italic italic">Diskarte Hub</h1>
        <p className="text-gray-500 text-xs font-bold uppercase mt-1 italic">"Nasa diskarte 'yan, idol!"</p>
      </header>

      {/* Stats Summary for Diskarte */}
      <div className="bg-black border-[4px] border-black p-5 flex justify-around shadow-[6px_6px_0px_0px_rgba(255,215,0,1)]">
        <div className="text-center">
          <p className="text-[9px] text-gray-400 font-black uppercase mb-1">Total Sideline</p>
          <p className="text-xl font-black font-outfit text-accent">₱3,250</p>
        </div>
        <div className="w-[3px] bg-white/20" />
        <div className="text-center">
          <p className="text-[9px] text-gray-400 font-black uppercase mb-1">Social Credits</p>
          <p className="text-xl font-black font-outfit text-rose-500">₱450</p>
        </div>
        <div className="w-[3px] bg-white/20" />
        <div className="text-center">
          <p className="text-[9px] text-gray-400 font-black uppercase mb-1">Paluwagan Turn</p>
          <p className="text-xl font-black font-outfit text-blue-500">Day 15</p>
        </div>
      </div>

      {/* Grid of Utilities */}
      <div className="grid grid-cols-1 gap-5">
        {utilities.map((util, index) => (
          <motion.button
            key={util.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => setActiveTab(util.id)}
            className={`bg-white border-[3px] border-black p-5 flex items-center justify-between group hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]`}
          >
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 border-2 border-black flex items-center justify-center ${util.color} ${util.accent}`}>
                <util.icon size={26} strokeWidth={3} />
              </div>
              <div className="text-left">
                <h3 className="font-black text-lg uppercase italic leading-none mb-1">{util.name}</h3>
                <p className="text-[10px] text-gray-500 font-black uppercase tracking-tight">{util.desc}</p>
              </div>
            </div>
            <div className="w-10 h-10 border-2 border-black bg-black text-white flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(255,215,0,1)] group-hover:bg-accent group-hover:text-black transition-colors">
              <ChevronRight size={20} strokeWidth={4} />
            </div>
          </motion.button>
        ))}
      </div>

      {/* Info Card */}
      <div className="bg-white border-[3px] border-black p-5 flex gap-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <div className="w-10 h-10 bg-accent border-2 border-black flex items-center justify-center shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
          <Info size={20} strokeWidth={3} />
        </div>
        <div>
          <h4 className="text-xs font-black uppercase italic mb-1">Tip para sa Ipon</h4>
          <p className="text-[10px] font-bold text-gray-500 leading-tight">
            Ang pakikipag-Paluwagan ay magandang paraan para sa forced savings. Siguraduhin lang na katiwa-tiwala ang mga kasama!
          </p>
        </div>
      </div>

      {/* Modal / Detail View */}
      <AnimatePresence>
        {activeTab && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-[2px] z-[60] flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.9, rotate: -2 }}
              animate={{ scale: 1, rotate: 0 }}
              className="bg-white border-[4px] border-black p-8 w-full max-w-sm shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-black font-outfit uppercase italic underline decoration-accent decoration-4">
                  {utilities.find(u => u.id === activeTab)?.name}
                </h2>
                <button onClick={() => setActiveTab(null)} className="bg-black text-white p-1">
                    <X size={24} strokeWidth={4} />
                </button>
              </div>
              <p className="text-gray-500 text-sm font-black uppercase mb-8 leading-relaxed">
                Coming soon! Ginhawa is on the way. This feature is being finalized with the LATEST Pinoy Diskarte Algorithms.
              </p>
              <button 
                onClick={() => setActiveTab(null)}
                className="w-full bg-black text-white font-black py-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(255,215,0,1)] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all uppercase italic"
              >
                Sige, gets ko!
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
