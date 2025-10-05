
import React from "react";

const Footer = () => {
  return <footer id="footer" className="w-full bg-gray-900 py-16">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Contact Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-6">
              Contact / Book Us
            </h2>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-red-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p className="font-semibold text-white">Phone</p>
                  <a href="tel:+6328287146" className="hover:text-red-500 transition-colors">
                    +63 28 2871468
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-red-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <a href="mailto:info@pressstartph.com" className="hover:text-red-500 transition-colors">
                    info@pressstartph.com
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <a href="mailto:info@pressstartph.com?subject=Discovery Call Request" className="button-primary inline-flex items-center">
                Book a discovery call
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-3">
              <a href="#hero" className="text-gray-300 hover:text-red-500 transition-colors">Home</a>
              <a href="#mission" className="text-gray-300 hover:text-red-500 transition-colors">About</a>
              <a href="#features" className="text-gray-300 hover:text-red-500 transition-colors">Programs</a>
              <a href="#details" className="text-gray-300 hover:text-red-500 transition-colors">Services</a>
              <a href="#testimonials" className="text-gray-300 hover:text-red-500 transition-colors">Testimonials</a>
              <a href="#footer" className="text-gray-300 hover:text-red-500 transition-colors">Contact</a>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-8">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-red-500 transition-all duration-300"
            title="LinkedIn"
          >
            <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a
            href="https://www.facebook.com/PressStartInc"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-red-500 transition-all duration-300"
            title="Facebook"
          >
            <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 text-sm mb-2">
            © 2025 Press Start, Inc. All Rights Reserved
          </p>
          <div className="flex justify-center gap-4 text-sm">
            <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">Terms and Conditions</a>
            <span className="text-gray-600">•</span>
            <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>;
};

export default Footer;
