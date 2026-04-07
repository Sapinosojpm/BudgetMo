"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Search, Tag, X, Utensils, Car, Lightbulb, Smartphone, Users, Gift } from "lucide-react";

const categories = [
  { id: "pagkain", name: "Pagkain / Groceries", icon: Utensils, color: "bg-orange-500" },
  { id: "transport", name: "Transpo (Jeep/Grab)", icon: Car, color: "bg-blue-500" },
  { id: "bills", name: "Bills (Meralco/Water)", icon: Lightbulb, color: "bg-yellow-500" },
  { id: "load", name: "Load / Data", icon: Smartphone, color: "bg-green-500" },
  { id: "padala", name: "Padala / Family", icon: Users, color: "bg-purple-500" },
  { id: "others", name: "Iba pa", icon: Gift, color: "bg-gray-500" },
];

export default function GastosPage() {
  const [isAdding, setIsAdding] = useState(false);
  const [expenses, setExpenses] = useState([
    { id: 1, title: "Meralco Bill", category: "bills", amount: 2450, date: "Today" },
    { id: 2, title: "Pamalengke", category: "pagkain", amount: 850, date: "Today" },
    { id: 3, title: "Grab Ride", category: "transport", amount: 150, date: "Yesterday" },
  ]);

  return (
    <div className="flex flex-col gap-6">
      <header className="flex justify-between items-center mb-2">
        <h1 className="text-3xl font-bold font-outfit text-gradient">Mga Gastos</h1>
        <button 
          onClick={() => setIsAdding(true)}
          className="w-10 h-10 rounded-full bg-accent text-background flex items-center justify-center shadow-[0_0_15px_rgba(255,215,0,0.3)] active:scale-95 transition-transform"
        >
          <Plus size={24} />
        </button>
      </header>

      {/* Search Bar */}
      <div className="relative">
        <input 
          type="text" 
          placeholder="Hanapin ang gastos mo..." 
          className="w-full glass p-4 pl-12 rounded-2xl outline-none focus:ring-1 ring-accent/30 transition-all text-sm"
        />
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
      </div>

      {/* Expense List */}
      <div className="space-y-4">
        {expenses.map((expense) => (
          <motion.div 
            key={expense.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-card p-5 flex justify-between items-center group hover:bg-white/5 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-accent">
                {(() => {
                  const Icon = categories.find(c => c.id === expense.category)?.icon || Tag;
                  return <Icon size={20} />;
                })()}
              </div>
              <div>
                <h3 className="font-bold text-sm">{expense.title}</h3>
                <p className="text-[11px] text-gray-500 uppercase tracking-tighter">
                  {categories.find(c => c.id === expense.category)?.name} • {expense.date}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-bold font-outfit text-warning">-₱{expense.amount.toLocaleString()}</p>
              <div className="h-1 w-0 group-hover:w-full bg-warning/30 transition-all duration-500 mt-1" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Add Expense Modal */}
      <AnimatePresence>
        {isAdding && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsAdding(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 px-6 pt-20"
            >
              <motion.div 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="glass-card p-8 w-full max-w-md mx-auto relative shadow-2xl overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 blur-3xl rounded-full -mr-16 -mt-16" />
                
                <div className="flex justify-between items-center mb-8 relative z-10">
                  <h2 className="text-xl font-bold font-outfit">Bagong Gasto</h2>
                  <button onClick={() => setIsAdding(false)} className="text-gray-400 hover:text-white transition-colors">
                    <X size={24} />
                  </button>
                </div>

                <div className="space-y-6 relative z-10">
                  <div>
                    <label className="text-[10px] uppercase font-bold text-gray-500 mb-2 block tracking-widest">Ano ito?</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Pamalengke, Jeep, Coffee" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl p-4 outline-none focus:border-accent/40 transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label className="text-[10px] uppercase font-bold text-gray-500 mb-2 block tracking-widest">Magkano?</label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-gray-400">₱</span>
                      <input 
                        type="number" 
                        placeholder="0.00" 
                        className="w-full bg-white/5 border border-white/10 rounded-xl p-4 pl-10 outline-none focus:border-accent/40 transition-colors font-outfit text-xl font-bold"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] uppercase font-bold text-gray-500 mb-3 block tracking-widest">Kategorya</label>
                    <div className="grid grid-cols-3 gap-2">
                      {categories.map((cat) => (
                        <button 
                          key={cat.id}
                          className="glass p-3 rounded-xl flex flex-col items-center gap-1 hover:border-accent/30 transition-all group"
                        >
                          <cat.icon size={16} className="text-gray-400 group-hover:text-accent" />
                          <span className="text-[9px] text-center text-gray-500">{cat.name.split(' ')[0]}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <button className="w-full bg-accent text-background font-bold py-4 rounded-xl shadow-lg active:scale-95 transition-transform mt-4">
                    I-save ang Gasto
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
