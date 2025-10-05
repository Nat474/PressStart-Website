
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

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
      <div className="bg-white p-3 sm:p-5">
        <h3 className="text-lg sm:text-xl font-display font-semibold mb-2 sm:mb-3 transition-colors duration-300 group-hover:text-blue-600">{title}</h3>
        <p className="text-gray-700 text-sm">
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
        "lg:hover:bg-gradient-to-br lg:hover:from-white lg:hover:to-pulse-50",
        "transition-all duration-700 ease-out hover:scale-105 hover:shadow-lg"
      )}
    >
      <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{title}</h3>
      <p className="text-gray-600 text-sm sm:text-base">{description}</p>
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
      <section className="py-12 sm:py-16 md:py-20 pb-0 relative bg-gray-50" id="features" ref={sectionRef}>
        <div className="section-container">
          {/* Featured Project Section */}
            <div className="container px-4 sm:px-6 lg:px-8 mx-auto mb-16">
            <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12">
              <h2
                ref={titleRef}
                className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-gray-900 mb-3 sm:mb-4 opacity-0 translate-y-8 transition-all duration-700 ease-out"
              >
                <span style={{color: 'green'}}>F</span>eatured <span style={{color: 'green'}}>C</span>reations
              </h2>
            </div>

            {/* Main Featured Project - OVIM App */}
            <div className="mb-12">
              <div
                ref={mainProjectRef}
                className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant mx-auto max-w-4xl cursor-pointer opacity-0 translate-y-12 transition-all duration-700 ease-out hover:scale-105 hover:shadow-2xl group"
                onClick={() => window.open('https://www.ovimadamson.app', '_blank')}>
                <div className="w-full">
                  <img
                    src="/OVIM-HomepageView.png"
                    alt="OVIM App homepage view"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="bg-white p-4 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-display font-semibold mb-3 sm:mb-4 transition-colors duration-300 group-hover:text-blue-600">OVIM App</h3>
                  <p className="text-gray-700 text-sm sm:text-base">
                    A digital platform for managing structured seminar programs, tracking user progress, and
                    facilitating Vincentian events for Adamson University. <b>Built with Next.js and Supabase.</b>
                    <br></br>
                    <i>Note: Features are hidden and are only accessible to Adamson University personnel</i>
                  </p>
                </div>
              </div>
            </div>

            {/* Secondary Featured Projects - Side by Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              <FeaturedProject
                title="Adamson Debate Society Website"
                description="Official website for the Adamson University Debate Society (AUDS) fostering academic discourse and intellectual excellence. Features membership applications, training materials, debate guidelines, news & events management, and organization constitution with Supabase integration."
                image="/Adamson-Debate-Society-homepage.png"
                alt="Adamson Debate Society Website"
                url="https://www.adamsondebate.org"
                index={1}
              />

              <FeaturedProject
                title="Mining Engineering Portfolio"
                description="Clean, professional portfolio website showcasing a recent graduate's qualifications and experience in the mining engineering field. Features work experience timeline, skills, certifications, and downloadable resume with mobile-responsive design."
                image="/Sample-portfolio.png"
                alt="Mining Engineering Portfolio"
                url="https://www.ivannierhossparrilla.net"
                index={2}
              />

              <FeaturedProject
                title="Debate Fanatic"
                description="The all-in-one platform for debaters. Where debaters can host tournaments, join competitions, participate in training sessions, connect with others, share resources, and train with AI."
                image="/debate-lounge-preview.png"
                alt="Debate Fanatic application"
                index={3}
              />

              <FeaturedProject
                title="School App"
                description="A comprehensive school application that manages course enrollment, academic records, student services, and campus resources in one integrated platform."
                image="/adamson-school-preview.png"
                alt="School App application"
                index={4}
              />
            </div>
          </div>

      </div>
    </section>
    </div>
  );
};

export default Projects;
