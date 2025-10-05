
import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

interface PhysicsSquare {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  rotationSpeed: number;
  size: number;
}

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [physicsSquares, setPhysicsSquares] = useState<PhysicsSquare[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent background scrolling when menu is open
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    // Close mobile menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    }
  };

  const createPhysicsSquare = (startX: number, startY: number) => {
    const square: PhysicsSquare = {
      id: Date.now() + Math.random(),
      x: startX,
      y: startY,
      vx: (Math.random() - 0.5) * 8, // Random horizontal velocity
      vy: -(Math.random() * 5 + 3), // Initial upward velocity (negative for up)
      rotation: 0,
      rotationSpeed: (Math.random() - 0.5) * 8, // Random rotation speed
      size: Math.random() * 30 + 50, // Random size between 50-80px
    };

    setPhysicsSquares(prev => [...prev, square]);

    // Remove square after 4 seconds
    setTimeout(() => {
      setPhysicsSquares(prev => prev.filter(s => s.id !== square.id));
    }, 4000);
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    const startX = rect.left + rect.width / 2;
    const startY = rect.top + rect.height / 2;

    // Create 3-5 squares for fun
    const numSquares = Math.floor(Math.random() * 3) + 3;
    for (let i = 0; i < numSquares; i++) {
      setTimeout(() => createPhysicsSquare(startX, startY), i * 100);
    }
  };

  // Start animation when squares are added
  useEffect(() => {
    if (physicsSquares.length > 0 && !animationRef.current) {
      const animate = () => {
        setPhysicsSquares(prev => {
          if (prev.length === 0) {
            // Stop animation when no squares left
            if (animationRef.current) {
              cancelAnimationFrame(animationRef.current);
              animationRef.current = undefined;
            }
            return prev;
          }

          return prev.map(square => {
            const newX = square.x + square.vx;
            let newY = square.y + square.vy;
            let newVY = square.vy + 0.5; // Gravity

            // Floor collision detection
            const floorY = window.innerHeight - square.size / 2;
            if (newY >= floorY) {
              newY = floorY;
              newVY = newVY * -0.6; // Bounce with energy loss
            }

            return {
              ...square,
              x: newX,
              y: newY,
              vx: square.vx * 0.99, // Air resistance
              vy: newVY,
              rotation: square.rotation + square.rotationSpeed,
            };
          });
        });

        animationRef.current = requestAnimationFrame(animate);
      };

      animationRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = undefined;
      }
    };
  }, [physicsSquares.length]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-2 sm:py-3 md:py-4 transition-all duration-300",
        isScrolled 
          ? "bg-white/80 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <div
          className="flex items-center space-x-2 cursor-pointer hover:scale-105 transition-transform duration-200"
          onClick={handleLogoClick}
          aria-label="Random Develop"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleLogoClick(e as any);
            }
          }}
        >
          <img
            src="/logo.svg"
            alt="Random Develop Logo"
            className="h-8 sm:h-12 w-auto"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a
            href="#"
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
            }}
          >
            Home
          </a>
          <a href="#features" className="nav-link">Projects</a>
          <a href="#testimonials" className="nav-link">Testimonials</a>
          <a href="#details" className="nav-link">Pricing</a>
          <a href="#footer" className="nav-link">Contact</a>
        </nav>

        {/* Mobile menu button - increased touch target */}
        <button 
          className="md:hidden text-gray-700 p-3 focus:outline-none" 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation - improved for better touch experience */}
      <div className={cn(
        "fixed inset-0 z-40 bg-white flex flex-col pt-16 px-6 md:hidden transition-all duration-300 ease-in-out",
        isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
      )}>
        <nav className="flex flex-col space-y-8 items-center mt-8">
          <a
            href="#"
            className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100"
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            Home
          </a>
          <a
            href="#features"
            className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100"
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            Projects
          </a>
          <a
            href="#testimonials"
            className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100"
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            Testimonials
          </a>
          <a
            href="#details"
            className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100"
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            Pricing
          </a>
          <a
            href="#footer"
            className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100"
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            Contact
          </a>
        </nav>
      </div>

      {/* Physics Squares */}
      {physicsSquares.map(square => (
        <div
          key={square.id}
          className="fixed pointer-events-none z-[9999]"
          style={{
            left: square.x - square.size / 2,
            top: square.y - square.size / 2,
            width: square.size,
            height: square.size,
            transform: `rotate(${square.rotation}deg)`,
            transition: 'none',
            backgroundColor: '#ffffff', // White background
            borderRadius: '4px', // Slightly rounded corners
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)', // Subtle shadow
          }}
        >
          <img
            src="/Random Develop Logo.png"
            alt="Random Develop"
            className="w-full h-full object-contain"
            onError={(e) => {
              // Hide image if it fails to load, show white square instead
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>
      ))}
    </header>
  );
};

export default Navbar;
