import { experienceData } from '../data';
import { Briefcase, Calendar, Award, CheckCircle, ArrowUpRight } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-transparent border-t border-cyber-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 md:mb-16 text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-block font-mono text-3xs tracking-widest text-cyber-teal uppercase border border-cyber-teal/30 px-2 py-1 rounded bg-cyber-teal/5">
            PROFESSIONAL HISTORY
          </div>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Engineering Milestones
          </h2>
          <p className="font-sans text-sm text-slate-400">
            Enterprise infrastructure and active technical contributions inside public university network sectors.
          </p>
        </div>

        {/* Timeline / Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Experience Cards */}
          <div className="lg:col-span-8 space-y-6">
            {experienceData.map((exp, index) => (
              <div
                key={index}
                className="relative bg-cyber-card border border-cyber-border rounded-lg p-6 md:p-8 hover:border-cyber-teal/30 transition-all duration-300"
              >
                {/* Visual Line Decorator */}
                <div className="absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-b from-cyber-teal to-cyber-cyan rounded-l-lg" />

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-cyber-border pb-6">
                  <div>
                    <span className="font-mono text-3xs uppercase tracking-wider text-cyber-teal bg-cyber-teal/5 border border-cyber-teal/20 px-2 py-0.5 rounded">
                      INTERNSHIP ENGAGEMENT
                    </span>
                    <h3 className="font-sans font-bold text-xl text-white mt-2">
                      {exp.role}
                    </h3>
                    <p className="font-sans font-medium text-sm text-slate-300 mt-1">
                      {exp.company}
                    </p>
                    <p className="font-sans text-xs text-slate-500">
                      {exp.department}
                    </p>
                  </div>

                  <div className="flex items-center space-x-2 text-slate-400 font-mono text-xs bg-cyber-dark/60 border border-cyber-border/80 px-3 py-1.5 rounded-md md:self-start">
                    <Calendar className="w-4 h-4 text-cyber-teal" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Responsibilities list */}
                <div className="mt-6 space-y-4">
                  <h4 className="font-mono text-3xs uppercase tracking-widest text-slate-500">
                    CORE OPERATIONAL DELIVERABLES
                  </h4>
                  
                  <div className="grid grid-cols-1 gap-3">
                    {exp.responsibilities.map((resp, idx) => (
                      <div key={idx} className="flex items-start space-x-3 text-slate-300">
                        <CheckCircle className="w-4 h-4 text-cyber-teal mt-0.5 flex-shrink-0" />
                        <span className="font-sans text-sm leading-relaxed">{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Excellence Certificate Highlight (if included) */}
                {exp.award && (
                  <div className="mt-8 p-4 rounded bg-cyber-teal/5 border border-cyber-teal/20 flex items-start space-x-3">
                    <Award className="w-5 h-5 text-cyber-teal flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-mono text-2xs uppercase tracking-wider text-cyber-teal font-bold">
                        EXCELLENCE RECOGNITION
                      </h4>
                      <p className="font-sans text-xs text-slate-300 mt-1 leading-relaxed">
                        {exp.award}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Experience Right Panel (Context & Impact Indicators) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-cyber-card border border-cyber-border p-6 rounded-lg">
              <h3 className="font-sans font-bold text-base text-white mb-4 flex items-center space-x-2">
                <Briefcase className="w-5 h-5 text-cyber-teal" />
                <span>Enterprise Framework</span>
              </h3>
              
              <div className="space-y-4 text-xs font-mono text-slate-400">
                <div className="p-3 bg-cyber-dark/40 border border-cyber-border/60 rounded">
                  <span className="text-slate-500 block mb-1">NETWORK INFRASTRUCTURE</span>
                  <p className="text-slate-200 font-sans text-sm leading-relaxed">
                    Designed and troubleshooting hardware parameters in university campus structures connecting thousands of active academic nodes.
                  </p>
                </div>

                <div className="p-3 bg-cyber-dark/40 border border-cyber-border/60 rounded">
                  <span className="text-slate-500 block mb-1">LOGICAL SECURITY POLICY</span>
                  <p className="text-slate-200 font-sans text-sm leading-relaxed">
                    Formulated specific network ACL firewalls to regulate inbound/outbound communication flows, enhancing perimeter defenses.
                  </p>
                </div>

                <div className="p-3 bg-cyber-dark/40 border border-cyber-border/60 rounded">
                  <span className="text-slate-500 block mb-1">ROUTING & SWITCHING</span>
                  <p className="text-slate-200 font-sans text-sm leading-relaxed">
                    Managed OSPF parameters, VLAN segmentation, and configured hardware configurations for both Layer-2 switches and Layer-3 enterprise routers.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
