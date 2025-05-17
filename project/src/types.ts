// Type definitions

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  department: 'leadership' | 'development' | 'design' | 'content' | 'outreach';
  image: string;
  socialLinks: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
}

export interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
  category: 'workshop' | 'hackathon' | 'meetup' | 'conference';
  isUpcoming: boolean;
  registerLink?: string;
}

export interface NavLink {
  title: string;
  path: string;
}