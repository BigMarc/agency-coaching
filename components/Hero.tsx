'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-white pt-16 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-black mb-6 leading-tight tracking-tight">
            Implement Our Data-Driven Systems That Will Add{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent-dark to-accent inline-block">
              $20,000-$50,000
            </span>
            <br />
            <span className="text-black">Per Month For Your Social Media Agency</span>
          </h1>

          {/* Subheadline with Offer */}
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-lg sm:text-xl md:text-2xl text-black mb-6 font-bold leading-relaxed">
              GUARANTEED - Stop Struggling With Inconsistent Revenue & Scale Your Agency The Right Way
            </p>
            <div className="inline-flex items-center gap-2 bg-accent/10 px-6 py-3 rounded-full border border-accent/20">
              <span className="text-accent font-bold text-sm uppercase tracking-wider">💰</span>
              <span className="text-black font-semibold">If you don't add at least <span className="text-accent font-black">$20,000</span> in <span className="text-accent font-black">monthly recurring revenue</span> within 90 days, we'll wire you <span className="text-accent font-black">$7,500</span> straight to your bank account. No questions asked.</span>
              <span className="text-accent font-bold text-sm uppercase tracking-wider">💰</span>
            </div>
          </div>

          {/* Video Embed */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-4xl mx-auto mb-10"
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&showinfo=0&modestbranding=1"
                title="Social Media Agency Scaling Systems"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#book-call"
              className="group relative bg-accent text-black px-12 py-6 rounded-2xl font-black text-xl shadow-[0_20px_50px_rgba(255,178,0,0.3)] hover:shadow-[0_25px_60px_rgba(255,178,0,0.5)] transition-all transform hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                Book Your Free Agency Scaling Call
                <span className="group-hover:translate-x-2 transition-transform">→</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent via-accent-dark to-accent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
            <a
              href="#video"
              className="group px-8 py-6 border-2 border-black text-black hover:bg-black hover:text-white font-bold text-lg rounded-2xl transition-all transform hover:scale-105 flex items-center gap-2"
            >
              Watch Our Agency Systems
              <span className="group-hover:translate-y-1 transition-transform">↓</span>
            </a>
          </motion.div>

          {/* Social Proof Icons */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 border-2 border-accent/10 shadow-lg hover:shadow-xl transition-all">
              <div className="text-5xl font-black text-black mb-2">200+</div>
              <div className="text-black font-semibold">Agencies Scaled</div>
              <div className="mt-2 text-xs text-gray-500 uppercase tracking-wider">Trusted by Agency Owners</div>
            </div>
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 border-2 border-accent/10 shadow-lg hover:shadow-xl transition-all">
              <div className="text-5xl font-black text-accent mb-2">$15M+</div>
              <div className="text-black font-semibold">MRR Added</div>
              <div className="mt-2 text-xs text-gray-500 uppercase tracking-wider">Proven Systems</div>
            </div>
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 border-2 border-accent/10 shadow-lg hover:shadow-xl transition-all">
              <div className="text-5xl font-black text-black mb-2">4.9/5</div>
              <div className="text-black font-semibold">Client Rating</div>
              <div className="mt-2 text-xs text-gray-500 uppercase tracking-wider">Top Rated</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
