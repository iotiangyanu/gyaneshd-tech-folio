import { useEffect, useState } from 'react';

const MouseFollower3D = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Main cursor follower */}
      <div
        className={`fixed pointer-events-none z-50 transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className="w-6 h-6 bg-primary/30 rounded-full animate-pulse-glow" />
      </div>

      {/* Secondary follower with delay */}
      <div
        className={`fixed pointer-events-none z-40 transition-all duration-500 ${
          isVisible ? 'opacity-60' : 'opacity-0'
        }`}
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className="w-12 h-12 border border-primary/20 rounded-full" />
      </div>

      {/* Trailing particles */}
      <div
        className={`fixed pointer-events-none z-30 transition-all duration-700 ${
          isVisible ? 'opacity-40' : 'opacity-0'
        }`}
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className="w-20 h-20 bg-gradient-radial from-primary/10 to-transparent rounded-full" />
      </div>
    </>
  );
};

export default MouseFollower3D;