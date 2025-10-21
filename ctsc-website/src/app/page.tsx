'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Shield, Brain, Network, Award, Mail, Phone } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-blue-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
            >
              CTSC 2026
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {[
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
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                21st Canadian
              </span>
              <br />
              <span className="text-white">Technical Security</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Conference
              </span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
            >
              Exploration of innovative solutions and methodologies in Technical Surveillance 
              Countermeasures (TSCM) and CYBER threat detection
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12"
            >
              <div className="flex items-center space-x-2 text-blue-400">
                <Calendar className="w-6 h-6" />
                <span className="text-lg font-semibold">April 28-30, 2026</span>
              </div>
              <div className="hidden md:block w-px h-6 bg-gray-600"></div>
              <div className="flex items-center space-x-2 text-cyan-400">
                <MapPin className="w-6 h-6" />
                <span className="text-lg font-semibold">Banff Centre, Alberta</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="/register"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-center"
              >
                Register Now
              </a>
              <a
                href="/about"
                className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 text-center"
              >
                Learn More
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
              initial={{
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080),
              }}
              animate={{
                y: -100,
              }}
              transition={{
                duration: Math.random() * 20 + 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>
      </section>

      {/* Key Focus Areas */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Key Focus Areas
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover cutting-edge innovations in technical security and cyber threat detection
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "AI & Machine Learning",
                description: "Advanced threat detection using artificial intelligence and machine learning algorithms"
              },
              {
                icon: Shield,
                title: "TSCM Solutions",
                description: "Technical Surveillance Countermeasures equipment and methodologies"
              },
              {
                icon: Network,
                title: "IoT Security",
                description: "Internet of Things threat modeling and security frameworks"
              },
              {
                icon: Users,
                title: "Legal Compliance",
                description: "Privacy concerns and regulatory compliance in security operations"
              },
              {
                icon: Award,
                title: "Innovation",
                description: "Emerging technical security solutions and breakthrough technologies"
              },
              {
                icon: Shield,
                title: "Cyber Defense",
                description: "Advanced cyber threat detection and prevention strategies"
              }
            ].map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <area.icon className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{area.title}</h3>
                <p className="text-gray-300">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Conference Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Attend CTSC 2026?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <ul className="space-y-6">
                {[
                  "Professional development opportunities",
                  "Networking with industry professionals",
                  "Technical security awareness enhancement",
                  "Competitive Bug-Off competition",
                  "Antenna Design Competition",
                  "Keynote speaker presentations",
                  "Awards dinner and hospitality events"
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300 text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-2xl p-8 border border-blue-500/30"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Target Audience</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Public Safety",
                  "National Security",
                  "Defense Contractors",
                  "Corporate Security",
                  "Financial Sector",
                  "Government Agencies",
                  "Law Enforcement",
                  "Military Organizations"
                ].map((audience, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Users className="w-6 h-6 text-blue-400" />
                    </div>
                    <span className="text-sm text-gray-300">{audience}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Ready to join the premier technical security conference in Canada?
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                { icon: Phone, label: "Toll-free", value: "1.888.293.7384" },
                { icon: Phone, label: "Toronto", value: "+1 647.293.7384" },
                { icon: Phone, label: "Calgary", value: "+1 403.812.0737" },
                { icon: Phone, label: "Ottawa", value: "+1 613.903.7577" }
              ].map((contact, index) => (
                <motion.div
                  key={contact.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 rounded-lg p-6 border border-blue-500/20"
                >
                  <contact.icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                  <h3 className="text-white font-semibold mb-1">{contact.label}</h3>
                  <p className="text-gray-300 text-sm">{contact.value}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-slate-800/30 rounded-xl p-8 border border-blue-500/20"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Organized by</h3>
              <p className="text-xl text-blue-400 font-semibold">Professional Development TSCM Group Inc.</p>
              <p className="text-gray-300 mt-2">
                Canadian Technical Security Professional Association (CTSPA)
              </p>
            </motion.div>
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
