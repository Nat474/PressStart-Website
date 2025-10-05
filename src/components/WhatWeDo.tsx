
import React from "react";

const WhatWeDo = () => {
  return (
    <section className="w-full py-12 sm:py-16 bg-black" id="mission">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Credibility Snapshot */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-6 bg-gray-900 rounded-lg border border-red-500/20">
              <h3 className="text-3xl font-bold text-red-500 mb-2">20+</h3>
              <p className="text-gray-300">Years combined HR, OD, and leadership training experience</p>
            </div>
            <div className="p-6 bg-gray-900 rounded-lg border border-red-500/20">
              <h3 className="text-3xl font-bold text-red-500 mb-2">Modern</h3>
              <p className="text-gray-300">Programs designed for young professionals & modern organizations</p>
            </div>
            <div className="p-6 bg-gray-900 rounded-lg border border-red-500/20">
              <h3 className="text-3xl font-bold text-red-500 mb-2">Practical</h3>
              <p className="text-gray-300">Compliant, and outcomes-focused training</p>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Purpose Matters
          </h2>
          <p className="text-xl sm:text-2xl text-gray-200 mb-8">
            We design learning that sticks—and scales.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Our mission is to bridge the gap between academic knowledge and real-world application,
            equipping emerging talents with the skills and mindset needed to thrive in modern organizations.
            We empower individuals and organizations by fostering a culture of collaboration and professional development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
