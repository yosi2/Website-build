import React, { useState, useEffect } from 'react';
import { Lock, Unlock, Eye, EyeOff, X, AlertTriangle, ShieldCheck, Check, Settings, Save, LogOut, PlusCircle } from 'lucide-react';
import { developerProfile } from '../data';

interface AdminPortalProps {
  isAdmin: boolean;
  onLogin: (status: boolean) => void;
  onUpdateBio: (newBio: any) => void;
  onAddCert: (newCert: any) => void;
}

export default function AdminPortal({ isAdmin, onLogin, onUpdateBio, onAddCert }: AdminPortalProps) {
  const [showModal, setShowModal] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState('');
  const [copiedKey, setCopiedKey] = useState(false);

  // Edit Bio form state
  const [bioForm, setBioForm] = useState({
    title: developerProfile.title,
    location: developerProfile.location,
    summary: developerProfile.summary,
    email: developerProfile.email,
    phone: developerProfile.phone,
  });

  // New certification form state
  const [certForm, setCertForm] = useState({
    title: '',
    issuer: '',
    date: '2026',
    category: 'ai_cloud' as any,
  });

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode === 'YOSEF2026') {
      onLogin(true);
      setError('');
      setShowModal(false);
      setPasscode('');
    } else {
      setError('TRANSMISSION SHIELD REJECTED: Invalid Authorization Key.');
    }
  };

  const handleSaveBio = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateBio(bioForm);
    alert('SECURE STORAGE COMMITTED: Professional Profile variables successfully compiled locally!');
  };

  const handleAddCertSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!certForm.title || !certForm.issuer) return;
    onAddCert({
      id: `custom-cert-${Date.now()}`,
      ...certForm
    });
    setCertForm({ title: '', issuer: '', date: '2026', category: 'ai_cloud' });
    alert('CREDENTIAL REGISTERED: Added new certification record dynamically!');
  };

  const handleCopyPasscode = () => {
    navigator.clipboard.writeText('YOSEF2026');
    setCopiedKey(true);
    setTimeout(() => setCopiedKey(false), 2000);
  };

  return (
    <>
      {/* Floating admin control trigger key */}
      <div className="fixed bottom-6 right-6 z-40">
        {isAdmin ? (
          <button
            onClick={() => onLogin(false)}
            className="flex items-center space-x-2 px-4 py-2.5 rounded-full bg-red-600 hover:bg-red-700 text-white font-mono text-2xs font-bold tracking-widest shadow-lg border border-red-500/40 transition-transform active:scale-95"
            title="Disconnect Admin Port"
          >
            <LogOut className="w-4 h-4 animate-pulse" />
            <span>TERMINATE SECURE CONSOLE</span>
          </button>
        ) : (
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center space-x-2 px-4 py-2.5 rounded-full bg-cyber-dark/95 text-cyber-teal hover:text-cyber-dark hover:bg-cyber-teal font-mono text-2xs font-bold tracking-widest shadow-lg border border-cyber-teal/40 hover:border-cyber-teal transition-all active:scale-95 group"
          >
            <Lock className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300 text-cyber-teal group-hover:text-cyber-dark" />
            <span>SSL ADMIN PORT</span>
          </button>
        )}
      </div>

      {/* Login Portal Passcode Dialog Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-[#060608]/90 backdrop-blur-md" onClick={() => setShowModal(false)} />
          
          <div className="relative bg-cyber-card border border-cyber-teal/30 rounded-lg max-w-md w-full p-6 z-10 shadow-[0_0_40px_rgba(0,245,212,0.15)] animate-in fade-in zoom-in-95 duration-150">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 p-1.5 rounded-md text-slate-400 hover:text-cyber-teal hover:bg-cyber-dark/60 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="text-center space-y-3 mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded bg-cyber-teal/10 border border-cyber-teal/20 text-cyber-teal mb-2">
                <Lock className="w-5 h-5 text-cyber-teal" />
              </div>
              <h3 className="font-sans font-extrabold text-lg text-white">SSL Admin Encryption Port</h3>
              <p className="font-sans text-xs text-slate-400">
                Unlock the Back-Office Configuration Deck to dynamically manage portfolio variables and test certifications.
              </p>
            </div>

            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label htmlFor="passcode" className="block font-mono text-3xs text-slate-400 uppercase tracking-wider">
                    Administrative Passcode
                  </label>
                  <span className="font-mono text-[9px] text-slate-500">DEFAULT KEY: <strong className="text-cyber-teal">YOSEF2026</strong></span>
                </div>
                
                <div className="relative">
                  <input
                    type={showPass ? 'text' : 'password'}
                    id="passcode"
                    value={passcode}
                    onChange={(e) => setPasscode(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full pl-3 pr-10 py-2.5 bg-cyber-dark/80 border border-cyber-border rounded text-slate-200 text-sm placeholder-slate-700 focus:outline-none focus:border-cyber-teal focus:ring-1 focus:ring-cyber-teal font-mono tracking-widest"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPass(!showPass)}
                    className="absolute right-3 top-3 text-slate-500 hover:text-cyber-teal"
                  >
                    {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {error && (
                <div className="p-3 rounded bg-red-950/40 border border-red-500/30 text-red-400 font-mono text-[10px] leading-relaxed">
                  {error}
                </div>
              )}

              {/* Convenience passcode cloner */}
              <div className="p-3 bg-cyber-dark rounded border border-cyber-border flex items-center justify-between">
                <span className="font-mono text-3xs text-slate-500">SSL SECURITY PASSCODE BYPASS:</span>
                <button
                  type="button"
                  onClick={handleCopyPasscode}
                  className="px-2 py-1 rounded bg-cyber-teal/5 border border-cyber-teal/25 text-cyber-teal hover:bg-cyber-teal text-3xs font-mono font-bold hover:text-cyber-dark transition-all flex items-center space-x-1 uppercase"
                >
                  {copiedKey ? <Check className="w-3 h-3" /> : <Lock className="w-3 h-3" />}
                  <span>{copiedKey ? 'Key Copied' : 'Bypass Code'}</span>
                </button>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded font-mono text-xs font-bold text-cyber-dark bg-cyber-teal hover:bg-cyber-teal/95 transition-all shadow-[0_0_15px_rgba(0,245,212,0.1)] hover:shadow-[0_0_20px_rgba(0,245,212,0.2)]"
              >
                ESTABLISH SSL DECRYPT HANDSHAKE
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Dynamic Administrative Back-Office Config Deck - visible at the bottom of the page when logged in */}
      {isAdmin && (
        <section id="admin-deck" className="py-16 bg-[#0c0c0e] border-t border-cyber-teal/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            {/* Header banner */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-cyber-border/80 pb-6">
              <div className="space-y-1">
                <div className="inline-flex items-center space-x-2 px-2.5 py-1 rounded bg-cyber-teal/5 border border-cyber-teal/20">
                  <Unlock className="w-3.5 h-3.5 text-cyber-teal" />
                  <span className="font-mono text-3xs text-cyber-teal uppercase tracking-widest font-black">
                    PORT LOCK UNLOCKED // CONFIG DECK ACTIVE
                  </span>
                </div>
                <h2 className="font-sans font-extrabold text-2xl text-white tracking-tight">
                  Executive back-office setup
                </h2>
                <p className="font-sans text-xs text-slate-400">
                  Modify professional data variables locally and render the updates on the client interface instantly.
                </p>
              </div>

              <button
                onClick={() => onLogin(false)}
                className="px-4 py-2 rounded bg-red-600/10 hover:bg-red-600 border border-red-500/20 hover:border-red-500 text-red-400 hover:text-white font-mono text-2xs font-bold tracking-widest uppercase transition-all"
              >
                SECURE LOGOUT SESSION
              </button>
            </div>

            {/* Dashboard configuration options */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              
              {/* Option 1: Edit Profile details */}
              <div className="bg-cyber-card border border-cyber-border p-6 rounded-lg space-y-6">
                <h3 className="font-sans font-bold text-base text-white flex items-center space-x-2">
                  <Settings className="w-5 h-5 text-cyber-teal" />
                  <span>Update Profile Variables (Bio Summary)</span>
                </h3>

                <form onSubmit={handleSaveBio} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block font-mono text-3xs text-slate-400 uppercase tracking-wider">Role Title</label>
                      <input
                        type="text"
                        value={bioForm.title}
                        onChange={(e) => setBioForm({ ...bioForm, title: e.target.value })}
                        className="w-full px-3 py-2 bg-cyber-dark border border-cyber-border rounded text-slate-200 text-xs focus:outline-none focus:border-cyber-teal"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="block font-mono text-3xs text-slate-400 uppercase tracking-wider">Geographic Location</label>
                      <input
                        type="text"
                        value={bioForm.location}
                        onChange={(e) => setBioForm({ ...bioForm, location: e.target.value })}
                        className="w-full px-3 py-2 bg-cyber-dark border border-cyber-border rounded text-slate-200 text-xs focus:outline-none focus:border-cyber-teal"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block font-mono text-3xs text-slate-400 uppercase tracking-wider">Direct Mail</label>
                      <input
                        type="email"
                        value={bioForm.email}
                        onChange={(e) => setBioForm({ ...bioForm, email: e.target.value })}
                        className="w-full px-3 py-2 bg-cyber-dark border border-cyber-border rounded text-slate-200 text-xs focus:outline-none focus:border-cyber-teal"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="block font-mono text-3xs text-slate-400 uppercase tracking-wider">Mobile Link</label>
                      <input
                        type="text"
                        value={bioForm.phone}
                        onChange={(e) => setBioForm({ ...bioForm, phone: e.target.value })}
                        className="w-full px-3 py-2 bg-cyber-dark border border-cyber-border rounded text-slate-200 text-xs focus:outline-none focus:border-cyber-teal"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block font-mono text-3xs text-slate-400 uppercase tracking-wider">Summary Payload</label>
                    <textarea
                      rows={4}
                      value={bioForm.summary}
                      onChange={(e) => setBioForm({ ...bioForm, summary: e.target.value })}
                      className="w-full px-3 py-2 bg-cyber-dark border border-cyber-border rounded text-slate-200 text-xs focus:outline-none focus:border-cyber-teal resize-none leading-relaxed"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center space-x-2 py-2.5 rounded font-mono text-2xs font-bold text-cyber-dark bg-cyber-teal hover:bg-cyber-teal/90 transition-all uppercase tracking-wider"
                  >
                    <Save className="w-4 h-4" />
                    <span>COMMIT & COMPILE TO PROFILE STATE</span>
                  </button>
                </form>
              </div>

              {/* Option 2: Add dynamic certifications */}
              <div className="bg-cyber-card border border-cyber-border p-6 rounded-lg space-y-6">
                <h3 className="font-sans font-bold text-base text-white flex items-center space-x-2">
                  <PlusCircle className="w-5 h-5 text-cyber-teal" />
                  <span>Register Dynamic Certification</span>
                </h3>

                <form onSubmit={handleAddCertSubmit} className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="block font-mono text-3xs text-slate-400 uppercase tracking-wider">Certification Title</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., AWS Certified Security Specialty"
                      value={certForm.title}
                      onChange={(e) => setCertForm({ ...certForm, title: e.target.value })}
                      className="w-full px-3 py-2 bg-cyber-dark border border-cyber-border rounded text-slate-200 text-xs focus:outline-none focus:border-cyber-teal placeholder-slate-700"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block font-mono text-3xs text-slate-400 uppercase tracking-wider">Issuing Academy</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g., AWS Academy / Udacity"
                        value={certForm.issuer}
                        onChange={(e) => setCertForm({ ...certForm, issuer: e.target.value })}
                        className="w-full px-3 py-2 bg-cyber-dark border border-cyber-border rounded text-slate-200 text-xs focus:outline-none focus:border-cyber-teal placeholder-slate-700"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block font-mono text-3xs text-slate-400 uppercase tracking-wider">Credential Issue Year</label>
                      <input
                        type="text"
                        required
                        value={certForm.date}
                        onChange={(e) => setCertForm({ ...certForm, date: e.target.value })}
                        className="w-full px-3 py-2 bg-cyber-dark border border-cyber-border rounded text-slate-200 text-xs focus:outline-none focus:border-cyber-teal"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block font-mono text-3xs text-slate-400 uppercase tracking-wider">Credential Domain Category</label>
                    <select
                      value={certForm.category}
                      onChange={(e) => setCertForm({ ...certForm, category: e.target.value as any })}
                      className="w-full px-3 py-2 bg-cyber-dark border border-cyber-border rounded text-slate-300 font-mono text-xs focus:outline-none focus:border-cyber-teal"
                    >
                      <option value="ai_cloud">Artificial Intelligence & Cloud</option>
                      <option value="networking_cyber">Networking & Cyber Security</option>
                      <option value="software_data">Software & Data Systems</option>
                      <option value="marketing_analytics">Marketing & Analytics</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center space-x-2 py-2.5 rounded font-mono text-2xs font-bold text-cyber-dark bg-cyber-teal hover:bg-cyber-teal/90 transition-all uppercase tracking-wider"
                  >
                    <PlusCircle className="w-4 h-4" />
                    <span>ADD CERTIFICATE TO LIVE VIEW</span>
                  </button>
                </form>
              </div>

            </div>

          </div>
        </section>
      )}
    </>
  );
}
