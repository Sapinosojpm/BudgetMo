"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Target, Save, CheckCircle2, ChevronRight, PhilippinePeso } from "lucide-react";

const challenges = [
  { id: 1, name: "52-Week Ipon Challenge", current: 15400, target: 68900, status: "12/52 weeks", color: "bg-accent" },
  { id: 2, name: "Emergency Fund", current: 25000, target: 100000, status: "25% Complete", color: "bg-success" },
  { id: 3, name: "Pang-Gala Foundation", current: 4500, target: 15000, status: "Nag-iipon pa...", color: "bg-blue-500" },
];

export default function IponPage() {
  return (
    <div className="flex flex-col gap-8">
      <header className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold font-outfit text-gradient">Aking Ipon</h1>
          <p className="text-gray-400 text-sm">Galing mo, idol! {challenges[0].status} na.</p>
        </div>
        <div className="text-success flex items-center gap-1 font-bold text-sm bg-success/10 px-3 py-1 rounded-full border border-success/20">
          <TrendingUp size={16} /> +₱1,250
        </div>
      </header>

      {/* Savings Summary Card */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card p-8 bg-gradient-to-br from-accent/10 to-transparent border-accent/20 shadow-2xl relative overflow-hidden"
      >
        <PhilippinePeso size={120} className="absolute -right-6 -bottom-6 text-accent/5 -rotate-12" />
        
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-4 text-accent/80 font-bold uppercase tracking-widest text-[10px]">
            <Save size={14} /> Kabuuang Alkansya
          </div>
          <p className="text-4xl font-bold font-outfit mb-2">₱44,900.50</p>
          <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "45%" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="h-full bg-accent shadow-[0_0_15px_rgba(255,215,0,0.5)]" 
            />
          </div>
          <p className="mt-3 text-[10px] text-gray-500 font-medium">45% of total goals achieved</p>
        </div>
      </motion.div>

      {/* Challenge List */}
      <section className="space-y-4">
        <div className="flex items-center justify-between mb-2 px-1">
          <h2 className="font-bold flex items-center gap-2">
            <Target size={18} className="text-accent" /> Active Challenges
          </h2>
          <button className="text-[10px] uppercase font-bold text-accent tracking-widest hover:opacity-80 transition-opacity">
            Makita lahat
          </button>
        </div>

        <div className="space-y-4">
          {challenges.map((challenge) => {
            const progress = (challenge.current / challenge.target) * 100;
            return (
              <motion.div 
                key={challenge.id}
                whileHover={{ x: 5 }}
                className="glass-card p-5 group hover:bg-white/5 transition-all border-l-4 border-l-accent cursor-pointer"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-bold text-sm tracking-tight">{challenge.name}</h3>
                    <div className="flex items-center gap-1.5 mt-1">
                      <CheckCircle2 size={12} className="text-success" />
                      <span className="text-[10px] text-gray-500 font-bold uppercase tracking-tighter">
                        {challenge.status}
                      </span>
                    </div>
                  </div>
                  <ChevronRight size={18} className="text-gray-500 group-hover:text-accent group-hover:translate-x-1 transition-all" />
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-baseline text-[11px] font-bold">
                    <span className="text-success">₱{challenge.current.toLocaleString()}</span>
                    <span className="text-gray-500">Target: ₱{challenge.target.toLocaleString()}</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className={`h-full ${challenge.color} shadow-sm`}
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
        className="glass p-5 rounded-2xl border-dashed border-white/10"
      >
        <p className="text-center italic text-sm text-gray-400">
          "Ang pag-iipon ay hindi tungkol sa dami, kundi sa disiplina."
        </p>
      </motion.div>
    </div>
  );
}
