'use client';

import { motion } from 'framer-motion';

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            Ready to Add $20K-$50K Monthly Revenue to Your Agency?
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Book your free agency scaling session and discover our proven data-driven systems
          </p>

          {/* Urgency Elements */}
          <div className="bg-accent/20 border border-accent rounded-xl p-6 max-w-2xl mx-auto mb-8">
            <p className="text-lg font-semibold text-black">
              ⚡ Only 3 spots available this month. Next availability: 3-4 weeks
            </p>
          </div>

          <a
            href="#book-call"
            className="inline-block bg-accent text-black px-12 py-6 rounded-full font-bold text-xl shadow-2xl hover:shadow-accent/50 transition-all transform hover:scale-105 mb-8"
          >
            Book Your Free Agency Scaling Call Now →
          </a>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto text-left">
            <div className="flex items-start gap-3">
              <span className="text-success text-2xl">✓</span>
              <div>
                <div className="font-bold text-lg mb-1">Free Agency Audit</div>
                <div className="text-sm opacity-80">No commitment required</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-success text-2xl">✓</span>
              <div>
                <div className="font-bold text-lg mb-1">Custom Scaling Plan</div>
                <div className="text-sm opacity-80">Tailored to your agency</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-success text-2xl">✓</span>
              <div>
                <div className="font-bold text-lg mb-1">Proven Systems</div>
                <div className="text-sm opacity-80">200+ agencies scaled</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Guarantee Reminder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-3xl mx-auto text-center border border-white/20"
        >
          <div className="text-4xl font-black mb-4">💯 Our Guarantee</div>
          <p className="text-xl leading-relaxed">
            If you don't add at least <span className="font-black text-success">$20,000 in monthly recurring revenue</span> within 90 days,
            we'll wire you <span className="font-black text-success">$7,500</span> straight to your bank account.
            <br />
            <span className="text-sm opacity-80 mt-4 block">No tricks. No loopholes. Just results.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
