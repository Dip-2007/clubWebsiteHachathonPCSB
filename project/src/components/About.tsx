import { useEffect, useRef } from 'react';
import { Cpu, Lightbulb, Users, Award, Code, Calendar, User, Book } from 'lucide-react';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
            entry.target.classList.remove('opacity-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const children = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    
    children?.forEach((child) => {
      observer.observe(child);
    });

    return () => {
      children?.forEach((child) => {
        observer.unobserve(child);
      });
    };
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-on-scroll opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 dark:text-white mb-4">
            About <span className="text-primary-500">codePICTure</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Founded in 2022, codePICTure is a student-run technical club dedicated to fostering innovation, learning, and collaboration in the field of technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="animate-on-scroll opacity-0 delay-100">
            <h3 className="text-2xl font-bold font-heading text-gray-900 dark:text-white mb-6 flex items-center">
              <Lightbulb size={24} className="text-primary-500 mr-2" />
              Our Mission
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Our mission is to create a vibrant ecosystem where students can explore emerging technologies, develop technical skills, and connect with like-minded individuals. We believe in learning by doing and creating opportunities for students to apply their knowledge to real-world challenges.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Through workshops, hackathons, tech talks, and collaborative projects, we aim to bridge the gap between academic learning and industry requirements, preparing our members for successful careers in technology.
            </p>
          </div>
          
          <div className="animate-on-scroll opacity-0 delay-200">
            <h3 className="text-2xl font-bold font-heading text-gray-900 dark:text-white mb-6 flex items-center">
              <Users size={24} className="text-primary-500 mr-2" />
              Our Community
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              codePICTure brings together students from diverse academic backgrounds, including computer science, design, business, and engineering. This interdisciplinary approach fosters creative problem-solving and innovation.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Our community is built on values of inclusivity, collaboration, and continuous learning. We welcome students of all skill levels, from beginners taking their first steps in technology to experienced developers seeking to mentor others and enhance their leadership skills.
            </p>
          </div>
        </div>
        
        {/* What We Do */}
        <div className="max-w-3xl mx-auto text-center mb-12 animate-on-scroll opacity-0 delay-300">
          <h3 className="text-2xl md:text-3xl font-bold font-heading text-gray-900 dark:text-white mb-4">
            What We Do
          </h3>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-6"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-on-scroll opacity-0 delay-400 group">
            <div className="p-6">
              <div className="w-14 h-14 bg-primary-500/10 dark:bg-primary-500/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary-500 transition-colors duration-300">
                <Code size={24} className="text-primary-500 group-hover:text-white transition-colors duration-300" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Workshops</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Hands-on technical workshops covering web development, AI/ML, mobile app development, and more.
              </p>
            </div>
          </div>
          
          {/* Card 2 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-on-scroll opacity-0 delay-500 group">
            <div className="p-6">
              <div className="w-14 h-14 bg-primary-500/10 dark:bg-primary-500/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary-500 transition-colors duration-300">
                <Award size={24} className="text-primary-500 group-hover:text-white transition-colors duration-300" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Hackathons</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Competitive programming events where students collaborate to solve real-world problems through technology.
              </p>
            </div>
          </div>
          
          {/* Card 3 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-on-scroll opacity-0 delay-600 group">
            <div className="p-6">
              <div className="w-14 h-14 bg-primary-500/10 dark:bg-primary-500/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary-500 transition-colors duration-300">
                <Calendar size={24} className="text-primary-500 group-hover:text-white transition-colors duration-300" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Tech Talks</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Insightful presentations from industry experts and alumni on emerging technologies and career guidance.
              </p>
            </div>
          </div>
          
          {/* Card 4 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-on-scroll opacity-0 delay-700 group">
            <div className="p-6">
              <div className="w-14 h-14 bg-primary-500/10 dark:bg-primary-500/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary-500 transition-colors duration-300">
                <User size={24} className="text-primary-500 group-hover:text-white transition-colors duration-300" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Mentorship</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Peer mentoring programs to help beginners master technical skills and navigate their tech journey.
              </p>
            </div>
          </div>
        </div>
        
        {/* Stats */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 animate-on-scroll opacity-0 delay-800">
          <div className="text-center">
            <p className="text-4xl font-bold text-primary-500 mb-2">500+</p>
            <p className="text-gray-600 dark:text-gray-300">Active Members</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-primary-500 mb-2">50+</p>
            <p className="text-gray-600 dark:text-gray-300">Events Organized</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-primary-500 mb-2">20+</p>
            <p className="text-gray-600 dark:text-gray-300">Industry Partners</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-primary-500 mb-2">3</p>
            <p className="text-gray-600 dark:text-gray-300">Years of Impact</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;