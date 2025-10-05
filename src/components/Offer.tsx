
import React from "react";

const Offer = () => {
  return <section id="details" className="w-full bg-white py-12">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Offers Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-4">
            Choose Your Perfect Development Package
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional web development solutions tailored to your needs and budget
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {/* Package 1: Starter Website*/}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:border-green-300">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter Website</h3>
              <p className="text-sm text-green-600 uppercase tracking-wide font-medium mb-2">Classic Landing Page</p>
              <div className="text-4xl font-bold text-green-600 mb-1">$349</div>
              <div className="text-gray-500">Basic Package</div>
            </div>

            <p className="text-gray-700 text-center mb-6 text-sm italic">Best for: simple promo pages, pre-launch pages, events, QR/link-in-bio microsites</p>

            {/* Includes Section */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-900 mb-3">Includes:</h4>
              <div className="space-y-3">
                {[
                  "1 responsive page, template-based",
                  "Design tweaks & copy placement",
                  "Deployment to your domain"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Not Included Section */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-900 mb-3">Not included:</h4>
              <div className="space-y-2">
                {[
                  "No database/CMS",
                  "No AI/chat",
                  "No authentication or admin",
                  "No integrations or uploads",
                  "No app features"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-500 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Delivery Section */}
            <div className="border-t pt-6">
              <div className="text-center text-sm text-gray-600 mb-4">
                <div>Revisions: 1</div>
                <div className="font-semibold text-green-600 mt-2">⭕ 5 days delivery</div>
              </div>
              <div className="text-xs text-gray-500 text-center">
                Rush: 🔘 3 days (+$100) | 🔘 2 days (+$200)
              </div>
            </div>
          </div>

          {/* Package 2: Creator's Kit */}
          <div className="bg-white border border-orange-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:border-orange-300 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-orange-600 text-white px-6 py-2 rounded-full text-sm font-medium">
                Most Start Here
              </div>
            </div>

            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Growth Kit</h3>
              <p className="text-sm text-orange-600 uppercase tracking-wide font-medium mb-2">Basic Web Application</p>
              <div className="text-4xl font-bold text-orange-600 mb-1">$2499</div>
              <div className="text-gray-500">Creator Package</div>
            </div>

            <p className="text-gray-700 text-center mb-6 text-sm italic">Great for: gated communities, simple portals, creator tools with login and a light admin.</p>

            {/* Includes Section */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-900 mb-3">Includes:</h4>
              <div className="space-y-3">
                {[
                  "Design customization & responsive UI",
                  "User authentication (passwordless or email/pass)",
                  "Database integration (CRUD models)",
                  "Basic admin panel (manage users/content)",
                  "Content management (simple CMS sections)",
                  "API integrations (1–2 common services)",
                  "Source code + deployment to your domain"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-orange-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Not Included Section */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-900 mb-3">Not included:</h4>
              <div className="space-y-2">
                {[
                  "Multi-tenant client spaces / per-client branding",
                  "Real-time features (live updates, buzzers)",
                  "Advanced analytics dashboards / reports",
                  "SSO (Google/Microsoft), payments, file uploads at scale",
                  "Complex moderation workflows"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-500 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Delivery Section */}
            <div className="border-t pt-6">
              <div className="text-center text-sm text-gray-600 mb-4">
                <div>Pages: up to 5 • Revisions: 2</div>
                <div className="font-semibold text-orange-600 mt-2">⭕ 14 days delivery</div>
              </div>
              <div className="text-xs text-gray-500 text-center">
                Rush: 🔘 8 days (+$1500) | 🔘 5 days (+$3000)
              </div>
            </div>
          </div>

          {/* Package 3: Professional Business Platform */}
          <div className="bg-gradient-to-b from-blue-50 to-white border border-blue-200 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:border-blue-400 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium">
                Most Popular
              </div>
            </div>

            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Professional Business Platform</h3>
              <p className="text-sm text-blue-600 uppercase tracking-wide font-medium mb-2">Advanced Web Application</p>
              <div className="text-4xl font-bold text-blue-600 mb-1">$8499</div>
              <div className="text-gray-500">Professional Package</div>
            </div>

            <p className="text-gray-700 text-center mb-6 text-sm italic">Great for: agencies, training orgs, and SMEs needing client spaces, richer admin, real-time UX, and reporting.</p>

            {/* Includes Section */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-900 mb-3">Includes:</h4>
              <div className="space-y-3">
                {[
                  "Everything in Growth Kit, plus:",
                  "Role-based access & multi-tenant structure",
                  "Advanced admin dashboard (filters, exports, bulk actions)",
                  "Real-time features (live updates, presence, basic queues)",
                  "File uploads pipeline (validation, storage, size/type limits)",
                  "Reporting (summary metrics, CSV exports)",
                  "Performance optimization (caching, lazy loading)",
                  "Monitoring & staging (error tracking, preview env)",
                  "Source code + production deployment"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Not Included Section */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-900 mb-3">Not included:</h4>
              <div className="space-y-2">
                {[
                  "SSO/SCIM, enterprise RBAC, payments/subscriptions",
                  "BI-grade analytics, custom certificate generation",
                  "Native mobile apps"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-500 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Delivery Section */}
            <div className="border-t pt-6">
              <div className="text-center text-sm text-gray-600 mb-4">
                <div>Pages: up to 8 • Revisions: 3</div>
                <div className="font-semibold text-blue-600 mt-2">⭕ 21 days delivery</div>
              </div>
              <div className="text-xs text-gray-500 text-center">
                Rush: 🔘 16 days (+$4000) | 🔘 12 days (+$8000)
              </div>
            </div>
          </div>
        </div>

        {/* Enterprise Solution Section */}
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-3xl p-8 border border-purple-200">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">Enterprise Solution</h3>
            <p className="text-lg text-purple-600 uppercase tracking-wide font-medium mb-4">ADVANCED FULL-STACK SYSTEM</p>
            <p className="text-xl text-gray-700 mb-6">Custom Enterprise Application</p>

            <p className="text-gray-700 text-lg mb-8 max-w-3xl mx-auto">
              Complete enterprise-level solution with AI integration, advanced analytics, multi-user support, and ongoing technical consultation.
            </p>

            <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Contact Sales
            </button>
          </div>
        </div>

      </div>
    </section>;
};
export default Offer;
