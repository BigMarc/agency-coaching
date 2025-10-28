'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ConversionPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [showChatButton, setShowChatButton] = useState(false);
  const [timeLeft, setTimeLeft] = useState(180); // 3 minutes
  const [selectedDate, setSelectedDate] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScheduler, setShowScheduler] = useState(false);

  // Generate next 5 weekdays
  const generateWeekDays = () => {
    const days = [];
    const today = new Date();
    let count = 0;
    let currentDay = today;

    while (count < 5) {
      currentDay = new Date(today);
      currentDay.setDate(today.getDate() + count);
      
      const dayOfWeek = currentDay.getDay();
      if (dayOfWeek > 0 && dayOfWeek < 6) { // Monday-Friday
        days.push({
          date: currentDay.toDateString(),
          day: currentDay.toLocaleDateString('en-US', { weekday: 'short' }),
          number: currentDay.getDate(),
          fullDate: currentDay.toISOString().split('T')[0]
        });
        count++;
      } else if (count === 0) {
        // If today is weekend, start from next Monday
        const daysUntilMonday = (8 - dayOfWeek) % 7;
        today.setDate(today.getDate() + daysUntilMonday);
      }
    }
    return days;
  };

  const weekDays = generateWeekDays();

  useEffect(() => {
    // Track scroll progress
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);

      // Trigger at 70% scroll
      if (progress >= 70 && !isOpen && !showChatButton) {
        setIsOpen(true);
        // Track GTM event
        if (typeof window !== 'undefined' && (window as any).dataLayer) {
          (window as any).dataLayer.push({
            event: 'popup_triggered',
            trigger: 'scroll_70_percent'
          });
        }
      }
    };

    // Timer for 20 seconds
    const timeoutTimer = setTimeout(() => {
      if (!isOpen && !showChatButton) {
        setIsOpen(true);
        // Track GTM event
        if (typeof window !== 'undefined' && (window as any).dataLayer) {
          (window as any).dataLayer.push({
            event: 'popup_triggered',
            trigger: 'time_20_seconds'
          });
        }
      }
    }, 20000);

    // Countdown timer
    const countdown = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(countdown);
          setIsOpen(false);
          setShowChatButton(true);
          return 180;
        }
        return prev - 1;
      });
    }, 1000);

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timeoutTimer);
      clearInterval(countdown);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen, showChatButton]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleScheduleClick = () => {
    setShowScheduler(true);
    // Track GTM event
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'audit_call_booked',
        button: 'schedule_audit'
      });
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setShowChatButton(true);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <AnimatePresence>
        {showChatButton && !isOpen && !showScheduler && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            onClick={() => {
              setIsOpen(true);
              setShowChatButton(false);
              setTimeLeft(180);
            }}
            className="fixed bottom-6 right-6 bg-accent text-black p-4 rounded-full shadow-2xl z-50 hover:bg-accent-dark transition-all flex items-center gap-2 font-semibold"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Free Audit
          </motion.button>
        )}
      </AnimatePresence>

      {/* Main Popup */}
      <AnimatePresence>
        {isOpen && !showScheduler && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white rounded-2xl shadow-2xl max-w-md w-full relative overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition z-10"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Top Profile Section */}
              <div className="bg-gradient-to-r from-primary to-primary-dark p-6 text-white">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center font-bold text-2xl text-black border-4 border-white shadow-lg">
                    MS
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Marc Schultheiß</h3>
                    <p className="text-white/90 text-sm">CEO LEADGEM</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-2xl font-bold text-black mb-3">
                  FREE 1-1 Strategy Call
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Get a personalized 1-on-1 call to review your funnel and uncover the 3 biggest revenue opportunities you're missing.
                </p>

                {/* Urgency Bar */}
                <div className="bg-accent/10 border border-accent/20 rounded-lg p-3 mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-accent">Only few slots left</span>
                    <span className="text-sm font-bold text-accent">⏱ {formatTime(timeLeft)}</span>
                  </div>
                  <div className="w-full bg-accent/20 rounded-full h-2">
                    <motion.div
                      className="bg-accent h-2 rounded-full"
                      initial={{ width: '100%' }}
                      animate={{ width: `${(timeLeft / 180) * 100}%` }}
                      transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                    />
                  </div>
                </div>

                {/* Date Selector */}
                <div className="mb-6">
                  <p className="text-sm font-semibold text-gray-700 mb-3">Available Times This Week:</p>
                  <div className="grid grid-cols-5 gap-2">
                    {weekDays.map((day, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedDate(day.fullDate)}
                        className={`p-2 rounded-lg text-center transition-all ${
                          selectedDate === day.fullDate
                            ? 'bg-accent text-black shadow-lg scale-105'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        <div className="text-xs font-semibold">{day.day}</div>
                        <div className="text-lg font-bold">{day.number}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={handleScheduleClick}
                  className="w-full bg-accent text-black py-4 rounded-xl font-bold text-lg hover:bg-accent-dark shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                >
                  Schedule Your Audit
                </button>

                {/* Footer */}
                <p className="text-center text-gray-400 text-xs mt-4">
                  Powered by Bunny Agency
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Calendly Scheduler Modal */}
      <AnimatePresence>
        {showScheduler && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full relative overflow-hidden"
            >
              <button
                onClick={() => setShowScheduler(false)}
                className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-6 pb-4 border-b">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-black font-bold text-lg">
                    MS
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-black">Marc Schultheiß</h3>
                    <p className="text-sm text-gray-600">CEO LEADGEM</p>
                  </div>
                </div>
                
                {/* Google Calendar Appointment Scheduling */}
                <div style={{ height: '500px' }}>
                  <iframe
                    src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ18BxmS9dMh9rizjXGwfl3TznBL3Xhb8bNikwOMlh5xszZ_x2Lf_OfalQjkxwDS4NuKo4SHRXs6?gv=true"
                    style={{ border: '0', width: '100%', height: '100%' }}
                    frameBorder="0"
                    title="Book Your Audit Call"
                  ></iframe>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
