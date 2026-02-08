'use client'

import { SplineScene } from "@/components/ui/splite"
import { Spotlight } from "@/components/ui/spotlight"
import { Card } from "@/components/ui/card"
import { Mail, Phone, Linkedin, Github, ExternalLink, Award, Briefcase, GraduationCap, Terminal, Code, Menu, X } from "lucide-react"
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
    <main className="min-h-screen bg-black text-white selection:bg-cyan-500/30 font-sans scanlines">
      {/* Background Grid */}
      <div className="fixed inset-0 z-0 bg-grid-white/[0.02] pointer-events-none" />

      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-neutral-800 bg-black/80 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center glow-shadow-cyan">
                <span className="text-sm font-bold">MA</span>
              </div>
              <span className="text-xl font-bold tracking-tighter">MOHD <span className="text-cyan-400">ADEEB</span></span>
            </div>
            <div className="hidden md:flex gap-8 font-mono text-sm">
              <a href="#home" className="hover:text-cyan-400 transition-colors uppercase tracking-widest">Home</a>
              <a href="#about" className="hover:text-cyan-400 transition-colors uppercase tracking-widest">About</a>
              <a href="#projects" className="hover:text-cyan-400 transition-colors uppercase tracking-widest">Projects</a>
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
              <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-cyan-400 transition-colors">EXPERIENCE</a>
              <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-cyan-400 transition-colors">SKILLS</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-cyan-400 transition-colors">CONTACT</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
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
                <a href="/resume_python.pdf" download="Mohd_Adeeb_Resume.pdf" className="px-8 py-4 border border-cyan-500/50 text-cyan-400 font-bold uppercase tracking-widest hover:bg-cyan-500/10 cyber-clip transition-all">
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
            {[{ v: '8.23', l: 'GPA', c: 'from-cyan-400 to-blue-600' }, { v: '4+', l: 'Certifications', c: 'from-purple-400 to-pink-600' }, { v: '10+', l: 'Projects', c: 'from-blue-400 to-cyan-600' }].map((s, i) => (
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
                <div>
                  <h3 className="font-bold text-xl tracking-tight">ADGIPS</h3>
                  <p className="text-cyan-500/80 text-sm font-mono mt-1">B.Tech // IOT // Computer Science</p>
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
                <div>
                  <h3 className="font-bold text-xl tracking-tight">GFPS High School</h3>
                  <p className="text-purple-500/80 text-sm font-mono mt-1">Class 12 // CBSE Board</p>
                  <p className="text-neutral-500 text-xs uppercase tracking-widest mt-2 font-mono">2021 – 2022</p>
                  <div className="h-1 w-full bg-neutral-800 mt-4 overflow-hidden">
                    <div className="h-full bg-purple-500 w-[80%]" />
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

      {/* Experience */}
      <section id="experience" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-start gap-12">
            <div className="md:w-1/3 sticky top-32">
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
                {['Python', 'JavaScript', 'TypeScript', 'SQL', 'HTML/CSS'].map((skill, i) => (
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
                {['LangChain', 'OpenAI', 'LLaMA', 'Google AI', 'Agentic AI', 'TensorFlow'].map((skill, i) => (
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
                {['Next.js', 'React', 'Flask', 'FastAPI', 'Tailwind CSS', 'Node.js'].map((skill, i) => (
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
                {['Git', 'Docker', 'PostgreSQL', 'MySQL', 'REST APIs', 'WebUI API'].map((skill, i) => (
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
                'Data Structures',
                'RESTful APIs',
                'Database Design',
                'Real-time Processing',
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
                { label: 'EMAIL_UPLINK', val: 'mdadeeb.2005@gmail.com', href: 'mailto:mdadeeb.2005@gmail.com', icon: <Mail size={20} />, var: 'cyber' },
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
