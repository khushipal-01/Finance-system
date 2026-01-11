import { useState } from "react";
import { 
  Search, 
  Bell, 
  Moon, 
  Sun, 
  Mail,
  Plus,
  ChevronDown
} from "lucide-react";

export default function Topbar() {
  const [isDark, setIsDark] = useState(true);
  const [notifications, setNotifications] = useState(3);
  const [showNotifications, setShowNotifications] = useState(false);

  const notificationItems = [
    { id: 1, type: "success", message: "Payment received: ₹5,000", time: "2 min ago" },
    { id: 2, type: "warning", message: "Subscription expiring soon", time: "1 hour ago" },
    { id: 3, type: "info", message: "New feature available", time: "3 hours ago" },
  ];

  return (
    <div className="flex justify-between items-center mb-8 animate-fade-in-up">
      {/* Search Bar */}
      <div className="flex-1 max-w-xl relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
        <input
          className="w-full bg-slate-800/50 backdrop-blur-sm text-white pl-12 pr-4 py-3 rounded-xl 
                     border border-slate-700/50 focus:border-teal-500/50 focus:outline-none 
                     focus:ring-2 focus:ring-teal-500/20 transition-all duration-300
                     placeholder:text-slate-400"
          placeholder="Search transactions, cards, or reports..."
        />
        
        {/* Search Suggestions - Shows on focus */}
        <div className="absolute top-full mt-2 w-full bg-slate-800 rounded-xl border border-slate-700 shadow-2xl hidden group-focus-within:block z-50">
          <div className="p-2 space-y-1">
            <div className="px-3 py-2 text-xs text-slate-400 font-medium">Recent Searches</div>
            <div className="px-3 py-2 hover:bg-slate-700/50 rounded-lg cursor-pointer text-sm text-slate-300 transition-colors">
              Last month expenses
            </div>
            <div className="px-3 py-2 hover:bg-slate-700/50 rounded-lg cursor-pointer text-sm text-slate-300 transition-colors">
              Credit card payments
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3 ml-6">
        {/* Add Transaction Button */}
        <button className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-xl font-medium shadow-lg shadow-teal-500/30 hover:shadow-xl hover:shadow-teal-500/40 transition-all duration-300 hover:scale-105 active:scale-95">
          <Plus className="w-4 h-4" />
          <span className="hidden lg:inline">Add Transaction</span>
        </button>

        {/* Theme Toggle */}
        <button
          onClick={() => setIsDark(!isDark)}
          className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 transition-all duration-300 hover:scale-105 active:scale-95"
        >
          {isDark ? (
            <Moon className="w-5 h-5 text-slate-300" />
          ) : (
            <Sun className="w-5 h-5 text-amber-400" />
          )}
        </button>

        {/* Messages */}
        <button className="relative w-10 h-10 flex items-center justify-center rounded-xl bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 transition-all duration-300 hover:scale-105 active:scale-95">
          <Mail className="w-5 h-5 text-slate-300" />
        </button>

        {/* Notifications */}
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative w-10 h-10 flex items-center justify-center rounded-xl bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <Bell className="w-5 h-5 text-slate-300" />
            {notifications > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center animate-pulse">
                {notifications}
              </span>
            )}
          </button>

          {/* Notification Dropdown */}
          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 bg-slate-800 rounded-xl border border-slate-700 shadow-2xl z-50 animate-fade-in-up">
              <div className="p-4 border-b border-slate-700">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-white">Notifications</h3>
                  <span className="text-xs text-teal-400 cursor-pointer hover:text-teal-300">
                    Mark all read
                  </span>
                </div>
              </div>
              <div className="max-h-96 overflow-y-auto">
                {notificationItems.map((notif) => (
                  <div
                    key={notif.id}
                    className="p-4 hover:bg-slate-700/50 cursor-pointer transition-colors border-b border-slate-700/50 last:border-0"
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${
                        notif.type === "success" ? "bg-green-500" :
                        notif.type === "warning" ? "bg-amber-500" :
                        "bg-blue-500"
                      }`} />
                      <div className="flex-1">
                        <p className="text-sm text-slate-200">{notif.message}</p>
                        <p className="text-xs text-slate-400 mt-1">{notif.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-3 text-center border-t border-slate-700">
                <button className="text-sm text-teal-400 hover:text-teal-300 font-medium">
                  View all notifications
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="w-px h-8 bg-slate-700/50" />

        {/* Profile */}
        <button className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-800/50 transition-all duration-300 group">
          <div className="text-right hidden md:block">
            <div className="text-sm font-medium text-white">Kumkum Rajput</div>
            <div className="text-xs text-slate-400">Premium</div>
          </div>
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-semibold text-sm">KR</span>
            </div>
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-slate-900"></div>
          </div>
          <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-teal-400 transition-colors" />
        </button>
      </div>
    </div>
  );
}

