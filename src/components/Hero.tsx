import { developerProfile, educationData } from '../data';
import { ArrowRight, MapPin, Mail, Phone, Award, GraduationCap, Activity, Shield, Cpu } from 'lucide-react';
// @ts-ignore
import yosefProfilePhoto from '../assets/images/yosef_profile_photo_1783097078897.jpg';

export default function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-screen pt-32 pb-20 flex items-center bg-transparent overflow-hidden"
    >
      {/* Background Decorative Grid - subtle, not overbearing */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,245,212,0.07),rgba(0,0,0,0))]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-cyber-dark to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-6 space-y-8 text-left self-center">
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded bg-cyber-teal/5 border border-cyber-teal/20">
              <span className="w-2 h-2 rounded-full bg-cyber-teal animate-pulse" />
              <span className="font-mono text-2xs uppercase tracking-widest text-cyber-teal font-medium">
                Verified IS Specialist & Network Engineer
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="font-sans font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-none">
                Yosef Ygezu <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-teal to-cyber-cyan text-glow">
                  Girma
                </span>
              </h1>
              <p className="font-sans font-medium text-lg sm:text-xl text-slate-200 tracking-wide">
                {developerProfile.title}
              </p>
            </div>

            <p className="font-sans text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl">
              {developerProfile.summary}
            </p>

            {/* Quick Contact Badges */}
            <div className="flex flex-wrap gap-y-3 gap-x-6 text-slate-400 text-xs font-mono">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-cyber-teal" />
                <span>{developerProfile.location}</span>
              </div>
              <a
                href={`mailto:${developerProfile.email}`}
                className="flex items-center space-x-2 hover:text-cyber-teal transition-colors"
              >
                <Mail className="w-4 h-4 text-cyber-teal" />
                <span>{developerProfile.email}</span>
              </a>
              <a
                href={`tel:${developerProfile.phone.replace(/\s+/g, '')}`}
                className="flex items-center space-x-2 hover:text-cyber-teal transition-colors"
              >
                <Phone className="w-4 h-4 text-cyber-teal" />
                <span>{developerProfile.phone}</span>
              </a>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#contact"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded font-mono text-xs font-bold text-cyber-dark bg-cyber-teal hover:bg-transparent hover:text-cyber-teal border border-cyber-teal transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>INITIATE CONTACT</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded font-mono text-xs font-bold text-slate-300 hover:text-white bg-cyber-card border border-cyber-border hover:border-cyber-teal/50 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>EXPLORE PROJECTS</span>
              </a>
            </div>
          </div>

          {/* Hero Right: Multi-Card Dashboard Column */}
          <div className="lg:col-span-6 w-full space-y-6">
            
            {/* CARD 1: Executive Profile Picture Card */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyber-teal to-cyber-cyan rounded-lg blur opacity-10 group-hover:opacity-20 transition-opacity duration-300" />
              
              <div className="relative bg-cyber-card border border-cyber-border p-5 rounded-lg flex flex-col md:flex-row gap-6 items-center">
                {/* Image Frame */}
                <div className="relative w-36 h-36 md:w-40 md:h-40 rounded-lg overflow-hidden border border-cyber-teal/30 flex-shrink-0 group-hover:border-cyber-teal transition-all duration-300 shadow-[0_0_15px_rgba(0,245,212,0.1)]">
                  <img
                    src={yosefProfilePhoto}
                    alt="Yosef Ygezu Girma"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Glowing Overlay lines */}
                  <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/80 via-transparent to-transparent" />
                  <div className="absolute bottom-2 left-2 right-2 flex justify-between items-center">
                    <span className="font-mono text-[8px] px-1 py-0.5 rounded bg-cyber-teal text-cyber-dark font-black tracking-widest uppercase">
                      SECURED
                    </span>
                  </div>
                </div>

                {/* Status Telemetry */}
                <div className="flex-1 space-y-3 w-full">
                  <div className="flex items-center justify-between border-b border-cyber-border pb-2">
                    <span className="font-mono text-3xs uppercase tracking-widest text-slate-500">
                      SECURE TERMINAL STATS
                    </span>
                    <div className="flex items-center space-x-1">
                      <span className="w-1.5 h-1.5 bg-cyber-teal rounded-full animate-ping" />
                      <span className="font-mono text-[9px] text-cyber-teal uppercase tracking-widest font-semibold">
                        LIVE ACCREDITED
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-y-2.5 gap-x-4 text-xs font-mono">
                    <div>
                      <span className="text-slate-500 text-[10px] uppercase block">FIREWALL POLICY</span>
                      <span className="text-white flex items-center space-x-1.5 mt-0.5">
                        <Shield className="w-3.5 h-3.5 text-cyber-teal" />
                        <span>ACL ACTIVE</span>
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-500 text-[10px] uppercase block">ROUTER PORTS</span>
                      <span className="text-white flex items-center space-x-1.5 mt-0.5">
                        <Activity className="w-3.5 h-3.5 text-cyber-cyan animate-pulse" />
                        <span>10Gb/s LINK</span>
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-500 text-[10px] uppercase block">IP SUBNETTING</span>
                      <span className="text-white mt-0.5 block">IPv4 / IPv6 DUAL</span>
                    </div>
                    <div>
                      <span className="text-slate-500 text-[10px] uppercase block">INFRASTRUCTURE</span>
                      <span className="text-white mt-0.5 block">Cisco OSPF V3</span>
                    </div>
                  </div>

                  <p className="font-mono text-[10px] text-slate-400 bg-cyber-dark/60 p-2 border border-cyber-border/40 rounded leading-relaxed">
                    SYS_STATUS: // Injibara ICT Internship Credential Approved.
                  </p>
                </div>
              </div>
            </div>

            {/* CARD 2: Academic Spotlight Card */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyber-teal to-cyber-cyan rounded-lg blur opacity-10 group-hover:opacity-15 transition-opacity duration-300" />
              
              <div className="relative bg-cyber-card border border-cyber-border p-6 rounded-lg space-y-5">
                <div className="flex items-center justify-between border-b border-cyber-border pb-3">
                  <span className="font-mono text-3xs uppercase tracking-widest text-slate-500">
                    ACADEMIC SPOTLIGHT
                  </span>
                  <GraduationCap className="w-5 h-5 text-cyber-teal" />
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-sans text-xs text-slate-500 uppercase tracking-wider">
                        Institution
                      </h4>
                      <p className="font-sans font-bold text-sm text-white mt-0.5">
                        {educationData.school}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-sans text-xs text-slate-500 uppercase tracking-wider">
                        Degree
                      </h4>
                      <p className="font-sans font-medium text-xs text-slate-200 mt-0.5 leading-snug">
                        {educationData.degree}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-cyber-dark/40 border border-cyber-border/60 p-2.5 rounded">
                      <span className="font-mono text-[9px] text-slate-500 uppercase tracking-wider block">
                        Cumulative GPA
                      </span>
                      <span className="font-sans font-extrabold text-lg text-cyber-teal block mt-0.5">
                        {educationData.gpa}
                      </span>
                    </div>

                    <div className="bg-cyber-dark/40 border border-cyber-border/60 p-2.5 rounded">
                      <span className="font-mono text-[9px] text-slate-500 uppercase tracking-wider block">
                        National Exit Exam
                      </span>
                      <span className="font-sans font-extrabold text-lg text-cyber-cyan block mt-0.5">
                        {educationData.exitExamScore}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-sans text-xs text-slate-500 uppercase tracking-wider mb-2">
                      Core Academic Pillars
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {educationData.focus.map((pillar, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded bg-cyber-card-light/45 border border-cyber-border text-slate-300 font-mono text-[10px] tracking-wide"
                        >
                          {pillar}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="border-t border-cyber-border pt-3.5 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Award className="w-4 h-4 text-cyber-teal" />
                    <span className="font-mono text-[10px] text-slate-300">
                      12 Global Industry Credentials
                    </span>
                  </div>
                  <a
                    href="#certifications"
                    className="font-mono text-[10px] text-cyber-teal hover:underline tracking-widest uppercase"
                  >
                    VIEW ALL
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
