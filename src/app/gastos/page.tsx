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
      <header className="flex justify-between items-center mb-2 bg-white border-[3px] border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <h1 className="text-3xl font-black font-outfit uppercase">Mga Gastos</h1>
        <button 
          onClick={() => setIsAdding(true)}
          className="w-12 h-12 bg-accent border-[3px] border-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
        >
          <Plus size={28} strokeWidth={4} />
        </button>
      </header>

      {/* Search Bar */}
      <div className="relative">
        <input 
          type="text" 
          placeholder="Hanapin ang gastos mo..." 
          className="w-full bg-white border-[3px] border-black p-4 pl-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] outline-none font-bold placeholder:text-gray-400 placeholder:italic"
        />
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-black" size={20} strokeWidth={3} />
      </div>

      {/* Expense List */}
      <div className="space-y-5">
        {expenses.map((expense) => (
          <motion.div 
            key={expense.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white border-[3px] border-black p-5 flex justify-between items-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 border-2 border-black bg-accent/50 flex items-center justify-center">
                {(() => {
                  const Icon = categories.find(c => c.id === expense.category)?.icon || Tag;
                  return <Icon size={24} strokeWidth={3} className="text-black" />;
                })()}
              </div>
              <div>
                <h3 className="font-black text-sm uppercase">{expense.title}</h3>
                <p className="text-[10px] text-gray-500 font-black uppercase tracking-tight">
                  {categories.find(c => c.id === expense.category)?.name} • {expense.date}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-black font-outfit text-warning bg-black text-white px-2 py-0.5 shadow-[2px_2px_0px_0px_rgba(239,68,68,1)]">
                -₱{expense.amount.toLocaleString()}
              </p>
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
              className="fixed inset-0 bg-accent/10 backdrop-blur-[2px] z-50 flex items-center justify-center p-6"
            >
              <motion.div 
                initial={{ y: 50, rotate: -2 }}
                animate={{ y: 0, rotate: 0 }}
                exit={{ y: 50, rotate: 2 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white border-[4px] border-black p-8 w-full max-w-md shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden"
              >
                {/* Visual Decorations */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-accent border-[3px] border-black rotate-12" />
                
                <div className="flex justify-between items-center mb-8 relative z-10">
                  <h2 className="text-3xl font-black font-outfit uppercase italic">Bagong Gasto</h2>
                  <button onClick={() => setIsAdding(false)} className="bg-black text-white p-1 shadow-[2px_2px_0px_0px_rgba(239,68,68,1)]">
                    <X size={24} strokeWidth={4} />
                  </button>
                </div>

                <div className="space-y-6 relative z-10">
                  <div>
                    <label className="text-[10px] uppercase font-black mb-2 block tracking-widest bg-accent inline-block px-1 border border-black">Ano ito?</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Pamalengke, Jeep, Coffee" 
                      className="w-full bg-white border-[3px] border-black p-4 font-bold outline-none focus:bg-accent/5 transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label className="text-[10px] uppercase font-black mb-2 block tracking-widest bg-accent inline-block px-1 border border-black">Magkano?</label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 font-black text-black">₱</span>
                      <input 
                        type="number" 
                        placeholder="0.00" 
                        className="w-full bg-white border-[3px] border-black p-4 pl-10 font-black text-2xl outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] uppercase font-black mb-3 block tracking-widest bg-accent inline-block px-1 border border-black">Kategorya</label>
                    <div className="grid grid-cols-3 gap-3">
                      {categories.map((cat) => (
                        <button 
                          key={cat.id}
                          className="bg-white border-[2px] border-black p-3 flex flex-col items-center gap-1 hover:bg-accent transition-all group shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-0.5 active:translate-y-0.5"
                        >
                          <cat.icon size={20} strokeWidth={3} className="text-black" />
                          <span className="text-[8px] font-black uppercase text-center">{cat.name.split(' ')[0]}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <button className="w-full bg-black text-white font-black py-5 text-lg uppercase tracking-tight shadow-[6px_6px_0px_0px_rgba(255,215,0,1)] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all mt-4 border-2 border-black">
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
