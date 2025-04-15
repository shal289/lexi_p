import React from 'react';
import { MessageSquare, FileText, Users, Shield } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:w-2/3">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI-Powered Legal Solutions for Everyone
            </h1>
            <p className="text-xl mb-8">
              Get instant legal assistance, connect with experienced lawyers, and generate legal documents with our advanced AI platform.
            </p>
            <div className="space-x-4">
              <a href="/booking" className="btn-secondary">Find a Lawyer</a>
            </div>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 hidden lg:block">
          <img
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600"
            alt="Legal professionals"
            className="h-96 object-cover rounded-tl-3xl opacity-20"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card text-center">
              <MessageSquare className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">AI Legal Chat</h3>
              <p className="text-gray-600">Get instant answers to your legal questions from our AI assistant.</p>
            </div>
            <div className="card text-center">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Lawyers</h3>
              <p className="text-gray-600">Connect with experienced lawyers for personalized consultation.</p>
            </div>
            <div className="card text-center">
              <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Document Generator</h3>
              <p className="text-gray-600">Create legal documents instantly with our AI-powered tool.</p>
            </div>
            <div className="card text-center">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Dispute Resolution</h3>
              <p className="text-gray-600">Resolve disputes efficiently with our online platform.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Small Business Owner",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150",
                quote: "LegalAI helped me generate all the necessary documents for my business in minutes. Incredible service!"
              },
              {
                name: "Michael Chen",
                role: "Startup Founder",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150",
                quote: "The AI chat feature saved me countless hours of research. It's like having a legal expert available 24/7."
              },
              {
                name: "Emily Rodriguez",
                role: "Real Estate Agent",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150",
                quote: "The document generator is a game-changer. It's fast, accurate, and incredibly user-friendly."
              }
            ].map((testimonial, index) => (
              <div key={index} className="card">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Join thousands of satisfied clients who trust LegalAI for their legal needs.</p>
          <a href="/pricing" className="btn-secondary">View Pricing Plans</a>
        </div>
      </section>
    </div>
  );
};

export default HomePage;