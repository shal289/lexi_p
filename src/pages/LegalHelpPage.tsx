import React, { useState } from 'react';
import { Users, BookOpen, Search } from 'lucide-react';

const LegalHelpPage = () => {
  const [selectedOption, setSelectedOption] = useState<'lawyer' | 'info' | null>(null);
  const [caseDescription, setCaseDescription] = useState('');
  const [relatedCases, setRelatedCases] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleFindLawyer = () => {
    window.location.href = `/booking?description=${encodeURIComponent(caseDescription)}`;
  };

  const handleSuggestCases = () => {
    // Simulating fetching related cases
    setRelatedCases([
      'Case 1: Employment dispute - Wrongful termination',
      'Case 2: Property dispute - Illegal eviction',
      'Case 3: Consumer complaint - Faulty product refund'
    ]);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="card">
          <h1 className="text-3xl font-bold text-primary mb-8">How Can We Help You Today?</h1>

          {!selectedOption ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <button
                onClick={() => setSelectedOption('lawyer')}
                className="p-6 border-2 border-primary rounded-xl hover:bg-primary hover:text-white transition-all duration-300 group"
              >
                <Users className="w-12 h-12 mx-auto mb-4 group-hover:text-white text-primary" />
                <h2 className="text-xl font-semibold mb-2">Find a Lawyer</h2>
                <p className="text-gray-600 group-hover:text-gray-200">
                  Connect with an experienced lawyer who specializes in your type of case
                </p>
              </button>

              <button
                onClick={() => setSelectedOption('info')}
                className="p-6 border-2 border-primary rounded-xl hover:bg-primary hover:text-white transition-all duration-300 group"
              >
                <BookOpen className="w-12 h-12 mx-auto mb-4 group-hover:text-white text-primary" />
                <h2 className="text-xl font-semibold mb-2">Get Legal Information</h2>
                <p className="text-gray-600 group-hover:text-gray-200">
                  Learn about your legal rights and options with our AI-powered legal guide
                </p>
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="caseDescription" className="block text-sm font-medium text-gray-700 mb-2">
                  Please describe your legal matter
                </label>
                <textarea
                  id="caseDescription"
                  rows={6}
                  className="input-field"
                  placeholder="Provide details about your case to help us better assist you..."
                  value={caseDescription}
                  onChange={(e) => setCaseDescription(e.target.value)}
                  required
                />
              </div>

              <div className="flex gap-4">
                <button type="button" onClick={handleFindLawyer} className="btn-primary flex-1">
                  Find a Lawyer
                </button>
                <button type="button" onClick={handleSuggestCases} className="btn-secondary flex-1">
                  Suggest Related Cases
                </button>
              </div>

              {relatedCases.length > 0 && (
                <div className="mt-6 p-4 border rounded-lg bg-gray-100">
                  <h2 className="text-lg font-semibold text-primary mb-3 flex items-center">
                    <Search className="w-5 h-5 mr-2" /> Related Cases
                  </h2>
                  <ul className="list-disc pl-5 text-gray-700">
                    {relatedCases.map((caseItem, index) => (
                      <li key={index}>{caseItem}</li>
                    ))}
                  </ul>
                </div>
              )}

              <button
                type="button"
                onClick={() => setSelectedOption(null)}
                className="btn-secondary w-full mt-4"
              >
                Back
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default LegalHelpPage;
