import React, { useState, useMemo } from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, Legend } from 'recharts';
import { Certification } from '../types';
import { TrendingUp, Award, ShieldCheck, Database, Brain, Percent, BarChart3, PieChartIcon } from 'lucide-react';
import { motion } from 'motion/react';

interface CertificationInsightsProps {
  certificationsList: Certification[];
}

export default function CertificationInsights({ certificationsList }: CertificationInsightsProps) {
  const [chartType, setChartType] = useState<'pie' | 'bar'>('pie');

  // Compute stats and dataset dynamically
  const { chartData, totalCount, dominantDomain, averageYearCount } = useMemo(() => {
    const counts = {
      ai_cloud: 0,
      networking_cyber: 0,
      software_data: 0,
      marketing_analytics: 0,
    };

    certificationsList.forEach((cert) => {
      if (counts[cert.category] !== undefined) {
        counts[cert.category]++;
      } else {
        // Fallback for custom added certs with non-standard categories
        counts.software_data++;
      }
    });

    const total = certificationsList.length;

    const data = [
      { name: 'AI & Cloud Services', value: counts.ai_cloud, category: 'ai_cloud', color: '#00f5d4' },
      { name: 'Networking & Security', value: counts.networking_cyber, category: 'networking_cyber', color: '#00e5ff' },
      { name: 'Software & Data Systems', value: counts.software_data, category: 'software_data', color: '#a78bfa' },
      { name: 'Marketing & Analytics', value: counts.marketing_analytics, category: 'marketing_analytics', color: '#f59e0b' },
    ];

    // Find dominant domain
    let maxVal = -1;
    let dominant = 'N/A';
    data.forEach((item) => {
      if (item.value > maxVal) {
        maxVal = item.value;
        dominant = item.name;
      }
    });

    return {
      chartData: data.filter(d => d.value > 0), // only render categories with certifications
      totalCount: total,
      dominantDomain: dominant,
      averageYearCount: (total / 3).toFixed(1), // average certificates acquired per year (e.g. 2024, 2025, 2026)
    };
  }, [certificationsList]);

  // Custom tooltips with a glowing dark style matching our site theme
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-[#0e0e11] border border-cyber-teal/30 p-3 rounded shadow-[0_0_15px_rgba(0,245,212,0.15)]">
          <p className="font-sans text-xs font-bold text-white mb-1">{data.name}</p>
          <div className="flex items-center space-x-2 font-mono text-[11px]">
            <span className="text-slate-400">Credentials:</span>
            <span className="text-cyber-teal font-extrabold">{data.value}</span>
            <span className="text-slate-600">|</span>
            <span className="text-cyber-cyan">{((data.value / totalCount) * 100).toFixed(0)}%</span>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="relative group bg-cyber-card border border-cyber-border rounded-lg p-6 mb-12">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyber-teal/5 to-cyber-cyan/5 rounded-lg opacity-30 group-hover:opacity-100 transition-opacity pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Column: Metrics & Information Summary */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 px-2.5 py-1 rounded bg-cyber-teal/5 border border-cyber-teal/20">
              <TrendingUp className="w-3.5 h-3.5 text-cyber-teal animate-pulse" />
              <span className="font-mono text-3xs text-cyber-teal uppercase tracking-widest font-black">
                REAL-TIME TELEMETRY INSIGHTS
              </span>
            </div>
            <h3 className="font-sans font-extrabold text-xl sm:text-2xl text-white tracking-tight">
              Certification Metrics
            </h3>
            <p className="font-sans text-xs text-slate-400 leading-relaxed">
              Dynamically derived telemetry visualizing the weight allocation of professional micro-credentials across different computer science domains.
            </p>
          </div>

          {/* Core Metric Blocks */}
          <div className="grid grid-cols-2 gap-4">
            
            <div className="bg-cyber-dark/40 border border-cyber-border/80 p-3.5 rounded flex flex-col justify-between">
              <span className="font-mono text-[10px] text-slate-500 uppercase block tracking-wider">
                Total Accreditations
              </span>
              <div className="flex items-baseline space-x-1.5 mt-2">
                <span className="font-sans font-extrabold text-3xl text-cyber-teal">
                  {totalCount}
                </span>
                <span className="font-mono text-3xs text-slate-400">ACTIVE</span>
              </div>
            </div>

            <div className="bg-cyber-dark/40 border border-cyber-border/80 p-3.5 rounded flex flex-col justify-between">
              <span className="font-mono text-[10px] text-slate-500 uppercase block tracking-wider">
                Dominant Domain
              </span>
              <span className="font-sans font-bold text-xs text-white mt-3 truncate block" title={dominantDomain}>
                {dominantDomain}
              </span>
            </div>

            <div className="bg-cyber-dark/40 border border-cyber-border/80 p-3.5 rounded flex flex-col justify-between">
              <span className="font-mono text-[10px] text-slate-500 uppercase block tracking-wider">
                Handshake Audited
              </span>
              <div className="flex items-center space-x-1.5 mt-2">
                <ShieldCheck className="w-5 h-5 text-cyber-cyan" />
                <span className="font-mono text-[11px] text-slate-200 font-bold">100% Ledger</span>
              </div>
            </div>

            <div className="bg-cyber-dark/40 border border-cyber-border/80 p-3.5 rounded flex flex-col justify-between">
              <span className="font-mono text-[10px] text-slate-500 uppercase block tracking-wider">
                Acquisition Rate
              </span>
              <div className="flex items-baseline space-x-1 mt-2">
                <span className="font-sans font-extrabold text-xl text-violet-400">
                  {averageYearCount}
                </span>
                <span className="font-mono text-3xs text-slate-500">/ YEAR</span>
              </div>
            </div>

          </div>
        </div>

        {/* Right Column: Interactive Recharts Visualizer */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center bg-cyber-dark/40 border border-cyber-border/80 rounded-lg p-4 h-[280px] sm:h-[320px] relative">
          
          {/* Chart View Segments Controller */}
          <div className="absolute top-4 right-4 flex items-center space-x-1 bg-cyber-dark border border-cyber-border p-1 rounded z-20">
            <button
              onClick={() => setChartType('pie')}
              className={`p-1.5 rounded cursor-pointer transition-all ${
                chartType === 'pie' 
                  ? 'bg-cyber-teal text-cyber-dark' 
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Pie representation"
            >
              <PieChartIcon className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setChartType('bar')}
              className={`p-1.5 rounded cursor-pointer transition-all ${
                chartType === 'bar' 
                  ? 'bg-cyber-teal text-cyber-dark' 
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Bar representation"
            >
              <BarChart3 className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Chart Header/Label */}
          <div className="absolute top-4 left-4">
            <span className="font-mono text-[9px] text-slate-500 uppercase tracking-wider block">
              VISUAL MATRIX GRAPH
            </span>
            <span className="font-sans font-bold text-xs text-white">
              {chartType === 'pie' ? 'Weighted Distribution %' : 'Quantitative Domain Weight'}
            </span>
          </div>

          {/* Render Area */}
          <div className="w-full h-full pt-10 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              {chartType === 'pie' ? (
                <PieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="48%"
                    innerRadius={55}
                    outerRadius={80}
                    paddingAngle={4}
                    dataKey="value"
                  >
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} stroke="rgba(26, 26, 28, 0.8)" strokeWidth={2} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} cursor={{ fill: 'transparent' }} />
                  <Legend 
                    verticalAlign="bottom" 
                    height={36} 
                    content={({ payload }) => (
                      <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 mt-2 text-[10px] font-mono">
                        {payload?.map((entry: any, i: number) => {
                          const realData = chartData[i];
                          if (!realData) return null;
                          return (
                            <div key={i} className="flex items-center space-x-1.5 text-slate-400">
                              <span className="w-2.5 h-1.5 rounded-full" style={{ backgroundColor: realData.color }} />
                              <span>{realData.name} ({realData.value})</span>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  />
                </PieChart>
              ) : (
                <BarChart data={chartData} margin={{ top: 20, right: 10, left: -25, bottom: 5 }}>
                  <XAxis 
                    dataKey="name" 
                    tickFormatter={(val) => val.split(' ')[0] || ''} 
                    stroke="#576882" 
                    fontSize={10} 
                    fontFamily="monospace"
                    tickLine={false}
                  />
                  <YAxis 
                    stroke="#576882" 
                    fontSize={10} 
                    fontFamily="monospace"
                    tickLine={false}
                    allowDecimals={false}
                  />
                  <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255, 255, 255, 0.03)' }} />
                  <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              )}
            </ResponsiveContainer>
          </div>

        </div>

      </div>
    </div>
  );
}
