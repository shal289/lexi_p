import React, { useState } from 'react';
import { User, Star, Calendar, MapPin, DollarSign, Award, Clock } from 'lucide-react';

interface Lawyer {
  id: number;
  name: string;
  specialization: string;
  experience: number;
  rating: number;
  location: string;
  hourlyRate: number;
  image: string;
  expertise: string[];
  availability: string;
}

const LawyerBookingPage = () => {
  const [caseDescription, setCaseDescription] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedLawyer, setSelectedLawyer] = useState<Lawyer | null>(null);
  const [showBookingModal, setShowBookingModal] = useState(false);

  // Mock lawyer data with specializations
  const lawyers: Lawyer[] = [
    {
      id: 1,
      name: "Sarah Anderson",
      specialization: "Corporate Law",
      experience: 12,
      rating: 4.9,
      location: "New York, NY",
      hourlyRate: 300,
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200",
      expertise: ["Mergers & Acquisitions", "Business Formation", "Contract Law"],
      availability: "Available next week"
    },
    {
      id: 2,
      name: "David Martinez",
      specialization: "Intellectual Property",
      experience: 8,
      rating: 4.7,
      location: "San Francisco, CA",
      hourlyRate: 275,
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=200",
      expertise: ["Patents", "Trademarks", "Copyright Law"],
      availability: "Available tomorrow"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuggestions(true);
    // In a real application, we would use AI to analyze the case description
    // and match with the most suitable lawyer based on expertise
    setSelectedLawyer(lawyers[0]);
  };

  const relatedCases: Case[] = [
    {
      id: 1,
      title: "Doe vs XYZ Corp",
      summary: "Landmark case on corporate fraud and misrepresentation.",
      specialization: "Corporate Law"
    },
    {
      id: 2,
      title: "Smith vs Innovation Inc.",
      summary: "Intellectual property rights dispute over patented software.",
      specialization: "Intellectual Property"
    },
    {
      id: 3,
      title: "Brown vs Big Tech",
      summary: "Antitrust case involving a tech giant's monopoly practices.",
      specialization: "Corporate Law"
    }
  ];
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {!showSuggestions ? (
          <div className="card">
            <h1 className="text-3xl font-bold text-primary mb-6">Find the Right Lawyer for Your Case</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="caseDescription" className="block text-sm font-medium text-gray-700 mb-2">
                  Describe your legal matter
                </label>
                <textarea
                  id="caseDescription"
                  rows={6}
                  className="input-field"
                  placeholder="Please provide details about your case to help us match you with the most suitable lawyer..."
                  value={caseDescription}
                  onChange={(e) => setCaseDescription(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn-primary w-full">
                Find Matching Lawyers
              </button>
            </form>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-bold text-primary mb-6">Recommended Lawyer for Your Case</h2>
            {selectedLawyer && (
              <div className="card">
                <div className="flex items-start gap-6">
                  <img
                    src={selectedLawyer.image}
                    alt={selectedLawyer.name}
                    className="w-32 h-32 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-semibold">{selectedLawyer.name}</h3>
                        <p className="text-gray-600">{selectedLawyer.specialization}</p>
                      </div>
                      <div className="flex items-center">
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                        <span className="ml-1 font-semibold">{selectedLawyer.rating}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <div className="flex items-center text-gray-600">
                        <Award className="w-5 h-5 mr-2" />
                        <span>{selectedLawyer.experience} years experience</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-5 h-5 mr-2" />
                        <span>{selectedLawyer.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <DollarSign className="w-5 h-5 mr-2" />
                        <span>${selectedLawyer.hourlyRate}/hour</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="w-5 h-5 mr-2" />
                        <span>{selectedLawyer.availability}</span>
                      </div>
                    </div>

                    <div className="mt-4">
                      <h4 className="font-semibold mb-2">Areas of Expertise:</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedLawyer.expertise.map((item, index) => (
                          <span
                            key={index}
                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 flex gap-4">
                      <button
                        onClick={() => setShowBookingModal(true)}
                        className="btn-primary flex-1"
                      >
                        Schedule Consultation
                      </button>
                      <button
                        onClick={() => setShowSuggestions(false)}
                        className="btn-secondary flex-1"
                      >
                        Back to Search
                      </button>
                    </div>
                  </div>
                </div>
      

               </div>
         
            

            )}

            <h2 className="text-2xl mt-5 font-bold text-primary mb-6">Recommended Similar Caess</h2>

            <div className='card'>
         
            <h2 class="text-blue-600 text-2xl font-semibold">Brown vs Big Tech</h2>
            <p class="text-black">Antitrust case involving a tech giant's monopoly practices.</p>
            </div>
            

          </div>
        )}
      </div>
      

      {/* Booking Modal */}
      {showBookingModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl p-6 max-w-md w-full">
            <h3 className="text-xl font-bold mb-4">Schedule a Consultation</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Preferred Date
                </label>
                <input type="date" className="input-field" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Preferred Time
                </label>
                <select className="input-field">
                  <option>9:00 AM</option>
                  <option>10:00 AM</option>
                  <option>11:00 AM</option>
                  <option>2:00 PM</option>
                  <option>3:00 PM</option>
                  <option>4:00 PM</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Consultation Type
                </label>
                <select className="input-field">
                  <option>Video Call</option>
                  <option>Phone Call</option>
                  <option>In-Person</option>
                </select>
              </div>
              <div className="flex gap-4 mt-6">
                <button type="submit" className="btn-primary flex-1">
                  Confirm Booking
                </button>
                <button
                  type="button"
                  onClick={() => setShowBookingModal(false)}
                  className="btn-secondary flex-1"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
        
      )}
    </div>
  );
};

export default LawyerBookingPage;