"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, X, Minus, Maximize2 } from "lucide-react";

type CommandHistory = {
  command: string;
  output: string | JSX.Element;
  isError?: boolean;
};

export default function TerminalWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      command: "welcome",
      output: (
        <div className="text-green-400">
          Welcome to DulninduOS v1.0.0. <br />
          Type <span className="text-yellow-300">'help'</span> to see a list of available commands.
        </div>
      ),
    },
  ]);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom when history changes
  useEffect(() => {
    if (isOpen && !isMinimized) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
      inputRef.current?.focus();
    }
  }, [history, isOpen, isMinimized]);

  const processCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    
    if (!trimmedCmd) return;

    let output: string | JSX.Element = "";
    let isError = false;

    switch (trimmedCmd) {
      case "help":
        output = (
          <div className="text-blue-300 grid grid-cols-[100px_1fr] gap-2">
            <span className="text-yellow-300">whoami</span><span>Prints my bio</span>
            <span className="text-yellow-300">skills</span><span>Lists my technical skills</span>
            <span className="text-yellow-300">projects</span><span>Lists top featured projects</span>
            <span className="text-yellow-300">contact</span><span>Shows contact info</span>
            <span className="text-yellow-300">clear</span><span>Clears the terminal screen</span>
            <span className="text-yellow-300">sudo</span><span>Superuser mode</span>
          </div>
        );
        break;
      case "whoami":
        output = "Dulnindu Saranga - Software Engineering Undergraduate building scalable backend systems and intelligent IoT solutions.";
        break;
      case "skills":
        output = (
          <div className="text-purple-400">
            [<br />
            &nbsp;&nbsp;"Java", "Python", "JavaScript", "TypeScript",<br />
            &nbsp;&nbsp;"Next.js", "React Native", "TailwindCSS",<br />
            &nbsp;&nbsp;"Spring Boot", "JAX-RS", "REST APIs",<br />
            &nbsp;&nbsp;"IoT (C/C++)", "Firebase", "MySQL"<br />
            ]
          </div>
        );
        break;
      case "projects":
        output = (
          <div className="text-cyan-300">
            1. Smart Campus REST API (Java)<br />
            2. HelaDry IoT Dehydrator (React Native & C++)<br />
            3. BodySync AI (AI Fitness App)<br />
            4. Task Manager System (Python)
          </div>
        );
        break;
      case "contact":
        output = (
          <div>
            Email: <a href="mailto:dulla2850@gmail.com" className="text-blue-400 underline">dulla2850@gmail.com</a><br />
            LinkedIn: <a href="https://www.linkedin.com/in/wkdsar" target="_blank" rel="noreferrer" className="text-blue-400 underline">linkedin.com/in/wkdsar</a><br />
            GitHub: <a href="https://github.com/dulnindu123" target="_blank" rel="noreferrer" className="text-blue-400 underline">github.com/dulnindu123</a>
          </div>
        );
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      case "sudo":
      case "sudo su":
        output = "Permission denied: user is not in the sudoers file. This incident will be reported.";
        isError = true;
        break;
      default:
        output = `command not found: ${trimmedCmd}. Type 'help' for available commands.`;
        isError = true;
    }

    setHistory((prev) => [...prev, { command: cmd, output, isError }]);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      processCommand(input);
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => {
              setIsOpen(true);
              setIsMinimized(false);
            }}
            className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 p-4 bg-accent hover:bg-accent-hover text-white rounded-full shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-colors"
            aria-label="Open Terminal"
          >
            <Terminal size={28} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Terminal Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ 
              opacity: 1, 
              y: isMinimized ? "calc(100vh - 100px)" : 0, 
              scale: 1,
              width: isMinimized ? "300px" : "100%",
            }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={`fixed z-50 overflow-hidden bg-[#0A0A0A] border border-card-border shadow-2xl
              ${isMinimized ? 'bottom-0 right-10 rounded-t-xl h-12' : 'bottom-6 right-6 md:bottom-10 md:right-10 w-[90vw] md:w-[600px] h-[450px] rounded-xl'}`}
          >
            {/* Window Header */}
            <div className="flex items-center justify-between px-4 py-2 bg-[#1A1A1A] border-b border-card-border cursor-pointer" onClick={() => isMinimized && setIsMinimized(false)}>
              <div className="flex items-center gap-2">
                <Terminal size={16} className="text-accent" />
                <span className="text-xs font-mono text-gray-400">guest@dulnindu-os:~</span>
              </div>
              <div className="flex items-center gap-3">
                <button onClick={(e) => { e.stopPropagation(); setIsMinimized(!isMinimized); }} className="text-gray-400 hover:text-white transition-colors">
                  {isMinimized ? <Maximize2 size={14} /> : <Minus size={14} />}
                </button>
                <button onClick={(e) => { e.stopPropagation(); setIsOpen(false); }} className="text-gray-400 hover:text-red-500 transition-colors">
                  <X size={14} />
                </button>
              </div>
            </div>

            {/* Terminal Body */}
            {!isMinimized && (
              <div 
                className="p-4 h-[calc(100%-40px)] overflow-y-auto font-mono text-sm custom-scrollbar"
                onClick={() => inputRef.current?.focus()}
              >
                {history.map((item, index) => (
                  <div key={index} className="mb-4">
                    {/* Command echoed */}
                    {item.command && (
                      <div className="flex items-center gap-2 text-gray-300">
                        <span className="text-accent">guest@dulnindu-os:~$</span>
                        <span>{item.command}</span>
                      </div>
                    )}
                    {/* Output */}
                    {item.output && (
                      <div className={`mt-1 ml-2 ${item.isError ? 'text-red-400' : 'text-gray-300'}`}>
                        {item.output}
                      </div>
                    )}
                  </div>
                ))}

                {/* Input Line */}
                <div className="flex items-center gap-2 text-gray-300">
                  <span className="text-accent">guest@dulnindu-os:~$</span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-1 bg-transparent border-none outline-none text-gray-300 font-mono caret-accent"
                    autoFocus
                    spellCheck={false}
                    autoComplete="off"
                  />
                </div>
                <div ref={bottomRef} />
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
