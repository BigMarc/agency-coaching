'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function QuizFunnels() {
  const quizFunnels = [
    {
      id: 'v1',
      title: 'Agency Revenue Quiz',
      description: 'Discover your agency\'s revenue potential and get a personalized scaling blueprint',
      questions: '3 Questions',
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'from-blue-50 to-indigo-100',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop',
      link: '/v1'
    },
    {
      id: 'v2',
      title: 'Second Income Quiz',
      description: 'Find out how to build a profitable second income stream (German)',
      questions: '5 Questions',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'from-green-50 to-emerald-100',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      link: '/v2'
    },
    {
      id: 'v3',
      title: 'Agency Mastery Quiz',
      description: 'Unlock the secrets to agency mastery and exponential growth',
      questions: '3 Questions',
      color: 'from-purple-500 to-pink-600',
      bgColor: 'from-purple-50 to-pink-100',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&h=400&fit=crop',
      link: '/v3'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Take Our Free Agency Quizzes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get personalized insights and free course access based on your specific situation. 
            Each quiz takes less than 2 minutes and provides immediate value.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {quizFunnels.map((quiz, index) => (
            <motion.div
              key={quiz.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link href={quiz.link}>
                <div className={`bg-gradient-to-br ${quiz.bgColor} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-white/20 h-full`}>
                  {/* Image */}
                  <div className="relative h-48 mb-6 rounded-2xl overflow-hidden">
                    <Image
                      src={quiz.image}
                      alt={quiz.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                    <div className="absolute top-4 right-4">
                      <span className={`bg-gradient-to-r ${quiz.color} text-white px-3 py-1 rounded-full text-sm font-bold`}>
                        {quiz.questions}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
                      {quiz.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {quiz.description}
                    </p>
                    
                    {/* CTA Button */}
                    <div className="pt-4">
                      <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${quiz.color} text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all duration-300 transform group-hover:scale-105`}>
                        Start Quiz
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-accent/10 to-accent-dark/10 rounded-2xl p-8 border-2 border-accent/20">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              🎯 Not Sure Which Quiz to Take?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              All quizzes are designed to provide value regardless of your current situation. 
              Start with any quiz that resonates with you - you can always take the others later!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#book-call"
                className="bg-accent text-black px-8 py-4 rounded-xl font-bold hover:shadow-lg transition-all transform hover:scale-105"
              >
                Book Free Strategy Call Instead
              </a>
              <a
                href="#testimonials"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all"
              >
                Read Success Stories
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
