import { skillsData } from '../data';
import { Shield, Code, Server, Globe, CheckCircle2 } from 'lucide-react';

export default function Skills() {
  // Helper to assign icons to each category
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Networking & Security':
        return <Shield className="w-5 h-5 text-cyber-teal" />;
      case 'Software & Database Systems':
        return <Code className="w-5 h-5 text-cyber-teal" />;
      case 'Platforms & Workspaces':
        return <Server className="w-5 h-5 text-cyber-teal" />;
      case 'Languages':
        return <Globe className="w-5 h-5 text-cyber-teal" />;
      default:
        return <Shield className="w-5 h-5 text-cyber-teal" />;
    }
  };

  return (
    <section id="skills" className="py-20 bg-transparent border-t border-cyber-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 md:mb-16 text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-block font-mono text-3xs tracking-widest text-cyber-teal uppercase border border-cyber-teal/30 px-2 py-1 rounded bg-cyber-teal/5">
            TECHNICAL MATRIX
          </div>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Skills & Core Competencies
          </h2>
          <p className="font-sans text-sm text-slate-400">
            A comprehensive inventory of technical proficiencies across cloud infrastructures, secure networking, and database administration.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skillsData.map((category, index) => (
            <div
              key={index}
              className="bg-cyber-card border border-cyber-border rounded-lg p-6 hover:border-cyber-teal/20 transition-all duration-300 relative group"
            >
              <div className="flex items-center space-x-3 border-b border-cyber-border pb-4 mb-6">
                <div className="p-2 bg-cyber-dark rounded border border-cyber-border/80">
                  {getCategoryIcon(category.category)}
                </div>
                <h3 className="font-sans font-bold text-base text-white">
                  {category.category}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="space-y-1.5">
                    <div className="flex justify-between items-center text-xs font-mono">
                      <span className="text-slate-300 flex items-center space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyber-teal/70" />
                        <span>{skill}</span>
                      </span>
                      {/* Stylized proficiency label */}
                      <span className="text-slate-500 text-[10px] uppercase">
                        {category.category === 'Languages' ? 'Fluent' : 'Certified / Practiced'}
                      </span>
                    </div>
                    {/* Simulated elegant progress bar */}
                    <div className="h-1 bg-cyber-dark rounded overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-cyber-teal to-cyber-cyan transition-all duration-500"
                        style={{
                          width: category.category === 'Languages' && skill.includes('Native') ? '100%' : '85%',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technical Philosophy Quote */}
        <div className="mt-12 p-6 rounded-lg bg-cyber-card border border-cyber-border text-center max-w-2xl mx-auto">
          <p className="font-mono text-xs text-cyber-teal">
            "Combining artificial intelligence integration, data-driven platforms, and robust system hardening to support high-performance and secure enterprise frameworks."
          </p>
        </div>

      </div>
    </section>
  );
}
