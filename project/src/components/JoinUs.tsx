import { useState, useEffect, useRef } from 'react';
import { CheckCircle, AlertCircle } from 'lucide-react';

const JoinUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    year: '',
    major: '',
    interest: '',
    experience: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const sectionRef = useRef<HTMLElement | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when field is edited
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    
    // Validate year
    if (!formData.year) {
      newErrors.year = 'Year of study is required';
    }
    
    // Validate major
    if (!formData.major.trim()) {
      newErrors.major = 'Major is required';
    }
    
    // Validate interest
    if (!formData.interest) {
      newErrors.interest = 'Area of interest is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitStatus('success');
        
        // Reset form after success
        setFormData({
          name: '',
          email: '',
          year: '',
          major: '',
          interest: '',
          experience: '',
          message: ''
        });
        
        // Reset status after 5 seconds
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 5000);
      }, 1500);
    }
  };

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
  }, []);

  return (
    <section 
      id="join" 
      ref={sectionRef}
      className="py-24 bg-white dark:bg-gray-800 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary-500/5 rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-secondary-500/5 rounded-tr-full"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-on-scroll opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 dark:text-white mb-4">
            Join <span className="text-primary-500">TechNova</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Become part of our vibrant community of tech enthusiasts and innovators.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden animate-on-scroll opacity-0 delay-200">
          <div className="md:flex">
            {/* Left side - Benefits */}
            <div className="md:w-2/5 bg-gradient-to-br from-primary-500 to-secondary-600 p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Benefits of Joining</h3>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle size={20} className="mt-1 mr-2 flex-shrink-0" />
                  <p>Access to workshops, hackathons, and exclusive tech events</p>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="mt-1 mr-2 flex-shrink-0" />
                  <p>Networking opportunities with industry professionals</p>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="mt-1 mr-2 flex-shrink-0" />
                  <p>Hands-on experience with cutting-edge technologies</p>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="mt-1 mr-2 flex-shrink-0" />
                  <p>Mentorship from experienced peers and alumni</p>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="mt-1 mr-2 flex-shrink-0" />
                  <p>Opportunities to work on real-world projects</p>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="mt-1 mr-2 flex-shrink-0" />
                  <p>Leadership and personal development opportunities</p>
                </li>
              </ul>
              
              <div className="mt-8 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <p className="font-medium">Open to all students regardless of major or experience level!</p>
              </div>
            </div>
            
            {/* Right side - Application Form */}
            <div className="md:w-3/5 p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Application Form</h3>
              
              {submitStatus === 'success' ? (
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 flex items-start">
                  <CheckCircle className="text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-green-800 dark:text-green-400">Application submitted successfully!</p>
                    <p className="text-green-700 dark:text-green-300 mt-1 text-sm">Thank you for your interest in joining TechNova. We'll review your application and get back to you soon.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 rounded-lg border ${
                        errors.name 
                          ? 'border-red-500 dark:border-red-500' 
                          : 'border-gray-300 dark:border-gray-600'
                      } bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200`}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500 flex items-center">
                        <AlertCircle size={14} className="mr-1" /> {errors.name}
                      </p>
                    )}
                  </div>
                  
                  {/* Email field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 rounded-lg border ${
                        errors.email 
                          ? 'border-red-500 dark:border-red-500' 
                          : 'border-gray-300 dark:border-gray-600'
                      } bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200`}
                      placeholder="john.doe@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500 flex items-center">
                        <AlertCircle size={14} className="mr-1" /> {errors.email}
                      </p>
                    )}
                  </div>
                  
                  {/* Year and Major fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="year" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Year of Study *
                      </label>
                      <select
                        id="year"
                        name="year"
                        value={formData.year}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 rounded-lg border ${
                          errors.year 
                            ? 'border-red-500 dark:border-red-500' 
                            : 'border-gray-300 dark:border-gray-600'
                        } bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200`}
                      >
                        <option value="">Select Year</option>
                        <option value="1">First Year</option>
                        <option value="2">Second Year</option>
                        <option value="3">Third Year</option>
                        <option value="4">Fourth Year</option>
                        <option value="5+">Fifth Year or Above</option>
                      </select>
                      {errors.year && (
                        <p className="mt-1 text-sm text-red-500 flex items-center">
                          <AlertCircle size={14} className="mr-1" /> {errors.year}
                        </p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="major" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Major/Program *
                      </label>
                      <input
                        type="text"
                        id="major"
                        name="major"
                        value={formData.major}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 rounded-lg border ${
                          errors.major 
                            ? 'border-red-500 dark:border-red-500' 
                            : 'border-gray-300 dark:border-gray-600'
                        } bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200`}
                        placeholder="Computer Science"
                      />
                      {errors.major && (
                        <p className="mt-1 text-sm text-red-500 flex items-center">
                          <AlertCircle size={14} className="mr-1" /> {errors.major}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  {/* Interest and Experience fields */}
                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Area of Interest *
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 rounded-lg border ${
                        errors.interest 
                          ? 'border-red-500 dark:border-red-500' 
                          : 'border-gray-300 dark:border-gray-600'
                      } bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200`}
                    >
                      <option value="">Select Interest</option>
                      <option value="Web Development">Web Development</option>
                      <option value="Mobile Development">Mobile Development</option>
                      <option value="AI/Machine Learning">AI/Machine Learning</option>
                      <option value="Game Development">Game Development</option>
                      <option value="UI/UX Design">UI/UX Design</option>
                      <option value="Data Science">Data Science</option>
                      <option value="Cybersecurity">Cybersecurity</option>
                      <option value="Event Management">Event Management</option>
                      <option value="Content Creation">Content Creation</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.interest && (
                      <p className="mt-1 text-sm text-red-500 flex items-center">
                        <AlertCircle size={14} className="mr-1" /> {errors.interest}
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="experience" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Experience Level
                    </label>
                    <select
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                    >
                      <option value="">Select Experience</option>
                      <option value="Beginner">Beginner - Just starting out</option>
                      <option value="Intermediate">Intermediate - Some experience</option>
                      <option value="Advanced">Advanced - Experienced</option>
                      <option value="Expert">Expert - Professional level</option>
                    </select>
                  </div>
                  
                  {/* Message field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Tell us why you want to join (optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                      placeholder="Share your motivation for joining TechNova..."
                    ></textarea>
                  </div>
                  
                  {/* Submit button */}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 px-4 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg transition-colors duration-200 focus:ring-4 focus:ring-primary-500/50 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:bg-primary-500"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Application'}
                    </button>
                  </div>
                  
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Fields marked with * are required.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;