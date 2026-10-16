import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, User, Mail, MessageSquare, CheckCircle, AlertCircle, Loader, Sparkles } from 'lucide-react';

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
    { name: 'name', label: 'Your Name', placeholder: 'Jane Smith', type: 'text', icon: <User className="w-4 h-4" />, col: 'md:col-span-1' },
    { name: 'email', label: 'Email Address', placeholder: 'you@example.com', type: 'email', icon: <Mail className="w-4 h-4" />, col: 'md:col-span-1' },
    { name: 'subject', label: 'Subject', placeholder: "Let's collaborate!", type: 'text', icon: <MessageSquare className="w-4 h-4" />, col: 'md:col-span-2' },
  ];

  const inputBase = "w-full rounded-xl px-4 py-3 text-sm text-white outline-none transition-all duration-300";

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <span
            className="text-sm font-medium uppercase tracking-widest mb-3 block"
            style={{ color: '#00ffff' }}
          >
            Get In Touch
          </span>
          <h2
            className="font-heading font-bold leading-tight mb-4"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#fff' }}
          >
            Send me a <span className="text-gradient">Message</span>
          </h2>
          <p
            className="text-sm leading-relaxed max-w-md"
            style={{ color: 'rgba(229,231,235,0.55)' }}
          >
            Have a project in mind or just want to say hi? Fill in the form — I'll get back within 24 hours. You'll also receive a confirmation email.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative rounded-2xl p-8 md:p-12 overflow-hidden"
          style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.08)' }}
        >
          {/* Background decorations */}
          <div
            className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(0,255,255,0.06) 0%, transparent 70%)' }}
          />
          <div
            className="absolute bottom-0 left-0 w-48 h-48 rounded-full blur-3xl pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(0,128,255,0.06) 0%, transparent 70%)' }}
          />

          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                className="flex flex-col items-center justify-center py-16 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
                  style={{ background: 'rgba(34,197,94,0.15)', border: '1px solid rgba(34,197,94,0.3)' }}
                >
                  <CheckCircle className="w-10 h-10" style={{ color: '#22C55E' }} />
                </motion.div>
                <h3 className="text-2xl font-bold font-heading mb-3 text-white">Message Sent! 🚀</h3>
                <p className="mb-8" style={{ color: 'rgba(229,231,235,0.55)' }}>
                  I've received your message and sent you a confirmation email. I'll reply soon!
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="px-6 py-2 rounded-full text-sm font-medium transition-colors"
                  style={{ border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.7)' }}
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
                      <label className="block text-xs font-semibold uppercase tracking-wider mb-2"
                        style={{ color: 'rgba(229,231,235,0.45)' }}>
                        {label}
                      </label>
                      <div className="relative">
                        <div
                          className={`absolute left-3 top-1/2 -translate-y-1/2 transition-colors duration-300`}
                          style={{ color: focused === name ? '#00ffff' : 'rgba(229,231,235,0.3)' }}
                        >
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
                          className={`${inputBase} pl-10`}
                          style={{
                            background: 'rgba(255,255,255,0.05)',
                            border: focused === name
                              ? '1px solid rgba(0,255,255,0.5)'
                              : '1px solid rgba(255,255,255,0.09)',
                            boxShadow: focused === name ? '0 0 0 3px rgba(0,255,255,0.07)' : 'none',
                            color: '#fff',
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mb-6">
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-2"
                    style={{ color: 'rgba(229,231,235,0.45)' }}>
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
                    className={`${inputBase} resize-none`}
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      border: focused === 'message'
                        ? '1px solid rgba(0,255,255,0.5)'
                        : '1px solid rgba(255,255,255,0.09)',
                      boxShadow: focused === 'message' ? '0 0 0 3px rgba(0,255,255,0.07)' : 'none',
                    }}
                  />
                </div>

                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 mb-5 p-4 rounded-xl text-sm"
                    style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.25)', color: '#EF4444' }}
                  >
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    {errorMsg}
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={status === 'loading'}
                  whileHover={{ scale: status === 'loading' ? 1 : 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-3 py-4 rounded-xl text-sm font-bold text-black transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{ background: 'linear-gradient(135deg, #00ffff, #0080ff)' }}
                >
                  {status === 'loading' ? (
                    <>
                      <Loader className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                      <Sparkles className="w-4 h-4" />
                    </>
                  )}
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
