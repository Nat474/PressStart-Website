
import React, { useRef } from "react";

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  gradient: string;
  backgroundImage?: string;
}

const testimonials: TestimonialProps[] = [{
  content: "Our new hires hit the ground running after PressStart's workplace readiness program. The practical approach and real-world scenarios made all the difference.",
  author: "HR Director",
  role: "Tech Company",
  gradient: "from-blue-700 via-indigo-800 to-purple-900",
  backgroundImage: "/background-section1.png"
}, {
  content: "The leadership training gave our managers real confidence. They're now handling difficult conversations and team dynamics much more effectively.",
  author: "Operations Lead",
  role: "Retail Organization",
  gradient: "from-indigo-900 via-purple-800 to-orange-500",
  backgroundImage: "/background-section2.png"
}];

const TestimonialCard = ({
  content,
  author,
  role,
  backgroundImage = "/background-section1.png"
}: TestimonialProps) => {
  return <div className="bg-cover bg-center rounded-lg p-8 h-full flex flex-col justify-between text-white transform transition-transform duration-300 hover:-translate-y-2 relative overflow-hidden" style={{
    backgroundImage: `url('${backgroundImage}')`
  }}>
      <div className="relative z-0">
        <p className="text-xl mb-8 font-medium leading-relaxed pr-20">{`"${content}"`}</p>
        <div>
          <h4 className="font-semibold text-xl">{author}</h4>
          <p className="text-white/80">{role}</p>
        </div>
      </div>
    </div>;
};

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return <>
    {/* Why PressStart Section */}
    <section className="py-12 bg-black relative" id="why-pressstart">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <h2 className="text-4xl sm:text-5xl font-display font-bold mb-12 text-center text-white">
          Why PressStart
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="text-center p-6">
            <div className="text-red-500 mb-4 flex justify-center">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Innovative Solutions</h3>
            <p className="text-gray-300 text-sm">For modern HR challenges</p>
          </div>

          <div className="text-center p-6">
            <div className="text-red-500 mb-4 flex justify-center">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Compliance-Aligned</h3>
            <p className="text-gray-300 text-sm">Content and best practices</p>
          </div>

          <div className="text-center p-6">
            <div className="text-red-500 mb-4 flex justify-center">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Young Professionals</h3>
            <p className="text-gray-300 text-sm">Designed for evolving workplaces</p>
          </div>

          <div className="text-center p-6">
            <div className="text-red-500 mb-4 flex justify-center">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Measurable Outcomes</h3>
            <p className="text-gray-300 text-sm">Results within weeks</p>
          </div>
        </div>
      </div>
    </section>

    {/* Testimonials Section */}
    <section className="py-12 bg-black relative" id="testimonials" ref={sectionRef}>
      <div className="section-container opacity-0 animate-on-scroll">
        <h2 className="text-4xl sm:text-5xl font-display font-bold mb-12 text-center text-white">What others say</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => <TestimonialCard key={index} content={testimonial.content} author={testimonial.author} role={testimonial.role} gradient={testimonial.gradient} backgroundImage={testimonial.backgroundImage} />)}
        </div>

        {/* CTA Band */}
        <div className="text-center mt-12">
          <p className="text-xl text-gray-200 mb-6">Ready to upskill your team?</p>
          <a href="#footer" className="button-primary inline-flex items-center">
            Book us today
          </a>
        </div>
      </div>
    </section>
  </>;
};

export default Testimonials;
