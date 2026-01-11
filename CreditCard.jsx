import { useState } from "react";
import { Wifi, CreditCard as CardIcon, Eye, EyeOff, Copy, Check } from "lucide-react";

export default function CreditCard() {
  const [showNumber, setShowNumber] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("1234567890123456");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-4">
      {/* Main Card */}
      <div 
        className="relative h-52 cursor-pointer perspective-1000"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
          {/* Front of Card */}
          <div className="absolute inset-0 backface-hidden">
            <div className="relative h-full bg-gradient-to-br from-teal-500 via-cyan-500 to-blue-600 rounded-2xl p-6 shadow-2xl overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
              </div>

              {/* Card Content */}
              <div className="relative z-10 h-full flex flex-col justify-between text-white">
                {/* Top Section */}
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-xs opacity-80 mb-1">Balance</p>
                    <h3 className="text-2xl font-bold">₹5,300</h3>
                  </div>
                  <div className="flex gap-2">
                    <Wifi className="w-8 h-8 opacity-80 rotate-90" />
                    <CardIcon className="w-8 h-8 opacity-80" />
                  </div>
                </div>

                {/* Card Number */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <p className="text-lg tracking-wider font-mono">
                      {showNumber ? "1234 5678 9012 3456" : "•••• •••• •••• 3456"}
                    </p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowNumber(!showNumber);
                      }}
                      className="p-1.5 hover:bg-white/20 rounded-lg transition-all"
                    >
                      {showNumber ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCopy();
                      }}
                      className="p-1.5 hover:bg-white/20 rounded-lg transition-all"
                    >
                      {copied ? (
                        <Check className="w-4 h-4" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  {/* Bottom Info */}
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-[10px] opacity-70 uppercase tracking-wider mb-1">
                        Card Holder
                      </p>
                      <p className="font-semibold tracking-wide">Kumkum Rajput</p>
                    </div>
                    <div>
                      <p className="text-[10px] opacity-70 uppercase tracking-wider mb-1">
                        Expires
                      </p>
                      <p className="font-semibold tracking-wide">12/28</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-8 h-8 bg-white/30 rounded-full"></div>
                      <div className="w-8 h-8 bg-white/50 rounded-full -ml-4"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>
          </div>

          {/* Back of Card */}
          <div className="absolute inset-0 backface-hidden rotate-y-180">
            <div className="relative h-full bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl shadow-2xl overflow-hidden">
              {/* Magnetic Strip */}
              <div className="w-full h-12 bg-slate-900 mt-6"></div>
              
              {/* CVV Section */}
              <div className="p-6 mt-4">
                <div className="bg-white rounded-lg p-3 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400 text-xs">CVV</span>
                    <span className="text-slate-900 font-mono font-bold">•••</span>
                  </div>
                </div>
                
                {/* Terms */}
                <p className="text-[10px] text-slate-400 leading-relaxed">
                  This card is property of Dashe Bank. If found, please return to any Dashe branch or call 1-800-DASHE.
                </p>
              </div>

              {/* Logo */}
              <div className="absolute bottom-6 right-6 text-white/20 font-bold text-2xl">
                Dashe
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Card Actions */}
      <div className="grid grid-cols-2 gap-3">
        <button className="flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-700/30 hover:bg-slate-700/50 text-slate-300 hover:text-teal-400 transition-all hover:scale-105 active:scale-95">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          <span className="text-sm font-medium">Top Up</span>
        </button>
        <button className="flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-700/30 hover:bg-slate-700/50 text-slate-300 hover:text-cyan-400 transition-all hover:scale-105 active:scale-95">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
          <span className="text-sm font-medium">Details</span>
        </button>
      </div>

      {/* Card Stats */}
      <div className="card">
        <h4 className="text-sm font-semibold text-white mb-4">This Month</h4>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-400">Spent</span>
            <span className="text-sm font-semibold text-white">₹12,450</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-400">Cashback</span>
            <span className="text-sm font-semibold text-green-400">+₹234</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-400">Limit Used</span>
            <span className="text-sm font-semibold text-amber-400">24.9%</span>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full h-2 bg-slate-700/50 rounded-full overflow-hidden mt-2">
            <div className="h-full bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full" style={{ width: '24.9%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

