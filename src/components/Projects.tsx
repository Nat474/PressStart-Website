
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  index: number;
}

interface FeaturedProjectProps {
  title: string;
  description: string;
  image: string;
  alt: string;
  url?: string;
  index: number;
}

const FeaturedProject = ({ title, description, image, alt, url, index }: FeaturedProjectProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-12');
            entry.target.classList.add('opacity-100', 'translate-y-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      setTimeout(() => {
        if (cardRef.current) observer.observe(cardRef.current);
      }, index * 200);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [index]);

  const handleClick = () => {
    if (url) {
      window.open(url, '_blank');
    }
  };

  return (
    <div
      ref={cardRef}
      className={cn(
        "rounded-xl sm:rounded-2xl overflow-hidden shadow-elegant opacity-0 translate-y-12 transition-all duration-700 ease-out hover:scale-105 hover:shadow-2xl group",
        url ? "cursor-pointer" : ""
      )}
      onClick={handleClick}
    >
      <div className="w-full">
        <img
          src={image}
          alt={alt}
          className="w-full h-48 sm:h-56 object-cover"
        />
      </div>
      <div className="bg-gray-900 p-3 sm:p-5">
        <h3 className="text-lg sm:text-xl font-display font-semibold mb-2 sm:mb-3 transition-colors duration-300 group-hover:text-red-500 text-white">{title}</h3>
        <p className="text-gray-300 text-sm">
          {description}
        </p>
      </div>
    </div>
  );
};

const FeatureCard = ({ title, description, index }: FeatureCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-8');
            entry.target.classList.add('opacity-100', 'translate-y-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      // Add staggered delay based on index
      setTimeout(() => {
        if (cardRef.current) observer.observe(cardRef.current);
      }, index * 150);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [index]);
  
  return (
    <div
      ref={cardRef}
      className={cn(
        "feature-card glass-card opacity-0 translate-y-8 p-4 sm:p-6",
        "lg:hover:bg-gradient-to-br lg:hover:from-gray-900 lg:hover:to-red-950",
        "transition-all duration-700 ease-out hover:scale-105 hover:shadow-lg"
      )}
    >
      <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-white">{title}</h3>
      <p className="text-gray-300 text-sm sm:text-base">{description}</p>
    </div>
  );
};

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const mainProjectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-8', 'translate-y-12');
            entry.target.classList.add('opacity-100', 'translate-y-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe title element
    if (titleRef.current) {
      setTimeout(() => {
        if (titleRef.current) observer.observe(titleRef.current);
      }, 100);
    }

    // Observe main project
    if (mainProjectRef.current) {
      setTimeout(() => {
        if (mainProjectRef.current) observer.observe(mainProjectRef.current);
      }, 300);
    }

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (mainProjectRef.current) observer.unobserve(mainProjectRef.current);
    };
  }, []);
  
  return (
    <div>
      <section className="py-12 sm:py-16 md:py-20 pb-0 relative bg-black" id="features" ref={sectionRef}>
        <div className="section-container">
          {/* Featured Project Section */}
            <div className="container px-4 sm:px-6 lg:px-8 mx-auto mb-16">
            <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12">
              <h2
                ref={titleRef}
                className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-white mb-3 sm:mb-4 opacity-0 translate-y-8 transition-all duration-700 ease-out"
              >
                Our Programs
              </h2>
              <p className="text-lg text-gray-300">
                Practical training solutions for emerging leaders and modern teams
              </p>
            </div>

            {/* Service Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              <div className="bg-gray-900 border border-red-500/20 rounded-xl p-6 hover:border-red-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-red-500 mb-4">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-3">Leadership Foundations</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Mindset, communication, decision-making for emerging leaders
                </p>
              </div>

              <div className="bg-gray-900 border border-red-500/20 rounded-xl p-6 hover:border-red-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-red-500 mb-4">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-3">HR Essentials</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Recruitment, performance management, and compliance basics
                </p>
              </div>

              <div className="bg-gray-900 border border-red-500/20 rounded-xl p-6 hover:border-red-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-red-500 mb-4">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-3">Workplace Readiness</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Professionalism, teamwork, time & project management skills
                </p>
              </div>

              <div className="bg-gray-900 border border-red-500/20 rounded-xl p-6 hover:border-red-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-red-500 mb-4">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-3">Custom Workshops</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Tailored to your roles, tools, and organizational culture
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-12">
              <a href="#details" className="button-primary inline-flex items-center">
                See all programs
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>

      </div>
    </section>
    </div>
  );
};

export default Projects;
