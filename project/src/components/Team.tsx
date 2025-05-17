import { useState, useEffect, useRef } from 'react';
import { Linkedin, Github, Twitter } from 'lucide-react';
import { teamMembers } from '../data/teamData';
import { TeamMember } from '../types';

const Team: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState<string>('all');
  const [filteredMembers, setFilteredMembers] = useState<TeamMember[]>(teamMembers);
  const sectionRef = useRef<HTMLElement | null>(null);

  const departments = [
    { id: 'all', label: 'All' },
    { id: 'leadership', label: 'Leadership' },
    { id: 'development', label: 'Development' },
    { id: 'design', label: 'Design' },
    { id: 'content', label: 'Content' },
    { id: 'outreach', label: 'Outreach' }
  ];

  // Filter members based on selected department
  useEffect(() => {
    if (selectedDepartment === 'all') {
      setFilteredMembers(teamMembers);
    } else {
      setFilteredMembers(
        teamMembers.filter((member) => member.department === selectedDepartment)
      );
    }
  }, [selectedDepartment]);

  // Animation on scroll
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
  }, [filteredMembers]);

  return (
    <section 
      id="team" 
      ref={sectionRef}
      className="py-24 bg-white dark:bg-gray-800 relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-on-scroll opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 dark:text-white mb-4">
            Meet Our <span className="text-primary-500">Team</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Our team of passionate students works tirelessly to create meaningful learning experiences and build a vibrant tech community.
          </p>
        </div>

        {/* Department filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-on-scroll opacity-0">
          {departments.map((dept) => (
            <button
              key={dept.id}
              onClick={() => setSelectedDepartment(dept.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedDepartment === dept.id
                  ? 'bg-primary-500 text-white shadow-md'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {dept.label}
            </button>
          ))}
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredMembers.map((member, index) => (
            <div 
              key={member.id}
              className={`animate-on-scroll opacity-0 delay-${(index % 4) * 100} group`}
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2">
                {/* Image container with overlay */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                    <div className="flex gap-3">
                      {member.socialLinks.linkedin && (
                        <a 
                          href={member.socialLinks.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-primary-500 transition-colors duration-300"
                        >
                          <Linkedin size={16} className="text-white" />
                        </a>
                      )}
                      {member.socialLinks.github && (
                        <a 
                          href={member.socialLinks.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-primary-500 transition-colors duration-300"
                        >
                          <Github size={16} className="text-white" />
                        </a>
                      )}
                      {member.socialLinks.twitter && (
                        <a 
                          href={member.socialLinks.twitter} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-primary-500 transition-colors duration-300"
                        >
                          <Twitter size={16} className="text-white" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                {/* Member details */}
                <div className="p-4 text-center">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{member.name}</h3>
                  <p className="text-primary-500 font-medium text-sm mb-2">{member.role}</p>
                  <div className="inline-block bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                    <span className="text-gray-600 dark:text-gray-300 text-xs">{member.department.charAt(0).toUpperCase() + member.department.slice(1)}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Join the team CTA */}
        <div className="mt-16 text-center animate-on-scroll opacity-0 delay-800">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Interested in joining our team? We're always looking for passionate individuals!
          </p>
          <a
            href="#join"
            className="inline-block px-6 py-3 rounded-lg bg-primary-500 text-white hover:bg-primary-600 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-primary-500/30 font-medium"
          >
            Apply to Join Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Team;