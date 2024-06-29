import React from 'react';

const QuizLoader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <svg className="animate-bounce h-24 w-24 text-purple-500 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
      <div className="text-white text-2xl font-bold mb-4">Please Wait....</div>
      <div className="flex space-x-2">
        <div className="w-4 h-4 bg-purple-500 rounded-full animate-bounce"></div>
        <div className="w-4 h-4 bg-purple-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
        <div className="w-4 h-4 bg-purple-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
      </div>
    </div>
  );
};

export default QuizLoader;
