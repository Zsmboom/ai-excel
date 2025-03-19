import React, { useState } from 'react';
import { MessageCircle, X, ThumbsUp, ThumbsDown } from 'lucide-react';

const FeedbackWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [feedbackType, setFeedbackType] = useState<'positive' | 'negative' | null>(null);
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Logic for submitting feedback can be added here
    console.log({
      feedbackType,
      message,
      email
    });
    
    // Reset form and show thank you message
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsOpen(false);
      setFeedbackType(null);
      setMessage('');
      setEmail('');
    }, 3000);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Feedback button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        >
          <MessageCircle className="h-5 w-5 mr-2" />
          <span>Feedback</span>
        </button>
      )}

      {/* Feedback dialog */}
      {isOpen && (
        <div className="bg-white rounded-lg shadow-xl w-80 overflow-hidden">
          <div className="bg-blue-600 text-white px-4 py-3 flex justify-between items-center">
            <h3 className="font-medium">Your Feedback Matters</h3>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="p-4">
            {!submitted ? (
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <p className="text-sm text-gray-700 mb-2">How do you feel about our product?</p>
                  <div className="flex space-x-4">
                    <button
                      type="button"
                      onClick={() => setFeedbackType('positive')}
                      className={`flex flex-col items-center p-2 rounded border ${
                        feedbackType === 'positive' 
                          ? 'border-green-500 bg-green-50' 
                          : 'border-gray-200 hover:bg-gray-50'
                      }`}
                    >
                      <ThumbsUp className={`h-6 w-6 ${feedbackType === 'positive' ? 'text-green-500' : 'text-gray-400'}`} />
                      <span className="text-sm mt-1">Satisfied</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setFeedbackType('negative')}
                      className={`flex flex-col items-center p-2 rounded border ${
                        feedbackType === 'negative' 
                          ? 'border-red-500 bg-red-50' 
                          : 'border-gray-200 hover:bg-gray-50'
                      }`}
                    >
                      <ThumbsDown className={`h-6 w-6 ${feedbackType === 'negative' ? 'text-red-500' : 'text-gray-400'}`} />
                      <span className="text-sm mt-1">Not Satisfied</span>
                    </button>
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="feedback-message" className="block text-sm text-gray-700 mb-1">
                    Your Comments or Suggestions
                  </label>
                  <textarea
                    id="feedback-message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    rows={3}
                    placeholder="Tell us what you think..."
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="feedback-email" className="block text-sm text-gray-700 mb-1">
                    Your Email (Optional)
                  </label>
                  <input
                    id="feedback-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="Your email address"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
                  disabled={!feedbackType || !message}
                >
                  Submit Feedback
                </button>
              </form>
            ) : (
              <div className="text-center py-6">
                <div className="text-green-500 mb-2">
                  <svg className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-lg font-medium text-gray-900 mb-1">Thank you for your feedback!</h4>
                <p className="text-gray-600">Your opinion is important to us.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default FeedbackWidget; 