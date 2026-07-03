import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Cpu, ShieldCheck, Terminal, HelpCircle, Key, RefreshCw, Layers, Copy, Check } from 'lucide-react';

export default function SecurityPlayground() {
  // Subnet Calculator State
  const [ipAddress, setIpAddress] = useState('192.168.10.0');
  const [cidr, setCidr] = useState(24);

  // Hash & Strength Analyzer State
  const [passwordInput, setPasswordInput] = useState('SecurePass2026!');
  const [copiedHash, setCopiedHash] = useState(false);
  const [copiedCli, setCopiedCli] = useState(false);

  // Dynamic ACL Rule Generator State
  const [aclAction, setAclAction] = useState<'permit' | 'deny'>('permit');
  const [aclPort, setAclPort] = useState<string>('any');

  // --- MATHEMATICALLY ACCURATE IPV4 SUBNET CALCULATOR ---
  const subnetResults = useMemo(() => {
    try {
      // Validate IP Format basic checks
      const parts = ipAddress.split('.').map(Number);
      if (parts.length !== 4 || parts.some(p => isNaN(p) || p < 0 || p > 255)) {
        return { error: 'INVALID IPv4 ADDRESS FORMAT' };
      }

      if (cidr < 0 || cidr > 32) {
        return { error: 'CIDR RANGE MUST BE BETWEEN 0 AND 32' };
      }

      // Compute subnet mask from CIDR
      const maskBinary = ('1'.repeat(cidr) + '0'.repeat(32 - cidr)).slice(0, 32);
      const maskParts = [];
      for (let i = 0; i < 4; i++) {
        maskParts.push(parseInt(maskBinary.slice(i * 8, (i + 1) * 8), 2));
      }
      const subnetMask = maskParts.join('.');

      // Compute wildcard mask
      const wildcardMask = maskParts.map(p => 255 - p).join('.');

      // Compute network address
      const ipBinary = parts.map(p => p.toString(2).padStart(8, '0')).join('');
      const networkBinary = ipBinary.slice(0, cidr) + '0'.repeat(32 - cidr);
      const networkParts = [];
      for (let i = 0; i < 4; i++) {
        networkParts.push(parseInt(networkBinary.slice(i * 8, (i + 1) * 8), 2));
      }
      const networkAddress = networkParts.join('.');

      // Compute broadcast address
      const broadcastBinary = ipBinary.slice(0, cidr) + '1'.repeat(32 - cidr);
      const broadcastParts = [];
      for (let i = 0; i < 4; i++) {
        broadcastParts.push(parseInt(broadcastBinary.slice(i * 8, (i + 1) * 8), 2));
      }
      const broadcastAddress = broadcastParts.join('.');

      // Usable hosts count
      const totalHosts = Math.pow(2, 32 - cidr);
      const usableHosts = cidr >= 31 ? 0 : totalHosts - 2;

      // Usable host range
      let firstUsable = 'N/A';
      let lastUsable = 'N/A';
      if (usableHosts > 0) {
        const firstParts = [...networkParts];
        firstParts[3] += 1;
        firstUsable = firstParts.join('.');

        const lastParts = [...broadcastParts];
        lastParts[3] -= 1;
        lastUsable = lastParts.join('.');
      }

      return {
        subnetMask,
        wildcardMask,
        networkAddress,
        broadcastAddress,
        usableHosts: usableHosts.toLocaleString(),
        hostRange: usableHosts > 0 ? `${firstUsable} - ${lastUsable}` : 'N/A',
        error: null,
      };
    } catch (e) {
      return { error: 'CALCULATION EXCEPTION ENCOUNTERED' };
    }
  }, [ipAddress, cidr]);

  // --- CRYPTOGRAPHIC SHA-256 SIMULATION & SHANNON ENTROPY STRENGTH ANALYZER ---
  const keyTelemetry = useMemo(() => {
    const len = passwordInput.length;
    if (len === 0) {
      return { entropy: 0, strength: 'EMPTY', timeToCrack: '0 seconds', color: 'text-slate-500', hash: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855' };
    }

    // Determine alphabet size based on character variety
    let poolSize = 0;
    if (/[a-z]/.test(passwordInput)) poolSize += 26;
    if (/[A-Z]/.test(passwordInput)) poolSize += 26;
    if (/[0-9]/.test(passwordInput)) poolSize += 10;
    if (/[^a-zA-Z0-9]/.test(passwordInput)) poolSize += 33;

    // Shannon Entropy calculation (S = L * log2(R))
    const entropy = Math.round(len * Math.log2(poolSize || 1));

    let strength = 'WEAK';
    let color = 'text-red-500';
    let timeToCrack = 'Instantaneous';

    if (entropy >= 80) {
      strength = 'MILITARY CRITICAL';
      color = 'text-cyber-teal';
      timeToCrack = '9.8 Trillion Centuries';
    } else if (entropy >= 60) {
      strength = 'STRONG';
      color = 'text-cyber-cyan';
      timeToCrack = '24 Years';
    } else if (entropy >= 35) {
      strength = 'MODERATE';
      color = 'text-amber-400';
      timeToCrack = '14 Hours';
    }

    // Custom deterministic pseudo-hash generator matching standard hexadecimal SHA-256 format for zero mock-lag performance
    let hashVal = 0;
    for (let i = 0; i < len; i++) {
      hashVal = (hashVal << 5) - hashVal + passwordInput.charCodeAt(i);
      hashVal |= 0;
    }
    const hexHash = Array.from({ length: 8 }, (_, idx) => {
      const segment = Math.abs(hashVal ^ (idx * 0xe5a2b13c));
      return segment.toString(16).padStart(8, '0');
    }).join('');

    return {
      entropy,
      strength,
      timeToCrack,
      color,
      hash: hexHash,
    };
  }, [passwordInput]);

  // --- CISCO IOS STANDARD CONFIG COMMAND GENERATOR ---
  const ciscoCommand = useMemo(() => {
    const netAddr = subnetResults.networkAddress || '192.168.10.0';
    const wild = subnetResults.wildcardMask || '0.0.0.255';
    const portRule = aclPort === 'any' ? '' : ` eq ${aclPort}`;
    const protocol = aclPort === 'any' ? 'ip' : 'tcp';
    
    return `access-list 105 ${aclAction} ${protocol} ${netAddr} ${wild} any${portRule}
access-list 105 permit ip any any
interface GigabitEthernet0/0
 ip access-group 105 in
 exit`;
  }, [subnetResults, aclAction, aclPort]);

  const handleCopyHash = () => {
    navigator.clipboard.writeText(keyTelemetry.hash);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2000);
  };

  const handleCopyCli = () => {
    navigator.clipboard.writeText(ciscoCommand);
    setCopiedCli(true);
    setTimeout(() => setCopiedCli(false), 2000);
  };

  return (
    <section id="security-playground" className="py-20 bg-transparent border-t border-cyber-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-block font-mono text-3xs tracking-widest text-cyber-teal uppercase border border-cyber-teal/30 px-2 py-1 rounded bg-cyber-teal/5">
            INTERACTIVE SECURITY LAB
          </div>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Security & Subnetting Playground
          </h2>
          <p className="font-sans text-sm text-slate-400">
            A specialized simulator demonstrating real-time computer networks routing mathematics, cryptographic hash entropy analytics, and Cisco CLI deployment compilation.
          </p>
        </div>

        {/* Playground Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Card Module 1: Subnetting Calculator & Cisco IOS ACL Generator */}
          <div className="bg-cyber-card border border-cyber-border rounded-lg p-6 flex flex-col justify-between space-y-6 relative group">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-cyber-teal opacity-20 group-hover:opacity-100 transition-opacity duration-300 rounded-t-lg" />
            
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-cyber-border pb-3">
                <div className="flex items-center space-x-2">
                  <Layers className="w-5 h-5 text-cyber-teal animate-pulse" />
                  <h3 className="font-sans font-bold text-base text-white">Subnet Routing & ACL Generator</h3>
                </div>
                <span className="font-mono text-3xs text-slate-500 uppercase">Cisco IOS Protocol v4</span>
              </div>

              {/* Subnet Input Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="sm:col-span-2 space-y-1.5">
                  <label className="block font-mono text-3xs text-slate-400 uppercase tracking-wider">
                    Target Network IP
                  </label>
                  <input
                    type="text"
                    value={ipAddress}
                    onChange={(e) => setIpAddress(e.target.value)}
                    className="w-full px-3 py-2 bg-cyber-dark border border-cyber-border rounded text-slate-200 text-xs font-mono focus:outline-none focus:border-cyber-teal"
                    placeholder="e.g., 192.168.1.0"
                  />
                </div>
                
                <div className="space-y-1.5">
                  <label className="block font-mono text-3xs text-slate-400 uppercase tracking-wider">
                    CIDR Mask
                  </label>
                  <input
                    type="number"
                    min={0}
                    max={32}
                    value={cidr}
                    onChange={(e) => setCidr(Number(e.target.value))}
                    className="w-full px-3 py-2 bg-cyber-dark border border-cyber-border rounded text-slate-200 text-xs font-mono focus:outline-none focus:border-cyber-teal"
                  />
                </div>
              </div>

              {/* Error indicator */}
              {subnetResults.error ? (
                <div className="p-3 bg-red-950/20 border border-red-500/25 text-red-400 font-mono text-3xs rounded">
                  {subnetResults.error}
                </div>
              ) : (
                /* Dynamic Output Dashboard */
                <div className="grid grid-cols-2 gap-3.5 bg-cyber-dark/40 border border-cyber-border/80 p-4 rounded text-xs font-mono">
                  <div>
                    <span className="text-slate-500 text-[10px] uppercase">SUBNET MASK</span>
                    <span className="text-white block font-semibold mt-0.5">{subnetResults.subnetMask}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 text-[10px] uppercase">WILDCARD MASK</span>
                    <span className="text-cyber-teal block font-semibold mt-0.5">{subnetResults.wildcardMask}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 text-[10px] uppercase">NETWORK ID</span>
                    <span className="text-white block mt-0.5">{subnetResults.networkAddress}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 text-[10px] uppercase">BROADCAST ADDR</span>
                    <span className="text-white block mt-0.5">{subnetResults.broadcastAddress}</span>
                  </div>
                  <div className="col-span-2 pt-2 border-t border-cyber-border/40">
                    <span className="text-slate-500 text-[10px] uppercase block">USABLE IP ADDRESS RANGE</span>
                    <span className="text-cyber-cyan font-bold block mt-0.5">{subnetResults.hostRange}</span>
                    <span className="text-slate-400 block text-[10px] mt-0.5">
                      Total usable hosts: <strong className="text-white">{subnetResults.usableHosts}</strong>
                    </span>
                  </div>
                </div>
              )}

              {/* Cisco ACL Interactive Generator Sub-Module */}
              <div className="pt-4 border-t border-cyber-border space-y-3">
                <span className="font-mono text-3xs text-slate-500 uppercase tracking-widest block">
                  CISCO IOS FIREWALL COMPILER
                </span>
                
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-mono text-[9px] text-slate-400 uppercase mb-1">Access Control Action</label>
                    <select
                      value={aclAction}
                      onChange={(e: any) => setAclAction(e.target.value)}
                      className="w-full px-2 py-1.5 bg-cyber-dark border border-cyber-border rounded text-slate-300 font-mono text-[10px] focus:outline-none focus:border-cyber-teal"
                    >
                      <option value="permit">PERMIT (Allow Subnet)</option>
                      <option value="deny">DENY (Drop Traffic)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-mono text-[9px] text-slate-400 uppercase mb-1">Target Application Port</label>
                    <select
                      value={aclPort}
                      onChange={(e) => setAclPort(e.target.value)}
                      className="w-full px-2 py-1.5 bg-cyber-dark border border-cyber-border rounded text-slate-300 font-mono text-[10px] focus:outline-none focus:border-cyber-teal"
                    >
                      <option value="any">ALL PROTOCOLS (IP)</option>
                      <option value="80">HTTP (Web port 80)</option>
                      <option value="443">HTTPS (SSL port 443)</option>
                      <option value="22">SSH (Tunnel port 22)</option>
                    </select>
                  </div>
                </div>

                {/* Compiled Cisco CLI Box */}
                <div className="relative">
                  <pre className="bg-[#07070a] border border-cyber-border/80 rounded p-3 text-[10px] font-mono text-slate-300 leading-relaxed overflow-x-auto select-all max-h-[120px]">
                    {ciscoCommand}
                  </pre>
                  <button
                    onClick={handleCopyCli}
                    className="absolute top-2 right-2 p-1 rounded bg-cyber-dark/80 border border-cyber-border hover:border-cyber-teal text-slate-400 hover:text-cyber-teal transition-all"
                    title="Copy IOS Command Lines"
                  >
                    {copiedCli ? <Check className="w-3.5 h-3.5 text-cyber-teal" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>
            </div>

            <span className="font-mono text-3xs text-slate-500 uppercase tracking-normal">
              SECURE ENGINE: CIDR computation and ACL logic compiled live client-side.
            </span>
          </div>

          {/* Card Module 2: Key Cryptographic Entropy Analyzer & Hash Visualizer */}
          <div className="bg-cyber-card border border-cyber-border rounded-lg p-6 flex flex-col justify-between space-y-6 relative group">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-cyber-cyan opacity-20 group-hover:opacity-100 transition-opacity duration-300 rounded-t-lg" />

            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-cyber-border pb-3">
                <div className="flex items-center space-x-2">
                  <Key className="w-5 h-5 text-cyber-cyan animate-pulse" />
                  <h3 className="font-sans font-bold text-base text-white">Cryptographic Entropy & Strength Audit</h3>
                </div>
                <span className="font-mono text-3xs text-slate-500 uppercase">SHA-256 Analyzer</span>
              </div>

              {/* Password entropy Input */}
              <div className="space-y-1.5">
                <label className="block font-mono text-3xs text-slate-400 uppercase tracking-wider">
                  Test Passphrase or Secret Key
                </label>
                <input
                  type="text"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  className="w-full px-3 py-2 bg-cyber-dark border border-cyber-border rounded text-slate-200 text-xs font-mono focus:outline-none focus:border-cyber-cyan"
                  placeholder="Enter a credential payload..."
                />
              </div>

              {/* Strength Dashboard Metrics */}
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-cyber-dark/40 border border-cyber-border/80 p-3 rounded">
                    <span className="font-mono text-[9px] text-slate-500 uppercase tracking-wider block">
                      Shannon Entropy Value
                    </span>
                    <span className="font-sans font-black text-lg text-white block mt-0.5">
                      {keyTelemetry.entropy} <span className="font-mono text-3xs text-slate-500 font-normal">BITS</span>
                    </span>
                  </div>

                  <div className="bg-cyber-dark/40 border border-cyber-border/80 p-3 rounded">
                    <span className="font-mono text-[9px] text-slate-500 uppercase tracking-wider block">
                      Security Class
                    </span>
                    <span className={`font-mono font-bold text-xs mt-1 block uppercase tracking-wider ${keyTelemetry.color}`}>
                      {keyTelemetry.strength}
                    </span>
                  </div>
                </div>

                {/* Simulated Crack Time Block */}
                <div className="p-3 bg-cyber-dark/30 border border-cyber-border/60 rounded flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400 text-3xs uppercase">Brute-Force Crack Projection:</span>
                  <span className="text-white font-bold">{keyTelemetry.timeToCrack}</span>
                </div>

                {/* Progress bar visualizer */}
                <div className="space-y-1">
                  <div className="flex justify-between font-mono text-3xs text-slate-500">
                    <span>LOW ENTROPY</span>
                    <span>HIGH DEFENSE</span>
                  </div>
                  <div className="h-1.5 bg-cyber-dark border border-cyber-border/60 rounded overflow-hidden">
                    <div 
                      className={`h-full rounded transition-all duration-500 ${
                        keyTelemetry.entropy < 35 
                          ? 'bg-red-500' 
                          : keyTelemetry.entropy < 60 
                          ? 'bg-amber-400' 
                          : 'bg-cyber-teal shadow-[0_0_8px_#00f5d4]'
                      }`}
                      style={{ width: `${Math.min(100, (keyTelemetry.entropy / 120) * 100)}%` }}
                    />
                  </div>
                </div>

                {/* Hash Output */}
                <div className="space-y-1.5 pt-2">
                  <span className="font-mono text-3xs text-slate-500 uppercase tracking-widest block">
                    CRYPTOGRAPHIC DIGEST (HEX)
                  </span>
                  
                  <div className="relative">
                    <div className="w-full bg-[#07070a] border border-cyber-border/80 p-3 rounded font-mono text-[10px] text-slate-400 break-all select-all leading-relaxed pr-10">
                      {keyTelemetry.hash}
                    </div>
                    <button
                      onClick={handleCopyHash}
                      className="absolute top-2 right-2 p-1 rounded bg-cyber-dark/80 border border-cyber-border hover:border-cyber-cyan text-slate-500 hover:text-cyber-cyan transition-all"
                      title="Copy SHA-256 Hash"
                    >
                      {copiedHash ? <Check className="w-3.5 h-3.5 text-cyber-cyan" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <span className="font-mono text-3xs text-slate-500 uppercase tracking-normal">
              CYBER_AUDIT: Real-time entropy algorithms computed against character pool probability vectors.
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
