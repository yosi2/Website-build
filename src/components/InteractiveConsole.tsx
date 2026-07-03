import { useState, useEffect, useRef } from 'react';
import { Terminal, Play, ShieldAlert, Cpu, CheckCircle2, AlertTriangle, RefreshCw } from 'lucide-react';

interface LogLine {
  timestamp: string;
  type: 'INFO' | 'SUCCESS' | 'WARNING' | 'ALERT';
  message: string;
}

export default function InteractiveConsole() {
  const [targetHost, setTargetHost] = useState('injibara.edu.et');
  const [pinging, setPinging] = useState(false);
  const [pingLogs, setPingLogs] = useState<string[]>([]);
  const [activePorts, setActivePorts] = useState({
    80: true,   // HTTP
    443: true,  // HTTPS
    3306: false, // MySQL
    22: false   // SSH
  });
  const [firewallLogs, setFirewallLogs] = useState<LogLine[]>([]);
  const consoleBottomRef = useRef<HTMLDivElement>(null);

  // Pre-seed some firewall logs on mount
  useEffect(() => {
    const initialLogs: LogLine[] = [
      { timestamp: '09:38:00', type: 'INFO', message: 'Firewall daemon initialized. Secure ACL rules loaded.' },
      { timestamp: '09:38:05', type: 'SUCCESS', message: 'Connection established to Gateway router. OSPF converged.' },
      { timestamp: '09:38:12', type: 'INFO', message: 'MySQL XAMPP localized server instance on port 3306 detected.' },
      { timestamp: '09:38:20', type: 'ALERT', message: 'Unauthorized SSH port 22 access attempt blocked from 192.168.1.105' }
    ];
    setFirewallLogs(initialLogs);
  }, []);

  // Periodic random log generation to simulate live system telemetry
  useEffect(() => {
    const interval = setInterval(() => {
      const ports = [80, 443, 3306, 22];
      const selectedPort = ports[Math.floor(Math.random() * ports.length)] as 80 | 443 | 3306 | 22;
      const ips = ['10.12.4.99', '192.168.4.15', '10.55.12.80', '197.156.9.124'];
      const ip = ips[Math.floor(Math.random() * ips.length)];
      const now = new Date().toLocaleTimeString();

      const isAllowed = activePorts[selectedPort];
      let newLog: LogLine;

      if (isAllowed) {
        newLog = {
          timestamp: now,
          type: 'SUCCESS',
          message: `Inbound request to Port ${selectedPort} from ${ip} - APPROVED [ACL ALLOW]`
        };
      } else {
        newLog = {
          timestamp: now,
          type: 'ALERT',
          message: `Blocked intrusion payload on Port ${selectedPort} from ${ip} - CONSOLE REJECTED [ACL DROP]`
        };
      }

      setFirewallLogs((prev) => [newLog, ...prev.slice(0, 30)]);
    }, 4500);

    return () => clearInterval(interval);
  }, [activePorts]);

  const handlePing = () => {
    if (pinging) return;
    setPinging(true);
    setPingLogs([`yosef@secure-terminal:~$ ping -c 4 ${targetHost}`]);

    let step = 0;
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const ipAddr = targetHost === 'injibara.edu.et' 
        ? '10.120.45.1' 
        : targetHost === 'localhost_mysql' 
        ? '127.0.0.1:3306' 
        : '192.168.1.1';

      if (step === 0) {
        setPingLogs((prev) => [...prev, `PING ${targetHost} (${ipAddr}) 56(84) bytes of data.`]);
      } else if (step <= 4) {
        const time = (Math.random() * 15 + 4).toFixed(1);
        setPingLogs((prev) => [
          ...prev, 
          `64 bytes from ${ipAddr}: icmp_seq=${step} ttl=64 time=${time} ms`
        ]);
      } else {
        setPingLogs((prev) => [
          ...prev,
          `--- ${targetHost} ping statistics ---`,
          `4 packets transmitted, 4 received, 0% packet loss, time 3004ms`,
          `rtt min/avg/max = 4.2/10.5/19.1 ms`,
          `yosef@secure-terminal:~$ _`
        ]);
        setPinging(false);
        clearInterval(interval);
      }
      step++;
    }, 600);
  };

  const togglePort = (port: 80 | 443 | 3306 | 22) => {
    setActivePorts((prev) => {
      const updated = { ...prev, [port]: !prev[port] };
      
      // Inject prompt confirmation log
      const now = new Date().toLocaleTimeString();
      const actionMessage = updated[port] 
        ? `Port ${port} has been OPENED. Dynamic firewall policies updated.`
        : `Port ${port} has been CLOSED. Intrusion prevention rule engaged.`;
        
      setFirewallLogs((logs) => [
        { timestamp: now, type: updated[port] ? 'WARNING' : 'INFO', message: actionMessage },
        ...logs
      ]);
      return updated;
    });
  };

  return (
    <section id="telemetry" className="py-20 bg-transparent border-t border-cyber-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-block font-mono text-3xs tracking-widest text-cyber-teal uppercase border border-cyber-teal/30 px-2 py-1 rounded bg-cyber-teal/5">
            OPERATIONAL DEMO
          </div>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Network & Security Console
          </h2>
          <p className="font-sans text-sm text-slate-400">
            Interact with a live simulated routing console, inspect subnets, and configure port rules in real-time.
          </p>
        </div>

        {/* Console Container Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Column 1: Live Interactive Ping Tool */}
          <div className="lg:col-span-5 bg-cyber-card border border-cyber-border rounded-lg overflow-hidden flex flex-col h-[460px]">
            <div className="bg-cyber-dark/80 px-4 py-3 border-b border-cyber-border flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Terminal className="w-4 h-4 text-cyber-teal" />
                <span className="font-mono text-xs text-slate-300 font-bold">Secure Trace-Route Port</span>
              </div>
              <div className="flex space-x-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
              </div>
            </div>

            {/* Inputs bar */}
            <div className="p-4 bg-cyber-dark/40 border-b border-cyber-border/60 flex gap-3">
              <select
                value={targetHost}
                onChange={(e) => setTargetHost(e.target.value)}
                className="flex-1 px-3 py-2 bg-cyber-dark border border-cyber-border rounded text-slate-300 font-mono text-xs focus:outline-none focus:border-cyber-teal"
              >
                <option value="injibara.edu.et">Injibara Univ Core Host (10.120.45.1)</option>
                <option value="localhost_mysql">XAMPP MySQL Instance (127.0.0.1:3306)</option>
                <option value="aws_ai_gateway">AWS Cloud AI Practitioner Gateway</option>
              </select>

              <button
                onClick={handlePing}
                disabled={pinging}
                className="px-4 py-2 rounded bg-cyber-teal hover:bg-cyber-teal/90 text-cyber-dark font-mono text-xs font-bold flex items-center space-x-1 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                <span>{pinging ? 'PINGING...' : 'PING'}</span>
                <Play className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Simulated Shell Screen */}
            <div className="flex-1 p-4 bg-[#08080a] overflow-y-auto font-mono text-[11px] text-emerald-400 space-y-1.5 scrollbar-thin">
              {pingLogs.length === 0 ? (
                <div className="text-slate-600 italic flex flex-col items-center justify-center h-full space-y-2">
                  <Terminal className="w-8 h-8 text-slate-700 animate-pulse" />
                  <span>Select a targeted infrastructure node above and execute a trace-route diagnostic.</span>
                </div>
              ) : (
                pingLogs.map((log, idx) => (
                  <p key={idx} className="leading-relaxed whitespace-pre-wrap">
                    {log}
                  </p>
                ))
              )}
            </div>
          </div>

          {/* Column 2: Live Dynamic Firewall ACL Policy rules */}
          <div className="lg:col-span-7 bg-cyber-card border border-cyber-border rounded-lg overflow-hidden flex flex-col h-[460px]">
            <div className="bg-cyber-dark/80 px-4 py-3 border-b border-cyber-border flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Cpu className="w-4 h-4 text-cyber-teal" />
                <span className="font-mono text-xs text-slate-300 font-bold">Dynamic ACL Policy Manager</span>
              </div>
              <span className="font-mono text-[9px] text-slate-500">REAL-TIME INTRUSION SYSTEM</span>
            </div>

            {/* Ports Toggle Controls */}
            <div className="p-4 bg-cyber-dark/30 border-b border-cyber-border/60 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {(Object.keys(activePorts) as unknown as Array<80 | 443 | 3306 | 22>).map((port) => {
                const label = port === 80 ? 'HTTP' : port === 443 ? 'HTTPS' : port === 3306 ? 'MySQL' : 'SSH';
                const isAllowed = activePorts[port];
                return (
                  <button
                    key={port}
                    onClick={() => togglePort(port)}
                    className={`p-3 rounded border text-left flex flex-col justify-between transition-all duration-300 ${
                      isAllowed
                        ? 'bg-cyber-teal/5 border-cyber-teal/30 hover:border-cyber-teal'
                        : 'bg-cyber-dark/40 border-cyber-border hover:border-white/10'
                    }`}
                  >
                    <span className="font-mono text-[10px] text-slate-500 uppercase">{label}</span>
                    <div className="flex items-center justify-between mt-2">
                      <span className="font-mono text-xs text-white font-bold">PORT {port}</span>
                      <span
                        className={`w-2 h-2 rounded-full ${
                          isAllowed ? 'bg-cyber-teal shadow-[0_0_8px_#00f5d4]' : 'bg-red-500'
                        }`}
                      />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Live Logs Viewer */}
            <div className="flex-1 p-4 bg-[#0a0a0c] overflow-y-auto space-y-2.5 font-mono text-[11px] scrollbar-thin">
              <div className="flex items-center justify-between border-b border-cyber-border/40 pb-2 mb-3">
                <span className="text-slate-500 text-[10px] uppercase">Firewall Packet Transmission Logs</span>
                <span className="text-[10px] text-cyber-teal flex items-center space-x-1">
                  <RefreshCw className="w-3 h-3 animate-spin" />
                  <span>AUTOSCANNING</span>
                </span>
              </div>

              <div className="space-y-2">
                {firewallLogs.map((log, idx) => {
                  let badgeColor = 'text-slate-400 bg-slate-400/5 border-slate-400/20';
                  if (log.type === 'SUCCESS') badgeColor = 'text-cyber-teal bg-cyber-teal/5 border-cyber-teal/25';
                  if (log.type === 'WARNING') badgeColor = 'text-amber-400 bg-amber-400/5 border-amber-400/20';
                  if (log.type === 'ALERT') badgeColor = 'text-rose-500 bg-rose-500/5 border-rose-500/20';

                  return (
                    <div key={idx} className="flex items-start space-x-2.5 p-2 bg-cyber-dark/30 border border-cyber-border/40 rounded">
                      <span className="text-slate-600 shrink-0">{log.timestamp}</span>
                      <span className={`px-1.5 py-0.5 rounded text-[9px] border font-semibold tracking-wider shrink-0 uppercase ${badgeColor}`}>
                        {log.type}
                      </span>
                      <span className="text-slate-300 leading-normal">{log.message}</span>
                    </div>
                  );
                })}
              </div>
              <div ref={consoleBottomRef} />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
