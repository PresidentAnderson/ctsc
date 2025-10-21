'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Calendar, MapPin, Users, Shield, CheckCircle, DollarSign, Clock, Mail, Phone, Building, User } from 'lucide-react';

export default function Register() {
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    jobTitle: '',
    organization: '',
    
    // Registration Details
    registrationType: '',
    accommodationNeeded: false,
    dietaryRestrictions: '',
    emergencyContact: '',
    emergencyPhone: '',
    
    // Additional Information
    interests: [] as string[],
    experience: '',
    marketingConsent: false,
    
    // Payment Information
    billingName: '',
    billingAddress: '',
    billingCity: '',
    billingPostal: '',
    billingProvince: ''
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const registrationTypes = [
    {
      id: 'early-bird',
      title: 'Early Bird Registration',
      price: 899,
      originalPrice: 1099,
      description: 'Save $200 with early registration',
      deadline: 'Register by February 28, 2026',
      includes: [
        'All conference sessions and workshops',
        'Conference materials and swag bag',
        'Welcome reception and networking events',
        'Breakfast, lunch, and coffee breaks',
        'Awards dinner',
        'Access to competition events',
        'One year CTSPA membership'
      ]
    },
    {
      id: 'regular',
      title: 'Regular Registration',
      price: 1099,
      description: 'Standard conference registration',
      deadline: 'Register by April 15, 2026',
      includes: [
        'All conference sessions and workshops',
        'Conference materials and swag bag',
        'Welcome reception and networking events',
        'Breakfast, lunch, and coffee breaks',
        'Awards dinner',
        'Access to competition events'
      ]
    },
    {
      id: 'student',
      title: 'Student/Academic',
      price: 599,
      description: 'Special pricing for students and academics',
      deadline: 'Valid student ID required',
      includes: [
        'All conference sessions and workshops',
        'Conference materials',
        'Welcome reception and networking events',
        'Breakfast, lunch, and coffee breaks',
        'Awards dinner'
      ]
    },
    {
      id: 'group',
      title: 'Group Registration (5+)',
      price: 999,
      description: 'Special pricing for groups of 5 or more',
      deadline: 'Contact us for group discounts',
      includes: [
        'All conference sessions and workshops',
        'Conference materials and swag bag',
        'Welcome reception and networking events',
        'Breakfast, lunch, and coffee breaks',
        'Awards dinner',
        'Access to competition events',
        'Group photo opportunity'
      ]
    }
  ];

  const interestAreas = [
    'AI & Machine Learning in Security',
    'Technical Surveillance Countermeasures (TSCM)',
    'IoT Security & Threat Modeling',
    'Cyber Threat Intelligence',
    'Legal Compliance & Privacy',
    'Mobile Device Security',
    'Encryption Technologies',
    'Critical Infrastructure Protection',
    'Social Engineering Defense',
    'RF Detection & Analysis'
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

  const handleInterestChange = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 4));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

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
          <h1 className="text-4xl font-bold text-white mb-4">Registration Submitted!</h1>
          <p className="text-xl text-gray-300 mb-6">
            Thank you for registering for CTSC 2026. We've sent a confirmation email to {formData.email}.
          </p>
          <p className="text-lg text-gray-300 mb-8">
            Our team will contact you within 24 hours with payment instructions and next steps.
          </p>
          <a
            href="/"
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
          >
            Return to Home
          </a>
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
                    item.href === '/register' 
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
                Register for CTSC 2026
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Secure your spot at Canada's premier technical security conference
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

      {/* Registration Types */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Registration Options</h2>
            <p className="text-xl text-gray-300">Choose the registration type that best fits your needs</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {registrationTypes.map((type, index) => (
              <motion.div
                key={type.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className={`bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 hover:scale-105 cursor-pointer ${
                  formData.registrationType === type.id 
                    ? 'border-blue-400 bg-blue-500/10' 
                    : 'border-blue-500/20 hover:border-blue-400/40'
                }`}
                onClick={() => setFormData(prev => ({ ...prev, registrationType: type.id }))}
              >
                <div className="text-center mb-4">
                  <h3 className="text-xl font-semibold text-white mb-2">{type.title}</h3>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <DollarSign className="w-6 h-6 text-blue-400" />
                    <span className="text-3xl font-bold text-blue-400">{type.price}</span>
                    <span className="text-gray-400">CAD</span>
                  </div>
                  {type.originalPrice && (
                    <p className="text-gray-400 line-through text-sm">Was ${type.originalPrice} CAD</p>
                  )}
                  <p className="text-gray-300 text-sm mb-3">{type.description}</p>
                  <p className="text-blue-400 text-xs font-medium">{type.deadline}</p>
                </div>
                
                <ul className="space-y-2">
                  {type.includes.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20"
          >
            {/* Progress Indicator */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                {[1, 2, 3, 4].map((step) => (
                  <div
                    key={step}
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                      step <= currentStep 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-600 text-gray-400'
                    }`}
                  >
                    {step}
                  </div>
                ))}
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(currentStep / 4) * 100}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-sm text-gray-400 mt-2">
                <span>Personal Info</span>
                <span>Registration</span>
                <span>Interests</span>
                <span>Billing</span>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              {/* Step 1: Personal Information */}
              {currentStep === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <User className="w-6 h-6 mr-3 text-blue-400" />
                    Personal Information
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 mb-2">First Name *</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-gray-600 text-white focus:border-blue-400 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-2">Last Name *</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
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
                      <label className="block text-gray-300 mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-gray-600 text-white focus:border-blue-400 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-2">Job Title *</label>
                      <input
                        type="text"
                        name="jobTitle"
                        value={formData.jobTitle}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-gray-600 text-white focus:border-blue-400 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-2">Organization *</label>
                      <input
                        type="text"
                        name="organization"
                        value={formData.organization}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-gray-600 text-white focus:border-blue-400 focus:outline-none"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Registration Details */}
              {currentStep === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <CheckCircle className="w-6 h-6 mr-3 text-blue-400" />
                    Registration Details
                  </h3>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-gray-300 mb-2">Registration Type *</label>
                      <select
                        name="registrationType"
                        value={formData.registrationType}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-gray-600 text-white focus:border-blue-400 focus:outline-none"
                      >
                        <option value="">Select registration type</option>
                        {registrationTypes.map(type => (
                          <option key={type.id} value={type.id}>
                            {type.title} - ${type.price} CAD
                          </option>
                        ))}
                      </select>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        name="accommodationNeeded"
                        checked={formData.accommodationNeeded}
                        onChange={handleInputChange}
                        className="w-5 h-5 text-blue-600 bg-slate-700 border-gray-600 rounded focus:ring-blue-500"
                      />
                      <label className="text-gray-300">I need accommodation assistance</label>
                    </div>
                    
                    <div>
                      <label className="block text-gray-300 mb-2">Dietary Restrictions or Allergies</label>
                      <textarea
                        name="dietaryRestrictions"
                        value={formData.dietaryRestrictions}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-gray-600 text-white focus:border-blue-400 focus:outline-none"
                        placeholder="Please describe any dietary restrictions or allergies..."
                      />
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-300 mb-2">Emergency Contact Name *</label>
                        <input
                          type="text"
                          name="emergencyContact"
                          value={formData.emergencyContact}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-gray-600 text-white focus:border-blue-400 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-300 mb-2">Emergency Contact Phone *</label>
                        <input
                          type="tel"
                          name="emergencyPhone"
                          value={formData.emergencyPhone}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-gray-600 text-white focus:border-blue-400 focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Interests and Experience */}
              {currentStep === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <Shield className="w-6 h-6 mr-3 text-blue-400" />
                    Interests & Experience
                  </h3>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-gray-300 mb-4">Areas of Interest (select all that apply)</label>
                      <div className="grid md:grid-cols-2 gap-3">
                        {interestAreas.map((interest) => (
                          <div key={interest} className="flex items-center space-x-3">
                            <input
                              type="checkbox"
                              checked={formData.interests.includes(interest)}
                              onChange={() => handleInterestChange(interest)}
                              className="w-5 h-5 text-blue-600 bg-slate-700 border-gray-600 rounded focus:ring-blue-500"
                            />
                            <label className="text-gray-300 text-sm">{interest}</label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-gray-300 mb-2">Experience Level & Background</label>
                      <textarea
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-gray-600 text-white focus:border-blue-400 focus:outline-none"
                        placeholder="Please describe your experience in technical security, years in the field, specific areas of expertise, etc."
                      />
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        name="marketingConsent"
                        checked={formData.marketingConsent}
                        onChange={handleInputChange}
                        className="w-5 h-5 text-blue-600 bg-slate-700 border-gray-600 rounded focus:ring-blue-500 mt-1"
                      />
                      <label className="text-gray-300 text-sm">
                        I consent to receive marketing communications about future CTSC events, security industry news, and related professional development opportunities. You can unsubscribe at any time.
                      </label>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 4: Billing Information */}
              {currentStep === 4 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <Building className="w-6 h-6 mr-3 text-blue-400" />
                    Billing Information
                  </h3>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-gray-300 mb-2">Billing Name/Organization *</label>
                      <input
                        type="text"
                        name="billingName"
                        value={formData.billingName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-gray-600 text-white focus:border-blue-400 focus:outline-none"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-300 mb-2">Billing Address *</label>
                      <input
                        type="text"
                        name="billingAddress"
                        value={formData.billingAddress}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-gray-600 text-white focus:border-blue-400 focus:outline-none"
                      />
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <label className="block text-gray-300 mb-2">City *</label>
                        <input
                          type="text"
                          name="billingCity"
                          value={formData.billingCity}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-gray-600 text-white focus:border-blue-400 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-300 mb-2">Province *</label>
                        <select
                          name="billingProvince"
                          value={formData.billingProvince}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-gray-600 text-white focus:border-blue-400 focus:outline-none"
                        >
                          <option value="">Select Province</option>
                          <option value="AB">Alberta</option>
                          <option value="BC">British Columbia</option>
                          <option value="MB">Manitoba</option>
                          <option value="NB">New Brunswick</option>
                          <option value="NL">Newfoundland and Labrador</option>
                          <option value="NS">Nova Scotia</option>
                          <option value="ON">Ontario</option>
                          <option value="PE">Prince Edward Island</option>
                          <option value="QC">Quebec</option>
                          <option value="SK">Saskatchewan</option>
                          <option value="NT">Northwest Territories</option>
                          <option value="NU">Nunavut</option>
                          <option value="YT">Yukon</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-gray-300 mb-2">Postal Code *</label>
                        <input
                          type="text"
                          name="billingPostal"
                          value={formData.billingPostal}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-gray-600 text-white focus:border-blue-400 focus:outline-none"
                        />
                      </div>
                    </div>
                    
                    <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Registration Summary</h4>
                      <div className="space-y-2 text-gray-300">
                        <div className="flex justify-between">
                          <span>Registration Type:</span>
                          <span className="text-white font-medium">
                            {registrationTypes.find(t => t.id === formData.registrationType)?.title || 'Not selected'}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Price:</span>
                          <span className="text-blue-400 font-bold text-lg">
                            ${registrationTypes.find(t => t.id === formData.registrationType)?.price || 0} CAD
                          </span>
                        </div>
                        <div className="pt-3 border-t border-gray-600">
                          <p className="text-sm text-gray-400">
                            * Payment instructions will be sent via email after registration submission
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8 pt-6 border-t border-gray-600">
                <button
                  type="button"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    currentStep === 1
                      ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}
                >
                  Previous
                </button>
                
                {currentStep < 4 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
                  >
                    Next Step
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2"></div>
                        Submitting...
                      </>
                    ) : (
                      'Complete Registration'
                    )}
                  </button>
                )}
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