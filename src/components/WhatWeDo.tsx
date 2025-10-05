
import React from "react";

const WhatWeDo = () => {
  return (
    <section className="w-full py-6 sm:py-10 bg-white" id="specifications">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Header with badge and line */}
        
        {/* Main content with text mask image - responsive text sizing */}
        <div className="max-w-5xl pl-4 sm:pl-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight mb-8 sm:mb-12" style={{fontFamily: 'Canva Sans, sans-serif'}}>
            <span className="block bg-clip-text text-transparent bg-[url('/text-mask-image.jpg')] bg-cover bg-center">
              <b>We consult with businesses to identify their biggest challenges, then build custom apps and systems that cut costs, save time, and boost efficiency.</b>
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
