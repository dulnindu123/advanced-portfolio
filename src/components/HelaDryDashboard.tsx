"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Thermometer, Droplets, Sun, Activity, Zap, Wind, AlertCircle } from "lucide-react";

export default function HelaDryDashboard() {
  const [temp, setTemp] = useState(42.5);
  const [humidity, setHumidity] = useState(15.2);
  const [solar, setSolar] = useState(850);
  const [status, setStatus] = useState("OPTIMAL");
  const [logs, setLogs] = useState<string[]>([
    "System initialized...",
    "IoT sensors connected.",
    "Real-time sync established."
  ]);

  // Simulate live data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setTemp(prev => +(prev + (Math.random() * 0.4 - 0.2)).toFixed(1));
      setHumidity(prev => +(prev + (Math.random() * 0.2 - 0.1)).toFixed(1));
      setSolar(prev => Math.min(1000, Math.max(0, prev + Math.floor(Math.random() * 20 - 10))));
      
      if (Math.random() > 0.8) {
        const activities = [
          "Solar fan speed adjusted to 75%",
          "Thermal threshold verified",
          "Data packet sent to Firebase",
          "Ambient humidity check complete"
        ];
        const newLog = activities[Math.floor(Math.random() * activities.length)];
        setLogs(prev => [newLog, ...prev.slice(0, 4)]);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="heladry-dashboard" className="py-24 px-6 md:px-12 bg-black/40 border-y border-card-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-accent font-mono text-sm tracking-widest uppercase mb-4 block">Experimental Hardware Interface</span>
          <h2 className="text-3xl md:text-5xl font-black mb-6">HelaDry <span className="text-accent">Digital Twin</span></h2>
          <p className="text-secondary max-w-2xl mx-auto">
            A real-time simulation of my IoT-based solar agricultural dehydrator. This dashboard interfaces with 
            simulated telemetry data mirroring the actual HelaDry system architecture.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Visualization */}
          <div className="lg:col-span-2 glass rounded-3xl p-8 border border-card-border relative overflow-hidden flex flex-col justify-between min-h-[450px]">
            <div className="absolute top-0 right-0 p-6 flex gap-2">
              <span className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold ${status === 'OPTIMAL' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                <Activity size={14} className="animate-pulse" />
                SYSTEM {status}
              </span>
              <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-xs font-bold flex items-center gap-2">
                <Zap size={14} />
                LIVE SYNC
              </span>
            </div>

            {/* Simulated 3D Model Placeholder */}
            <div className="flex-1 flex items-center justify-center relative py-12">
              <motion.div 
                animate={{ rotateY: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-48 h-64 bg-gradient-to-t from-accent/20 to-purple-600/20 border-2 border-accent/40 rounded-xl relative flex items-center justify-center shadow-[0_0_50px_rgba(59,130,246,0.2)]"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="absolute inset-2 border border-accent/20 rounded-lg flex items-center justify-center text-accent/10 font-mono text-xs text-center px-4">
                   HelaDry-CS154<br/>IoT UNIT
                </div>
                {/* Visual "Sensors" */}
                <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-accent animate-ping"></div>
                <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-purple-500 animate-pulse"></div>
              </motion.div>
              
              {/* Data Overlay Bullets */}
              <div className="absolute inset-0 pointer-events-none">
                <motion.div 
                  animate={{ y: [0, -10, 0] }} 
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute top-1/4 left-10 glass p-4 rounded-2xl border border-accent/30 flex items-center gap-3"
                >
                  <Thermometer className="text-orange-400" />
                  <div>
                    <p className="text-[10px] text-secondary uppercase font-bold">Internal Temp</p>
                    <p className="text-xl font-black text-primary">{temp}°C</p>
                  </div>
                </motion.div>

                <motion.div 
                  animate={{ y: [0, 10, 0] }} 
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute bottom-1/4 right-10 glass p-4 rounded-2xl border border-purple-500/30 flex items-center gap-3"
                >
                  <Droplets className="text-blue-400" />
                  <div>
                    <p className="text-[10px] text-secondary uppercase font-bold">Tray Humidity</p>
                    <p className="text-xl font-black text-primary">{humidity}%</p>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <button className="flex-1 py-3 bg-accent text-white rounded-xl font-bold hover:bg-accent-hover transition-colors text-sm shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                Trigger Fan Array
              </button>
              <button className="flex-1 py-3 glass border border-card-border rounded-xl font-bold hover:border-accent transition-colors text-sm">
                Recalibrate
              </button>
            </div>
          </div>

          {/* Sidebar Stats & Logs */}
          <div className="space-y-6">
            <div className="glass p-6 rounded-3xl border border-card-border">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Sun className="text-yellow-400" size={18} /> Solar Input
              </h3>
              <div className="flex items-end gap-3 mb-2">
                 <span className="text-4xl font-black text-primary">{solar}</span>
                 <span className="text-secondary text-sm font-mono pb-1">W/m²</span>
              </div>
              <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                <motion.div 
                  animate={{ width: `${(solar/1000)*100}%` }}
                  className="h-full bg-gradient-to-r from-yellow-400 to-orange-500"
                ></motion.div>
              </div>
            </div>

            <div className="glass p-6 rounded-3xl border border-card-border h-[280px] flex flex-col">
               <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Wind className="text-accent" size={18} /> System Logs
              </h3>
              <div className="flex-1 font-mono text-[11px] space-y-3 overflow-hidden">
                 <AnimatePresence mode="popLayout">
                   {logs.map((log, i) => (
                     <motion.div 
                        key={log + i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        className="flex gap-3 text-secondary"
                     >
                       <span className="text-accent/50">[{new Date().toLocaleTimeString([], {hour12: false})}]</span>
                       <span>{log}</span>
                     </motion.div>
                   ))}
                 </AnimatePresence>
              </div>
              <div className="mt-4 pt-4 border-t border-card-border flex items-center justify-between text-[10px] text-secondary font-mono">
                 <span className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> DB CONNECED</span>
                 <span>ID: #HD-405</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
