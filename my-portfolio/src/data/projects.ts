export type ProjectCategory = 'all' | 'design';

export interface Project {
  id: string;
  category: ProjectCategory;
  title: string;
  techStack: string[];
  summary: string;
  highlights: string[];
  sampleImages?: string[];
}

export const projects: Project[] = [
  {
    id: 'featured-1',
    category: 'all',
    title: 'Doctora',
    techStack: ['Next.js', 'Spring Boot', 'TypeScript', 'PostgresSQL'],
    summary: 'A full-stack health platform that streamlines clinic workflows and patient management.',
    highlights: ['Appointment scheduling', 'Doctor dashboards', 'Secure patient data']
  },
  {
    id: 'featured-2',
    category: 'all',
    title: 'Doctora Mobile',
    techStack: ['React Native', 'TypeScript', 'Expo', 'REST'],
    summary: 'Mobile companion app for on-the-go consultations and appointment tracking.',
    highlights: ['Push notifications', 'Appointment tracking', 'Fast REST integration']
  },
  {
    id: 'featured-3',
    category: 'all',
    title: 'Phamacy POS',
    techStack: ['React', 'Tailwind', 'Prisma'],
    summary: 'Point-of-sale interface for pharmacies with inventory and sales reporting.',
    highlights: ['Inventory management', 'Sales insights', 'Responsive POS UI']
  },
  {
    id: 'featured-4',
    category: 'all',
    title: 'EatAtHome',
    techStack: ['Figma', 'Framer'],
    summary: 'Product design case study for a food delivery experience.',
    highlights: ['UX flow design', 'High-fidelity prototyping', 'Brand exploration']
  },
  {
    id: 'featured-5',
    category: 'all',
    title: 'FaceCheck',
    techStack: ['Figma', 'Illustrator'],
    summary: 'Identity verification concept focused on safe user onboarding.',
    highlights: ['UI kit creation', 'Illustrated assets', 'Persona-driven UX']
  },
  {
    id: 'featured-6',
    category: 'all',
    title: 'Real Time Chat',
    techStack: ['Photoshop', 'After Effects'],
    summary: 'Motion-driven visual concept for a real-time chat brand.',
    highlights: ['Motion studies', 'Visual direction', 'Brand exploration']
  },
  {
    id: 'design-1',
    category: 'design',
    title: 'Doctora',
    techStack: ['Figma'],
    summary: 'Design system and UX flows for clinic scheduling.',
    highlights: ['UI system', 'User journeys', 'Component library']
  },
  {
    id: 'design-2',
    category: 'design',
    title: 'Doctora Mobile',
    techStack: ['Figma'],
    summary: 'Mobile-first UX prototypes for patient interactions.',
    highlights: ['Mobile flows', 'Prototype testing', 'Interface polish']
  },
  {
    id: 'design-3',
    category: 'design',
    title: 'Eat At Home',
    techStack: ['Figma', 'Canva'],
    summary: 'Product design for an at-home food delivery experience.',
    highlights: ['Wireframes', 'Design iterations', 'Presentation deck']
  },
  {
    id: 'design-4',
    category: 'design',
    title: 'Elite Tutor',
    techStack: ['Figma'],
    summary: 'Education marketplace UX for booking tutors.',
    highlights: ['Booking flow', 'Tutor discovery', 'Brand guidelines']
  },
  {
    id: 'design-5',
    category: 'design',
    title: 'Laundry Tracker',
    techStack: ['Figma'],
    summary: 'Service design for tracking laundry pickup and delivery.',
    highlights: ['Service blueprint', 'Task flows', 'Micro-interactions']
  },
  {
    id: 'design-6',
    category: 'design',
    title: 'Real Time Chat',
    techStack: ['Figma'],
    summary: 'UI/UX concept for a chat platform.',
    highlights: ['Messaging UI', 'Interaction states', 'Icon exploration']
  }
];
