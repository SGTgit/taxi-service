import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { CheckCircle, Send } from 'lucide-react';

function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail('');
    // Reset after 5 seconds so the form can be reused
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="newsletter-strip relative overflow-hidden py-8 text-white">
      <div className="absolute inset-0 bg-[#071421]/55 dark:bg-[#060f1e]/72" />
      <motion.div
        className="section-shell relative z-10"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.45 }}
        transition={{ duration: 0.55 }}
      >
        <div className="grid gap-7 md:grid-cols-[1fr_0.8fr] md:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#c9964a]">Ready for a divine journey?</p>
            <h2 className="font-display mt-2 max-w-xl text-3xl font-semibold md:text-[38px]">Let Us Take You to the Spiritual Heart.</h2>
          </div>

          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-3 rounded bg-white/10 px-5 py-4 backdrop-blur-sm"
              >
                <CheckCircle size={22} className="shrink-0 text-[#c9964a]" />
                <p className="text-sm font-semibold">
                  Thank you! We'll be in touch soon.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="flex overflow-hidden rounded bg-white dark:border dark:border-[#c9964a]/45 dark:bg-[#0a1829]"
              >
                <input
                  className="min-w-0 flex-1 px-4 text-sm text-[#0d1b2a] outline-none dark:bg-[#0a1829] dark:text-white dark:placeholder:text-white/62"
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  aria-label="Email address for newsletter"
                />
                <button
                  type="submit"
                  className="gold-gradient flex items-center gap-2 px-6 py-4 text-xs font-bold uppercase text-white transition hover:opacity-90"
                >
                  Subscribe <Send size={14} />
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}

export default Newsletter;

