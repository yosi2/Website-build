import { useState } from 'react';
import { Award, ShieldCheck, Cpu, Database, Megaphone, Calendar, Eye } from 'lucide-react';
import { Certification } from '../types';
import { motion } from 'motion/react';
import CertificationInsights from './CertificationInsights';

type FilterType = 'all' | 'ai_cloud' | 'networking_cyber' | 'software_data' | 'marketing_analytics';

interface CertificationsProps {
  certificationsList: Certification[];
  onSelectCert: (cert: Certification) => void;
}

export default function Certifications({ certificationsList, onSelectCert }: CertificationsProps) {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const filterTabs = [
    { id: 'all', label: 'All Credentials' },
    { id: 'ai_cloud', label: 'AI & Cloud' },
    { id: 'networking_cyber', label: 'Networking & Cyber' },
    { id: 'software_data', label: 'Software & Data' },
    { id: 'marketing_analytics', label: 'Marketing & Ads' },
  ];

  const filteredCerts = certificationsList.filter((cert) => {
    if (activeFilter === 'all') return true;
    return cert.category === activeFilter;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'ai_cloud':
        return <Cpu className="w-5 h-5 text-cyber-teal" />;
      case 'networking_cyber':
        return <ShieldCheck className="w-5 h-5 text-cyber-teal" />;
      case 'software_data':
        return <Database className="w-5 h-5 text-cyber-teal" />;
      case 'marketing_analytics':
        return <Megaphone className="w-5 h-5 text-cyber-teal" />;
      default:
        return <Award className="w-5 h-5 text-cyber-teal" />;
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'ai_cloud':
        return 'Artificial Intelligence & Cloud';
      case 'networking_cyber':
        return 'Networking & Cyber Security';
      case 'software_data':
        return 'Software & Data Systems';
      case 'marketing_analytics':
        return 'Marketing & Analytics';
      default:
        return 'Professional Certification';
    }
  };

  // Motion variants for container and child items
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 110,
        damping: 15,
      },
    },
  };

  return (
    <section id="certifications" className="py-20 bg-transparent border-t border-cyber-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-block font-mono text-3xs tracking-widest text-cyber-teal uppercase border border-cyber-teal/30 px-2 py-1 rounded bg-cyber-teal/5">
            VERIFIED CREDENTIALS
          </div>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Professional Certifications
          </h2>
          <p className="font-sans text-sm text-slate-400">
            A rigorously curated list of global technical credentials and professional nanodegrees validating specialized knowledge domains. Click any card to load the secure verification logs.
          </p>
        </div>

        {/* Dynamic Recharts Chart Insights Widget */}
        <CertificationInsights certificationsList={certificationsList} />

        {/* Tabbed switcher buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12" id="certification-filters">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as FilterType)}
              className={`px-4 py-2 rounded font-mono text-2xs font-semibold tracking-wider uppercase transition-all duration-300 border cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-cyber-teal text-cyber-dark border-cyber-teal shadow-[0_0_15px_rgba(0,245,212,0.15)]'
                  : 'bg-cyber-card text-slate-400 border-cyber-border hover:text-white hover:border-cyber-teal/40'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Certifications Grid with motion container - key forces re-trigger on filter change */}
        <motion.div
          key={activeFilter}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          id="certifications-grid"
        >
          {filteredCerts.map((cert) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              whileHover={{
                scale: 1.025,
                y: -5,
                borderColor: 'rgba(0, 245, 212, 0.35)',
                boxShadow: '0 0 25px rgba(0, 245, 212, 0.18)',
              }}
              whileTap={{ scale: 0.985 }}
              onClick={() => onSelectCert(cert)}
              className="bg-cyber-card border border-cyber-border rounded-lg p-6 flex flex-col justify-between group relative cursor-pointer"
            >
              {/* Card Hover Edge Light */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-cyber-teal scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-t-lg" />
              
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="p-2 bg-cyber-dark rounded border border-cyber-border/80 group-hover:border-cyber-teal/30 transition-colors">
                    {getCategoryIcon(cert.category)}
                  </div>
                  <span className="font-mono text-[9px] uppercase text-slate-500 tracking-wider">
                    {getCategoryLabel(cert.category)}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-sans font-bold text-sm sm:text-base text-white group-hover:text-cyber-teal transition-colors duration-200 line-clamp-2 leading-snug">
                    {cert.title}
                  </h3>
                  <p className="font-sans text-xs text-slate-400">
                    {cert.issuer}
                  </p>
                </div>
              </div>

              {/* Card Footer: Credential Date & Click Feedback */}
              <div className="mt-6 pt-4 border-t border-cyber-border/60 flex items-center justify-between">
                <div className="flex items-center space-x-2 text-slate-500 font-mono text-[10px]">
                  <Calendar className="w-3.5 h-3.5 text-cyber-teal/60" />
                  <span>{cert.date}</span>
                </div>
                <div className="flex items-center space-x-1 font-mono text-[9px] text-slate-500 group-hover:text-cyber-teal transition-colors">
                  <Eye className="w-3.5 h-3.5 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">VERIFY</span>
                  <Award className="w-4 h-4 text-slate-600 group-hover:text-cyber-teal transition-colors shrink-0" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats banner */}
        <div className="mt-12 text-center">
          <span className="font-mono text-2xs text-slate-500 uppercase tracking-widest">
            Showing {filteredCerts.length} of {certificationsList.length} active credentials
          </span>
        </div>

      </div>
    </section>
  );
}
