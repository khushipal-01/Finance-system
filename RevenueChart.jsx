import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Line,
  ComposedChart,
  Area
} from "recharts";
import { Calendar, TrendingUp, Download } from "lucide-react";

const monthlyData = [
  { name: "Jan", income: 45000, expenses: 32000, savings: 13000 },
  { name: "Feb", income: 48000, expenses: 35000, savings: 13000 },
  { name: "Mar", income: 46000, expenses: 33500, savings: 12500 },
  { name: "Apr", income: 52000, expenses: 38000, savings: 14000 },
  { name: "May", income: 58000, expenses: 41000, savings: 17000 },
  { name: "Jun", income: 55000, expenses: 39000, savings: 16000 },
  { name: "Jul", income: 62000, expenses: 44000, savings: 18000 },
];

const weeklyData = [
  { name: "Mon", income: 8000, expenses: 5500 },
  { name: "Tue", income: 12000, expenses: 6800 },
  { name: "Wed", income: 9500, expenses: 7200 },
  { name: "Thu", income: 11000, expenses: 6500 },
  { name: "Fri", income: 15000, expenses: 8900 },
  { name: "Sat", income: 7000, expenses: 5200 },
  { name: "Sun", income: 5500, expenses: 4100 },
];

export default function RevenueChart() {
  const [timeframe, setTimeframe] = useState("monthly");
  const [chartType, setChartType] = useState("bar");

  const data = timeframe === "monthly" ? monthlyData : weeklyData;

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 shadow-2xl">
          <p className="text-slate-300 font-medium mb-2">{payload[0].payload.name}</p>
          {payload.map((entry, index) => (
            <div key={index} className="flex items-center justify-between gap-4 mb-1">
              <span className="text-sm text-slate-400 capitalize">{entry.name}:</span>
              <span className="text-sm font-semibold" style={{ color: entry.color }}>
                ₹{entry.value.toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="card h-[450px]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
        <div>
          <h3 className="text-lg font-semibold text-white mb-1">Revenue Flow</h3>
          <p className="text-sm text-slate-400">Track your income and expenses</p>
        </div>
        
        <div className="flex items-center gap-2">
          {/* Timeframe Toggle */}
          <div className="flex bg-slate-700/30 rounded-lg p-1">
            <button
              onClick={() => setTimeframe("weekly")}
              className={`px-3 py-1.5 text-sm rounded-md transition-all ${
                timeframe === "weekly"
                  ? "bg-teal-500 text-white shadow-lg"
                  : "text-slate-400 hover:text-slate-300"
              }`}
            >
              Week
            </button>
            <button
              onClick={() => setTimeframe("monthly")}
              className={`px-3 py-1.5 text-sm rounded-md transition-all ${
                timeframe === "monthly"
                  ? "bg-teal-500 text-white shadow-lg"
                  : "text-slate-400 hover:text-slate-300"
              }`}
            >
              Month
            </button>
          </div>

          {/* Chart Type Toggle */}
          <div className="flex bg-slate-700/30 rounded-lg p-1">
            <button
              onClick={() => setChartType("bar")}
              className={`px-3 py-1.5 text-sm rounded-md transition-all ${
                chartType === "bar"
                  ? "bg-cyan-500 text-white shadow-lg"
                  : "text-slate-400 hover:text-slate-300"
              }`}
            >
              Bar
            </button>
            <button
              onClick={() => setChartType("area")}
              className={`px-3 py-1.5 text-sm rounded-md transition-all ${
                chartType === "area"
                  ? "bg-cyan-500 text-white shadow-lg"
                  : "text-slate-400 hover:text-slate-300"
              }`}
            >
              Area
            </button>
          </div>

          {/* Export Button */}
          <button className="w-9 h-9 flex items-center justify-center rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-all hover:scale-105 active:scale-95">
            <Download className="w-4 h-4 text-slate-400" />
          </button>
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-6 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-teal-500"></div>
          <span className="text-sm text-slate-400">Income</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <span className="text-sm text-slate-400">Expenses</span>
        </div>
        {timeframe === "monthly" && (
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-amber-500"></div>
            <span className="text-sm text-slate-400">Savings</span>
          </div>
        )}
      </div>

      {/* Chart */}
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          {chartType === "bar" ? (
            <BarChart data={data} barGap={8}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.3} />
              <XAxis 
                dataKey="name" 
                stroke="#94a3b8" 
                tick={{ fill: '#94a3b8', fontSize: 12 }}
                axisLine={{ stroke: '#334155' }}
              />
              <YAxis 
                stroke="#94a3b8" 
                tick={{ fill: '#94a3b8', fontSize: 12 }}
                axisLine={{ stroke: '#334155' }}
                tickFormatter={(value) => `₹${(value / 1000).toFixed(0)}k`}
              />
              <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(148, 163, 184, 0.1)' }} />
              <Bar 
                dataKey="income" 
                fill="#14b8a6" 
                radius={[8, 8, 0, 0]} 
                maxBarSize={50}
              />
              <Bar 
                dataKey="expenses" 
                fill="#ef4444" 
                radius={[8, 8, 0, 0]} 
                maxBarSize={50}
              />
              {timeframe === "monthly" && (
                <Bar 
                  dataKey="savings" 
                  fill="#f59e0b" 
                  radius={[8, 8, 0, 0]} 
                  maxBarSize={50}
                />
              )}
            </BarChart>
          ) : (
            <ComposedChart data={data}>
              <defs>
                <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#14b8a6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#14b8a6" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.3} />
              <XAxis 
                dataKey="name" 
                stroke="#94a3b8" 
                tick={{ fill: '#94a3b8', fontSize: 12 }}
                axisLine={{ stroke: '#334155' }}
              />
              <YAxis 
                stroke="#94a3b8" 
                tick={{ fill: '#94a3b8', fontSize: 12 }}
                axisLine={{ stroke: '#334155' }}
                tickFormatter={(value) => `₹${(value / 1000).toFixed(0)}k`}
              />
              <Tooltip content={<CustomTooltip />} />
              <Area 
                type="monotone" 
                dataKey="income" 
                fill="url(#colorIncome)" 
                stroke="#14b8a6" 
                strokeWidth={2}
              />
              <Area 
                type="monotone" 
                dataKey="expenses" 
                fill="url(#colorExpenses)" 
                stroke="#ef4444" 
                strokeWidth={2}
              />
            </ComposedChart>
          )}
        </ResponsiveContainer>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-slate-700/50">
        <div className="text-center">
          <p className="text-xs text-slate-400 mb-1">Total Income</p>
          <p className="text-lg font-bold text-teal-400">
            ₹{data.reduce((sum, item) => sum + item.income, 0).toLocaleString()}
          </p>
        </div>
        <div className="text-center">
          <p className="text-xs text-slate-400 mb-1">Total Expenses</p>
          <p className="text-lg font-bold text-red-400">
            ₹{data.reduce((sum, item) => sum + item.expenses, 0).toLocaleString()}
          </p>
        </div>
        <div className="text-center">
          <p className="text-xs text-slate-400 mb-1">Net Savings</p>
          <p className="text-lg font-bold text-amber-400">
            ₹{data.reduce((sum, item) => sum + (item.income - item.expenses), 0).toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}

