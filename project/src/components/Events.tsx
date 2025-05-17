import { useState, useEffect, useRef } from 'react';
import { events } from '../data/eventsData';
import { Event } from '../types';
import { Calendar, MapPin, ChevronRight, ExternalLink } from 'lucide-react';

const Events: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedEventId, setExpandedEventId] = useState<number | null>(null);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>(events);
  const sectionRef = useRef<HTMLElement | null>(null);

  const categories = [
    { id: 'all', label: 'All Events' },
    { id: 'upcoming', label: 'Upcoming' },
    { id: 'past', label: 'Past Events' },
    { id: 'workshop', label: 'Workshops' },
    { id: 'hackathon', label: 'Hackathons' },
    { id: 'meetup', label: 'Meetups' },
    { id: 'conference', label: 'Conferences' }
  ];

  // Filter events based on selected category
  useEffect(() => {
    let filtered = events;
    
    if (selectedCategory === 'upcoming') {
      filtered = events.filter(event => event.isUpcoming);
    } else if (selectedCategory === 'past') {
      filtered = events.filter(event => !event.isUpcoming);
    } else if (selectedCategory !== 'all') {
      filtered = events.filter(event => event.category === selectedCategory);
    }
    
    setFilteredEvents(filtered);
  }, [selectedCategory]);

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
  }, [filteredEvents]);

  const toggleEventExpansion = (id: number) => {
    if (expandedEventId === id) {
      setExpandedEventId(null);
    } else {
      setExpandedEventId(id);
    }
  };

  return (
    <section 
      id="events" 
      ref={sectionRef}
      className="py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-on-scroll opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 dark:text-white mb-4">
            Our <span className="text-primary-500">Events</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Discover our exciting lineup of events designed to inspire, educate, and connect the tech community.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 overflow-x-auto pb-2 animate-on-scroll opacity-0">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                selectedCategory === cat.id
                  ? 'bg-primary-500 text-white shadow-md'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Events */}
        <div className="space-y-8">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event, index) => (
              <div 
                key={event.id}
                className={`animate-on-scroll opacity-0 delay-${index * 100} bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl group`}
              >
                <div className="md:flex">
                  {/* Event image */}
                  <div className="md:w-1/3 relative h-48 md:h-auto overflow-hidden">
                    <div className={`absolute top-2 left-2 z-10 px-3 py-1 rounded-full text-xs font-medium ${
                      event.isUpcoming 
                        ? 'bg-success-500 text-white' 
                        : 'bg-gray-500 text-white'
                    }`}>
                      {event.isUpcoming ? 'Upcoming' : 'Past Event'}
                    </div>
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  
                  {/* Event details */}
                  <div className="md:w-2/3 p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="inline-block bg-primary-500/10 dark:bg-primary-500/20 text-primary-600 dark:text-primary-400 px-3 py-1 rounded-full text-xs font-medium">
                        {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-200 group-hover:text-primary-500 dark:group-hover:text-primary-400">
                      {event.title}
                    </h3>
                    
                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center text-gray-600 dark:text-gray-300">
                        <Calendar size={16} className="mr-1" />
                        <span className="text-sm">{event.date}</span>
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-300">
                        <MapPin size={16} className="mr-1" />
                        <span className="text-sm">{event.location}</span>
                      </div>
                    </div>
                    
                    <div 
                      className={`text-gray-600 dark:text-gray-300 text-sm overflow-hidden transition-all duration-300 ${
                        expandedEventId === event.id ? 'max-h-96' : 'max-h-20'
                      }`}
                    >
                      <p>{event.description}</p>
                    </div>
                    
                    <div className="mt-4 flex flex-wrap gap-4 items-center">
                      <button
                        onClick={() => toggleEventExpansion(event.id)}
                        className="text-primary-500 dark:text-primary-400 flex items-center text-sm font-medium hover:underline"
                      >
                        {expandedEventId === event.id ? 'Show less' : 'Read more'} 
                        <ChevronRight size={16} className={`ml-1 transition-transform duration-300 ${
                          expandedEventId === event.id ? 'rotate-90' : ''
                        }`} />
                      </button>
                      
                      {event.registerLink && event.isUpcoming && (
                        <a
                          href={event.registerLink}
                          className="px-4 py-2 rounded-lg bg-primary-500 text-white hover:bg-primary-600 transition-all duration-300 text-sm font-medium flex items-center"
                        >
                          Register Now <ExternalLink size={14} className="ml-1" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-8 animate-on-scroll opacity-0">
              <p className="text-gray-600 dark:text-gray-300">No events found for the selected category.</p>
            </div>
          )}
        </div>
        
        {/* Propose an event CTA */}
        <div className="mt-16 text-center animate-on-scroll opacity-0 delay-800">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Have an idea for an event? We're open to suggestions!
          </p>
          <a
            href="#contact"
            className="inline-block px-6 py-3 rounded-lg bg-primary-500 text-white hover:bg-primary-600 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-primary-500/30 font-medium"
          >
            Propose an Event
          </a>
        </div>
      </div>
    </section>
  );
};

export default Events;