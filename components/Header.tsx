'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [showIntentPopup, setShowIntentPopup] = useState(false);
  const [showDelayPopup, setShowDelayPopup] = useState(false);

  useEffect(() => {
    // 15-second delay popup
    const delayTimer = setTimeout(() => {
      setShowDelayPopup(true);
    }, 15000);

    return () => clearTimeout(delayTimer);
  }, []);

  const handleSearchHover = () => {
    setShowIntentPopup(true);
  };

  const handleSearchLeave = () => {
    setShowIntentPopup(false);
  };

  const closePopup = () => {
    setShowIntentPopup(false);
    setShowDelayPopup(false);
  };

  const scrollToBooking = () => {
    const element = document.getElementById('book-call');
    element?.scrollIntoView({ behavior: 'smooth' });
    closePopup();
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              Monetize Pro
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#how-it-works" className="text-gray-700 hover:text-gray-900 transition">
                How It Works
              </a>
              <a href="#testimonials" className="text-gray-700 hover:text-gray-900 transition">
                Success Stories
              </a>
              <a href="#about" className="text-gray-700 hover:text-gray-900 transition">
                About
              </a>
              <div className="relative group">
                <button className="text-gray-700 hover:text-gray-900 transition flex items-center">
                  Quiz Funnels
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    <Link href="/v1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition">
                      Quiz V1 - Agency Revenue
                    </Link>
                    <Link href="/v2" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition">
                      Quiz V2 - Second Income
                    </Link>
                    <Link href="/v3" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition">
                      Quiz V3 - Agency Mastery
                    </Link>
                  </div>
                </div>
              </div>
              <div 
                className="relative"
                onMouseEnter={handleSearchHover}
                onMouseLeave={handleSearchLeave}
              >
                            <a 
              href="#book-call" 
              className="bg-accent text-black px-6 py-2 rounded-full font-semibold hover:bg-accent-dark transition"
            >
              Book Free Call
            </a>
                {/* Intent Escape Popup */}
                {showIntentPopup && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-200 p-6 z-50">
                    <div className="text-center">
                      <div className="text-2xl mb-3">🎯</div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        Ready to Make $20K+ Per Launch?
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        Book your free strategy call and discover how to monetize your audience
                      </p>
                      <button
                        onClick={scrollToBooking}
                        className="w-full bg-accent text-black px-6 py-3 rounded-full font-bold hover:shadow-lg transition"
                      >
                        Book Free Call →
                      </button>
                      <button
                        onClick={closePopup}
                        className="text-gray-400 text-sm mt-2 hover:text-gray-600"
                      >
                        Maybe Later
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </nav>
            <button 
              onClick={() => {
                const element = document.getElementById('book-call');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="md:hidden bg-accent text-black px-4 py-2 rounded-full font-semibold"
            >
              Book Call
            </button>
          </div>
        </div>
      </header>

      {/* 15-Second Delay Popup */}
      {showDelayPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center">
            <div className="text-4xl mb-4">⏰</div>
            <h2 className="text-2xl font-black text-gray-900 mb-4">
              Don't Miss Out!
            </h2>
            <p className="text-gray-600 mb-6">
              You've been browsing for a while. Ready to discover how to make $20K+ per launch?
            </p>
            <div className="space-y-3">
              <button
                onClick={scrollToBooking}
                className="w-full bg-accent text-black px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transition"
              >
                Book Free Strategy Call →
              </button>
              <button
                onClick={closePopup}
                className="w-full text-gray-500 hover:text-gray-700 transition"
              >
                Continue Browsing
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-4">
              Limited spots available this month
            </p>
          </div>
        </div>
      )}
    </>
  );
}
