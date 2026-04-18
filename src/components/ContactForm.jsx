import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, User, Mail, MessageSquare, CheckCircle, AlertCircle, Loader } from 'lucide-react';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('');
  const [focused, setFocused] = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
        setErrorMsg(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Could not reach the server. Make sure the mail server is running.');
    }
  };

  const fields = [
    { name: 'name', label: 'Your Name', placeholder: 'Anuj Raj', type: 'text', icon: <User className="w-4 h-4" />, col: 'md:col-span-1' },
    { name: 'email', label: 'Email Address', placeholder: 'you@example.com', type: 'email', icon: <Mail className="w-4 h-4" />, col: 'md:col-span-1' },
    { name: 'subject', label: 'Subject', placeholder: 'Let\'s collaborate!', type: 'text', icon: <MessageSquare className="w-4 h-4" />, col: 'md:col-span-2' },
  ];

  const inputBase = "w-full bg-white/5 border rounded-xl px-4 py-3 text-sm text-white placeholder-text/30 outline-none transition-all duration-300";

  return (
    <section id="contact" className="py-24 px-4 md:px-8 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <motion.span
          initial={{ opacity: 0, letterSpacing: '0.5em' }}
          whileInView={{ opacity: 1, letterSpacing: '0.25em' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-accent-blue text-sm font-medium tracking-widest uppercase mb-4 block"
        >
          ◈ Get In Touch
        </motion.span>
        <h2 className="text-4xl md:text-6xl font-heading font-bold mb-4">
          Send me a <span className="text-accent-blue">Message</span>
        </h2>
        <p className="text-text/60 max-w-lg mx-auto text-sm leading-relaxed">
          Have a project in mind or just want to say hi? Fill in the form — I'll get back to you within 24 hours. You'll also get an automatic confirmation email.
        </p>
        <div className="h-1 w-20 bg-accent-blue rounded-full mx-auto mt-6"></div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="glass-panel p-8 md:p-12 rounded-3xl border border-white/5 relative overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-blue/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent-green/10 rounded-full blur-3xl pointer-events-none" />

        <AnimatePresence mode="wait">
          {status === 'success' ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="flex flex-col items-center justify-center py-16 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                className="w-20 h-20 bg-accent-green/20 border border-accent-green/40 rounded-full flex items-center justify-center mb-6"
              >
                <CheckCircle className="w-10 h-10 text-accent-green" />
              </motion.div>
              <h3 className="text-2xl font-bold font-heading mb-3">Message Sent! 🚀</h3>
              <p className="text-text/60 mb-8">I've received your message and sent you a confirmation email. I'll reply soon!</p>
              <button
                onClick={() => setStatus('idle')}
                className="px-6 py-2 glass-panel rounded-full text-sm hover:bg-white/10 transition-colors border border-white/10"
              >
                Send another
              </button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative z-10"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                {fields.map(({ name, label, placeholder, type, icon, col }) => (
                  <div key={name} className={col}>
                    <label className="block text-xs font-semibold text-text/50 uppercase tracking-wider mb-2">
                      {label}
                    </label>
                    <div className="relative">
                      <div className={`absolute left-3 top-1/2 -translate-y-1/2 transition-colors duration-300 ${focused === name ? 'text-accent-blue' : 'text-text/30'}`}>
                        {icon}
                      </div>
                      <input
                        type={type}
                        name={name}
                        value={form[name]}
                        onChange={handleChange}
                        onFocus={() => setFocused(name)}
                        onBlur={() => setFocused('')}
                        placeholder={placeholder}
                        required={name !== 'subject'}
                        className={`${inputBase} pl-10 ${focused === name ? 'border-accent-blue/60 shadow-[0_0_15px_rgba(59,130,246,0.15)]' : 'border-white/10'}`}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mb-6">
                <label className="block text-xs font-semibold text-text/50 uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused('')}
                  placeholder="Tell me about your project or idea..."
                  required
                  rows={5}
                  className={`${inputBase} resize-none ${focused === 'message' ? 'border-accent-blue/60 shadow-[0_0_15px_rgba(59,130,246,0.15)]' : 'border-white/10'}`}
                />
              </div>

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 mb-5 p-4 bg-accent-red/10 border border-accent-red/30 rounded-xl text-accent-red text-sm"
                >
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  {errorMsg}
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={status === 'loading'}
                whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-3 py-4 bg-accent-blue text-white font-bold rounded-xl text-sm shadow-[0_0_25px_rgba(59,130,246,0.3)] hover:bg-accent-blue/90 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>
                    <Loader className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>
            </motion.form>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default ContactForm;
