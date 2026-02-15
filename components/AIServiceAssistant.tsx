
import React, { useState, useRef, useEffect } from 'react';
import { getMaintenanceAdvice } from '../services/geminiService';
import { ChatMessage } from '../types';
import { useSettings } from '../context/SettingsContext';

const AIServiceAssistant: React.FC = () => {
  const { lang, t } = useSettings();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMessages([{ role: 'assistant', content: t.ai.welcome }]);
  }, [lang, t.ai.welcome]);

  // Improved auto-scroll logic
  useEffect(() => {
    if (scrollRef.current) {
      const scrollContainer = scrollRef.current;
      // Using a small timeout to ensure the DOM has finished painting the new message
      const scrollTimeout = setTimeout(() => {
        scrollContainer.scrollTo({
          top: scrollContainer.scrollHeight,
          behavior: 'smooth'
        });
      }, 100);
      return () => clearTimeout(scrollTimeout);
    }
  }, [messages, isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await getMaintenanceAdvice(userMessage, lang);
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: lang === 'ar' ? "واجهت مشكلة في الاتصال. يرجى المحاولة لاحقاً." : "I'm having trouble connecting to the network. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-slate-800 dark:bg-slate-900 rounded-2xl flex flex-col h-[500px] border border-slate-700 overflow-hidden shadow-2xl">
      <div className="p-4 border-b border-slate-700 bg-slate-800/50 flex items-center justify-between rtl:flex-row-reverse">
        <div className="flex items-center rtl:space-x-reverse">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3 rtl:mr-0 rtl:ml-3 shadow-lg shadow-blue-500/20">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
          </div>
          <div className="text-start">
            <p className="text-sm font-bold text-white">{t.ai.assistantName}</p>
            <div className="flex items-center rtl:flex-row-reverse">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 rtl:mr-0 rtl:ml-2 animate-pulse"></span>
              <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">{t.ai.status}</span>
            </div>
          </div>
        </div>
      </div>

      {/* 
        Removed 'scrollbar-hide' to allow manual scrolling. 
        Added custom scrollbar styling for a 'Pro' look.
      */}
      <div 
        ref={scrollRef} 
        className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-900/30 custom-scrollbar"
      >
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-4 rounded-2xl text-sm text-start shadow-sm leading-relaxed ${
              msg.role === 'user' 
                ? 'bg-blue-600 text-white rounded-tr-none' 
                : 'bg-slate-700 text-slate-200 rounded-tl-none border border-slate-600'
            }`}>
              <div className="whitespace-pre-wrap">{msg.content}</div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-slate-700 p-3 rounded-2xl rounded-tl-none border border-slate-600">
              <div className="flex space-x-1 rtl:space-x-reverse">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce animation-delay-200"></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce animation-delay-400"></div>
              </div>
            </div>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="p-4 bg-slate-800 dark:bg-slate-900 border-t border-slate-700">
        <div className="relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={t.ai.placeholder}
            className="w-full bg-slate-900 border border-slate-700 rounded-xl py-3 px-4 pr-12 rtl:pr-4 rtl:pl-12 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm"
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className={`absolute ${lang === 'ar' ? 'left-2' : 'right-2'} top-2 p-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-lg shadow-blue-500/20`}
          >
            <svg className={`w-5 h-5 ${lang === 'ar' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </button>
        </div>
      </form>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(15, 23, 42, 0.1);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(51, 65, 85, 0.5);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(59, 130, 246, 0.5);
        }
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-400 { animation-delay: 0.4s; }
      `}</style>
    </div>
  );
};

export default AIServiceAssistant;
