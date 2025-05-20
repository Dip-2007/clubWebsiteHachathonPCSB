import { useEffect, useState } from 'react';
import { ArrowDown, Code, Zap, Users } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true);
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center relative overflow-hidden pt-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden bg-hero-pattern opacity-30 dark:opacity-10">
        <div className="absolute top-1/4 left-1/5 w-64 h-64 rounded-full bg-primary-500/10 animate-float"></div>
        <div className="absolute bottom-1/4 right-1/5 w-96 h-96 rounded-full bg-secondary-500/10 animate-float-slow"></div>
        <div className="absolute top-2/3 left-1/3 w-48 h-48 rounded-full bg-accent-400/10 animate-float-slower"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className={`w-full lg:w-1/2 mb-12 lg:mb-0 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="inline-block bg-primary-500/10 dark:bg-primary-500/20 px-4 py-1 rounded-full mb-6 backdrop-blur-sm">
              <span className="text-primary-600 dark:text-primary-400 font-medium text-sm">Innovate. Create. Collaborate.</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-gray-900 dark:text-white leading-tight mb-6">
              Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">codePICTure</span>
              <br />
              <span className="text-3xl md:text-4xl lg:text-5xl">Where Innovation Meets Community</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
              A vibrant community of tech enthusiasts, developers, designers, and innovators coming together to learn, create, and shape the future of technology.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#join"
                className="px-8 py-3 rounded-lg bg-primary-500 text-white hover:bg-primary-600 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-primary-500/30 font-medium flex items-center"
              >
                <Zap size={18} className="mr-2" />
                Join Our Community
              </a>
              <a
                href="#about"
                className="px-8 py-3 rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-white border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-gray-300/30 dark:hover:shadow-gray-900/30 font-medium flex items-center"
              >
                <Users size={18} className="mr-2" />
                Learn More
              </a>
            </div>
          </div>
          
          <div className={`w-full lg:w-1/2 flex justify-center transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="relative w-full max-w-lg">
              {/* Main illustration */}
              <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-float"></div>
              <div className="absolute top-0 right-0 w-72 h-72 bg-primary-300 dark:bg-primary-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-float-slow"></div>
              <div className="absolute -bottom-8 left-20 w-72 h-72 bg-accent-300 dark:bg-accent-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-float-slower"></div>
              
              {/* Card */}
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80 border border-gray-200 dark:border-gray-700 animate-float">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="flex items-center bg-gray-100 dark:bg-gray-700 rounded-md px-3 py-1 text-xs text-gray-800 dark:text-gray-200">
                      <Code size={14} className="mr-1 text-primary-500" />
                      codePICTure.js
                    </div>
                  </div>
                  
                  <pre className="text-xs sm:text-sm overflow-x-auto p-4 bg-gray-100 dark:bg-gray-900 rounded-lg">
                    <code className="language-javascript">
                      <span className="text-blue-600 dark:text-blue-400">class</span> <span className="text-green-600 dark:text-green-400">codePICTure</span> {'{'}
                      <br />
                      {'  '}<span className="text-blue-600 dark:text-blue-400">constructor</span>() {'{'}
                      <br />
                      {'    '}this.<span className="text-purple-600 dark:text-purple-400">mission</span> = <span className="text-red-600 dark:text-red-400">'Empower through tech'</span>;
                      <br />
                      {'    '}this.<span className="text-purple-600 dark:text-purple-400">members</span> = [];
                      <br />
                      {'    '}this.<span className="text-purple-600 dark:text-purple-400">events</span> = [];
                      <br />
                      {'  }{'}
                      <br />
                      <br />
                      {'  '}<span className="text-blue-600 dark:text-blue-400">addMember</span>(member) {'{'}
                      <br />
                      {'    '}this.<span className="text-purple-600 dark:text-purple-400">members</span>.push(member);
                      <br />
                      {'    '}<span className="text-blue-600 dark:text-blue-400">return</span> <span className="text-red-600 dark:text-red-400">'Welcome to codePICTure!'</span>;
                      <br />
                      {'  }{'}
                      <br />
                      {'}'}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">Scroll to explore</span>
          <div className="animate-bounce">
            <ArrowDown size={20} className="text-primary-500" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;