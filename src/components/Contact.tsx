import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { Button } from '../UI/button';
import { Input } from '../UI/input';
import { Textarea } from '../UI/textarea';
import { useState } from 'react';

interface ContactProps {
  isDarkMode: boolean;
}

export function Contact({ isDarkMode }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Replace this URL with your Google Sheets Apps Script Web App URL
    // Instructions: See the setup guide below
    const SHEET_URL = 'https://script.google.com/macros/s/AKfycbwAefnwcx-UwZ-EI73eH2rWGSfH4umSgu6TbIeeMxK3Xwm9PNibeiqtsAiZop6g9nY1/exec';

    try {
      await fetch(SHEET_URL, {
        method: 'POST',
        mode: 'no-cors', // Required for Google Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          timestamp: new Date().toISOString(),
        }),
      });

      // With no-cors mode, we can't read the response, so we assume success
      setSubmitStatus('success');
      setStatusMessage('Thank you! Your message has been sent successfully.');

      // Reset form
      setFormData({
        name: '',
        email: '',
        message: '',
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
        setStatusMessage('');
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setStatusMessage('Oops! Something went wrong. Please try again or email me directly.');

      // Clear error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
        setStatusMessage('');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'aviralgupta076@gmail.com',
      href: 'mailto:aviralgupta076@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91-8953078164',
      href: 'tel:+918953078164',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Bangalore, India',
      href: '#',
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 -mt-16 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h2 className={`text-4xl sm:text-5xl font-extrabold mb-4 pb-1 leading-tight bg-gradient-to-r ${isDarkMode
                ? 'from-white via-gray-300 to-gray-500'
                : 'from-gray-300 via-black to-gray-300'
              } bg-clip-text text-transparent`}>
              Get In Touch
            </h2>
            <div className={`w-24 h-1 mx-auto rounded-full ${isDarkMode ? 'bg-gradient-to-r from-cyan-500 via-orange-500 to-fuchsia-500' : 'bg-gradient-to-r from-cyan-400 via-orange-400 to-fuchsia-400'
              }`} />
          </motion.div>
          <motion.p
            className={`max-w-2xl mx-auto ${isDarkMode ? 'text-white/70' : 'text-gray-700'}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Have a project in mind or want to collaborate? Feel free to reach out!
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <motion.div
              className={`backdrop-blur-xl rounded-2xl p-8 shadow-xl ${isDarkMode
                  ? 'bg-white/[0.03] border border-white/[0.08]'
                  : 'bg-white/60 border border-white/40 shadow-cyan-200/20'
                }`}
              whileHover={{ y: -5 }}
            >
              <motion.h3
                className={isDarkMode ? 'text-white mb-6' : 'text-gray-900 mb-6'}
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                Contact Information
              </motion.h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ x: 10, scale: 1.02 }}
                    className={`flex items-center gap-4 p-4 backdrop-blur-sm rounded-xl transition-all duration-300 group ${isDarkMode
                        ? 'bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.05]'
                        : 'bg-white/40 border border-white/30 hover:bg-white/60'
                      }`}
                  >
                    <motion.div
                      className={`flex items-center justify-center w-12 h-12 backdrop-blur-sm rounded-xl group-hover:scale-110 transition-transform duration-300 bg-gradient-to-br ${isDarkMode
                          ? 'from-neutral-900 to-black border border-white/10'
                          : 'from-cyan-400/30 to-emerald-400/30 border border-cyan-300/30'
                        }`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <info.icon className={isDarkMode ? 'text-white' : 'text-gray-900'} size={20} />
                    </motion.div>
                    <div>
                      <div className={isDarkMode ? 'text-white/60' : 'text-gray-600'}>{info.label}</div>
                      <div className={isDarkMode ? 'text-white' : 'text-gray-900'}>{info.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -5 }}
              className={`backdrop-blur-xl rounded-2xl p-8 shadow-xl ${isDarkMode
                  ? 'bg-white/[0.03] border border-white/[0.08]'
                  : 'bg-white/60 border border-white/40 shadow-cyan-200/20'
                }`}
            >
              <motion.h3
                className={isDarkMode ? 'text-white mb-4' : 'text-gray-900 mb-4'}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                Let's Connect
              </motion.h3>
              <motion.p
                className={`mb-4 ${isDarkMode ? 'text-white/70' : 'text-gray-700'}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                I'm always open to discussing new projects, creative ideas, or opportunities
                to be part of your vision.
              </motion.p>
              <motion.p
                className={isDarkMode ? 'text-white/70' : 'text-gray-700'}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5 }}
            className={`backdrop-blur-xl rounded-2xl p-8 shadow-xl ${isDarkMode
                ? 'bg-white/[0.03] border border-white/[0.08]'
                : 'bg-white/60 border border-white/40 shadow-cyan-200/20'
              }`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Status Message */}
              {submitStatus !== 'idle' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className={`p-4 rounded-xl backdrop-blur-sm border ${submitStatus === 'success'
                      ? isDarkMode
                        ? 'bg-green-500/10 border-green-500/30 text-green-300'
                        : 'bg-green-100 border-green-300 text-green-800'
                      : isDarkMode
                        ? 'bg-red-500/10 border-red-500/30 text-red-300'
                        : 'bg-red-100 border-red-300 text-red-800'
                    }`}
                >
                  <div className="flex items-center gap-2">
                    {submitStatus === 'success' ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                    <span className="font-medium">{statusMessage}</span>
                  </div>
                </motion.div>
              )}

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <label htmlFor="name" className={`block mb-2 ${isDarkMode ? 'text-white/80' : 'text-gray-700'
                  }`}>
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={`backdrop-blur-sm ${isDarkMode
                      ? 'bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-white/30'
                      : 'bg-white/50 border-gray-300/50 text-gray-900 placeholder:text-gray-500 focus:border-cyan-400/50'
                    }`}
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <label htmlFor="email" className={`block mb-2 ${isDarkMode ? 'text-white/80' : 'text-gray-700'
                  }`}>
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className={`backdrop-blur-sm ${isDarkMode
                      ? 'bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-white/30'
                      : 'bg-white/50 border-gray-300/50 text-gray-900 placeholder:text-gray-500 focus:border-cyan-400/50'
                    }`}
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <label htmlFor="message" className={`block mb-2 ${isDarkMode ? 'text-white/80' : 'text-gray-700'
                  }`}>
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  rows={6}
                  className={`backdrop-blur-sm resize-none ${isDarkMode
                      ? 'bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-white/30'
                      : 'bg-white/50 border-gray-300/50 text-gray-900 placeholder:text-gray-500 focus:border-cyan-400/50'
                    }`}
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full backdrop-blur-sm transition-all duration-300 ${isDarkMode
                      ? 'bg-white/10 hover:bg-white/20 border border-white/20 text-white disabled:bg-white/5 disabled:text-white/50'
                      : 'bg-gray-900/10 hover:bg-gray-900/20 border border-gray-900/20 text-gray-900 disabled:bg-gray-900/5 disabled:text-gray-900/50'
                    }`}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        className="mr-2"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                      </motion.div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} className="mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}