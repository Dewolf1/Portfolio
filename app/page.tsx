'use client'

import { SplineScene } from "@/components/ui/splite"
import { Spotlight } from "@/components/ui/spotlight"
import { Card } from "@/components/ui/card"
import { Mail, Phone, Linkedin, Github, ExternalLink, Award, Briefcase, GraduationCap, Terminal, Code, Menu, X, Instagram, Globe } from "lucide-react"
import { useState } from "react"

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formStatus, setFormStatus] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('sending')
    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      setFormStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setFormStatus(''), 3000)
    }, 1000)
  }

  return (
    <main id="home" className="min-h-screen bg-black text-white selection:bg-cyan-500/30 font-sans scanlines">
      {/* Background Grid */}
      <div className="fixed inset-0 z-0 bg-grid-white/[0.02] pointer-events-none" />

      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-neutral-800 bg-black/80 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="#home" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center glow-shadow-cyan">
                <span className="text-sm font-bold">MA</span>
              </div>
              <span className="text-xl font-bold tracking-tighter">MOHD <span className="text-cyan-400">ADEEB</span></span>
            </a>
            <div className="hidden md:flex gap-8 font-mono text-sm">
              <a href="#home" className="hover:text-cyan-400 transition-colors uppercase tracking-widest">Home</a>
              <a href="#about" className="hover:text-cyan-400 transition-colors uppercase tracking-widest">About</a>
              <a href="#projects" className="hover:text-cyan-400 transition-colors uppercase tracking-widest">Projects</a>
              <a href="#startups" className="hover:text-cyan-400 transition-colors uppercase tracking-widest">Startups</a>
              <a href="#freelance" className="hover:text-cyan-400 transition-colors uppercase tracking-widest">Freelance</a>
              <a href="#experience" className="hover:text-cyan-400 transition-colors uppercase tracking-widest">Experience</a>
              <a href="#skills" className="hover:text-cyan-400 transition-colors uppercase tracking-widest">Skills</a>
              <a href="#contact" className="hover:text-cyan-400 transition-colors uppercase tracking-widest">Contact</a>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://github.com/Dewolf1" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                <Github size={18} />
              </a>
              <a href="https://linkedin.com/in/mohd-adeeb" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                <Linkedin size={18} />
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 hover:text-cyan-400 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-neutral-800 bg-black/95 backdrop-blur-lg">
            <div className="container mx-auto px-6 py-4 flex flex-col gap-4 font-mono">
              <a href="#home" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-cyan-400 transition-colors">HOME</a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-cyan-400 transition-colors">ABOUT</a>
              <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-cyan-400 transition-colors">PROJECTS</a>
              <a href="#startups" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-cyan-400 transition-colors">STARTUPS</a>
              <a href="#freelance" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-cyan-400 transition-colors">FREELANCE</a>
              <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-cyan-400 transition-colors">EXPERIENCE</a>
              <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-cyan-400 transition-colors">SKILLS</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-cyan-400 transition-colors">CONTACT</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20 opacity-40" fill="white" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block px-4 py-2 border border-cyan-500/50 bg-cyan-500/5 rounded-sm text-xs font-mono tracking-[0.2em] text-cyan-400 uppercase">
                System Initializing... Python // AI // Lead
              </div>
              <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter leading-none">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                  MOHD
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                  ADEEB
                </span>
              </h1>
              <p className="text-xl font-mono text-neutral-400 max-w-xl">
                &gt; Building Intelligent Systems_
              </p>
              <p className="text-neutral-400 max-w-xl leading-relaxed text-lg border-l-2 border-cyan-500/30 pl-6">
                Driven <span className="text-cyan-400 font-bold">Python Developer</span> and{' '}
                <span className="text-purple-400 font-bold">AI Architect</span> specializing in{' '}
                modern <span className="text-white">Generative AI</span> and{' '}
                <span className="text-white">Agentic workflows</span>.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <a href="#projects" className="px-8 py-4 bg-cyan-500 text-black font-bold uppercase tracking-widest hover:bg-cyan-400 cyber-clip transition-all flex items-center gap-2">
                  View Data <ExternalLink size={16} />
                </a>
                <a href="/resume_python.pdf" download="MohdAdeeb.pdf" className="px-8 py-4 border border-cyan-500/50 text-cyan-400 font-bold uppercase tracking-widest hover:bg-cyan-500/10 cyber-clip transition-all">
                  Access CV
                </a>
              </div>
            </div>

            <div className="relative h-[400px] sm:h-[500px] lg:h-[700px] flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 blur-[100px] rounded-full" />
              <div className="w-full h-full relative z-10 group transition-all duration-500">
                <div className="w-full h-full overflow-hidden transition-all">
                  <SplineScene
                    scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                    className="w-full h-full scale-110"
                  />
                  <div className="absolute bottom-6 left-6 font-mono text-[10px] text-cyan-500/50 uppercase tracking-[0.3em] animate-pulse">
                    Live Interface // Adaptive Tracking Active
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 border-y border-neutral-800/50 bg-neutral-900/10 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[{ v: '8.23', l: 'GPA', c: 'from-cyan-400 to-blue-600' }, { v: '6+', l: 'Certifications', c: 'from-purple-400 to-pink-600' }, { v: '15+', l: 'Projects', c: 'from-blue-400 to-cyan-600' }].map((s, i) => (
              <div key={i} className="group relative py-8">
                <div className={`absolute inset-0 bg-gradient-to-r ${s.c} opacity-0 group-hover:opacity-5 blur-2xl transition-all duration-500`} />
                <div className={`text-5xl md:text-7xl font-black bg-gradient-to-r ${s.c} bg-clip-text text-transparent tracking-tighter`}>{s.v}</div>
                <div className="text-xs font-mono uppercase tracking-[0.5em] text-neutral-500 mt-4">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-1 border border-cyan-500/30 bg-cyan-500/5 text-cyan-500 text-[10px] font-mono tracking-[0.3em] uppercase mb-8">
              User.profile // Extraction
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black mb-8 leading-tight">
              Driven <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Lead Developer</span><br />
              <span className="text-neutral-500 font-medium">specializing in</span>{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">AI Architectures</span>
            </h2>
            <p className="text-neutral-400 text-lg leading-relaxed max-w-3xl font-light">
              Searching for excellence at the intersection of <span className="text-cyan-400 border-b border-cyan-400/30">Generative AI</span> and <span className="text-purple-400 border-b border-purple-400/30">Secure Backends</span>. I build systems that don't just solve problems—they adapt.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-24">
            <Card variant="cyber" className="p-8 group">
              <div className="flex gap-6">
                <div className="p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-sm group-hover:scale-110 transition-transform">
                  <GraduationCap className="text-cyan-400" size={28} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-0">
                    <h3 className="font-bold text-xl tracking-tight">ADGIPS</h3>
                    <span className="inline-block px-2 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-bold font-mono text-xs uppercase tracking-widest">
                      8.23 CGPA
                    </span>
                  </div>
                  <p className="text-cyan-500/80 text-sm font-mono mt-2">B.Tech // Computer Science and Technology</p>
                  <p className="text-neutral-500 text-xs uppercase tracking-widest mt-2 font-mono">2023 – PRESENT</p>
                  <div className="h-1 w-full bg-neutral-800 mt-4 overflow-hidden">
                    <div className="h-full bg-cyan-500 w-[82.3%] animate-pulse" />
                  </div>
                </div>
              </div>
            </Card>
            <Card variant="cyber-reverse" className="p-8 group">
              <div className="flex gap-6">
                <div className="p-4 bg-purple-500/10 border border-purple-500/20 rounded-sm group-hover:scale-110 transition-transform">
                  <GraduationCap className="text-purple-400" size={28} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-0">
                    <h3 className="font-bold text-xl tracking-tight">GFPS High School</h3>
                    <div className="flex gap-2">
                      <span className="inline-block px-2 py-1 bg-purple-500/10 border border-purple-500/30 text-purple-400 font-bold font-mono text-xs uppercase tracking-widest">
                        10th: 91%
                      </span>
                      <span className="inline-block px-2 py-1 bg-purple-500/10 border border-purple-500/30 text-purple-400 font-bold font-mono text-xs uppercase tracking-widest">
                        12th: 86%
                      </span>
                    </div>
                  </div>
                  <p className="text-purple-500/80 text-sm font-mono mt-2">CBSE Board</p>
                  <p className="text-neutral-500 text-xs uppercase tracking-widest mt-2 font-mono">2020 – 2022</p>
                  <div className="h-1 w-full bg-neutral-800 mt-4 overflow-hidden">
                    <div className="h-full bg-purple-500 w-[91%]" />
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 bg-neutral-950/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 border border-cyan-500/50 rounded-full text-sm text-cyan-400 mb-4 font-mono">
              &lt; DATA.REPOS /&gt;
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase tracking-tighter">
              Featured <span className="text-cyan-400">Deployments</span>
            </h2>
            <p className="text-neutral-500 max-w-2xl mx-auto font-mono text-sm uppercase">
              Production-grade systems and open-source contributions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Football Re-ID', desc: 'Real-time player tracking using YOLOv5 & OSNet Re-identification.', tech: ['YOLOv5', 'OSNet', 'Python'], gradient: 'from-blue-500 to-cyan-500', icon: '⚽', link: 'https://github.com/Dewolf1/Option2_Football_player_tracking' },
              { title: 'WOLF_AI Assistant', desc: 'Voice-enabled Windows AI assistant built with LiveKit and Google Realtime.', tech: ['Python', 'LiveKit', 'Voice AI'], gradient: 'from-purple-500 to-indigo-500', icon: '🤖', link: 'https://github.com/Dewolf1/Wolf_AI' },
              { title: 'BlogIt Platform', desc: 'Full-stack blogging system with secure auth and admin dashboard.', tech: ['Flask', 'MySQL', 'Python'], gradient: 'from-green-500 to-emerald-500', icon: '📝', link: 'https://github.com/Dewolf1/Blogit' },
              { title: 'WolfsBane Agency', desc: 'Client-facing production websites and UI/UX branding solutions.', tech: ['Full-Stack', 'UI/UX', 'Cloud'], gradient: 'from-pink-500 to-rose-500', icon: '💼', link: 'https://wolfsbane.onrender.com' },
              { title: 'ListenBrainz Server', desc: 'Core contributions to MetaBrainz open-source music ecosystem.', tech: ['Python', 'React', 'JS'], gradient: 'from-orange-500 to-amber-500', icon: '🎵', link: 'https://github.com/metabrainz/listenbrainz-server' },
              { title: 'Geo-Fencing App', desc: 'Safety-focused real-time tracking with polygon boundary logic.', tech: ['Geolocation', 'API', 'HTML'], gradient: 'from-teal-500 to-cyan-500', icon: '📍', link: 'https://github.com/Dewolf1/GeoFencing' }
            ].map((p, i) => (
              <a key={i} href={p.link} target="_blank" rel="noopener noreferrer">
                <Card className="group hover:scale-[1.03] transition-all duration-300 overflow-hidden h-full border-neutral-800 hover:border-cyan-500/50">
                  <div className={`h-1 bg-gradient-to-r ${p.gradient}`}></div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="text-3xl">{p.icon}</div>
                      <ExternalLink size={14} className="text-neutral-600 group-hover:text-cyan-400 transition-colors" />
                    </div>
                    <h3 className="text-xl font-black mb-2 uppercase tracking-tight group-hover:text-cyan-400 transition-colors">{p.title}</h3>
                    <p className="text-neutral-500 text-sm mb-4 font-light leading-relaxed">{p.desc}</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {p.tech.map((t, j) => (
                        <span key={j} className="px-2 py-1 bg-neutral-900 border border-neutral-800 rounded-sm text-[10px] font-mono text-neutral-400 uppercase tracking-widest">{t}</span>
                      ))}
                    </div>
                  </div>
                </Card>
              </a>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a href="https://github.com/Dewolf1?tab=repositories" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 border border-neutral-800 hover:border-cyan-500/50 hover:bg-cyan-500/5 text-neutral-400 hover:text-cyan-400 transition-all font-mono text-xs uppercase tracking-[0.3em] cyber-clip">
              View All Repositories <Github size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Startups */}
      <section id="startups" className="py-20 relative bg-neutral-900/20 border-y border-neutral-800/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 border border-purple-500/50 rounded-full text-sm text-purple-400 mb-4 font-mono">
              &lt; STARTUPS.VENTURES /&gt;
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase tracking-tighter">
              Startups I'm <span className="text-purple-400">Building</span>
            </h2>
            <p className="text-neutral-500 max-w-2xl mx-auto font-mono text-sm uppercase">
              Ventures where I act as a Founder or Co-Founder.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Jenwin */}
            <a href="https://jenw.in/" target="_blank" rel="noopener noreferrer" className="block group">
              <div className="relative h-full border border-neutral-800 hover:border-purple-500/50 bg-neutral-950/80 hover:bg-neutral-900/80 transition-all duration-300 hover:scale-[1.02] overflow-hidden p-8">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-indigo-500" />
                <div className="flex justify-between items-start mb-6">
                  <div className="w-24 h-8 bg-white/5 rounded-sm p-2 flex items-center justify-center">
                    <img src="/jenwin.png" alt="Jenwin Logo" className="max-w-full max-h-full object-contain filter brightness-200" />
                  </div>
                  <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/40 text-[10px] font-mono uppercase tracking-widest text-purple-400 shrink-0">
                    Founder
                  </span>
                </div>
                <h3 className="text-2xl font-black tracking-tight mb-2 uppercase text-white group-hover:text-purple-400 transition-colors">Jenwin</h3>
                <p className="text-neutral-400 text-sm mb-6 leading-relaxed">
                  Engineering, design, and product thinking. Full-service product studio for Indian founders. We build SaaS, Web Apps, and custom software.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex flex-col">
                    <span className="text-purple-400 font-black text-xl">10+</span>
                    <span className="text-neutral-600 text-[10px] font-mono uppercase">Projects</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-purple-400 font-black text-xl">&lt; 7</span>
                    <span className="text-neutral-600 text-[10px] font-mono uppercase">Days MVP</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-purple-400 font-black text-xl">100%</span>
                    <span className="text-neutral-600 text-[10px] font-mono uppercase">On-Time</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-purple-400 font-black text-xl">24/7</span>
                    <span className="text-neutral-600 text-[10px] font-mono uppercase">Available</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-800/60 mt-auto">
                  {['Next.js', 'React', 'TypeScript', 'Supabase', 'AI/LLM'].map((t, j) => (
                    <span key={j} className="px-2 py-1 bg-neutral-900 border border-neutral-800 rounded-sm text-[10px] font-mono text-purple-400/70 uppercase tracking-widest">{t}</span>
                  ))}
                </div>
                <div className="flex gap-4 pt-4 mt-4 border-t border-neutral-800/60">
                  <span className="flex items-center gap-1.5 text-neutral-400 hover:text-purple-400 transition-colors text-[10px] font-mono uppercase tracking-widest">
                    <Globe size={12} /> jenw.in
                  </span>
                </div>
              </div>
            </a>

            {/* Herlyy */}
            <a href="https://www.herlyy.com/" target="_blank" rel="noopener noreferrer" className="block group">
              <div className="relative h-full border border-neutral-800 hover:border-pink-500/50 bg-neutral-950/80 hover:bg-neutral-900/80 transition-all duration-300 hover:scale-[1.02] overflow-hidden p-8">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-rose-400" />
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-white rounded-sm shrink-0 overflow-hidden border border-neutral-700 flex items-center justify-center p-1">
                    <img src="/herlyy.png" alt="Herlyy Logo" className="w-full h-full object-contain" />
                  </div>
                  <span className="px-3 py-1 bg-pink-500/20 border border-pink-500/40 text-[10px] font-mono uppercase tracking-widest text-pink-400 shrink-0">
                    Co-Founder
                  </span>
                </div>
                <h3 className="text-2xl font-black tracking-tight mb-2 uppercase text-white group-hover:text-pink-400 transition-colors">Herlyy</h3>
                <p className="text-neutral-400 text-sm mb-6 leading-relaxed">
                  Female companion app featuring an AI chatbot, period tracking, expert doctors, and community support.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-start gap-2 text-neutral-400 text-xs font-mono">
                    <span className="w-1.5 h-1.5 bg-pink-500 shrink-0 mt-1" />
                    <span>AI Chatbot Companion</span>
                  </div>
                  <div className="flex items-start gap-2 text-neutral-400 text-xs font-mono">
                    <span className="w-1.5 h-1.5 bg-pink-500 shrink-0 mt-1" />
                    <span>Period Tracker & Doctors</span>
                  </div>
                  <div className="flex items-start gap-2 text-neutral-400 text-xs font-mono">
                    <span className="w-1.5 h-1.5 bg-pink-500 shrink-0 mt-1" />
                    <span>Live Web / Coming Soon to App Stores</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-800/60 mt-auto">
                  {['Node.js', 'PWA', 'Responsive Design', 'AI Chatbot'].map((t, j) => (
                    <span key={j} className="px-2 py-1 bg-neutral-900 border border-neutral-800 rounded-sm text-[10px] font-mono text-pink-400/70 uppercase tracking-widest">{t}</span>
                  ))}
                </div>
                <div className="flex gap-4 pt-4 mt-4 border-t border-neutral-800/60">
                  <span className="flex items-center gap-1.5 text-neutral-400 hover:text-pink-400 transition-colors text-[10px] font-mono uppercase tracking-widest">
                    <Globe size={12} /> Website
                  </span>
                  <a href="https://herlyy-pwa.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-neutral-400 hover:text-pink-400 transition-colors text-[10px] font-mono uppercase tracking-widest z-10" onClick={(e) => { e.preventDefault(); window.open("https://herlyy-pwa.vercel.app/", "_blank"); }}>
                    <ExternalLink size={12} /> App Demo
                  </a>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Freelance Works */}
      <section id="freelance" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 border border-amber-500/50 rounded-full text-sm text-amber-400 mb-4 font-mono">
              &lt; CLIENT.BUILDS /&gt;
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase tracking-tighter">
              Freelance <span className="text-amber-400">Works</span>
            </h2>
            <p className="text-neutral-500 max-w-2xl mx-auto font-mono text-sm uppercase">
              Real-world client projects — from concept to production-ready deployments.
            </p>
          </div>

          {/* Category Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {['WordPress E-commerce', 'Node.js Apps', 'Firebase Backend', 'Payment Gateways', 'Logistics Integration'].map((tag, i) => (
              <span key={i} className="px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400/80 text-[10px] font-mono uppercase tracking-widest">{tag}</span>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Raja Masale & Dry Fruits',
                url: 'rajamasaleanddryfruits.com',
                href: 'https://rajamasaleanddryfruits.com',
                desc: 'WordPress WooCommerce store selling premium dry fruits and masalas across India.',
                tech: ['WordPress', 'WooCommerce', 'PhonePe', 'Google Auth'],
                gradient: 'from-red-500 to-orange-500',
                icon: '🌶️',
                logo: '/raja-logo.jpg',
                type: 'WordPress E-commerce',
                features: ['PhonePe Payment Gateway', 'Google Authentication', 'Pan India Shipping'],
                instagram: '',
              },
              {
                title: 'Glass India Company',
                url: 'glassindiacompany.com',
                href: 'https://glassindiacompany.com',
                desc: 'Premium glass and mirror products e-commerce site with product showcase and enquiry system.',
                tech: ['WordPress', 'WooCommerce', 'Custom Theme'],
                gradient: 'from-slate-400 to-blue-400',
                icon: '🪟',
                logo: '/glassindia.png',
                type: 'WordPress E-commerce',
                features: ['Premium Product Showcase', 'Enquiry System', 'Help Center'],
                instagram: '',
              },
              {
                title: 'Herlyy',
                url: 'herlyy.com',
                href: 'https://www.herlyy.com/',
                desc: "Co-Founder. Female companion app featuring an AI chatbot, period tracking, expert doctors, and community support.",
                tech: ['Node.js', 'Static Site', 'Responsive Design'],
                gradient: 'from-pink-500 to-rose-400',
                icon: '💕',
                logo: '/herlyy.png',
                type: 'Node.js App',
                features: ['AI Chatbot Companion', 'Period Tracker', 'Live Web/App Stores'],
                instagram: '',
              },
              {
                title: 'Talbiya Collection',
                url: 'talbiyacollection.com',
                href: 'https://talbiyacollection.com/',
                desc: 'Premium Pakistani and ethnic suits collection.',
                tech: ['E-commerce', 'Payment Gateway'],
                gradient: 'from-fuchsia-500 to-pink-500',
                icon: '👗',
                logo: '/talbiya.png',
                type: 'E-commerce',
                features: ['Premium Collection', 'Pan India Shipping', 'Online Payments'],
                instagram: 'https://www.instagram.com/talbiya__collection0.1/',
              },
              {
                title: 'US BRO',
                url: 'usbro.in',
                href: 'https://usbro.in/',
                desc: 'WordPress site selling premium t-shirts across India.',
                tech: ['WordPress', 'WooCommerce'],
                gradient: 'from-gray-500 to-slate-400',
                icon: '👕',
                logo: '/usbro.png',
                type: 'WordPress E-commerce',
                features: ['T-shirt Collection', 'Secure Payments', 'Fast Shipping'],
                instagram: 'https://www.instagram.com/udaysharmaaaaa/?hl=en',
              },
              {
                title: 'VisaOVisa',
                url: 'visaovisa.com',
                href: 'https://visaovisa.com',
                desc: 'Genuine visa stamping, attestation & Gulf job recruitment platform by Mohd Faisal Siddique.',
                tech: ['Node.js', 'Static Site', 'WhatsApp Integration'],
                gradient: 'from-blue-500 to-indigo-500',
                icon: '✈️',
                logo: '/visa.png',
                type: 'Node.js App',
                features: ['34K+ Clients', 'Job Application System', 'WhatsApp Lead Gen'],
                instagram: '',
              },
              {
                title: 'Zaanji Pret',
                url: 'zaanji.com',
                href: 'https://zaanji.com',
                desc: 'Full-stack premium Pakistani suits e-commerce with Firebase backend, Shiprocket logistics & FastCheckout.',
                tech: ['Node.js', 'Firebase', 'Shiprocket', 'FastCheckout'],
                gradient: 'from-amber-400 to-yellow-500',
                icon: '👗',
                logo: '/zaanji.png',
                type: 'Node.js + Firebase',
                features: ['Shiprocket Logistics', 'Fast Checkout', 'COD + UPI + Cards'],
                instagram: 'https://www.instagram.com/halimafashionsuits',
              },
              {
                title: 'Halima Fashion - Shop Manager',
                url: 'github.com/Dewolf1/Shop-Manager',
                href: 'https://github.com/Dewolf1/Shop-Manager',
                desc: 'Professional Electron-based POS & Business Management System built for Halima Fashion, New Seelampur, Delhi. Full offline desktop app.',
                tech: ['Electron', 'Node.js', 'jsPDF', 'Chart.js', 'SQLite', 'node-cron'],
                gradient: 'from-emerald-500 to-teal-500',
                icon: '🖥️',
                logo: '/zaanji.png',
                type: 'Desktop App (Electron)',
                features: ['Full POS Billing + GST', 'Inventory & CRM', 'Dual PDF (A4 + 80mm Thermal)', 'Automated Nightly Backup', 'Role-based Access Control'],
                instagram: '',
              },
              {
                title: 'Hospimedico',
                url: 'hospimedico.com',
                href: 'https://www.hospimedico.com',
                desc: 'Custom Node.js product showcase for physiotherapeutic & medical equipment. Customers can buy via Amazon or WhatsApp directly from any product page.',
                tech: ['Node.js', 'Custom UI', 'Amazon Integration', 'WhatsApp API'],
                gradient: 'from-cyan-500 to-sky-500',
                icon: '🏥',
                logo: '/hospimedico.jpeg',
                type: 'Node.js App',
                features: ['Premium Product Showcase', 'Amazon Store Integration', 'WhatsApp Direct Buy'],
                instagram: '',
              },
            ].map((p, i) => (
              <a key={i} href={p.href} target="_blank" rel="noopener noreferrer" className="block group">
                <div className="relative h-full border border-neutral-800 hover:border-amber-500/50 bg-neutral-950/60 hover:bg-neutral-900/60 transition-all duration-300 hover:scale-[1.03] overflow-hidden">
                  {/* Top accent bar */}
                  <div className={`h-1 bg-gradient-to-r ${p.gradient}`} />
                  {/* Type badge */}
                  <div className="p-5 sm:p-6 flex flex-col h-full">
                    {/* Header: Logo and Badge */}
                    <div className="flex justify-between items-start mb-4 gap-2">
                      {p.logo ? (
                        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-sm shrink-0 overflow-hidden border border-neutral-700 flex items-center justify-center p-1">
                          <img src={p.logo} alt={`${p.title} logo`} className="w-full h-full object-contain" />
                        </div>
                      ) : (
                        <div className={`text-2xl sm:text-3xl p-2 bg-gradient-to-br ${p.gradient} bg-opacity-10 rounded-sm shrink-0`}>{p.icon}</div>
                      )}
                      <span className="px-2 py-1 bg-neutral-900 border border-neutral-700 text-[8px] font-mono uppercase tracking-widest text-neutral-500 text-right shrink-0">
                        {p.type}
                      </span>
                    </div>

                    {/* Title & URL */}
                    <div className="mb-3">
                      <h3 className="text-lg sm:text-xl font-black tracking-tight group-hover:text-amber-400 transition-colors uppercase leading-tight">{p.title}</h3>
                      <p className="text-amber-500/60 text-[10px] font-mono mt-1 break-all">{p.url}</p>
                    </div>

                    <p className="text-neutral-500 text-xs sm:text-sm mb-4 font-light leading-relaxed flex-grow">{p.desc}</p>

                    {/* Features list */}
                    <div className="space-y-1.5 mb-5">
                      {p.features.map((f, j) => (
                        <div key={j} className="flex items-start gap-2 text-neutral-400 text-[10px] sm:text-xs font-mono">
                          <span className="w-1.5 h-1.5 bg-amber-500 shrink-0 mt-1" />
                          <span className="leading-tight">{f}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-neutral-800/60 mt-auto">
                      {p.tech.map((t, j) => (
                        <span key={j} className="px-2 py-1 bg-neutral-900 border border-neutral-800 rounded-sm text-[8px] sm:text-[10px] font-mono text-amber-400/70 uppercase tracking-widest">{t}</span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4 pt-4 mt-4 border-t border-neutral-800/60">
                      {p.href && p.href !== '#' && (
                        <span className="flex items-center gap-1.5 text-neutral-400 hover:text-amber-400 transition-colors text-[10px] font-mono uppercase tracking-widest">
                          <Globe size={12} /> Website
                        </span>
                      )}
                      {p.instagram && (
                        <a href={p.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-neutral-400 hover:text-amber-400 transition-colors text-[10px] font-mono uppercase tracking-widest z-10" onClick={(e) => { e.preventDefault(); window.open(p.instagram, "_blank"); }}>
                          <Instagram size={12} /> Instagram
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-neutral-600 text-[10px] font-mono uppercase tracking-[0.4em] flex items-center justify-center gap-3">
              <Briefcase size={14} className="text-amber-500" />
              9 Clients Served // Production Grade Deployments
            </p>
          </div>
        </div>
      </section>

      {/* Client Reviews */}
      <section className="py-24 border-y border-neutral-800/50 bg-neutral-900/10 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 border border-purple-500/50 rounded-full text-sm text-purple-400 mb-4 font-mono">
              &lt; CLIENT.FEEDBACK /&gt;
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase tracking-tighter">
              What Clients <span className="text-purple-400">Say</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {[
              {
                client: "Raja Masale & Dry Fruits",
                review: "Adeeb bhai ne humari website bahot shandaar banayi hai. Payment aur shipping dono ekdum smoothly kaam kar rahe hain. Dry fruits ka order ab asaani se manage ho jata hai.",
                color: "text-orange-400"
              },
              {
                client: "Glass India Company",
                review: "Excellent work on our e-commerce site. The glass product showcase looks incredibly premium, and the new enquiry system has doubled our daily leads. Highly recommended.",
                color: "text-blue-400"
              },
              {
                client: "VisaOVisa",
                review: "Very professional and fast execution. Adeeb understood exactly what we needed for our visa stamping platform. The WhatsApp integration works flawlessly.",
                color: "text-indigo-400"
              },
              {
                client: "Herlyy",
                review: "The landing page Adeeb built perfectly captures the soothing and supportive vibe we wanted for our women's wellness app. Beautifully responsive on all devices.",
                color: "text-pink-400"
              },
              {
                client: "Zaanji Pret",
                review: "Outstanding full-stack development. The Firebase integration is fast, and connecting Shiprocket for our suits logistics has completely streamlined our deliveries.",
                color: "text-yellow-400"
              },
              {
                client: "Talbiya Collection",
                review: "Adeeb created a stunning e-commerce platform for our ethnic wear. The payment gateway and shipping integration made selling our premium suits across India completely seamless!",
                color: "text-fuchsia-400"
              }
            ].map((r, i) => (
              <Card key={i} variant="cyber" className="p-8 group hover:scale-[1.02] transition-all">
                <div className="mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-amber-500 text-lg">★</span>
                  ))}
                </div>
                <p className="text-neutral-400 text-sm mb-6 leading-relaxed italic border-l-2 border-neutral-800 pl-4">
                  "{r.review}"
                </p>
                <div className="mt-auto">
                  <p className={`font-black uppercase tracking-widest text-xs ${r.color}`}>
                    {r.client}
                  </p>
                  <p className="text-neutral-600 text-[10px] font-mono mt-1">Verified Client</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Experience */}
      <section id="experience" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-start gap-12">
            <div className="w-full md:w-1/3 md:sticky top-32">
              <div className="inline-block px-4 py-1 border border-purple-500/30 bg-purple-500/5 text-purple-500 text-[10px] font-mono tracking-[0.3em] uppercase mb-4">
                Timeline // Professional
              </div>
              <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tighter">Experience</h2>
              <p className="text-neutral-500 font-mono text-sm leading-relaxed">System logs for past professional engagements and development leadership.</p>
            </div>

            <div className="md:w-2/3 space-y-12">
              {[
                { title: 'Technical Head', company: 'BIT YUG', date: 'Oct 2025 – Present', desc: 'Leading technical wing, overseeing complex project development and life cycles.', color: 'border-cyan-500' },
                { title: 'Python Developer Intern', company: 'CANTILEVER.IN', date: 'Jul 2025 – Aug 2025', desc: 'Developed Python-based data visualization and efficient backend processing systems.', color: 'border-purple-500' },
                { title: 'Web Developer Intern', company: 'SARVAGYA NIRAKAR COMMUNITY', date: 'Jun 2024 – Jul 2024', desc: 'Launched 2 live websites using Flask/MySQL; prioritized SEO and UI responsiveness.', color: 'border-cyan-500' }
              ].map((exp, i) => (
                <div key={i} className="relative pl-12 border-l-2 border-neutral-800 group transition-all pb-12 last:pb-0">
                  <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-black border-2 ${exp.color} group-hover:scale-150 transition-transform duration-500 glow-shadow-cyan`} />
                  <div className="space-y-2">
                    <span className="text-xs font-mono text-cyan-500/80 tracking-widest uppercase">{exp.date}</span>
                    <h3 className="text-2xl font-black tracking-tight">{exp.title}</h3>
                    <p className="text-neutral-300 font-black text-sm tracking-[0.2em] uppercase text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]">{exp.company}</p>
                    <p className="text-neutral-500 text-sm leading-relaxed max-w-2xl mt-4 font-light">&gt; {exp.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 bg-neutral-900/10 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <div className="inline-block px-4 py-1 border border-cyan-500/30 bg-cyan-500/5 text-cyan-500 text-[10px] font-mono tracking-[0.2em] uppercase">
              Tech Stack // Capabilities
            </div>
            <h2 className="text-3xl md:text-6xl font-black tracking-tighter">Core <span className="text-cyan-400">Systems</span></h2>
            <p className="text-neutral-500 font-mono text-sm max-w-xl mx-auto uppercase">Hardcoded skills and modular technology competencies.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Languages */}
            <Card variant="cyber" className="p-8 group backdrop-blur-sm bg-neutral-950/40">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-cyan-500/10 border border-cyan-400/20 rounded-sm">
                  <Code className="text-cyan-400" size={20} />
                </div>
                <h3 className="font-black text-sm uppercase tracking-widest text-cyan-400">Languages</h3>
              </div>
              <div className="space-y-3">
                {['Python', 'JavaScript', 'TypeScript', 'SQL', 'HTML/CSS', 'Bash'].map((skill, i) => (
                  <div key={i} className="flex items-center gap-3 text-neutral-400 text-xs font-mono group-hover:translate-x-1 transition-transform">
                    <span className="w-1 h-1 bg-cyan-500" />
                    {skill}
                  </div>
                ))}
              </div>
            </Card>

            {/* AI & Machine Learning */}
            <Card variant="cyber-reverse" className="p-8 group backdrop-blur-sm bg-neutral-950/40">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-purple-500/10 border border-purple-400/20 rounded-sm">
                  <span className="text-lg">🤖</span>
                </div>
                <h3 className="font-black text-sm uppercase tracking-widest text-purple-400">AI & ML</h3>
              </div>
              <div className="space-y-3">
                {['LangChain', 'OpenAI', 'LLaMA', 'Google AI', 'Agentic AI', 'TensorFlow', 'RAG Pipelines'].map((skill, i) => (
                  <div key={i} className="flex items-center gap-3 text-neutral-400 text-xs font-mono group-hover:translate-x-1 transition-transform">
                    <span className="w-1 h-1 bg-purple-500" />
                    {skill}
                  </div>
                ))}
              </div>
            </Card>

            {/* Frameworks & Libraries */}
            <Card variant="cyber" className="p-8 group backdrop-blur-sm bg-neutral-950/40">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-500/10 border border-blue-400/20 rounded-sm">
                  <span className="text-lg">⚡</span>
                </div>
                <h3 className="font-black text-sm uppercase tracking-widest text-blue-400">Frameworks</h3>
              </div>
              <div className="space-y-3">
                {['Next.js', 'React', 'Flask', 'FastAPI', 'Tailwind CSS', 'Node.js', 'Electron.js', 'Express.js'].map((skill, i) => (
                  <div key={i} className="flex items-center gap-3 text-neutral-400 text-xs font-mono group-hover:translate-x-1 transition-transform">
                    <span className="w-1 h-1 bg-blue-500" />
                    {skill}
                  </div>
                ))}
              </div>
            </Card>

            {/* Tools & Platforms */}
            <Card variant="cyber-reverse" className="p-8 group backdrop-blur-sm bg-neutral-950/40">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-green-500/10 border border-green-400/20 rounded-sm">
                  <span className="text-lg">🛠️</span>
                </div>
                <h3 className="font-black text-sm uppercase tracking-widest text-green-400">Tools</h3>
              </div>
              <div className="space-y-3">
                {['Git', 'Docker', 'PostgreSQL', 'MySQL', 'SQLite', 'Firebase', 'REST APIs', 'jsPDF', 'Chart.js', 'node-cron'].map((skill, i) => (
                  <div key={i} className="flex items-center gap-3 text-neutral-400 text-xs font-mono group-hover:translate-x-1 transition-transform">
                    <span className="w-1 h-1 bg-green-500" />
                    {skill}
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Core Competencies */}
          <div className="mt-20 max-w-4xl mx-auto">
            <h3 className="text-xs font-mono text-center uppercase tracking-[0.5em] text-neutral-500 mb-10">Advanced Capabilities</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                'Generative AI',
                'Agentic Workflows',
                'System Integration',
                'Backend Development',
                'Web Development',
                'Desktop Apps (Electron)',
                'POS System Development',
                'Data Structures',
                'RESTful APIs',
                'Database Design',
                'Real-time Processing',
                'WordPress / WooCommerce',
                'E-commerce Development',
                'PDF Generation (jsPDF)',
                'Role-based Access Control',
                'Project Management',
                'Leadership'
              ].map((competency, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-neutral-900/50 border border-neutral-800 text-neutral-400 text-[10px] uppercase font-mono tracking-widest hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300 pointer-events-none"
                >
                  {competency}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <div className="inline-block px-4 py-1 border border-cyan-500/30 bg-cyan-500/5 text-cyan-500 text-[10px] font-mono tracking-[0.2em] uppercase">
              Authenticated // Credentials
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight uppercase">Professional <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Credentials</span></h2>
            <p className="text-neutral-500 font-mono text-sm uppercase tracking-widest">Verified industry certifications and training records.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              { title: 'OCI 2025 GenAI Professional', provider: 'ORACLE', date: 'Oct 2025', badge: '⚡', color: 'from-orange-500 to-red-500', link: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=5985600D4313FD5EA4612F53A10832219ADD06E7A67C27AA425796A971F975A5' },
              { title: 'AI Agents Intensive Course', provider: 'GOOGLE/KAGGLE', date: 'Dec 2025', badge: '🤖', color: 'from-blue-500 to-cyan-500', link: 'https://www.kaggle.com/learn/certification/mohdadeeb/intro-to-ai-agents' },
              { title: 'OCI 2025 AI Foundations', provider: 'ORACLE', date: 'Oct 2025', badge: '🎯', color: 'from-purple-500 to-pink-500', link: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=81771B42AAEAF25902F69382898C0300F76B46096DB112DDBBFD2DFC835B10C7' },
              { title: 'Python Internship Deliverables', provider: 'CANTILEVER.IN', date: 'Jul 2025', badge: '🐍', color: 'from-yellow-500 to-orange-500', link: 'https://github.com/Dewolf1/CANTILEVER' },
              { title: 'Computer Networking Prep', provider: 'SKILLUP', date: 'Aug 2025', badge: '🔗', color: 'from-teal-500 to-green-500', link: '#' },
              { title: 'Tech Job Simulation', provider: 'DELOITTE', date: 'Nov 2025', badge: '💼', color: 'from-indigo-500 to-blue-500', link: '#' }
            ].map((cert, i) => (
              <Card key={i} variant={i % 2 === 0 ? 'cyber' : 'cyber-reverse'} className="p-8 group hover:scale-[1.02] transition-all duration-300">
                <div className="flex gap-6 relative">
                  <div className={`p-4 bg-gradient-to-br ${cert.color} rounded-sm h-fit flex items-center justify-center text-2xl group-hover:scale-110 transition-transform`}>
                    {cert.badge}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-black text-lg group-hover:text-cyan-400 transition-colors uppercase tracking-tight leading-tight">{cert.title}</h3>
                      <span className="flex items-center gap-1 px-2 py-0.5 bg-green-500/10 text-green-400 border border-green-500/20 text-[8px] uppercase font-mono tracking-widest shrink-0">
                        <span className="w-1 h-1 bg-green-400 rounded-full animate-pulse"></span> VERIFIED
                      </span>
                    </div>
                    <p className="text-neutral-400 font-black text-xs uppercase tracking-widest text-white/90 drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">{cert.provider}</p>
                    <p className="text-neutral-600 font-mono text-[10px] uppercase tracking-widest mt-1">{cert.date}</p>
                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-[10px] font-mono uppercase tracking-[0.2em] mt-6 border-b border-cyan-400/20 pb-1">
                      Protocol: VIEW_DATA <ExternalLink size={10} />
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-neutral-600 text-[10px] font-mono uppercase tracking-[0.4em] flex items-center justify-center gap-3">
              <Award size={14} className="text-cyan-500" />
              Integrity Check Passed // All Records Authentic
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative bg-neutral-900/10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24 space-y-4">
            <div className="inline-block px-4 py-1 border border-cyan-500/30 bg-cyan-500/5 text-cyan-500 text-[10px] font-mono tracking-[0.3em] uppercase">
              Communication // Uplink
            </div>
            <h2 className="text-3xl md:text-6xl font-black tracking-tighter">Initialize <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Connect</span></h2>
            <p className="text-neutral-500 font-mono text-sm uppercase tracking-widest max-w-xl mx-auto">Ready for secure data transfer and collaboration protocols.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-4">
              {[
                { label: 'EMAIL_UPLINK', val: 'mdadeeb.2003@gmail.com', href: 'mailto:mdadeeb.2003@gmail.com', icon: <Mail size={20} />, var: 'cyber' },
                { label: 'COMMS_CHANNEL', val: '+91 7290842408', href: 'tel:+917290842408', icon: <Phone size={20} />, var: 'cyber-reverse' },
                { label: 'NET_PROFILE', val: 'Dewolf1', href: 'https://github.com/Dewolf1', icon: <Github size={20} />, var: 'cyber' }
              ].map((item, i) => (
                <Card key={i} variant={item.var as any} className="p-8 group hover:border-cyan-500/50 transition-colors">
                  <div className="flex items-center gap-6">
                    <div className="p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-sm group-hover:bg-cyan-500/20 transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-neutral-500 text-[10px] font-mono uppercase tracking-[0.3em] mb-1">{item.label}</p>
                      <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-lg font-bold tracking-tight hover:text-cyan-400 transition-colors uppercase">
                        {item.val}
                      </a>
                    </div>
                  </div>
                </Card>
              ))}

              <div className="flex items-center gap-3 text-green-500 font-mono text-[10px] tracking-[0.2em] mt-10 ml-2 uppercase">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
                System Status: Available for Uplink
              </div>
            </div>

            {/* Contact Form - Terminal Style */}
            <Card className="p-8 bg-neutral-950/80 border-neutral-800 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-2 font-mono text-[8px] text-cyan-500/30 pointer-events-none uppercase tracking-widest">
                Port: 8080 // Secure
              </div>
              <div className="mb-8 flex items-center justify-between pb-4 border-b border-neutral-800">
                <div className="flex gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/50 shadow-[0_0_5px_rgba(239,68,68,0.3)]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50 shadow-[0_0_5px_rgba(234,179,8,0.3)]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/50 shadow-[0_0_5px_rgba(34,197,94,0.3)]"></div>
                </div>
                <span className="text-neutral-500 text-[10px] font-mono tracking-widest uppercase">uplink_terminal.sh</span>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-cyan-500 font-mono text-[10px] uppercase tracking-widest">&gt; USER_ID</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="ENTER NAME..."
                    className="w-full bg-transparent border-b border-neutral-800 focus:border-cyan-500/50 outline-none py-3 text-white placeholder:text-neutral-700 font-mono text-sm tracking-tight"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-cyan-500 font-mono text-[10px] uppercase tracking-widest">&gt; UPLINK_ADDR</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="ENTER EMAIL..."
                    className="w-full bg-transparent border-b border-neutral-800 focus:border-cyan-500/50 outline-none py-3 text-white placeholder:text-neutral-700 font-mono text-sm tracking-tight"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-cyan-500 font-mono text-[10px] uppercase tracking-widest">&gt; DATA_PAYLOAD</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    placeholder="TYPE MESSAGE..."
                    className="w-full bg-transparent border-b border-neutral-800 focus:border-cyan-500/50 outline-none py-3 text-white placeholder:text-neutral-700 font-mono text-sm tracking-tight resize-none"
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    disabled={formStatus === 'sending'}
                    className="w-full px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-500 hover:to-blue-600 text-white font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 cyber-clip group disabled:opacity-50"
                  >
                    <Terminal size={18} className="group-hover:rotate-12 transition-transform" />
                    {formStatus === 'sending' ? 'TRANSMITTING...' : formStatus === 'success' ? 'UPLOAD SUCCESSFUL' : 'EXECUTE UPLINK'}
                  </button>
                </div>

                {formStatus === 'success' && (
                  <div className="p-4 bg-green-500/10 border border-green-500/20 flex items-center gap-3 text-green-400 font-mono text-[10px] uppercase tracking-widest">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Packet Received Successfully
                  </div>
                )}

                <div className="flex justify-between font-mono text-[8px] text-neutral-600 uppercase tracking-widest pt-2">
                  <span>Enter to execute</span>
                  <span>Ctrl+C to abort</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-900 py-16 bg-neutral-950/80 relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="flex items-center gap-6">
              <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center glow-shadow-cyan shrink-0">
                <span className="font-black text-xl">MA</span>
              </div>
              <div>
                <p className="font-black text-xl tracking-tighter uppercase">Mohd <span className="text-cyan-400">Adeeb</span></p>
                <p className="text-neutral-500 text-[10px] font-mono uppercase tracking-widest mt-1">Lead Developer // AI Architect // ADGIPS'27</p>
              </div>
            </div>

            <div className="flex gap-10 font-mono text-xs tracking-widest">
              <a href="#home" className="text-neutral-500 hover:text-cyan-400 transition-colors uppercase">Data.Home</a>
              <a href="#about" className="text-neutral-500 hover:text-cyan-400 transition-colors uppercase">Data.Profile</a>
              <a href="https://github.com/Dewolf1" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-cyan-400 transition-colors uppercase">Data.Repos</a>
              <a href="#contact" className="text-neutral-500 hover:text-cyan-400 transition-colors uppercase">Data.Uplink</a>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-4 text-neutral-600 text-[9px] font-mono uppercase tracking-[0.3em]">
            <p>© 2026 MOHD ADEEB // ALL RIGHTS RESERVED</p>
            <p>LATENCY: 12ms // BUFFER: ACTIVE</p>
            <p>POWERED BY READYAI // CORE_V4.0</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
