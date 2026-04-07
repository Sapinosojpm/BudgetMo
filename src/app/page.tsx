"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TrendingUp, AlertTriangle, PhilippinePeso, Calendar } from "lucide-react";

export default function Home() {
  const [daysUntilPayday, setDaysUntilPayday] = useState(0);
  const [dailySafeSpend, setDailySafeSpend] = useState(0);
  const totalIpon = 24500.50; // Mock data
  const remainingBudget = 5200.00; // Mock data

  useEffect(() => {
    // Basic logic to calculate days until 15th or 30th
    const today = new Date();
    const currentDay = today.getDate();
    let nextPayday;

    if (currentDay <= 15) {
      nextPayday = 15;
    } else {
      const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
      nextPayday = lastDayOfMonth;
    }
    
    setDaysUntilPayday(nextPayday - currentDay);
    setDailySafeSpend(remainingBudget / (nextPayday - currentDay || 1));
  }, [remainingBudget]);

  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold font-outfit text-gradient">BudgetMo</h1>
          <p className="text-gray-400 text-sm">Kamusta, tipid tayo today?</p>
        </div>
        <div className="w-12 h-12 rounded-full glass border-accent/20 flex items-center justify-center text-accent shadow-lg">
          <PhilippinePeso size={24} />
        </div>
      </header>

      {/* Main Stats */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card p-8 relative overflow-hidden group shadow-2xl"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-3xl rounded-full -mr-10 -mt-10 group-hover:bg-accent/10 transition-colors" />
        
        <div className="relative z-10">
          <span className="text-xs font-semibold text-accent/80 uppercase tracking-wider">Total Ipon</span>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-4xl font-bold font-outfit">₱{totalIpon.toLocaleString()}</span>
            <motion.span 
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-success text-sm flex items-center gap-1 font-medium"
            >
              <TrendingUp size={14} /> +12%
            </motion.span>
          </div>
          
          <div className="mt-8 flex gap-4">
            <div className="flex-1">
              <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Natitirang Budget</span>
              <p className="text-xl font-bold font-outfit">₱{remainingBudget.toLocaleString()}</p>
            </div>
            <div className="w-px bg-white/10" />
            <div className="flex-1">
              <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Daily Ligtas Spend</span>
              <p className="text-xl font-bold font-outfit text-success">₱{dailySafeSpend.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Petsa de Peligro Section */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <Calendar size={18} className="text-accent" />
          <h2 className="font-bold font-outfit">Petsa de Peligro Tracker</h2>
        </div>
        
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className={`glass-card p-6 flex items-center justify-between border-l-4 ${daysUntilPayday <= 3 ? "border-l-warning shadow-[0_0_20px_rgba(239,68,68,0.1)]" : "border-l-accent shadow-xl"}`}
        >
          <div>
            <p className="text-sm text-gray-400">Countdown until Sahod</p>
            <h3 className="text-2xl font-bold font-outfit">{daysUntilPayday} {daysUntilPayday === 1 ? 'araw' : 'na araw'}</h3>
          </div>
          
          {daysUntilPayday <= 3 ? (
            <div className="flex flex-col items-end">
              <div className="flex items-center gap-1 text-warning animate-pulse">
                <AlertTriangle size={20} />
                <span className="font-bold text-xs uppercase tracking-tighter">Delikado na!</span>
              </div>
              <p className="text-[10px] text-gray-500">Kaya mo yan, idol.</p>
            </div>
          ) : (
            <div className="text-accent/50">
              <PhilippinePeso size={40} strokeWidth={1} />
            </div>
          )}
        </motion.div>
      </section>

      {/* Quick Actions / Activity Hint */}
      <section className="mt-4">
        <h2 className="font-bold font-outfit mb-4">Mga Huling Gastos</h2>
        <div className="space-y-3">
          <div className="glass p-4 rounded-2xl flex justify-between items-center opacity-60">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">🍱</div>
              <div>
                <p className="text-sm font-medium">Lunch sa Karinderya</p>
                <p className="text-[10px] text-gray-500">Today, 12:30 PM</p>
              </div>
            </div>
            <span className="font-bold text-sm text-warning">-₱85</span>
          </div>
          <div className="glass p-4 rounded-2xl flex justify-between items-center opacity-60">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">🛺</div>
              <div>
                <p className="text-sm font-medium">Tricycle pa-Market</p>
                <p className="text-[10px] text-gray-500">Today, 10:15 AM</p>
              </div>
            </div>
            <span className="font-bold text-sm text-warning">-₱30</span>
          </div>
        </div>
      </section>
    </div>
  );
}
