import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import InteractiveConsole from './components/InteractiveConsole';
import SecurityPlayground from './components/SecurityPlayground';
import Contact from './components/Contact';
import Footer from './components/Footer';
import InteractiveCertificateModal from './components/InteractiveCertificateModal';
import AdminPortal from './components/AdminPortal';
import { developerProfile, certificationsData } from './data';
import { Certification } from './types';

export default function App() {
  // Dynamic Bio profile State
  const [bio, setBio] = useState(developerProfile);

  // Dynamic Certifications State (initialized with static data, modifiable by admin)
  const [certificationsList, setCertificationsList] = useState<Certification[]>(certificationsData);

  // Secure admin authorization state
  const [isAdmin, setIsAdmin] = useState(false);

  // Active popup certification detailed logs state
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  const handleUpdateBio = (newBio: typeof developerProfile) => {
    setBio((prev) => ({
      ...prev,
      ...newBio
    }));
  };

  const handleAddCert = (newCert: Certification) => {
    setCertificationsList((prev) => [newCert, ...prev]);
  };

  return (
    <div className="min-h-screen bg-sophisticated-radial text-slate-100 font-sans selection:bg-cyber-teal/30 selection:text-white relative">
      
      {/* Dynamic Header / Sticky Navbar */}
      <Header />

      {/* Main Portfolio Modules */}
      <main>
        {/* About Yosef Ygezu & Academic Spotlight (with brand new executive profile photo) */}
        <Hero profile={bio} />

        {/* Professional Experience & Milestones */}
        <Experience />

        {/* Capstone Showcase */}
        <Projects />

        {/* Technical Matrix (Skills Inventory) */}
        <Skills />

        {/* Dynamic & Interactive Network Console (Trace-route & Firewall policy manager) */}
        <InteractiveConsole />

        {/* Specialized Interactive Cybersecurity & Subnet Routing Lab Playground */}
        <SecurityPlayground />

        {/* Verified Credentials (Certifications Grid with interactive verification modal popups) */}
        <Certifications 
          certificationsList={certificationsList} 
          onSelectCert={setSelectedCert} 
        />

        {/* Secure Contact & Academic References */}
        <Contact profile={bio} />
      </main>

      {/* Dynamic Administrative Back-Office Config Deck & login trigger */}
      <AdminPortal 
        isAdmin={isAdmin} 
        onLogin={setIsAdmin} 
        onUpdateBio={handleUpdateBio} 
        onAddCert={handleAddCert} 
      />

      {/* Glassmorphism Credentials Detailed Verification Modal */}
      <InteractiveCertificateModal 
        certification={selectedCert} 
        onClose={() => setSelectedCert(null)} 
      />

      {/* Clean Copyright & Developer Footer */}
      <Footer />
    </div>
  );
}
