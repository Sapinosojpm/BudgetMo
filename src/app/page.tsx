"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TrendingUp, AlertTriangle, PhilippinePeso, Calendar, Sparkles, Smartphone } from "lucide-react";

export default function Home() {
  const [daysUntilPayday, setDaysUntilPayday] = useState(0);
  const [dailySafeSpend, setDailySafeSpend] = useState(0);
  const totalIpon = 24500.50; // Mock data
  const remainingBudget = 5200.00; // Mock data

  useEffect(() => {
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
      <header className="flex justify-between items-center bg-white border-[3px] border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <div>
          <h1 className="text-4xl font-black font-outfit uppercase italic">BudgetMo</h1>
          <p className="text-gray-600 text-xs font-bold uppercase tracking-widest mt-1">Kamusta, tipid tayo today?</p>
        </div>
        <div className="w-12 h-12 bg-accent border-[3px] border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center text-black">
          <PhilippinePeso size={24} strokeWidth={3} />
        </div>
      </header>

      {/* Main Stats */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-accent border-[3px] border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden group"
      >
        <div className="relative z-10">
          <span className="text-[10px] font-black text-black uppercase tracking-[0.2em] bg-white border-2 border-black px-2 py-0.5">Total Ipon</span>
          <div className="flex items-baseline gap-2 mt-4">
            <span className="text-5xl font-black font-outfit">₱{totalIpon.toLocaleString()}</span>
            <motion.span 
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-black text-sm bg-white border-2 border-black px-1.5 py-0.5 flex items-center gap-1 font-black"
            >
              <TrendingUp size={14} strokeWidth={4} /> +12%
            </motion.span>
          </div>
          
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="bg-white border-[3px] border-black p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <span className="text-[9px] text-gray-500 uppercase tracking-widest font-black">Natitirang Budget</span>
              <p className="text-xl font-black font-outfit">₱{remainingBudget.toLocaleString()}</p>
            </div>
            <div className="bg-success border-[3px] border-black p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <span className="text-[9px] text-black uppercase tracking-widest font-black">Ligtas Spend</span>
              <p className="text-xl font-black font-outfit">₱{dailySafeSpend.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Petsa de Peligro Section */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <Calendar size={18} strokeWidth={3} />
          <h2 className="font-black font-outfit uppercase tracking-tight">Payday Countdown</h2>
        </div>
        
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className={`border-[3px] border-black p-6 flex items-center justify-between shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-colors ${daysUntilPayday <= 3 ? "bg-warning" : "bg-white"}`}
        >
          <div>
            <p className={`text-[10px] font-black uppercase ${daysUntilPayday <= 3 ? "text-white" : "text-gray-500"}`}>Days until Sahod</p>
            <h3 className="text-3xl font-black font-outfit">{daysUntilPayday} {daysUntilPayday === 1 ? 'araw' : 'na araw'}</h3>
          </div>
          
          {daysUntilPayday <= 3 ? (
            <div className="flex flex-col items-end">
              <div className="flex items-center gap-2 bg-white border-2 border-black px-2 py-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <AlertTriangle size={18} strokeWidth={3} className="text-warning" />
                <span className="font-black text-[10px] uppercase tracking-tighter">Delikado!</span>
              </div>
            </div>
          ) : (
            <div className="text-black/20">
              <PhilippinePeso size={48} strokeWidth={3} />
            </div>
          )}
        </motion.div>

        {daysUntilPayday <= 3 && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="mt-4 bg-white border-[3px] border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          >
            <p className="text-[10px] font-black uppercase tracking-wider mb-2 flex items-center gap-2 text-warning">
              <Sparkles size={14} strokeWidth={3} /> Today's Tipid Hack
            </p>
            <p className="text-xs font-bold italic leading-relaxed">"Mag-baon muna ng kanin at ulam sa work/school. Tipid ka na, busog pa!"</p>
          </motion.div>
        )}
      </section>

      {/* Utilities Quick View (Load & E-Wallets) */}
      <section>
        <h2 className="font-black font-outfit mb-4 flex items-center gap-2 uppercase tracking-tight">
            <Smartphone size={18} strokeWidth={3} /> Digital Wallets
        </h2>
        <div className="grid grid-cols-2 gap-4">
            <div className="bg-white border-[3px] border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex justify-between items-start mb-2">
                    <span className="text-[10px] text-gray-500 font-black uppercase">Load Promo</span>
                </div>
                <p className="text-sm font-black font-outfit bg-accent border border-black inline-block px-1">PowerSurf 99</p>
                <p className="text-[10px] font-bold text-gray-500 mt-1">Expires in 2 days</p>
            </div>
            <div className="bg-blue-500 border-[3px] border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex justify-between items-start mb-2">
                    <span className="text-[10px] text-white font-black uppercase tracking-tight">GCash balance</span>
                    <span className="text-[9px] bg-white border border-black px-1 font-black">SYNCED</span>
                </div>
                <p className="text-xl font-black font-outfit text-white">₱1,450.00</p>
            </div>
        </div>
      </section>

      {/* Quick Actions / Activity Hint */}
      <section className="mb-20">
        <h2 className="font-black font-outfit mb-4 uppercase tracking-tight">Mga Huling Gastos</h2>
        <div className="space-y-4">
          <div className="bg-white border-[3px] border-black p-4 flex justify-between items-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 border-2 border-black bg-accent flex items-center justify-center font-bold text-lg">🍱</div>
              <div>
                <p className="text-sm font-black">Lunch sa Karinderya</p>
                <p className="text-[10px] font-bold text-gray-500">Today, 12:30 PM</p>
              </div>
            </div>
            <span className="font-black text-sm bg-warning border-2 border-black px-2 py-0.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">-₱85</span>
          </div>
          <div className="bg-white border-[3px] border-black p-4 flex justify-between items-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 border-2 border-black bg-accent flex items-center justify-center font-bold text-lg">🛺</div>
              <div>
                <p className="text-sm font-black">Tricycle pa-Market</p>
                <p className="text-[10px] font-bold text-gray-500">Today, 10:15 AM</p>
              </div>
            </div>
            <span className="font-black text-sm bg-warning border-2 border-black px-2 py-0.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">-₱30</span>
          </div>
        </div>
      </section>
    </div>
  );
}
