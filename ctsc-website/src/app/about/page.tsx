'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Shield, Brain, Network, Award, Target, Clock, Globe } from 'lucide-react';

export default function About() {
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
                    item.href === '/about' 
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
                About CTSC 2026
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              The premier Canadian conference dedicated to advancing technical security 
              and cyber threat detection capabilities
            </p>
          </motion.div>
        </div>
      </section>

      {/* Conference Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Conference Overview</h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                The 21st Canadian Technical Security Conference (CTSC) brings together the brightest minds 
                in technical security, surveillance countermeasures, and cyber threat detection. This three-day 
                event features cutting-edge presentations, hands-on workshops, and unparalleled networking 
                opportunities.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Set against the stunning backdrop of the Canadian Rockies at the Banff Centre for Professional 
                Development, CTSC 2026 promises to be our most comprehensive and forward-thinking conference yet.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-slate-800/50 rounded-lg p-4 border border-blue-500/20">
                  <Calendar className="w-8 h-8 text-blue-400 mb-2" />
                  <h3 className="text-white font-semibold mb-1">When</h3>
                  <p className="text-gray-300 text-sm">April 28-30, 2026</p>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4 border border-blue-500/20">
                  <MapPin className="w-8 h-8 text-cyan-400 mb-2" />
                  <h3 className="text-white font-semibold mb-1">Where</h3>
                  <p className="text-gray-300 text-sm">Banff Centre, Alberta</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-2xl p-8 border border-blue-500/30"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Conference Theme</h3>
              <blockquote className="text-lg text-gray-300 italic mb-6 leading-relaxed">
                &ldquo;Exploration of innovative solutions and methodologies in Technical Surveillance 
                Countermeasures (TSCM) and CYBER threat detection&rdquo;
              </blockquote>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Target className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span className="text-gray-300">Advanced threat detection methodologies</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Brain className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span className="text-gray-300">AI-powered security solutions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span className="text-gray-300">Next-generation TSCM equipment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Network className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span className="text-gray-300">IoT security frameworks</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Focus Areas */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Key Focus Areas</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              CTSC 2026 covers the full spectrum of technical security challenges and solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "Artificial Intelligence & Machine Learning",
                description: "Explore how AI and ML are revolutionizing threat detection, pattern recognition, and automated security responses."
              },
              {
                icon: Shield,
                title: "Technical Surveillance Countermeasures",
                description: "Latest TSCM equipment, detection methodologies, and countermeasure strategies for modern surveillance threats."
              },
              {
                icon: Network,
                title: "IoT Threat Modeling",
                description: "Comprehensive security frameworks for Internet of Things devices and interconnected smart systems."
              },
              {
                icon: Globe,
                title: "Legal Compliance & Privacy",
                description: "Navigate complex privacy regulations and legal requirements in security operations and data collection."
              },
              {
                icon: Award,
                title: "Emerging Technologies",
                description: "Breakthrough innovations in security technology, from quantum cryptography to blockchain applications."
              },
              {
                icon: Users,
                title: "Professional Development",
                description: "Certification programs, career advancement opportunities, and industry best practices."
              }
            ].map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300"
              >
                <area.icon className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{area.title}</h3>
                <p className="text-gray-300 leading-relaxed">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Organizer Information */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-8">Organized By</h2>
            
            <div className="bg-slate-800/30 rounded-xl p-8 border border-blue-500/20 mb-8">
              <h3 className="text-3xl font-bold text-blue-400 mb-4">
                Professional Development TSCM Group Inc.
              </h3>
              <p className="text-xl text-gray-300 mb-6">
                Canadian Technical Security Professional Association (CTSPA)
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                With over two decades of experience organizing premier technical security conferences, 
                PDTG has established CTSC as the definitive gathering for security professionals across 
                Canada and beyond. Our commitment to advancing the field through education, networking, 
                and innovation continues to drive the conference's success.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-slate-800/50 rounded-lg p-6 border border-blue-500/20">
                <Clock className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <h4 className="text-white font-semibold mb-2">21 Years</h4>
                <p className="text-gray-300 text-sm">Of conference excellence</p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-6 border border-blue-500/20">
                <Users className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <h4 className="text-white font-semibold mb-2">500+</h4>
                <p className="text-gray-300 text-sm">Security professionals annually</p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-6 border border-blue-500/20">
                <Globe className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <h4 className="text-white font-semibold mb-2">International</h4>
                <p className="text-gray-300 text-sm">Reach and recognition</p>
              </div>
            </div>
          </motion.div>
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
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Join Us?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Don't miss the opportunity to be part of Canada's premier technical security conference
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