import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import RevenueChart from "../components/RevenueChart";
import CreditCard from "../components/CreditCard";
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  CreditCard as CreditCardIcon,
  ArrowUpRight,
  ArrowDownRight,
  MoreVertical,
  Calendar,
  Download
} from "lucide-react";

export default function Dashboard() {
  const [timeframe, setTimeframe] = useState("month");

  const stats = [
    {
      title: "Total Income",
      value: "₹48,350",
      change: "+12.5%",
      trend: "up",
      icon: TrendingUp,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Total Expenses",
      value: "₹32,420",
      change: "-8.2%",
      trend: "down",
      icon: TrendingDown,
      color: "from-red-500 to-rose-500"
    },
    {
      title: "Net Savings",
      value: "₹15,930",
      change: "+23.1%",
      trend: "up",
      icon: DollarSign,
      color: "from-teal-500 to-cyan-500"
    }
  ];

  const recentTransactions = [
    { id: 1, name: "Netflix Subscription", amount: "-₹799", category: "Entertainment", date: "Today", icon: "🎬" },
    { id: 2, name: "Salary Deposit", amount: "+₹45,000", category: "Income", date: "Yesterday", icon: "💰" },
    { id: 3, name: "Grocery Shopping", amount: "-₹2,450", category: "Food", date: "2 days ago", icon: "🛒" },
    { id: 4, name: "Electricity Bill", amount: "-₹1,200", category: "Utilities", date: "3 days ago", icon: "⚡" },
  ];

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <Sidebar />

      <main className="flex-1 p-6 overflow-auto">
        <Topbar />

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {stats.map((stat, index) => (
            <div
              key={stat.title}
              className="stat-card animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-slate-400 text-sm mb-1">{stat.title}</p>
                  <h3 className="text-2xl font-bold text-white">{stat.value}</h3>
                </div>
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="flex items-center gap-2">
                {stat.trend === "up" ? (
                  <ArrowUpRight className="w-4 h-4 text-green-500" />
                ) : (
                  <ArrowDownRight className="w-4 h-4 text-red-500" />
                )}
                <span className={`text-sm font-medium ${
                  stat.trend === "up" ? "text-green-500" : "text-red-500"
                }`}>
                  {stat.change}
                </span>
                <span className="text-slate-500 text-sm">vs last month</span>
              </div>
            </div>
          ))}
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Revenue Chart */}
          <div className="lg:col-span-2 space-y-6">
            <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <RevenueChart />
            </div>

            {/* Recent Transactions */}
            <div className="card animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-lg text-white">Recent Transactions</h3>
                <button className="text-sm text-teal-400 hover:text-teal-300 transition-colors">
                  View all
                </button>
              </div>
              <div className="space-y-3">
                {recentTransactions.map((transaction) => (
                  <div
                    key={transaction.id}
                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-700/30 transition-all cursor-pointer group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-slate-700/50 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                      {transaction.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-white truncate">{transaction.name}</p>
                      <p className="text-sm text-slate-400">{transaction.category} • {transaction.date}</p>
                    </div>
                    <div className="text-right">
                      <p className={`font-semibold ${
                        transaction.amount.startsWith("+") ? "text-green-500" : "text-slate-300"
                      }`}>
                        {transaction.amount}
                      </p>
                    </div>
                    <button className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <MoreVertical className="w-4 h-4 text-slate-400" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Credit Card */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <CreditCard />
            </div>

            {/* Quick Actions */}
            <div className="card animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <h3 className="font-semibold text-lg text-white mb-4">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-3">
                <button className="flex flex-col items-center gap-2 p-4 rounded-xl bg-slate-700/30 hover:bg-slate-700/50 transition-all hover:scale-105 active:scale-95">
                  <div className="w-10 h-10 rounded-xl bg-teal-500/20 flex items-center justify-center">
                    <ArrowUpRight className="w-5 h-5 text-teal-400" />
                  </div>
                  <span className="text-sm font-medium text-slate-300">Send Money</span>
                </button>
                <button className="flex flex-col items-center gap-2 p-4 rounded-xl bg-slate-700/30 hover:bg-slate-700/50 transition-all hover:scale-105 active:scale-95">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                    <ArrowDownRight className="w-5 h-5 text-cyan-400" />
                  </div>
                  <span className="text-sm font-medium text-slate-300">Request</span>
                </button>
                <button className="flex flex-col items-center gap-2 p-4 rounded-xl bg-slate-700/30 hover:bg-slate-700/50 transition-all hover:scale-105 active:scale-95">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center">
                    <CreditCardIcon className="w-5 h-5 text-purple-400" />
                  </div>
                  <span className="text-sm font-medium text-slate-300">Add Card</span>
                </button>
                <button className="flex flex-col items-center gap-2 p-4 rounded-xl bg-slate-700/30 hover:bg-slate-700/50 transition-all hover:scale-105 active:scale-95">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center">
                    <Download className="w-5 h-5 text-amber-400" />
                  </div>
                  <span className="text-sm font-medium text-slate-300">Export</span>
                </button>
              </div>
            </div>

            {/* Spending by Category */}
            <div className="card animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
              <h3 className="font-semibold text-lg text-white mb-4">Spending by Category</h3>
              <div className="space-y-4">
                {[
                  { name: "Food & Dining", amount: "₹8,450", percent: 45, color: "bg-teal-500" },
                  { name: "Shopping", amount: "₹6,200", percent: 32, color: "bg-cyan-500" },
                  { name: "Transport", amount: "₹3,850", percent: 20, color: "bg-purple-500" },
                  { name: "Entertainment", amount: "₹2,920", percent: 15, color: "bg-amber-500" }
                ].map((category) => (
                  <div key={category.name}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-slate-300">{category.name}</span>
                      <span className="text-sm font-medium text-white">{category.amount}</span>
                    </div>
                    <div className="w-full h-2 bg-slate-700/50 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${category.color} rounded-full transition-all duration-500`}
                        style={{ width: `${category.percent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}