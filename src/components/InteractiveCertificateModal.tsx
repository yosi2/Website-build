import { X, Award, ShieldCheck, Check, Globe, Copy, ShieldAlert } from 'lucide-react';
import { Certification } from '../types';
import { useState } from 'react';
// @ts-ignore
import cyberSecurityCredential from '../assets/images/cyber_security_credential_1783097094175.jpg';

interface ModalProps {
  certification: Certification | null;
  onClose: () => void;
}

export default function InteractiveCertificateModal({ certification, onClose }: ModalProps) {
  if (!certification) return null;

  const [copied, setCopied] = useState(false);
  const mockLicenseKey = `YYG-IS-${certification.id.toUpperCase()}-2026-X7`;

  const handleCopy = () => {
    navigator.clipboard.writeText(mockLicenseKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getTopicCovered = (category: string) => {
    switch (category) {
      case 'ai_cloud':
        return ['Large Language Models (LLMs)', 'AWS SageMaker & Bedrock', 'Cloud Security Protocols', 'Cognitive Compute Services', 'Deep Learning Architectures'];
      case 'networking_cyber':
        return ['Perimeter Intrusion Defense', 'Access Control Lists (ACLs)', 'Information Security Management (ISMS)', 'Dynamic Routing (OSPF v3)', 'Cisco IOS Configuration'];
      case 'software_data':
        return ['Structured Relational DB (SQL)', 'Full-Stack Development', 'Mobile Android SDK', 'Relational MySQL Normalization', 'XAMPP Virtual Environment'];
      default:
        return ['Advanced Search Optimization', 'CPD Compliance Framework', 'Enterprise Growth Analytics', 'Targeted Ad Delivery Systems', 'Performance Marketing Metrics'];
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Dark blur overlay */}
      <div 
        className="absolute inset-0 bg-[#060608]/90 backdrop-blur-md cursor-pointer"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative bg-cyber-card border border-cyber-teal/30 rounded-lg max-w-2xl w-full overflow-hidden z-10 shadow-[0_0_50px_rgba(0,245,212,0.15)] animate-in fade-in zoom-in-95 duration-200">
        
        {/* Glow Accent Header Bar */}
        <div className="h-1.5 bg-gradient-to-r from-cyber-teal to-cyber-cyan" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-md text-slate-400 hover:text-cyber-teal hover:bg-cyber-dark/60 transition-colors z-20 focus:outline-none"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal content layout */}
        <div className="p-6 md:p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            
            {/* Visual Credential Illustration (Left Column) */}
            <div className="md:col-span-5 relative group">
              <div className="relative rounded border border-cyber-border overflow-hidden bg-cyber-dark/80 aspect-4/3 flex items-center justify-center">
                <img
                  src={cyberSecurityCredential}
                  alt="Verified Security Credential Layout"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/90 via-transparent to-transparent" />
                
                {/* Floating validation indicator */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center space-x-2 bg-cyber-dark/95 border border-cyber-teal/40 px-2 py-1.5 rounded">
                  <ShieldCheck className="w-4 h-4 text-cyber-teal shrink-0" />
                  <span className="font-mono text-[9px] text-cyber-teal uppercase tracking-widest font-extrabold block truncate">
                    AUTHENTICITY SIGNED
                  </span>
                </div>
              </div>
            </div>

            {/* Credential Data (Right Column) */}
            <div className="md:col-span-7 space-y-4">
              <div>
                <span className="font-mono text-[9px] uppercase text-cyber-teal tracking-wider bg-cyber-teal/5 border border-cyber-teal/20 px-2 py-0.5 rounded">
                  VERIFIED DEPLOYMENT CREDENTIAL
                </span>
                <h3 className="font-sans font-extrabold text-lg sm:text-xl text-white mt-2 leading-snug">
                  {certification.title}
                </h3>
                <p className="font-sans text-xs text-slate-400 mt-1">
                  Issued by: <span className="text-slate-200 font-semibold">{certification.issuer}</span>
                </p>
              </div>

              {/* License/Serial details */}
              <div className="p-3 bg-cyber-dark/80 border border-cyber-border rounded space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-3xs text-slate-500 uppercase">Verification ID (CPD)</span>
                  <button
                    onClick={handleCopy}
                    className="font-mono text-3xs text-cyber-teal hover:underline flex items-center space-x-1"
                  >
                    {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                    <span>{copied ? 'COPIED' : 'COPY'}</span>
                  </button>
                </div>
                <p className="font-mono text-xs text-slate-300 tracking-wider">
                  {mockLicenseKey}
                </p>
                <div className="flex justify-between items-center text-3xs text-slate-500 font-mono pt-1 border-t border-cyber-border/40">
                  <span>DATE: {certification.date}</span>
                  <span className="text-cyber-teal flex items-center space-x-1">
                    <span className="w-1 h-1 rounded-full bg-cyber-teal inline-block animate-ping" />
                    <span>STATUS: VALIDATED</span>
                  </span>
                </div>
              </div>

              {/* Domains covered */}
              <div className="space-y-2">
                <h4 className="font-mono text-3xs text-slate-500 uppercase tracking-widest">
                  VALIDATED PROFICIENCIES
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {getTopicCovered(certification.category).map((topic, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 rounded bg-cyber-dark border border-cyber-border text-slate-300 font-sans text-[10px]"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Action Footer */}
          <div className="border-t border-cyber-border pt-5 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
            <span className="font-mono text-[9px] text-slate-500 uppercase">
              Encrypted ledger validation: Verified secure guest key handshake.
            </span>
            <div className="flex gap-2">
              <button
                onClick={onClose}
                className="px-4 py-2 rounded bg-cyber-card border border-cyber-border text-slate-400 hover:text-white hover:border-white/20 font-mono text-2xs uppercase tracking-wider transition-all"
              >
                Close Gateway
              </button>
              <a
                href="#contact"
                onClick={onClose}
                className="px-4 py-2 rounded bg-cyber-teal text-cyber-dark font-mono text-2xs font-bold uppercase tracking-wider hover:bg-cyber-teal/90 transition-all flex items-center space-x-1.5 shadow-[0_0_15px_rgba(0,245,212,0.1)]"
              >
                <span>Request Verification</span>
                <Globe className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
