'use client';

import { useState } from 'react';
import Image from 'next/image';

interface QuizAnswer {
  question: string;
  answer: string;
}

export default function QuizV3() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [leadData, setLeadData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const questions = [
    {
      id: 1,
      question: "What's your biggest pain point with your current agency?",
      options: [
        { text: "Finding consistent clients", value: "finding-clients", image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop" },
        { text: "Managing team and operations", value: "team-management", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop" },
        { text: "Increasing profit margins", value: "profit-margins", image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=300&fit=crop" },
        { text: "Scaling without burning out", value: "scaling-burnout", image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop" }
      ]
    },
    {
      id: 2,
      question: "How long have you been running your agency?",
      options: [
        { text: "Less than 6 months", value: "less-6-months", image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=300&fit=crop" },
        { text: "6 months - 2 years", value: "6-months-2-years", image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=300&fit=crop" },
        { text: "2-5 years", value: "2-5-years", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop" },
        { text: "5+ years", value: "5-plus-years", image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=300&fit=crop" }
      ]
    },
    {
      id: 3,
      question: "What's your goal for the next 12 months?",
      options: [
        { text: "Hit $10K+ monthly revenue", value: "10k-monthly", image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop" },
        { text: "Build a team of 5+ people", value: "build-team", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop" },
        { text: "Work less, earn more", value: "work-less-earn-more", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop" },
        { text: "Exit or sell the agency", value: "exit-agency", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop" }
      ]
    }
  ];

  const handleAnswer = (question: string, answer: string) => {
    setAnswers([...answers, { question, answer }]);
    setCurrentStep(currentStep + 1);
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Lead data:', { answers, leadData });
    alert('Thank you! We\'ll send you the free course details shortly.');
  };

  const progress = ((currentStep + 1) / (questions.length + 1)) * 100;

  if (currentStep < questions.length) {
    const currentQuestion = questions[currentStep];
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
        <div className="container mx-auto px-4 py-8">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="bg-white rounded-full h-2 w-full">
              <div 
                className="bg-gradient-to-r from-purple-500 to-pink-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-center text-sm text-gray-600 mt-2">
              Question {currentStep + 1} of {questions.length}
            </p>
          </div>

          {/* Question */}
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
              {currentQuestion.question}
            </h1>

            {/* Answer Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(currentQuestion.question, option.value)}
                  className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-transparent hover:border-purple-200"
                >
                  <div className="relative h-48 mb-4 rounded-xl overflow-hidden">
                    <Image
                      src={option.image}
                      alt={option.text}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                    {option.text}
                  </h3>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Lead Capture Form
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                🎉 Excellent! You're Almost There
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Get instant access to our free course: "Agency Mastery Blueprint" 
                <br />Worth $3,997 - Yours FREE Today
              </p>
            </div>

            <form onSubmit={handleLeadSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={leadData.name}
                  onChange={(e) => setLeadData({...leadData, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={leadData.email}
                  onChange={(e) => setLeadData({...leadData, email: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={leadData.phone}
                  onChange={(e) => setLeadData({...leadData, phone: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
                  placeholder="Enter your phone number"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 px-8 rounded-xl text-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get My Free Course Now 🚀
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500">
                🔒 Your information is 100% secure and will never be shared
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
