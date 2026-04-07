"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Target, Save, CheckCircle2, ChevronRight, PhilippinePeso } from "lucide-react";

const challenges = [
  { id: 1, name: "52-Week Ipon Challenge", current: 15400, target: 68900, status: "12/52 weeks", color: "bg-accent" },
  { id: 2, name: "Emergency Fund", current: 25000, target: 100000, status: "25% Complete", color: "bg-success" },
  { id: 3, name: "Abuloy & Handog Fund", current: 4500, target: 15000, status: "Handa na sa binyagan/kasal", color: "bg-rose-500" },
  { id: 4, name: "Pang-Gala Foundation", current: 1200, target: 10000, status: "Nag-iipon pa...", color: "bg-blue-500" },
];

export default function IponPage() {
  return (
    <div className="flex flex-col gap-8">
      <header className="flex justify-between items-end bg-black text-white p-6 border-[4px] border-black shadow-[6px_6px_0px_0px_rgba(255,215,0,1)]">
        <div>
          <h1 className="text-3xl font-black font-outfit uppercase italic leading-none">Aking Ipon</h1>
          <p className="text-accent text-[10px] uppercase font-black tracking-widest mt-2">{challenges[0].status} NA, IDOL!</p>
        </div>
        <div className="bg-success text-black flex items-center gap-1 font-black text-xs px-3 py-1.5 border-2 border-black shadow-[3px_3px_0px_0px_rgba(255,255,255,1)]">
          <TrendingUp size={16} strokeWidth={4} /> +₱1,250
        </div>
      </header>

      {/* Savings Summary Card */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white border-[4px] border-black p-8 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden"
      >
        <PhilippinePeso size={120} strokeWidth={4} className="absolute -right-6 -bottom-6 text-black/5 -rotate-12" />
        
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-4 text-black font-black uppercase tracking-widest text-xs">
            <Save size={18} strokeWidth={3} className="text-accent" /> Kabuuang Alkansya
          </div>
          <p className="text-5xl font-black font-outfit mb-4">₱44,900.50</p>
          <div className="h-6 w-full bg-white border-[3px] border-black rounded-none overflow-hidden p-1">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "45%" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="h-full bg-success border-r-[3px] border-black" 
            />
          </div>
          <p className="mt-3 text-[10px] text-gray-500 font-black uppercase tracking-widest italic">45% ng pangarap mo ay achieved na!</p>
        </div>
      </motion.div>

      {/* Challenge List */}
      <section className="space-y-4 mb-24">
        <div className="flex items-center justify-between mb-2">
          <h2 className="font-black font-outfit uppercase tracking-tight flex items-center gap-2">
            <Target size={20} strokeWidth={3} className="text-warning" /> Active Challenges
          </h2>
          <button className="text-[10px] bg-black text-white px-2 py-1 font-black uppercase tracking-tighter hover:bg-accent hover:text-black transition-all">
            See all
          </button>
        </div>

        <div className="space-y-6">
          {challenges.map((challenge, index) => {
            const progress = (challenge.current / challenge.target) * 100;
            return (
              <motion.div 
                key={challenge.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border-[3px] border-black p-6 flex flex-col gap-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] group"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-black text-lg uppercase leading-tight italic">{challenge.name}</h3>
                    <div className="flex items-center gap-1.5 mt-1">
                      <CheckCircle2 size={12} strokeWidth={3} className="text-success" />
                      <span className="text-[10px] text-gray-500 font-black uppercase tracking-tighter">
                        {challenge.status}
                      </span>
                    </div>
                  </div>
                  <div className="w-10 h-10 border-2 border-black flex items-center justify-center bg-accent/20 group-hover:bg-accent transition-colors">
                    <ChevronRight size={20} strokeWidth={4} />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-baseline text-[11px] font-black uppercase">
                    <span className="text-success bg-black text-white px-1">₱{challenge.current.toLocaleString()}</span>
                    <span className="text-gray-400">Target: ₱{challenge.target.toLocaleString()}</span>
                  </div>
                  <div className="h-4 w-full bg-white border-[2px] border-black overflow-hidden p-0.5">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className={`h-full ${challenge.color} border-r-2 border-black`}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Motivational Toast / Quote */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="bg-accent border-[3px] border-black p-5 text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-1 relative"
      >
        <div className="absolute -top-3 -left-3 bg-black text-white p-1 shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">
            <Save size={14} strokeWidth={3} />
        </div>
        <p className="font-black uppercase text-xs italic leading-tight">
          "Ang pag-iipon ay hindi tungkol sa dami, kundi sa disiplina. Galing mo, idol!"
        </p>
      </motion.div>
    </div>
  );
}
 village: ["bg-accent", "bg-success", "bg-rose-500", "bg-blue-500"]
