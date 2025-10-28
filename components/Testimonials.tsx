'use client';

import { motion } from 'framer-motion';

interface Testimonial {
  name: string;
  agency: string;
  role: string;
  result: string;
  quote: string;
  avatar: string;
  before: string;
  after: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Sarah Mitchell',
    agency: 'SocialFlow Agency',
    role: 'Founder & CEO',
    result: 'Added $35K MRR in 60 days',
    quote: 'We went from $8K to $43K MRR in just 60 days. Marc\'s data-driven systems are absolutely game-changing for agency scaling.',
    avatar: 'SM',
    before: '$8K MRR',
    after: '$43K MRR',
  },
  {
    name: 'Jake Thompson',
    agency: 'Digital Growth Co',
    role: 'Managing Partner',
    result: 'Scaled to $50K MRR',
    quote: 'The systems Marc provided helped us scale from $12K to $50K MRR. Our team productivity increased by 300%.',
    avatar: 'JT',
    before: '$12K MRR',
    after: '$50K MRR',
  },
  {
    name: 'Emma Rodriguez',
    agency: 'Media Masters',
    role: 'Founder',
    result: 'Added $28K MRR',
    quote: 'From struggling to find clients to $43K MRR. Marc\'s client acquisition systems are pure gold.',
    avatar: 'ER',
    before: '$15K MRR',
    after: '$43K MRR',
  },
  {
    name: 'Marcus Chen',
    agency: 'ScaleUp Social',
    role: 'CEO',
    result: 'Doubled revenue to $40K MRR',
    quote: 'We doubled our MRR from $20K to $40K in 90 days. The ROI on this investment was incredible.',
    avatar: 'MC',
    before: '$20K MRR',
    after: '$40K MRR',
  },
  {
    name: 'Olivia Martinez',
    agency: 'Agency Accelerator',
    role: 'Founder',
    result: 'Added $32K MRR',
    quote: 'Marc\'s pricing and positioning strategies helped us add $32K MRR. We\'re now charging premium rates.',
    avatar: 'OM',
    before: '$18K MRR',
    after: '$50K MRR',
  },
  {
    name: 'David Park',
    agency: 'Growth Partners',
    role: 'Managing Director',
    result: 'Added $45K MRR',
    quote: 'The team management systems alone were worth the investment. We\'re now running like a well-oiled machine.',
    avatar: 'DP',
    before: '$25K MRR',
    after: '$70K MRR',
  },
  {
    name: 'Sophie Anderson',
    agency: 'Social Media Pro',
    role: 'Founder',
    result: 'Added $22K MRR',
    quote: 'From inconsistent revenue to steady $37K MRR. Marc\'s systems gave us the predictability we needed.',
    avatar: 'SA',
    before: '$15K MRR',
    after: '$37K MRR',
  },
  {
    name: 'Ryan Foster',
    agency: 'Agency Elite',
    role: 'CEO',
    result: 'Added $38K MRR',
    quote: 'The client retention systems helped us maintain 95% retention while scaling. Revenue is now predictable.',
    avatar: 'RF',
    before: '$22K MRR',
    after: '$60K MRR',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">
            Real Results From Real Agency Owners
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how our data-driven systems are transforming social media agencies across all niches and sizes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-dark rounded-full flex items-center justify-center text-black font-bold text-lg">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-bold text-black">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.agency}</div>
                  <div className="text-xs text-accent font-semibold mt-1">{testimonial.role}</div>
                </div>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
              <div className="bg-accent/10 border border-accent/20 rounded-lg p-3 mb-3">
                <div className="text-sm text-accent font-semibold">Result:</div>
                <div className="text-lg font-black text-black">{testimonial.result}</div>
              </div>
              <div className="flex justify-between text-sm">
                <div className="text-gray-500">Before: <span className="font-semibold text-gray-700">{testimonial.before}</span></div>
                <div className="text-accent">After: <span className="font-bold text-black">{testimonial.after}</span></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Testimonials Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-3xl font-black text-black mb-8">Watch Agency Owner Testimonials</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[1, 2].map((i) => (
              <div key={i} className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl flex items-center justify-center shadow-lg">
                <div className="text-center">
                  <div className="text-6xl mb-4 text-accent">▶</div>
                  <div className="text-gray-600 font-semibold">Agency Owner Testimonial {i}</div>
                  <div className="text-sm text-gray-500 mt-2">Real results, real agencies</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
