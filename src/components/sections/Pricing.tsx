import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    price: '$0',
    description: 'Perfect for trying out ExcelEasy',
    features: [
      '10 generations per month',
      'Basic Excel file generation',
      'Basic formula generation',
      'Basic VBA macro generation',
      'Community support'
    ]
  },
  {
    name: 'Pro Monthly',
    price: '$5.99',
    description: 'For regular Excel users',
    features: [
      'Unlimited Excel file generation',
      'Unlimited formula generation',
      'Unlimited VBA macro generation',
      'Priority support',
      'Early access to new features',
      'Direct developer feedback'
    ]
  },
  {
    name: 'Pro Yearly',
    price: '$50.99',
    description: 'Best value for committed users',
    features: [
      'Everything in Pro Monthly',
      '29% discount vs monthly',
      'Priority support',
      'Early access to new features',
      'Direct developer feedback'
    ],
    originalPrice: '$71.88'
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600">
            Choose the plan that's right for you
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow
                ${index === 1 ? 'border-2 border-blue-500 relative' : ''}`}
            >
              {index === 1 && (
                <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-600">{plan.price !== '$0' ? '/month' : ''}</span>
                {plan.originalPrice && (
                  <div className="text-sm text-gray-500 mt-1">
                    <span className="line-through">{plan.originalPrice}</span>
                    <span className="text-green-600 ml-2">Save 29%</span>
                  </div>
                )}
              </div>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-full transition-colors ${
                index === 1 
                  ? 'bg-blue-600 text-white hover:bg-blue-700' 
                  : 'border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600'
              }`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;