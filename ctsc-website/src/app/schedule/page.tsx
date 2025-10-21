'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, Award, Coffee, Utensils } from 'lucide-react';

export default function Schedule() {
  const scheduleData = [
    {
      day: "Day 1 - Monday, April 28, 2026",
      events: [
        {
          time: "8:00 AM - 9:00 AM",
          title: "Registration & Welcome Coffee",
          type: "networking",
          icon: Coffee,
          description: "Check-in, networking, and conference materials pickup"
        },
        {
          time: "9:00 AM - 9:30 AM",
          title: "Opening Ceremony & Welcome Address",
          type: "keynote",
          icon: Users,
          speaker: "Conference Chair & CTSPA Leadership",
          description: "Official conference opening and industry overview"
        },
        {
          time: "9:30 AM - 10:30 AM",
          title: "Keynote: The Future of AI in Threat Detection",
          type: "keynote",
          icon: Award,
          speaker: "Dr. Sarah Chen, Chief Security Officer, CyberDefend Inc.",
          description: "Exploring machine learning applications in modern security"
        },
        {
          time: "10:30 AM - 11:00 AM",
          title: "Networking Break",
          type: "break",
          icon: Coffee,
          description: "Coffee, refreshments, and professional networking"
        },
        {
          time: "11:00 AM - 12:00 PM",
          title: "TSCM Equipment Innovations",
          type: "technical",
          icon: Users,
          speaker: "Michael Rodriguez, Senior Engineer, SecureTech Solutions",
          description: "Latest advances in surveillance countermeasure technology"
        },
        {
          time: "12:00 PM - 1:30 PM",
          title: "Lunch & Networking",
          type: "networking",
          icon: Utensils,
          description: "Catered lunch with industry professionals"
        },
        {
          time: "1:30 PM - 2:30 PM",
          title: "IoT Security Frameworks",
          type: "technical",
          icon: Users,
          speaker: "Dr. James Park, IoT Security Researcher",
          description: "Comprehensive security models for connected devices"
        },
        {
          time: "2:30 PM - 3:30 PM",
          title: "Panel: Legal Compliance in Security Operations",
          type: "panel",
          icon: Users,
          speaker: "Legal & Compliance Experts Panel",
          description: "Navigating privacy laws and regulatory requirements"
        },
        {
          time: "3:30 PM - 4:00 PM",
          title: "Afternoon Break",
          type: "break",
          icon: Coffee,
          description: "Refreshments and networking opportunity"
        },
        {
          time: "4:00 PM - 5:00 PM",
          title: "Hands-on Workshop: RF Detection Techniques",
          type: "workshop",
          icon: Users,
          speaker: "Workshop Leaders",
          description: "Practical RF detection and analysis techniques"
        },
        {
          time: "6:00 PM - 8:00 PM",
          title: "Welcome Reception",
          type: "networking",
          icon: Utensils,
          description: "Evening reception with dinner and networking"
        }
      ]
    },
    {
      day: "Day 2 - Tuesday, April 29, 2026",
      events: [
        {
          time: "8:30 AM - 9:00 AM",
          title: "Morning Coffee & Networking",
          type: "networking",
          icon: Coffee,
          description: "Start your day with coffee and connections"
        },
        {
          time: "9:00 AM - 10:00 AM",
          title: "Cyber Threat Intelligence Sharing",
          type: "keynote",
          icon: Award,
          speaker: "Director Lisa Thompson, National Cyber Security Centre",
          description: "National perspectives on threat intelligence coordination"
        },
        {
          time: "10:00 AM - 11:00 AM",
          title: "Advanced Encryption Technologies",
          type: "technical",
          icon: Users,
          speaker: "Prof. David Kim, Cryptography Institute",
          description: "Quantum-resistant encryption and emerging protocols"
        },
        {
          time: "11:00 AM - 11:30 AM",
          title: "Networking Break",
          type: "break",
          icon: Coffee,
          description: "Coffee break and vendor demonstrations"
        },
        {
          time: "11:30 AM - 12:30 PM",
          title: "Bug-Off Competition - Round 1",
          type: "competition",
          icon: Award,
          speaker: "Competition Moderators",
          description: "Technical challenge competition begins"
        },
        {
          time: "12:30 PM - 2:00 PM",
          title: "Lunch & Vendor Exhibition",
          type: "networking",
          icon: Utensils,
          description: "Lunch with technology vendor showcase"
        },
        {
          time: "2:00 PM - 3:00 PM",
          title: "Mobile Device Security Assessment",
          type: "technical",
          icon: Users,
          speaker: "Security Analyst Team",
          description: "Comprehensive mobile security evaluation methods"
        },
        {
          time: "3:00 PM - 4:00 PM",
          title: "Antenna Design Competition",
          type: "competition",
          icon: Award,
          speaker: "Engineering Panel",
          description: "Technical competition for optimal antenna designs"
        },
        {
          time: "4:00 PM - 4:30 PM",
          title: "Afternoon Break",
          type: "break",
          icon: Coffee,
          description: "Refreshments and informal discussions"
        },
        {
          time: "4:30 PM - 5:30 PM",
          title: "Workshop: Social Engineering Defense",
          type: "workshop",
          icon: Users,
          speaker: "Security Training Specialists",
          description: "Practical defense against social engineering attacks"
        },
        {
          time: "7:00 PM - 10:00 PM",
          title: "Awards Dinner & Keynote",
          type: "networking",
          icon: Utensils,
          description: "Formal dinner with keynote presentation and awards ceremony"
        }
      ]
    },
    {
      day: "Day 3 - Wednesday, April 30, 2026",
      events: [
        {
          time: "8:30 AM - 9:00 AM",
          title: "Final Day Coffee & Networking",
          type: "networking",
          icon: Coffee,
          description: "Last chance for morning networking"
        },
        {
          time: "9:00 AM - 10:00 AM",
          title: "Emerging Threats in Critical Infrastructure",
          type: "keynote",
          icon: Award,
          speaker: "Chief Security Officer, National Infrastructure Agency",
          description: "Protecting critical national infrastructure systems"
        },
        {
          time: "10:00 AM - 11:00 AM",
          title: "Bug-Off Competition - Finals",
          type: "competition",
          icon: Award,
          speaker: "Competition Finals",
          description: "Final round of technical challenge competition"
        },
        {
          time: "11:00 AM - 11:30 AM",
          title: "Competition Results & Awards",
          type: "ceremony",
          icon: Award,
          speaker: "Conference Leadership",
          description: "Announcement of competition winners and awards"
        },
        {
          time: "11:30 AM - 12:30 PM",
          title: "Future Trends Panel Discussion",
          type: "panel",
          icon: Users,
          speaker: "Industry Leaders Panel",
          description: "Looking ahead: next 5 years in technical security"
        },
        {
          time: "12:30 PM - 1:30 PM",
          title: "Closing Lunch",
          type: "networking",
          icon: Utensils,
          description: "Final networking lunch and farewell"
        },
        {
          time: "1:30 PM - 2:00 PM",
          title: "Closing Ceremony & CTSC 2027 Preview",
          type: "ceremony",
          icon: Users,
          speaker: "Conference Chair",
          description: "Conference wrap-up and next year preview"
        }
      ]
    }
  ];

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'keynote': return 'from-purple-600/20 to-blue-600/20 border-purple-500/30';
      case 'technical': return 'from-blue-600/20 to-cyan-600/20 border-blue-500/30';
      case 'workshop': return 'from-green-600/20 to-emerald-600/20 border-green-500/30';
      case 'panel': return 'from-orange-600/20 to-red-600/20 border-orange-500/30';
      case 'competition': return 'from-yellow-600/20 to-orange-600/20 border-yellow-500/30';
      case 'networking': return 'from-gray-600/20 to-slate-600/20 border-gray-500/30';
      case 'ceremony': return 'from-indigo-600/20 to-purple-600/20 border-indigo-500/30';
      default: return 'from-slate-600/20 to-gray-600/20 border-slate-500/30';
    }
  };

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
                    item.href === '/schedule' 
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
                Conference Schedule
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Three days of cutting-edge presentations, hands-on workshops, and networking opportunities
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
              <div className="flex items-center space-x-2 text-blue-400">
                <Calendar className="w-6 h-6" />
                <span className="text-lg font-semibold">April 28-30, 2026</span>
              </div>
              <div className="hidden md:block w-px h-6 bg-gray-600"></div>
              <div className="flex items-center space-x-2 text-cyan-400">
                <MapPin className="w-6 h-6" />
                <span className="text-lg font-semibold">Banff Centre, Alberta</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Schedule Content */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {scheduleData.map((dayData, dayIndex) => (
            <motion.div
              key={dayIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: dayIndex * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                {dayData.day}
              </h2>
              
              <div className="space-y-6">
                {dayData.events.map((event, eventIndex) => (
                  <motion.div
                    key={eventIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: eventIndex * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className={`bg-gradient-to-r ${getEventTypeColor(event.type)} backdrop-blur-sm rounded-xl p-6 border hover:scale-[1.02] transition-all duration-300`}
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                      <div className="flex items-center gap-4 lg:w-1/4">
                        <event.icon className="w-8 h-8 text-blue-400 flex-shrink-0" />
                        <div className="flex items-center gap-2 text-cyan-400 font-semibold">
                          <Clock className="w-4 h-4" />
                          <span className="text-sm">{event.time}</span>
                        </div>
                      </div>
                      
                      <div className="lg:w-3/4">
                        <h3 className="text-xl font-semibold text-white mb-2">
                          {event.title}
                        </h3>
                        {event.speaker && (
                          <p className="text-blue-400 font-medium mb-2">
                            {event.speaker}
                          </p>
                        )}
                        <p className="text-gray-300 leading-relaxed">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Legend */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-8">Event Types</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { type: 'keynote', label: 'Keynote Presentations', color: 'purple' },
                { type: 'technical', label: 'Technical Sessions', color: 'blue' },
                { type: 'workshop', label: 'Hands-on Workshops', color: 'green' },
                { type: 'panel', label: 'Panel Discussions', color: 'orange' },
                { type: 'competition', label: 'Competitions', color: 'yellow' },
                { type: 'networking', label: 'Networking Events', color: 'gray' },
                { type: 'ceremony', label: 'Ceremonies', color: 'indigo' }
              ].map((item, index) => (
                <div
                  key={item.type}
                  className={`bg-gradient-to-r ${getEventTypeColor(item.type)} rounded-lg p-4 border text-center`}
                >
                  <span className="text-white font-medium text-sm">{item.label}</span>
                </div>
              ))}
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
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Attend?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Secure your spot at CTSC 2026 and don't miss these incredible sessions
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/register"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                Register Now
              </a>
              <a
                href="/speakers"
                className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
              >
                Meet the Speakers
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