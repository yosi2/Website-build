import { projectData } from '../data';
import { Layers, Database, Shield, Layout, Settings, Terminal, CheckCircle } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-transparent border-t border-cyber-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 md:mb-16 text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-block font-mono text-3xs tracking-widest text-cyber-teal uppercase border border-cyber-teal/30 px-2 py-1 rounded bg-cyber-teal/5">
            CAPSTONE SHOWCASE
          </div>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Software Architectures
          </h2>
          <p className="font-sans text-sm text-slate-400">
            Engineered systems demonstrating robust full-stack development and optimal relational database integrity.
          </p>
        </div>

        {/* Capstone Card Layout */}
        {projectData.map((project, index) => (
          <div
            key={index}
            className="bg-cyber-card border border-cyber-border rounded-lg overflow-hidden hover:border-cyber-teal/20 transition-all duration-300"
          >
            {/* Upper Accent Bar */}
            <div className="h-1.5 bg-gradient-to-r from-cyber-teal via-cyber-cyan to-cyber-border" />

            <div className="p-6 md:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                
                {/* Left side: Project Info, description, highlights */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <span className="font-mono text-3xs uppercase tracking-wider text-cyber-cyan bg-cyber-cyan/5 border border-cyber-cyan/20 px-2.5 py-1 rounded">
                      Lead Capstone Project — {project.year}
                    </span>
                    <h3 className="font-sans font-extrabold text-2xl md:text-3xl text-white mt-3 leading-tight">
                      {project.title}
                    </h3>
                    <p className="font-mono text-2xs text-cyber-teal tracking-wider mt-1.5">
                      ROLE: {project.role.toUpperCase()}
                    </p>
                  </div>

                  <p className="font-sans text-sm md:text-base text-slate-300 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-4 pt-2">
                    <h4 className="font-mono text-3xs uppercase tracking-widest text-slate-500">
                      ARCHITECTURAL STAGES & KEY COMPLETED INITIATIVES
                    </h4>
                    
                    <div className="space-y-3">
                      {project.highlights.map((highlight, idx) => {
                        // Split title and description if contains ':'
                        const parts = highlight.split(':');
                        const hTitle = parts[0];
                        const hDesc = parts.slice(1).join(':');
                        return (
                          <div key={idx} className="flex items-start space-x-3 text-slate-300">
                            <CheckCircle className="w-5 h-5 text-cyber-teal mt-0.5 flex-shrink-0" />
                            <div className="text-sm">
                              {parts.length > 1 ? (
                                <p className="font-sans leading-relaxed">
                                  <strong className="text-white font-semibold">{hTitle}:</strong>
                                  <span className="text-slate-300">{hDesc}</span>
                                </p>
                              ) : (
                                <p className="font-sans leading-relaxed text-slate-300">{highlight}</p>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Right side: Visual specs, relational databases details, and stack */}
                <div className="lg:col-span-5 space-y-6">
                  
                  {/* System Architecture Block */}
                  <div className="bg-cyber-dark/60 border border-cyber-border rounded-lg p-6 space-y-6">
                    <h4 className="font-sans font-bold text-sm text-white flex items-center space-x-2">
                      <Layout className="w-4 h-4 text-cyber-teal" />
                      <span>Deployment Parameters</span>
                    </h4>

                    {/* Stack Indicators */}
                    <div className="space-y-4 text-xs font-mono">
                      <div>
                        <span className="text-slate-500 block mb-1">RELATIONAL SCHEMA</span>
                        <div className="flex items-start space-x-2 p-2.5 rounded bg-cyber-card border border-cyber-border/80">
                          <Database className="w-4 h-4 text-cyber-teal flex-shrink-0 mt-0.5" />
                          <p className="text-slate-300 font-sans text-xs">
                            Configured dynamic schemas inside <span className="text-white font-semibold">MySQL</span>, with foreign key indexing, optimized queries, and proper transaction handling for tourist activity logging.
                          </p>
                        </div>
                      </div>

                      <div>
                        <span className="text-slate-500 block mb-1">ENVIRONMENT</span>
                        <div className="flex items-start space-x-2 p-2.5 rounded bg-cyber-card border border-cyber-border/80">
                          <Settings className="w-4 h-4 text-cyber-teal flex-shrink-0 mt-0.5" />
                          <p className="text-slate-300 font-sans text-xs">
                            Structured using a local <span className="text-white font-semibold">XAMPP Stack</span>, enabling rapid offline simulation, debugging, and mock production data tests.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Tech Badges */}
                    <div>
                      <span className="font-mono text-3xs text-slate-500 uppercase tracking-wider block mb-3">
                        COMPREHENSIVE TECHNOLOGY STACK
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 rounded bg-cyber-card border border-cyber-border text-cyber-teal font-mono text-3xs font-semibold tracking-wide"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}
