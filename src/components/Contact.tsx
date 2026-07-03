import React, { useState } from 'react';
import { referencesData, developerProfile } from '../data';
import { Mail, Phone, MapPin, Send, CheckCircle2, User, HelpCircle, Shield, FileText } from 'lucide-react';

interface ContactProps {
  profile: typeof developerProfile;
}

export default function Contact({ profile }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Secure Contact Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    // Simulate encryption and sending
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: 'Secure Contact Inquiry', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-transparent border-t border-cyber-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 md:mb-16 text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-block font-mono text-3xs tracking-widest text-cyber-teal uppercase border border-cyber-teal/30 px-2 py-1 rounded bg-cyber-teal/5">
            SECURED GATEWAY
          </div>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Connect & References
          </h2>
          <p className="font-sans text-sm text-slate-400">
            Initiate communication, request a professional resume copy, or contact verified academic references.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: References and Contact Info */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* References Card */}
            <div className="bg-cyber-card border border-cyber-border rounded-lg p-6 space-y-6">
              <h3 className="font-sans font-bold text-base text-white border-b border-cyber-border pb-3 flex items-center space-x-2">
                <Shield className="w-5 h-5 text-cyber-teal" />
                <span>Academic & Professional References</span>
              </h3>

              <div className="space-y-4">
                {referencesData.map((ref, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-cyber-dark/50 border border-cyber-border/80 rounded hover:border-cyber-teal/20 transition-colors"
                  >
                    <h4 className="font-sans font-bold text-sm text-white">
                      {ref.name}
                    </h4>
                    <p className="font-sans text-xs text-cyber-teal mt-0.5">
                      {ref.role}
                    </p>
                    <p className="font-sans text-xs text-slate-400">
                      {ref.affiliation}
                    </p>
                    
                    <div className="mt-3 flex items-center space-x-2 text-slate-500 font-mono text-[10px]">
                      <Mail className="w-3.5 h-3.5 text-cyber-teal/60" />
                      <span>{ref.emailPlaceholder}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Channels */}
            <div className="bg-cyber-card border border-cyber-border rounded-lg p-6 space-y-4">
              <h3 className="font-sans font-bold text-sm text-white uppercase tracking-wider">
                Direct Communication Channels
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href={`mailto:${profile.email}`}
                  className="p-4 bg-cyber-dark/40 border border-cyber-border rounded flex items-center space-x-3 hover:border-cyber-teal/40 transition-all group"
                >
                  <Mail className="w-5 h-5 text-cyber-teal group-hover:scale-110 transition-transform" />
                  <div>
                    <span className="font-mono text-3xs text-slate-500 block">EMAIL INBOX</span>
                    <span className="font-sans text-xs font-medium text-slate-300 group-hover:text-white transition-colors">
                      {profile.email}
                    </span>
                  </div>
                </a>

                <a
                  href={`tel:${profile.phone.replace(/\s+/g, '')}`}
                  className="p-4 bg-cyber-dark/40 border border-cyber-border rounded flex items-center space-x-3 hover:border-cyber-teal/40 transition-all group"
                >
                  <Phone className="w-5 h-5 text-cyber-teal group-hover:scale-110 transition-transform" />
                  <div>
                    <span className="font-mono text-3xs text-slate-500 block">MOBILE CONTACT</span>
                    <span className="font-sans text-xs font-medium text-slate-300 group-hover:text-white transition-colors">
                      {profile.phone}
                    </span>
                  </div>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Encrypted Contact Form */}
          <div className="lg:col-span-6">
            <div className="bg-cyber-card border border-cyber-border rounded-lg p-6 md:p-8 relative">
              <div className="absolute top-0 right-6 -translate-y-1/2 px-2 py-0.5 rounded bg-cyber-dark border border-cyber-border font-mono text-[9px] text-cyber-teal tracking-widest uppercase">
                SSL SECURED PORT
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded bg-cyber-teal/10 border border-cyber-teal text-cyber-teal mb-2">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-sans font-bold text-lg text-white">
                    Transmission Encrypted & Sent!
                  </h3>
                  <p className="font-sans text-xs text-slate-400 max-w-sm mx-auto leading-relaxed">
                    Thank you. Your message has been sent successfully. Yosef will inspect your payload and connect shortly at the provided address.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-4 py-2 rounded font-mono text-[10px] tracking-wider uppercase bg-cyber-card border border-cyber-border hover:border-cyber-teal text-slate-300 transition-colors"
                  >
                    SEND ANOTHER PAYLOAD
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-1.5">
                    <h3 className="font-sans font-bold text-base text-white">
                      Encrypt Message Payload
                    </h3>
                    <p className="font-sans text-2xs text-slate-500">
                      Submit your proposal or general network query directly to Yosef Ygezu Girma.
                    </p>
                  </div>

                  {/* Name Input */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="block font-mono text-3xs text-slate-400 uppercase tracking-wider">
                      Sender Identity Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full pl-3 pr-4 py-2.5 bg-cyber-dark/80 border border-cyber-border rounded text-slate-200 text-sm placeholder-slate-600 focus:outline-none focus:border-cyber-teal focus:ring-1 focus:ring-cyber-teal transition-all"
                      />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="block font-mono text-3xs text-slate-400 uppercase tracking-wider">
                      Sender Return Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john.doe@company.com"
                      className="w-full px-3 py-2.5 bg-cyber-dark/80 border border-cyber-border rounded text-slate-200 text-sm placeholder-slate-600 focus:outline-none focus:border-cyber-teal focus:ring-1 focus:ring-cyber-teal transition-all"
                    />
                  </div>

                  {/* Message Input */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="block font-mono text-3xs text-slate-400 uppercase tracking-wider">
                      Communication Body (Payload)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Define your requirements, opportunities, or inquiry specifications here..."
                      className="w-full px-3 py-2.5 bg-cyber-dark/80 border border-cyber-border rounded text-slate-200 text-sm placeholder-slate-600 focus:outline-none focus:border-cyber-teal focus:ring-1 focus:ring-cyber-teal transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center space-x-2 py-3 rounded font-mono text-xs font-bold text-cyber-dark bg-cyber-teal hover:bg-cyber-teal/90 disabled:bg-cyber-teal/40 disabled:cursor-not-allowed transition-all shadow-[0_0_15px_rgba(0,245,212,0.1)] hover:shadow-[0_0_25px_rgba(0,245,212,0.25)]"
                  >
                    <span>{loading ? 'COMPILING ENCRYPTION...' : 'TRANSMIT SECURE PAYLOAD'}</span>
                    {!loading && <Send className="w-4 h-4" />}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
