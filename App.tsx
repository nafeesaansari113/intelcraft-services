
import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Menu, 
  X, 
  ChevronRight, 
  Database, 
  Cpu, 
  Code, 
  Globe, 
  Mail, 
  Phone,
  BarChart3,
  Layers,
  CheckCircle,
  BookOpen,
  Users,
  FileText,
  Maximize,
  Activity,
  Terminal,
  Shield,
  Zap,
  Box,
  Image as ImageIcon
} from 'lucide-react';
import { SERVICES } from './constants';
import { Service } from './types';

const Navbar = ({ onHomeClick }: { onHomeClick: () => void }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-6 left-1/2 -translate-x-1/2 w-[92%] max-w-5xl z-50 transition-all duration-500 ${scrolled ? 'scale-95' : 'scale-100'}`}>
      <div className="bg-white/80 backdrop-blur-xl border border-white/20 rounded-full px-6 py-3 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] flex justify-between items-center overflow-hidden relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
        
        <div 
          className="flex items-center gap-2 cursor-pointer group/logo"
          onClick={onHomeClick}
        >
          <div className="bg-blue-600 p-2 rounded-lg group-hover/logo:rotate-12 transition-transform duration-300 shadow-md">
            <Cpu className="text-white w-5 h-5" />
          </div>
          <span className="text-lg font-bold bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent hidden sm:inline-block">
            IntelCraft Services
          </span>
        </div>
        
        <div className="flex items-center gap-6 md:gap-8 text-sm font-semibold text-slate-600">
          <a href="#services" className="hover:text-blue-600 transition-colors">Solutions</a>
          <a href="#about" className="hover:text-blue-600 transition-colors hidden md:inline-block">Impact</a>
          <button className="bg-slate-900 text-white px-5 py-2 rounded-full text-xs font-bold hover:bg-slate-800 transition-all shadow-lg shadow-slate-200">
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => (
  <section className="pt-44 pb-20 px-6 bg-gradient-to-b from-blue-50/50 via-white to-transparent relative overflow-hidden">
    <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-100/30 rounded-full blur-[120px] -z-10 animate-pulse" />
    <div className="max-w-7xl mx-auto text-center relative">
      <div className="inline-flex items-center gap-2 bg-blue-100/80 backdrop-blur text-blue-700 px-4 py-1.5 rounded-full text-xs font-bold mb-8 border border-blue-200/50 shadow-sm animate-bounce">
        <Zap size={14} className="fill-blue-700" />
        HIGH-FIDELITY B2B ENGINEERING
      </div>
      <h1 className="text-5xl md:text-8xl font-black text-slate-900 mb-8 tracking-tighter leading-[0.9]">
        Data Excellence<br />
        <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Reimagined.</span>
      </h1>
      <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
        Precision engineering for high-scale data extraction, interactive 3D digital experiences, 
        and agentic AI solutions. Built for the modern enterprise.
      </p>
      <div className="flex flex-col sm:flex-row gap-5 justify-center">
        <a href="#services" className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold shadow-2xl shadow-blue-500/40 hover:bg-blue-700 transition-all flex items-center justify-center gap-3 scale-100 hover:scale-105 active:scale-95">
          Explore Catalog <ChevronRight size={20} />
        </a>
        <button className="bg-white/50 backdrop-blur text-slate-900 border border-slate-200 px-10 py-5 rounded-2xl font-bold hover:bg-white transition-all shadow-sm">
          Technical Portfolio
        </button>
      </div>
    </div>
  </section>
);

const ServiceCard = ({ service, onClick }: { service: Service; onClick: (s: Service) => void }) => (
  <div 
    className="group bg-white rounded-3xl border border-slate-200 overflow-hidden hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 cursor-pointer flex flex-col h-full relative"
    onClick={() => onClick(service)}
  >
    <div className="relative aspect-[16/10] overflow-hidden">
      <img 
        src={service.imageUrl} 
        alt={service.title} 
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
        <span className="text-white text-sm font-bold flex items-center gap-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          Unlock Full Technical Breakdown <ChevronRight size={18} />
        </span>
      </div>
      {service.id === '3d-ai-web-dev' && (
        <div className="absolute top-4 right-4 bg-blue-600/90 backdrop-blur text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
          $10k+ Value
        </div>
      )}
    </div>
    <div className="p-8 flex flex-col flex-grow">
      <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight">
        {service.title}
      </h3>
      <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-2 font-medium">
        {service.description}
      </p>
      <div className="mt-auto flex items-center justify-between pt-6 border-t border-slate-100">
        <div className="p-3 bg-blue-50 rounded-2xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-sm">
          <Layers size={20} />
        </div>
        <span className="text-blue-600 font-black text-xs uppercase tracking-[0.2em]">View Analysis</span>
      </div>
    </div>
  </div>
);

const ServiceDetailView = ({ service, onBack }: { service: Service; onBack: () => void }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'CheckCircle': return <CheckCircle size={24} />;
      case 'BookOpen': return <BookOpen size={24} />;
      case 'Users': return <Users size={24} />;
      case 'Code': return <Code size={24} />;
      case 'Database': return <Database size={24} />;
      case 'FileText': return <FileText size={24} />;
      case 'Maximize': return <Maximize size={24} />;
      case 'Image': return <ImageIcon size={24} />;
      case 'Layers': return <Layers size={24} />;
      case 'Activity': return <Activity size={24} />;
      case 'Globe': return <Globe size={24} />;
      case 'Cpu': return <Cpu size={24} />;
      case 'Shield': return <Shield size={24} />;
      case 'Zap': return <Zap size={24} />;
      case 'Box': return <Box size={24} />;
      case 'Terminal': return <Terminal size={24} />;
      default: return <CheckCircle size={24} />;
    }
  };

  const renderJsonSample = (id: string) => {
    if (id === 'ai-qa-generation') {
      return {
        "passage_id": "PASS_00123",
        "word_count": 287,
        "questions": [
          {
            "question": "What is the primary theme...",
            "options": { "A": "Growth", "B": "Decay" },
            "answer": "A"
          }
        ]
      };
    }
    if (id === 'ecommerce-intelligence') {
      return {
        "brand": "Blue Bottle Coffee",
        "revenue_est": "250M",
        "market_share": "0.84%",
        "amazon_bsr": "#120 in Grocery",
        "top_channels": ["Cafe", "DTC", "Wholesale"]
      };
    }
    if (id === 'shopify-product-upload') {
      return {
        "product_id": "SKU-9921",
        "sync_status": "Success",
        "platforms": ["Amazon", "Shopify", "Etsy"],
        "validation": "Passed (12/12 rules)"
      };
    }
    if (id === 'pdf-data-extraction') {
      return {
        "doc_id": "PDF_9921_X",
        "fields": { "vendor": "Acme Corp", "total": 1250.00 },
        "confidence": 0.99
      };
    }
    if (id === '3d-ai-web-dev') {
      return {
        "project": "Hoops Technology",
        "value_tier": "Elite",
        "assets": ["3D Basketball", "Floating Nav", "CMS Admin"],
        "stack": ["React", "Spline", "Tailwind", "AI-Core"]
      };
    }
    return null;
  };

  const jsonSample = renderJsonSample(service.id);

  return (
    <div className="bg-white min-h-screen pt-32 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-400 hover:text-blue-600 transition-all mb-12 font-bold group"
        >
          <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-blue-200 group-hover:bg-blue-50 transition-all">
            <ChevronRight className="rotate-180" size={16} />
          </div>
          Return to Elite Catalog
        </button>
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="w-12 h-1 bg-blue-600 mb-6 rounded-full" />
            <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tighter">
              {service.title}
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-10 font-medium">
              {service.longDescription}
            </p>
            {service.outcomes && (
              <div className="grid grid-cols-2 gap-6">
                {service.outcomes.map((o, idx) => (
                  <div key={idx} className="bg-slate-50 p-6 rounded-[2rem] border border-slate-100 shadow-sm hover:border-blue-200 transition-colors">
                    <div className="text-blue-600 mb-3 bg-white w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm">
                      {getIcon(o.icon)}
                    </div>
                    <div className="text-2xl font-black text-slate-900">{o.value}</div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-black">{o.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="relative rounded-[3rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border-[12px] border-slate-50 animate-in zoom-in duration-1000">
            <img src={service.imageUrl} alt={service.title} className="w-full h-full object-cover aspect-[4/3]" />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-[2.5rem]" />
          </div>
        </div>
      </div>

      <div className="bg-slate-900 py-32 px-6">
        <div className="max-w-5xl mx-auto">
          {service.detailContent ? (
            <div className="space-y-12">
              <div className="text-center mb-16">
                <span className="text-blue-500 font-black uppercase tracking-[0.3em] text-[10px]">Technical Documentation</span>
                <h2 className="text-4xl font-black text-white mt-4 tracking-tight">System Architecture & Workflow</h2>
              </div>
              
              <div className="grid gap-12">
              {service.detailContent.map((section, idx) => (
                <div key={idx} className="bg-slate-800/50 backdrop-blur-md p-12 rounded-[3rem] border border-slate-700/50 relative overflow-hidden group hover:border-blue-500/30 transition-all duration-500">
                  <div className="absolute top-0 right-0 p-12 text-slate-800 font-black text-8xl pointer-events-none select-none group-hover:text-blue-900/20 transition-colors">
                    0{idx + 1}
                  </div>
                  <h3 className="text-3xl font-black text-white mb-8 flex items-center gap-4">
                    <div className="w-2 h-10 bg-blue-600 rounded-full"></div>
                    {section.title}
                  </h3>
                  
                  <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div className="space-y-8">
                      {section.challenge && (
                        <div>
                          <h4 className="text-red-400 text-[10px] font-black uppercase tracking-widest mb-3 flex items-center gap-2">
                            <X size={14} /> Critical Challenge
                          </h4>
                          <p className="text-slate-300 leading-relaxed font-medium">{section.challenge}</p>
                        </div>
                      )}

                      {section.solution && (
                        <div>
                          <h4 className="text-emerald-400 text-[10px] font-black uppercase tracking-widest mb-3 flex items-center gap-2">
                            <CheckCircle size={14} /> Engineering Solution
                          </h4>
                          <p className="text-slate-300 leading-relaxed font-medium">{section.solution}</p>
                        </div>
                      )}

                      {section.approach && (
                        <div>
                          <h4 className="text-blue-400 text-[10px] font-black uppercase tracking-widest mb-3 flex items-center gap-2">
                            <Terminal size={14} /> Methodology
                          </h4>
                          <p className="text-slate-300 leading-relaxed font-medium">{section.approach}</p>
                        </div>
                      )}

                      {section.points && (
                        <ul className="space-y-5 pt-4">
                          {section.points.map((point, pIdx) => (
                            <li key={pIdx} className="flex gap-4 items-start">
                              <div className="mt-1.5 bg-blue-500/20 p-1 rounded-full text-blue-400 flex-shrink-0">
                                <CheckCircle size={14} />
                              </div>
                              <span className="text-slate-400 font-semibold leading-relaxed">{point}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    {section.codeSnippet && (
                      <div className="rounded-2xl overflow-hidden bg-slate-950 shadow-2xl border border-slate-700/50 self-center">
                        <div className="flex items-center gap-3 px-5 py-3 bg-slate-900 border-b border-slate-800">
                          <Terminal size={14} className="text-slate-500" />
                          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">
                            Logic: {section.codeLanguage || 'py'}
                          </span>
                        </div>
                        <pre className="p-8 text-xs md:text-sm font-mono text-blue-300/90 overflow-x-auto leading-loose">
                          <code>{section.codeSnippet}</code>
                        </pre>
                      </div>
                    )}
                  </div>
                </div>
              ))}
              </div>

              {jsonSample && (
                <div className="mt-20 bg-blue-600 rounded-[3rem] p-12 text-white shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-12 opacity-10 rotate-12">
                    <Code size={200} />
                  </div>
                  <h3 className="text-2xl font-black mb-8 flex items-center gap-3">
                    <Code size={28} /> Implementation Specification (JSON)
                  </h3>
                  <pre className="text-xs md:text-sm font-mono overflow-x-auto p-8 bg-black/20 backdrop-blur rounded-2xl leading-relaxed border border-white/10 text-white">
                    {JSON.stringify(jsonSample, null, 2)}
                  </pre>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-32 bg-slate-800/30 rounded-[4rem] border border-dashed border-slate-700">
              <div className="inline-block p-6 bg-blue-500/10 rounded-full text-blue-500 mb-8 animate-pulse">
                <BarChart3 size={48} />
              </div>
              <h2 className="text-3xl font-black text-white mb-6">Case Study Indexing...</h2>
              <p className="text-slate-400 max-w-md mx-auto font-medium">
                Our elite technical unit is currently compiling the metrics for this node. 
                Full architectural breakdowns are reserved for verified enterprise partners.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const handleServiceClick = (service: Service) => {
    setSelectedService(service);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetSelection = () => {
    setSelectedService(null);
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-blue-100 selection:text-blue-900 bg-white">
      <Navbar onHomeClick={resetSelection} />
      
      {!selectedService ? (
        <main className="flex-grow">
          <Hero />
          
          <section id="services" className="py-32 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
                <div className="max-w-2xl">
                  <span className="text-blue-600 font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Our Expertise</span>
                  <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter leading-tight">Elite Technical Solutions</h2>
                  <p className="text-slate-500 leading-relaxed text-xl font-medium">
                    Deploying battle-tested digital infrastructure and data intelligence 
                    at the intersection of human design and machine power.
                  </p>
                </div>
                <div className="flex items-center gap-4 text-slate-500 text-[10px] font-black bg-slate-50 px-6 py-3 rounded-full border border-slate-100 shadow-sm uppercase tracking-widest">
                  <span className="text-blue-600">Active Pipeline Nodes: {SERVICES.length}</span>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                {SERVICES.map((s) => (
                  <ServiceCard 
                    key={s.id} 
                    service={s} 
                    onClick={handleServiceClick} 
                  />
                ))}
              </div>
            </div>
          </section>

          <section id="about" className="py-40 bg-slate-950 text-white px-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(37,99,235,0.05),transparent)]"></div>
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center relative z-10">
              <div>
                <span className="text-blue-500 font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">Our Core Principles</span>
                <h2 className="text-5xl md:text-7xl font-black mb-12 leading-[0.9] tracking-tighter">Precision.<br/>Scale.<br/>Integrity.</h2>
                <div className="space-y-12">
                  <div className="flex gap-8 group">
                    <div className="bg-blue-600 p-5 rounded-3xl h-fit shadow-2xl shadow-blue-500/20 group-hover:scale-110 transition-transform duration-500">
                      <Globe size={32} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-black mb-3">Global Data Intelligence</h4>
                      <p className="text-slate-400 leading-relaxed text-lg font-medium">Processing millions of high-resolution data nodes across distributed neural networks daily.</p>
                    </div>
                  </div>
                  <div className="flex gap-8 group">
                    <div className="bg-indigo-600 p-5 rounded-3xl h-fit shadow-2xl shadow-indigo-500/20 group-hover:scale-110 transition-transform duration-500">
                      <Cpu size={32} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-black mb-3">Agentic AI Orchestration</h4>
                      <p className="text-slate-400 leading-relaxed text-lg font-medium">Deploying custom LLM architectures that don't just search—they reason and execute autonomously.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-slate-900/50 backdrop-blur-xl p-16 rounded-[5rem] border border-white/5 shadow-2xl relative overflow-hidden group">
                 <div className="absolute -top-24 -right-24 p-12 opacity-5 group-hover:opacity-10 transition-opacity duration-1000">
                    <Database size={450} />
                 </div>
                 <h3 className="text-4xl font-black mb-8 leading-tight">Elevate Your Data<br/>Infrastructure.</h3>
                 <p className="text-slate-300 mb-12 text-xl leading-relaxed font-medium">
                   IntelCraft isn't a vendor—we are an architectural extension. 
                   If your data is unstructured, static, or disconnected, we build 
                   the path to verified intelligence.
                 </p>
                 <button className="w-full bg-blue-600 text-white py-6 rounded-3xl font-black hover:bg-blue-500 transition-all shadow-[0_20px_40px_-10px_rgba(37,99,235,0.4)] text-lg uppercase tracking-widest">
                   Initiate Protocol
                 </button>
              </div>
            </div>
          </section>
        </main>
      ) : (
        <ServiceDetailView 
          service={selectedService} 
          onBack={resetSelection} 
        />
      )}

      <footer id="contact" className="bg-slate-50 border-t border-slate-200 pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-32">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-10">
                <div className="bg-blue-600 p-2.5 rounded-xl shadow-lg shadow-blue-500/10">
                  <Cpu className="text-white w-6 h-6" />
                </div>
                <span className="text-4xl font-black text-slate-900 tracking-tighter">IntelCraft</span>
              </div>
              <p className="text-slate-500 text-xl max-w-sm mb-12 leading-relaxed font-medium">
                Transforming digital entropy into structured assets through precision engineering 
                and high-fidelity AI orchestration.
              </p>
              <div className="flex gap-6">
                {[Mail, Phone, Globe].map((Icon, idx) => (
                  <a key={idx} href="#" className="w-14 h-14 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:-translate-y-2 transition-all shadow-sm">
                    <Icon size={24} />
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-black text-slate-900 mb-10 uppercase text-[10px] tracking-[0.4em]">Corporate</h4>
              <ul className="space-y-6 text-slate-500 font-bold text-sm">
                <li><a href="#" className="hover:text-blue-600 transition-colors">Elite Catalog</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Technical Papers</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Security Matrix</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Privacy Cloud</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black text-slate-900 mb-10 uppercase text-[10px] tracking-[0.4em]">Nodes</h4>
              <ul className="space-y-6 text-slate-500 font-bold text-sm">
                <li><a href="#" className="hover:text-blue-600 transition-colors">RAG Architectures</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">3D Experience</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">E-Commerce Sync</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Workflow Automation</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-200 pt-16 flex flex-col md:flex-row justify-between items-center gap-10">
            <p className="text-slate-400 font-bold text-xs uppercase tracking-widest">
              © {new Date().getFullYear()} IntelCraft Services. High-Fidelity B2B Orchestration.
            </p>
            <div className="flex gap-12 text-[10px] text-slate-400 font-black uppercase tracking-[0.3em]">
              <span className="flex items-center gap-3"><div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_12px_rgba(16,185,129,0.5)]"></div> Systems Active</span>
              <span>ISO/IEC 27001</span>
              <span>FedRAMP Pending</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
