'use client';

import { useState } from 'react';
import Image from 'next/image';

export const dynamic = 'force-dynamic';

interface QuizAnswer {
  question: string;
  answer: string;
}

export default function QuizV2() {
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
      question: "Hast du Interesse an einem zweiten Standbein?",
      options: [
        { text: "Ja, definitiv!", value: "ja-definitiv", image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop" },
        { text: "Vielleicht, ich bin unsicher", value: "vielleicht", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop" },
        { text: "Nein, nicht wirklich", value: "nein", image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=300&fit=crop" }
      ]
    },
    {
      id: 2,
      question: "Wie viel willst du pro Monat nebenbei verdienen?",
      options: [
        { text: "€500 - €1.500", value: "500-1500", image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=300&fit=crop" },
        { text: "€1.500 - €3.000", value: "1500-3000", image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=300&fit=crop" },
        { text: "€3.000 - €5.000", value: "3000-5000", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop" },
        { text: "€5.000+", value: "5000-plus", image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=300&fit=crop" }
      ]
    },
    {
      id: 3,
      question: "Wie alt bist du?",
      options: [
        { text: "18-25 Jahre", value: "18-25", image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop" },
        { text: "26-35 Jahre", value: "26-35", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop" },
        { text: "36-45 Jahre", value: "36-45", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop" },
        { text: "46+ Jahre", value: "46-plus", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop" }
      ]
    },
    {
      id: 4,
      question: "Bist du fähig einer Schritt für Schritt Anleitung zu folgen?",
      options: [
        { text: "Ja, ich folge gerne Anleitungen", value: "ja-gerne", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop" },
        { text: "Manchmal, wenn sie klar sind", value: "manchmal", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop" },
        { text: "Ich bin eher selbstständig", value: "selbststaendig", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=300&fit=crop" }
      ]
    },
    {
      id: 5,
      question: "Wie sieht deine berufliche Lage aus?",
      options: [
        { text: "Angestellt, Vollzeit", value: "angestellt-vollzeit", image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop" },
        { text: "Angestellt, Teilzeit", value: "angestellt-teilzeit", image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=300&fit=crop" },
        { text: "Selbstständig", value: "selbststaendig", image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=300&fit=crop" },
        { text: "Arbeitssuchend", value: "arbeitssuchend", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop" }
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
    alert('Vielen Dank! Wir senden Ihnen die Details für den kostenlosen Kurs in Kürze zu.');
  };

  const progress = ((currentStep + 1) / (questions.length + 1)) * 100;

  if (currentStep < questions.length) {
    const currentQuestion = questions[currentStep];
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
        <div className="container mx-auto px-4 py-8">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="bg-white rounded-full h-2 w-full">
              <div 
                className="bg-gradient-to-r from-green-500 to-emerald-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-center text-sm text-gray-600 mt-2">
              Frage {currentStep + 1} von {questions.length}
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
                  className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-transparent hover:border-green-200"
                >
                  <div className="relative h-48 mb-4 rounded-xl overflow-hidden">
                    <Image
                      src={option.image}
                      alt={option.text}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
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
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                🎉 Perfekt! Du bist fast da
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Erhalte sofortigen Zugang zu unserem kostenlosen Kurs: "Zweites Standbein aufbauen" 
                <br />Wert: €2.997 - Heute GRATIS für dich
              </p>
            </div>

            <form onSubmit={handleLeadSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Vollständiger Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={leadData.name}
                  onChange={(e) => setLeadData({...leadData, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg"
                  placeholder="Gib deinen vollständigen Namen ein"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  E-Mail-Adresse *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={leadData.email}
                  onChange={(e) => setLeadData({...leadData, email: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg"
                  placeholder="Gib deine E-Mail-Adresse ein"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Telefonnummer *
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={leadData.phone}
                  onChange={(e) => setLeadData({...leadData, phone: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg"
                  placeholder="Gib deine Telefonnummer ein"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold py-4 px-8 rounded-xl text-xl hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Kostenlosen Kurs jetzt holen 🚀
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500">
                🔒 Deine Daten sind 100% sicher und werden niemals weitergegeben
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
