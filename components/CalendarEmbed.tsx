'use client';

import { motion } from 'framer-motion';

export default function CalendarEmbed() {
  return (
    <section id="book-call" className="py-20 bg-gradient-to-br from-primary via-primary-dark to-primary text-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 px-6 py-2 rounded-full mb-6 backdrop-blur-sm border border-white/20">
            <span className="text-accent font-bold">⚡</span>
            <span className="text-sm font-semibold uppercase tracking-wider">Limited Spots Available</span>
            <span className="text-accent font-bold">⚡</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight">
            Book Your Free Agency Scaling Session
          </h2>
          <p className="text-xl sm:text-2xl max-w-3xl mx-auto opacity-95 font-medium">
            Discover exactly how to add $20K-$50K monthly revenue to your social media agency in a 45-minute strategy call
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-accent/20"
        >
          <div style={{ height: '600px' }}>
            {/* Google Calendar Appointment Scheduling */}
            <iframe
              src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ18BxmS9dMh9rizjXGwfl3TznBL3Xhb8bNikwOMlh5xszZ_x2Lf_OfalQjkxwDS4NuKo4SHRXs6?gv=true"
              style={{ border: '0', width: '100%', height: '100%' }}
              frameBorder="0"
              title="Book Your Strategy Call"
            ></iframe>
          </div>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
            <div className="text-4xl font-black mb-2 text-accent">45 Min</div>
            <div className="text-lg font-semibold mb-1">Agency Audit</div>
            <div className="text-sm opacity-80">Get personalized scaling plan</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
            <div className="text-4xl font-black mb-2 text-accent">100% Free</div>
            <div className="text-lg font-semibold mb-1">No Commitment</div>
            <div className="text-sm opacity-80">No credit card required</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
            <div className="text-4xl font-black mb-2 text-accent">Custom Plan</div>
            <div className="text-lg font-semibold mb-1">Agency-Specific</div>
            <div className="text-sm opacity-80">Data-driven systems</div>
          </div>
        </div>
      </div>
    </section>
  );
}
