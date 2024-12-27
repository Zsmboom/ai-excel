import React from 'react';
import { Calculator, FileSpreadsheet, GraduationCap } from 'lucide-react';

const testimonials = [
  {
    quote: "As a financial analyst, I deal with complex Excel formulas daily. ExcelEasy's AI function generator has become my go-to tool for creating and troubleshooting formulas. The VBA macro generation saves me hours of coding time.",
    author: "Sarah Chen",
    role: "Senior Financial Analyst",
    icon: <Calculator className="h-6 w-6 text-blue-600" />,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80"
  },
  {
    quote: "Managing sales data used to be a time-consuming task. Now I just describe what I need, and ExcelEasy creates perfectly formatted spreadsheets instantly. It's revolutionized how our sales team handles reporting.",
    author: "Michael Rodriguez",
    role: "Sales Manager",
    icon: <FileSpreadsheet className="h-6 w-6 text-blue-600" />,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80"
  },
  {
    quote: "As a student, Excel functions were always challenging. ExcelEasy helped me understand complex formulas with clear explanations and examples. It's like having a personal Excel tutor available 24/7.",
    author: "Emily Zhang",
    role: "Business Student",
    icon: <GraduationCap className="h-6 w-6 text-blue-600" />,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100&q=80"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Loved by Excel Users
          </h2>
          <p className="text-xl text-gray-600">
            See how ExcelEasy helps professionals and students work smarter
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="mb-6">
                {testimonial.icon}
              </div>
              <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;