'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Phone, Mail, MapPin, Building, Clock, User, MessageSquare, CheckCircle, Users, Calendar, Send, Globe } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    subject: '',
    message: '',
    inquiryType: '',
    quickEmail: '',
    quickInterest: '',
    consent: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: Phone,
      label: "Conference Hotline",
      value: "1.888.293.7384",
      description: "Registration & General Inquiries",
      hours: "Mon-Fri 9AM-6PM EST"
    },
    {
      icon: Mail,
      label: "Email Support",
      value: "info@ctsc-canada.com",
      description: "General Questions & Support",
      hours: "24-48 hour response"
    },
    {
      icon: Building,
      label: "Sponsorship",
      value: "sponsors@ctsc-canada.com",
      description: "Partnership Opportunities",
      hours: "Priority response"
    },
    {
      icon: User,
      label: "Speaker Program",
      value: "speakers@ctsc-canada.com",
      description: "Speaking Opportunities",
      hours: "Review within 72 hours"
    }
  ];

  const quickInterests = [
    'Conference Registration',
    'Sponsorship Opportunities', 
    'Speaking at CTSC',
    'Media & Press',
    'Partnership Inquiries',
    'Vendor Exhibitions',
    'Group Discounts',
    'Technical Sessions Info'
  ];

  const inquiryTypes = [
    { value: 'registration', label: 'Registration Questions' },
    { value: 'accommodations', label: 'Accommodations & Travel' },
    { value: 'technical', label: 'Technical Sessions' },
    { value: 'sponsorship', label: 'Sponsorship Opportunities' },
    { value: 'speaking', label: 'Speaking Opportunities' },
    { value: 'media', label: 'Media & Press' },
    { value: 'vendor', label: 'Vendor Exhibitions' },
    { value: 'group', label: 'Group Registration' },
    { value: 'general', label: 'General Information' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setFormData({
      name: '', email: '', phone: '', organization: '', subject: '', message: '', inquiryType: '',
      quickEmail: '', quickInterest: '', consent: false
    });
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-green-500/30 text-center max-w-2xl"
        >
          <CheckCircle className="w-20 h-20 text-green-400 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-white mb-4">Message Sent!</h1>
          <p className="text-xl text-gray-300 mb-6">
            Thank you for contacting CTSC 2026. We've received your inquiry and will respond within 24 hours.
          </p>
          <p className="text-lg text-gray-300 mb-8">
            A confirmation has been sent to {formData.email || formData.quickEmail}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={resetForm}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
            >
              Send Another Message
            </button>
            <a
              href="/"
              className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 text-center"
            >
              Return to Home
            </a>
          </div>
        </motion.div>
      </div>
    );
  }

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
                    item.href === '/contact' 
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
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Contact CTSC 2026
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Questions about registration, sponsorships, speaking opportunities? We're here to help make your CTSC 2026 experience exceptional.
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
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

      {/* Quick Contact Form */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Get Conference Updates</h2>
              <p className="text-xl text-gray-300">
                Stay informed about CTSC 2026 registration, speakers, and exclusive opportunities
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-300 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="quickEmail"
                    value={formData.quickEmail}
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@company.com"
                    className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-gray-600 text-white focus:border-blue-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Primary Interest *</label>
                  <select
                    name="quickInterest"
                    value={formData.quickInterest}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-gray-600 text-white focus:border-blue-400 focus:outline-none"
                  >
                    <option value="">Select your interest</option>
                    {quickInterests.map(interest => (
                      <option key={interest} value={interest}>{interest}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 mb-6">
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleInputChange}
                  required
                  className="w-5 h-5 text-blue-600 bg-slate-700 border-gray-600 rounded focus:ring-blue-500"
                />
                <label className="text-gray-300 text-sm">
                  I agree to receive updates about CTSC 2026 and related technical security events. Unsubscribe anytime. *
                </label>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center mx-auto transform hover:scale-105"
                >
                  <Send className="w-5 h-5 mr-2" />
                  {isSubmitting ? 'Subscribing...' : 'Stay Updated'}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Get in Touch</h2>
            <p className="text-xl text-gray-300">Multiple ways to reach our team for different needs</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((contact, index) => (
              <motion.div
                key={contact.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 rounded-lg p-6 border border-blue-500/20 text-center hover:border-blue-400/40 transition-all duration-300"
              >
                <contact.icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-1">{contact.label}</h3>
                <p className="text-blue-400 font-medium mb-1">{contact.value}</p>
                <p className="text-gray-400 text-sm mb-1">{contact.description}</p>
                <p className="text-gray-500 text-xs">{contact.hours}</p>
              </motion.div>
            ))}
          </div>

          {/* Organizer Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-slate-800/30 rounded-xl p-8 border border-blue-500/20 text-center mb-16"
          >
            <Building className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Conference Organizer</h3>
            <p className="text-xl text-blue-400 font-semibold mb-2">Professional Development TSCM Group Inc.</p>
            <p className="text-gray-300 mb-4">Canadian Technical Security Professional Association (CTSPA)</p>
            <div className="flex items-center justify-center space-x-4 text-gray-400">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@ctsc-canada.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Mon-Fri 9AM-6PM EST</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Detailed Contact Form */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20"
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-4">Send us a Detailed Message</h3>
              <p className="text-lg text-gray-300">
                Have specific questions or need detailed information? Use this form to get personalized assistance.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-gray-600 text-white focus:border-blue-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-gray-600 text-white focus:border-blue-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-gray-600 text-white focus:border-blue-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Organization</label>
                  <input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-gray-600 text-white focus:border-blue-400 focus:outline-none"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">How can we help you? *</label>
                <select
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-gray-600 text-white focus:border-blue-400 focus:outline-none"
                >
                  <option value="">Select inquiry type</option>
                  {inquiryTypes.map(type => (
                    <option key={type.value} value={type.value}>{type.label}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Subject *</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-gray-600 text-white focus:border-blue-400 focus:outline-none"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-gray-600 text-white focus:border-blue-400 focus:outline-none"
                  placeholder="Please provide details about your inquiry, questions about registration, sponsorship opportunities, speaking proposals, or any other conference-related matters..."
                />
              </div>
              
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                  <Globe className="w-5 h-5 mr-2 text-blue-400" />
                  Quick Actions
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <a
                    href="/register"
                    className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-4 py-3 rounded-lg font-medium transition-all duration-300 text-center block"
                  >
                    Register for CTSC 2026
                  </a>
                  <a
                    href="/schedule"
                    className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-4 py-3 rounded-lg font-medium transition-all duration-300 text-center block"
                  >
                    View Conference Schedule
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleInputChange}
                  required
                  className="w-5 h-5 text-blue-600 bg-slate-700 border-gray-600 rounded focus:ring-blue-500 mt-1"
                />
                <label className="text-gray-300 text-sm">
                  I consent to being contacted by CTSC 2026 organizers regarding my inquiry. My information will be used solely for conference-related communication and will not be shared with third parties. *
                </label>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center mx-auto transform hover:scale-105"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2"></div>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 px-4 sm:px-6 lg:px-8 border-t border-blue-500/20 mt-20">
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