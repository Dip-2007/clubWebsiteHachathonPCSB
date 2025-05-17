import { Event } from '../types';

export const events: Event[] = [
  {
    id: 1,
    title: 'Annual Hackathon 2025',
    date: 'March 15-16, 2025',
    location: 'University Main Campus',
    description: 'Our flagship 36-hour hackathon where students collaborate to solve real-world problems. This year\'s theme is "Tech for Sustainable Development". Join us for coding, workshops, mentorship sessions, and amazing prizes!',
    image: 'https://images.pexels.com/photos/7096/people-woman-coffee-meeting.jpg?auto=compress&cs=tinysrgb&w=600',
    category: 'hackathon',
    isUpcoming: true,
    registerLink: '#register'
  },
  {
    id: 2,
    title: 'Web Development Workshop Series',
    date: 'February 5-26, 2025',
    location: 'Tech Building, Room 302',
    description: 'A four-part workshop series covering the fundamentals of modern web development. Learn HTML, CSS, JavaScript, and React through hands-on exercises and real project implementation.',
    image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'workshop',
    isUpcoming: true,
    registerLink: '#register'
  },
  {
    id: 3,
    title: 'Tech Talk: AI and the Future of Work',
    date: 'January 20, 2025',
    location: 'Virtual Event',
    description: 'Join us for an insightful discussion with industry experts on how artificial intelligence is reshaping the future of work and what skills will be essential in the coming decade.',
    image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'meetup',
    isUpcoming: true,
    registerLink: '#register'
  },
  {
    id: 4,
    title: 'Open Source Contribution Day',
    date: 'December 10, 2024',
    location: 'Innovation Lab',
    description: 'A day dedicated to contributing to open source projects. Experienced mentors will guide beginners through their first contributions while advanced developers can collaborate on solving complex issues.',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'workshop',
    isUpcoming: false
  },
  {
    id: 5,
    title: 'Tech Innovation Conference',
    date: 'November 5-7, 2024',
    location: 'City Convention Center',
    description: 'Our annual conference featuring keynote speakers from leading tech companies, panel discussions, technical workshops, and networking opportunities with industry professionals.',
    image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'conference',
    isUpcoming: false
  },
  {
    id: 6,
    title: 'Game Development Bootcamp',
    date: 'October 15-22, 2024',
    location: 'Creative Arts Building',
    description: 'An intensive one-week bootcamp covering game design principles, Unity development, 3D modeling basics, and game publishing. Participants will create their own mini-game by the end of the program.',
    image: 'https://images.pexels.com/photos/1293261/pexels-photo-1293261.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'workshop',
    isUpcoming: false
  }
];