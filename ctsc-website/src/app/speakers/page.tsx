'use client';

import { motion } from 'framer-motion';
import { Award, MapPin, Calendar, Linkedin, Twitter, Mail, Building, User, Users } from 'lucide-react';

export default function Speakers() {
  const speakers = [
    {
      id: 1,
      name: "Dr. Sarah Chen",
      title: "Chief Security Officer",
      organization: "CyberDefend Inc.",
      image: "/api/placeholder/300/300",
      bio: "Dr. Sarah Chen is a leading expert in AI-powered cybersecurity with over 15 years of experience in threat detection and machine learning applications. She holds a PhD in Computer Science from MIT and has published over 50 papers on cybersecurity and artificial intelligence.",
      expertise: ["AI & Machine Learning", "Threat Detection", "Cybersecurity Strategy"],
      keynote: "The Future of AI in Threat Detection",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "s.chen@cyberdefend.com"
      },
      featured: true
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      title: "Senior Engineer",
      organization: "SecureTech Solutions",
      image: "/api/placeholder/300/300",
      bio: "Michael Rodriguez is a senior technical engineer specializing in TSCM equipment and surveillance countermeasures. With 12 years in the field, he has developed innovative detection technologies used by security professionals worldwide.",
      expertise: ["TSCM Equipment", "RF Detection", "Surveillance Countermeasures"],
      keynote: "TSCM Equipment Innovations",
      social: {
        linkedin: "#",
        email: "m.rodriguez@securetech.com"
      }
    },
    {
      id: 3,
      name: "Dr. James Park",
      title: "IoT Security Researcher",
      organization: "Canadian Cyber Security Institute",
      image: "/api/placeholder/300/300",
      bio: "Dr. James Park leads IoT security research at the Canadian Cyber Security Institute. His work focuses on developing comprehensive security frameworks for connected devices and smart city infrastructure.",
      expertise: ["IoT Security", "Smart City Security", "Connected Device Frameworks"],
      keynote: "IoT Security Frameworks",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "j.park@ccsi.ca"
      }
    },
    {
      id: 4,
      name: "Director Lisa Thompson",
      title: "Director",
      organization: "National Cyber Security Centre",
      image: "/api/placeholder/300/300",
      bio: "Director Lisa Thompson oversees national cybersecurity initiatives and threat intelligence sharing programs. She has 20 years of experience in government cybersecurity and national security operations.",
      expertise: ["National Security", "Threat Intelligence", "Government Cybersecurity"],
      keynote: "Cyber Threat Intelligence Sharing",
      social: {
        linkedin: "#",
        email: "l.thompson@ncsc.gc.ca"
      },
      featured: true
    },
    {
      id: 5,
      name: "Prof. David Kim",
      title: "Professor of Cryptography",
      organization: "Cryptography Institute, University of Toronto",
      image: "/api/placeholder/300/300",
      bio: "Professor David Kim is a world-renowned cryptographer specializing in quantum-resistant encryption technologies. He has contributed to multiple international cryptographic standards and protocols.",
      expertise: ["Cryptography", "Quantum Computing", "Encryption Protocols"],
      keynote: "Advanced Encryption Technologies",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "d.kim@crypto.utoronto.ca"
      }
    },
    {
      id: 6,
      name: "Chief Security Officer",
      title: "CSO",
      organization: "National Infrastructure Agency",
      image: "/api/placeholder/300/300",
      bio: "Leading expert in critical infrastructure protection with extensive experience in securing national systems and coordinating multi-agency security initiatives.",
      expertise: ["Critical Infrastructure", "National Security", "Risk Management"],
      keynote: "Emerging Threats in Critical Infrastructure",
      social: {
        email: "cso@nia.gc.ca"
      },
      featured: true
    },
    {
      id: 7,
      name: "Security Analyst Team",
      title: "Mobile Security Experts",
      organization: "Mobile Defense Corp",
      image: "/api/placeholder/300/300",
      bio: "A team of specialized security analysts focusing on mobile device security assessment and threat mitigation. They have developed industry-standard mobile security evaluation methodologies.",
      expertise: ["Mobile Security", "Device Assessment", "Threat Analysis"],
      keynote: "Mobile Device Security Assessment",
      social: {
        email: "team@mobiledefense.com"
      }
    },
    {
      id: 8,
      name: "Security Training Specialists",
      title: "Training Team",
      organization: "Human Factor Security",
      image: "/api/placeholder/300/300",
      bio: "Specialized team of security training professionals with expertise in social engineering defense and human factors in cybersecurity. They have trained thousands of security professionals worldwide.",
      expertise: ["Social Engineering", "Security Training", "Human Factors"],
      keynote: "Social Engineering Defense Workshop",
      social: {
        email: "training@humanfactorsec.com"
      }
    }
  ];

  const competitions = [
    {
      title: "Bug-Off Competition",
      description: "Technical challenge competition testing participants' skills in identifying and exploiting security vulnerabilities.",
      moderators: "Competition Moderators & Technical Panel",
      prizes: ["$5,000 First Place", "$3,000 Second Place", "$1,000 Third Place", "CTSPA Recognition Awards"]
    },
    {
      title: "Antenna Design Competition",
      description: "Engineering competition focused on optimal antenna designs for surveillance and countermeasure applications.",
      moderators: "Engineering Panel & TSCM Experts",
      prizes: ["Best Design Award", "$2,500 Prize", "Publication Opportunity", "Industry Recognition"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-blue-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.a
              href="/"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
            >
              CTSC 2026
            </motion.a>
            <div className="hidden md:flex space-x-8">
              {[
                { name: 'Home', href: '/' },
                { name: 'About', href: '/about' },
                { name: 'Schedule', href: '/schedule' },
                { name: 'Speakers', href: '/speakers' },
                { name: 'Register', href: '/register' },
                { name: 'Contact', href: '/contact' }
              ].map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`transition-colors duration-300 ${
                    item.href === '/speakers' 
                      ? 'text-blue-400' 
                      : 'text-gray-300 hover:text-blue-400'
                  }`}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Our Speakers
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Learn from industry leaders, researchers, and practitioners shaping the future of technical security
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
              <div className="flex items-center space-x-2 text-blue-400">
                <Calendar className="w-6 h-6" />
                <span className="text-lg font-semibold">April 28-30, 2026</span>
              </div>
              <div className="hidden md:block w-px h-6 bg-gray-600"></div>
              <div className="flex items-center space-x-2 text-cyan-400">
                <Users className="w-6 h-6" />
                <span className="text-lg font-semibold">8+ Expert Speakers</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Speakers */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Keynote Speakers</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Industry leaders delivering keynote presentations that will shape the conference experience
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {speakers.filter(speaker => speaker.featured).map((speaker, index) => (
              <motion.div
                key={speaker.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-center mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <User className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{speaker.name}</h3>
                  <p className="text-blue-400 font-semibold mb-1">{speaker.title}</p>
                  <p className="text-gray-300 text-sm">{speaker.organization}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-2 flex items-center">
                    <Award className="w-5 h-5 mr-2 text-yellow-400" />
                    Keynote
                  </h4>
                  <p className="text-cyan-400 font-medium">{speaker.keynote}</p>
                </div>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {speaker.bio}
                </p>
                
                <div className="mb-6">
                  <h5 className="text-white font-semibold mb-2">Expertise</h5>
                  <div className="flex flex-wrap gap-2">
                    {speaker.expertise.map((skill, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-center space-x-4">
                  {speaker.social.linkedin && (
                    <a href={speaker.social.linkedin} className="text-blue-400 hover:text-blue-300">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                  {speaker.social.twitter && (
                    <a href={speaker.social.twitter} className="text-blue-400 hover:text-blue-300">
                      <Twitter className="w-5 h-5" />
                    </a>
                  )}
                  <a href={`mailto:${speaker.social.email}`} className="text-blue-400 hover:text-blue-300">
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Speakers */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">All Speakers & Presenters</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet the complete lineup of technical experts and industry professionals
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {speakers.filter(speaker => !speaker.featured).map((speaker, index) => (
              <motion.div
                key={speaker.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300"
              >
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{speaker.name}</h3>
                  <p className="text-blue-400 font-medium text-sm mb-1">{speaker.title}</p>
                  <p className="text-gray-300 text-xs">{speaker.organization}</p>
                </div>
                
                <div className="mb-4">
                  <p className="text-cyan-400 font-medium text-sm text-center">{speaker.keynote}</p>
                </div>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {speaker.bio.length > 150 ? `${speaker.bio.substring(0, 150)}...` : speaker.bio}
                </p>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1 justify-center">
                    {speaker.expertise.slice(0, 2).map((skill, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-center space-x-3">
                  {speaker.social.linkedin && (
                    <a href={speaker.social.linkedin} className="text-blue-400 hover:text-blue-300">
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                  {speaker.social.twitter && (
                    <a href={speaker.social.twitter} className="text-blue-400 hover:text-blue-300">
                      <Twitter className="w-4 h-4" />
                    </a>
                  )}
                  <a href={`mailto:${speaker.social.email}`} className="text-blue-400 hover:text-blue-300">
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Technical Competitions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Showcase your skills in our signature technical competitions
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {competitions.map((competition, index) => (
              <motion.div
                key={competition.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-yellow-600/20 to-orange-600/20 rounded-2xl p-8 border border-yellow-500/30"
              >
                <div className="flex items-center mb-6">
                  <Award className="w-8 h-8 text-yellow-400 mr-3" />
                  <h3 className="text-2xl font-bold text-white">{competition.title}</h3>
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-6">
                  {competition.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-2">Moderated By</h4>
                  <p className="text-blue-400">{competition.moderators}</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Prizes & Recognition</h4>
                  <ul className="space-y-2">
                    {competition.prizes.map((prize, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-gray-300">
                        <Award className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                        <span>{prize}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Learn from the Best</h2>
            <p className="text-xl text-gray-300 mb-8">
              Don't miss the opportunity to learn from these industry leaders and technical experts
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/register"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                Register Now
              </a>
              <a
                href="/schedule"
                className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
              >
                View Schedule
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 px-4 sm:px-6 lg:px-8 border-t border-blue-500/20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            CTSC 2026
          </div>
          <p className="text-gray-400 mb-6">
            21st Canadian Technical Security Conference
          </p>
          <div className="flex justify-center space-x-6 text-gray-500 text-sm">
            <span>© 2026 Professional Development TSCM Group Inc.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}