
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import LottieAnimation from "./LottieAnimation";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [lottieData, setLottieData] = useState<any>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    // Check if mobile on mount and when window resizes
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    fetch('/loop-header.lottie')
      .then(response => response.json())
      .then(data => setLottieData(data))
      .catch(error => console.error("Error loading Lottie animation:", error));
  }, []);

  useEffect(() => {
    // Skip effect on mobile
    if (isMobile) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !imageRef.current) return;
      
      const {
        left,
        top,
        width,
        height
      } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;

      imageRef.current.style.transform = `perspective(1000px) rotateY(${x * 2.5}deg) rotateX(${-y * 2.5}deg) scale3d(1.02, 1.02, 1.02)`;
    };
    
    const handleMouseLeave = () => {
      if (!imageRef.current) return;
      imageRef.current.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)`;
    };
    
    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);
    }
    
    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [isMobile]);
  
  useEffect(() => {
    // Skip parallax on mobile
    if (isMobile) return;
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const elements = document.querySelectorAll('.parallax');
      elements.forEach(el => {
        const element = el as HTMLElement;
        const speed = parseFloat(element.dataset.speed || '0.1');
        const yPos = -scrollY * speed;
        element.style.setProperty('--parallax-y', `${yPos}px`);
      });
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  const handleImageClick = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setShowVideo(true);

    // Reset and play the video from the beginning
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();

      // Listen for video end event
      const handleVideoEnd = () => {
        setShowVideo(false);
        setTimeout(() => {
          setIsAnimating(false);
        }, 500); // Wait for slide back animation to complete
        videoRef.current?.removeEventListener('ended', handleVideoEnd);
      };

      videoRef.current.addEventListener('ended', handleVideoEnd);
    }

    // Fallback timeout in case video doesn't fire ended event
    setTimeout(() => {
      if (isAnimating) {
        setShowVideo(false);
        setTimeout(() => {
          setIsAnimating(false);
        }, 500);
      }
    }, 5000); // Fallback timeout
  };

  return (
    <section 
      className="overflow-hidden relative bg-cover" 
      id="hero" 
      style={{
        backgroundImage: 'url("/Header-background.svg")',
        backgroundPosition: 'center 30%', 
        padding: isMobile ? '100px 12px 40px' : '120px 20px 60px'
      }}
    >
      <div className="absolute -top-[10%] -right-[5%] w-1/2 h-[70%] bg-pulse-gradient opacity-20 blur-3xl rounded-full"></div>
      
      <div className="container px-4 sm:px-6 lg:px-8" ref={containerRef}>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-center">
          <div className="w-full lg:w-1/2">
            
            <h1
              className="section-title text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight opacity-0 animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              This is where Ideas<br className="hidden sm:inline" />Come to Life
            </h1>
            
            <p 
              style={{ animationDelay: "0.5s" }} 
              className="section-subtitle mt-3 sm:mt-6 mb-4 sm:mb-8 leading-relaxed opacity-0 animate-fade-in text-gray-950 font-normal text-base sm:text-lg text-left"
            >
              The agency that goes crazy alongside you.
            </p>
            
            <div 
              className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in" 
              style={{ animationDelay: "0.7s" }}
            >
              <a
                href="#features"
                className="flex items-center justify-center w-full sm:w-auto text-center transition-colors duration-200 hover:bg-green-600"
                style={{
                  backgroundColor: '#22c55e',
                  borderRadius: '1440px',
                  boxSizing: 'border-box',
                  color: '#FFFFFF',
                  cursor: 'pointer',
                  fontSize: '14px',
                  lineHeight: '20px',
                  padding: '16px 24px',
                  border: '1px solid white',
                }}
              >
                <span>See Projects</span>
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 relative mt-6 lg:mt-0">
            {lottieData ? (
              <div className="relative z-10 animate-fade-in" style={{ animationDelay: "0.9s" }}>
                <LottieAnimation
                  animationPath={lottieData}
                  className="w-full h-auto max-w-lg mx-auto"
                  loop={true}
                  autoplay={true}
                />
              </div>
            ) : (
              <div className="relative">
                {/* Video Background */}
                <div
                  className={cn(
                    "absolute inset-0 z-0 rounded-2xl sm:rounded-3xl overflow-hidden",
                    "transition-opacity duration-500",
                    showVideo ? "opacity-100" : "opacity-0"
                  )}
                >
                  <video
                    ref={videoRef}
                    src="/Logo Animation - Full.mp4"
                    className="w-full h-full object-cover"
                    muted
                    playsInline
                    preload="metadata"
                  />
                </div>

                {/* Hero Image */}
                <div className="absolute inset-0 bg-dark-900 rounded-2xl sm:rounded-3xl -z-10 shadow-xl"></div>
                <div
                  className={cn(
                    "relative transition-all duration-500 ease-out overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl cursor-pointer",
                    "transform-gpu",
                    isAnimating ? "translate-x-[-100%]" : "translate-x-0"
                  )}
                  onClick={handleImageClick}
                >
                  <img
                    ref={imageRef}
                    src="/hero-image.png"
                    alt="Random Develop Developer"
                    className="w-full h-auto object-cover transition-transform duration-500 ease-out"
                    style={{ transformStyle: 'preserve-3d' }}
                  />

                  {/* Click hint overlay */}
                  <div className={cn(
                    "absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300",
                    isAnimating && "hidden"
                  )}>
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 text-sm font-medium text-gray-900">
                      Click to see magic ✨
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="hidden lg:block absolute bottom-0 left-1/4 w-64 h-64 bg-pulse-100/30 rounded-full blur-3xl -z-10 parallax" data-speed="0.05"></div>
    </section>
  );
};

export default Hero;
