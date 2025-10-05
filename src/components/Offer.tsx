
import React from "react";

const Offer = () => {
  return <section id="details" className="w-full bg-black py-12">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
            Services & Programs
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Empowering Professionals Through Comprehensive HR Training and Community Engagement
          </p>
        </div>

        {/* Program Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-5xl mx-auto">
          {/* Leadership Launchpad */}
          <div className="bg-gray-900 border border-red-500/30 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-red-500/60">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Leadership Launchpad</h3>
              <p className="text-sm text-red-500 uppercase tracking-wide font-medium mb-2">8–12 hours</p>
            </div>

            <div className="mb-6">
              <h4 className="text-sm font-semibold text-white mb-3">Outcomes:</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Confidence, communication, decision-making</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Feedback fluency and delegation skills</span>
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="text-sm font-semibold text-white mb-3">Includes:</h4>
              <p className="text-gray-300 text-sm">
                Workbook, facilitation deck, manager guide
              </p>
            </div>

            <div className="border-t border-gray-700 pt-4">
              <p className="text-sm text-gray-400">
                Formats: Onsite / Virtual • Cohort size: 15–30
              </p>
            </div>
          </div>

          {/* HR Essentials */}
          <div className="bg-gray-900 border border-red-500/30 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-red-500/60">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">HR Essentials for New Practitioners</h3>
              <p className="text-sm text-red-500 uppercase tracking-wide font-medium mb-2">6–10 hours</p>
            </div>

            <div className="mb-6">
              <h4 className="text-sm font-semibold text-white mb-3">Outcomes:</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Hiring basics, onboarding, performance conversations</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Compliance awareness</span>
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="text-sm font-semibold text-white mb-3">Includes:</h4>
              <p className="text-gray-300 text-sm">
                Templates (JD, interview guide, PIP), checklists
              </p>
            </div>

            <div className="border-t border-gray-700 pt-4">
              <p className="text-sm text-gray-400">
                Formats: Onsite / Virtual
              </p>
            </div>
          </div>

          {/* Workplace Readiness */}
          <div className="bg-gray-900 border border-red-500/30 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-red-500/60">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Workplace Readiness for Graduates</h3>
              <p className="text-sm text-red-500 uppercase tracking-wide font-medium mb-2">4–6 hours</p>
            </div>

            <div className="mb-6">
              <h4 className="text-sm font-semibold text-white mb-3">Outcomes:</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Professionalism, teamwork, time management</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Problem-solving skills</span>
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="text-sm font-semibold text-white mb-3">Includes:</h4>
              <p className="text-gray-300 text-sm">
                Self-assessment, practice scenarios
              </p>
            </div>

            <div className="border-t border-gray-700 pt-4">
              <p className="text-sm text-gray-400">
                Perfect for fresh graduates
              </p>
            </div>
          </div>

          {/* Custom Programs */}
          <div className="bg-gradient-to-br from-red-950 to-gray-900 border border-red-500/50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Custom Programs</h3>
              <p className="text-sm text-red-400 uppercase tracking-wide font-medium mb-2">Tailored to you</p>
            </div>

            <p className="text-gray-200 mb-6">
              We tailor content to your roles, tech stack, and policies. Whether you need a specialized workshop or ongoing training support, we'll design it together.
            </p>

            <a href="#footer" className="button-primary inline-flex items-center w-full justify-center">
              Request a quote
            </a>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <a href="#footer" className="button-primary inline-flex items-center text-lg px-8 py-4">
            Book a discovery call
          </a>
        </div>
      </div>
    </section>;
};

export default Offer;
