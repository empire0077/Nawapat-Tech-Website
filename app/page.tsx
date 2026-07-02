import { FadeIn } from '@/components/FadeIn';
import { ArrowRight, Layers, Box, Compass, Database, Activity } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation (Minimal) */}
      <nav className="absolute top-0 w-full z-10 px-6 py-8 md:px-12 lg:px-24 flex justify-between items-center">
        <div className="font-semibold text-lg tracking-tight">nawapat.tech</div>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-slate">
          <Link href="#paradigm" className="hover:text-onyx transition-colors">Philosophy</Link>
          <Link href="#frameworks" className="hover:text-onyx transition-colors">Frameworks</Link>
          <Link href="#showcase" className="hover:text-onyx transition-colors">Labs</Link>
          <Link href="#advisory" className="hover:text-onyx transition-colors">Advisory</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row items-center gap-16 lg:gap-24 min-h-screen">
        <div className="flex-1 w-full z-10">
          <FadeIn>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-onyx mb-8 leading-[1.1]">
              Stop Building Rigid Tracks.<br className="hidden md:block" /> Start Building <span className="text-navy">Living Ecosystems.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-xl md:text-2xl text-slate mb-12 max-w-2xl leading-relaxed">
              Architecting enterprise systems that shift from rigid instructions to intelligent, adaptive living assets.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Link 
              href="#advisory"
              className="inline-flex items-center space-x-2 border border-onyx px-8 py-4 text-sm font-medium uppercase tracking-widest hover:bg-onyx hover:text-white transition-all duration-300 group"
            >
              <span>Request Strategic Architecture Review</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeIn>
        </div>
        <div className="flex-1 w-full max-w-md lg:max-w-none relative">
          <FadeIn delay={0.3} direction="left">
            <div className="aspect-[4/5] bg-gray-50 relative overflow-hidden flex items-center justify-center">
              {/* Image placeholder instruction: The image provided by the user can be placed here.
                  Since we don't have a direct URL to the attached image in the system prompt, we use a clean aesthetic placeholder 
                  and instruct the user to replace it. */}
              <div className="absolute inset-0 bg-gray-100 flex items-center justify-center text-gray-400 text-sm font-mono p-8 text-center">
                [ Profile Image Placeholder ]<br/><br/>
                Place the provided professional headshot of Nawapat Thamchob here.
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* The Paradigm Shift Section */}
      <section id="paradigm" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-gray-50/50">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-16 md:mb-24">The Paradigm Shift:<br/>From Task to Intelligence</h2>
        </FadeIn>
        
        <div className="grid md:grid-cols-2 gap-12 md:gap-24">
          <FadeIn delay={0.1}>
            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-xl font-medium mb-4 text-slate">The Old World (Rigid)</h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate mt-2.5 mr-4 flex-shrink-0" />
                  <div>
                    <strong className="block text-onyx font-medium">Static Intelligence</strong>
                    <span className="text-slate text-sm">Systems designed for specific, unchanging scenarios with high maintenance overhead.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate mt-2.5 mr-4 flex-shrink-0" />
                  <div>
                    <strong className="block text-onyx font-medium">Complexity Tax</strong>
                    <span className="text-slate text-sm">Every new business requirement adds compounded technical debt and integration friction.</span>
                  </div>
                </li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="border-t border-navy pt-8">
              <h3 className="text-xl font-medium mb-4 text-navy">The New World (Applied Intelligence)</h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-navy mt-2.5 mr-4 flex-shrink-0" />
                  <div>
                    <strong className="block text-onyx font-medium">Living Assets</strong>
                    <span className="text-slate text-sm">Architectures that learn, adapt, and scale dynamically in response to enterprise telemetry.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-navy mt-2.5 mr-4 flex-shrink-0" />
                  <div>
                    <strong className="block text-onyx font-medium">Scalable Judgement</strong>
                    <span className="text-slate text-sm">Embedding AI functionally to transition from automated tasks to automated decision-making.</span>
                  </div>
                </li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Thought Leadership (Pillars Preview) */}
      <section id="frameworks" className="py-24 md:py-32 px-6 md:px-12 lg:px-24">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-16 md:mb-24">Strategic Frameworks</h2>
        </FadeIn>
        
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          <FadeIn delay={0.1}>
            <div className="group h-full flex flex-col">
              <div className="w-12 h-12 bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-navy transition-colors duration-300">
                <Layers className="w-5 h-5 text-onyx group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-medium mb-3">5-Dimension Framework</h3>
              <p className="text-slate text-sm leading-relaxed flex-grow">
                A holistic assessment model measuring technical feasibility, strategic alignment, operational readiness, risk, and intelligence capability.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="group h-full flex flex-col">
              <div className="w-12 h-12 bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-navy transition-colors duration-300">
                <Box className="w-5 h-5 text-onyx group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-medium mb-3">Organizational Pyramid</h3>
              <p className="text-slate text-sm leading-relaxed flex-grow">
                Structuring enterprise layers to decouple slow-moving foundational systems from fast-moving agile intelligence units.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="group h-full flex flex-col">
              <div className="w-12 h-12 bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-navy transition-colors duration-300">
                <Compass className="w-5 h-5 text-onyx group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-medium mb-3">Foresight Framework</h3>
              <p className="text-slate text-sm leading-relaxed flex-grow">
                Predictive architectural planning that optimizes current-state systems for future-state AI and ML integrations.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Architecture Showcase (Labs Preview) */}
      <section id="showcase" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-onyx text-white">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-16 md:mb-24">Enterprise Solutions Showcase</h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          <FadeIn delay={0.1}>
            <div className="flex flex-col h-full">
              {/* Diagram Placeholder */}
              <div className="w-full aspect-video bg-white/5 border border-white/10 mb-8 flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-navy/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                <Activity className="w-8 h-8 text-white/30 z-10" />
                <span className="absolute bottom-4 left-4 text-xs font-mono text-white/40 z-10">Blueprint: SCADA_ARCH_01</span>
              </div>
              <h3 className="text-2xl font-medium mb-4">Automated SCADA Pipeline</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                Industrial telemetry processing architecture capable of real-time anomaly detection and predictive maintenance scaling across thousands of endpoint sensors.
              </p>
              <button className="self-start inline-flex items-center space-x-2 text-sm font-medium uppercase tracking-widest hover:text-gray-300 transition-colors group">
                <span className="border-b border-white/30 pb-1 group-hover:border-white transition-colors">Inquire for Enterprise Licensing</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="flex flex-col h-full">
              {/* Diagram Placeholder */}
              <div className="w-full aspect-video bg-white/5 border border-white/10 mb-8 flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-navy/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                <Database className="w-8 h-8 text-white/30 z-10" />
                <span className="absolute bottom-4 left-4 text-xs font-mono text-white/40 z-10">Blueprint: DATA_ENG_02</span>
              </div>
              <h3 className="text-2xl font-medium mb-4">Data Collection Engine</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                A unified, self-healing ingestion framework designed to harmonize unstructured enterprise data into semantically structured, AI-ready assets.
              </p>
              <button className="self-start inline-flex items-center space-x-2 text-sm font-medium uppercase tracking-widest hover:text-gray-300 transition-colors group">
                <span className="border-b border-white/30 pb-1 group-hover:border-white transition-colors">Inquire for Enterprise Licensing</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Advisory Footer */}
      <section id="advisory" className="pt-24 pb-12 px-6 md:px-12 lg:px-24">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-24">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8">Ready to transition from Legacy to Living Asset?</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Link 
              href="mailto:contact@nawapat.tech"
              className="inline-flex items-center space-x-2 bg-onyx text-white px-8 py-4 text-sm font-medium uppercase tracking-widest hover:bg-navy transition-colors duration-300 group"
            >
              <span>Initiate Advisory Dialogue</span>
            </Link>
          </FadeIn>
        </div>

        <div className="border-t border-gray-200 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex space-x-8 text-sm font-medium">
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-navy transition-colors">LinkedIn</Link>
            <Link href="#advisory" className="hover:text-navy transition-colors">Advisory</Link>
          </div>
          <div className="text-sm text-slate">
            &copy; {new Date().getFullYear()} Nawapat Thamchob. All rights reserved.
          </div>
        </div>
      </section>
    </main>
  );
}
