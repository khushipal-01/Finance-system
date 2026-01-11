import { useState } from "react";
import {
  LayoutDashboard,
  BarChart3,
  Receipt,
  Wallet,
  Settings,
  LogOut,
  ChevronRight,
  TrendingUp,
  CreditCard,
  Target,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState("Dashboard");
  const { logout } = useAuth();
  const navigate = useNavigate();

  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Analytics", icon: BarChart3, badge: "New" },
    { name: "Transactions", icon: Receipt, badge: "12" },
    { name: "Cards", icon: CreditCard },
    { name: "Goals", icon: Target },
    { name: "Account", icon: Wallet },
    { name: "Settings", icon: Settings },
  ];

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <aside className="w-72 h-screen bg-slate-800/60 backdrop-blur-xl border-r border-slate-700/50 p-6 flex flex-col">
      
      {/* Logo */}
      <div className="mb-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
            <TrendingUp className="text-white w-6 h-6" />
          </div>
          <h1 className="text-2xl font-bold text-white">Dashe</h1>
        </div>
        <p className="text-xs text-slate-400 ml-13">Financial Dashboard</p>
      </div>

      {/* Quick Stats */}
      <div className="mb-6 p-4 rounded-xl bg-gradient-to-br from-teal-500/10 to-cyan-500/10 border border-teal-500/20">
        <div className="flex justify-between text-xs text-slate-400">
          <span>Total Balance</span>
          <span className="text-teal-400">+12.5%</span>
        </div>
        <div className="text-2xl font-bold text-white mt-1">₹45,350</div>
        <div className="text-xs text-slate-400">Across all accounts</div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1">
        {menuItems.map((item) => (
          <div
            key={item.name}
            onClick={() => setActiveItem(item.name)}
            className={`nav-item group relative ${
              activeItem === item.name
                ? "bg-gradient-to-r from-teal-500/20 to-cyan-500/20 text-teal-400 border-l-2 border-teal-400"
                : ""
            }`}
          >
            <item.icon className="w-5 h-5 transition-transform group-hover:scale-110" />
            <span className="flex-1 font-medium">{item.name}</span>

            {item.badge && (
              <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-400">
                {item.badge}
              </span>
            )}

            {activeItem === item.name && (
              <ChevronRight className="w-4 h-4 opacity-50" />
            )}
          </div>
        ))}
      </nav>

      {/* User */}
      <div className="pt-6 border-t border-slate-700/50">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 text-slate-300 hover:text-red-400 hover:bg-red-500/10 rounded-xl transition group"
        >
          <LogOut className="w-5 h-5 group-hover:translate-x-1 transition" />
          Logout
        </button>
      </div>

      <div className="mt-4 text-center text-xs text-slate-500">
        Version 2.0.1
      </div>
    </aside>
  );
}



