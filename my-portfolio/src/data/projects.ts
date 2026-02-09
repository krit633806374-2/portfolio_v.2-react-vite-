export type ProjectCategory = 'all' | 'design';

export interface Project {
  id: string;
  category: ProjectCategory;
  title: string;
  techStack: string[];
  summary: string;
  sampleImages?: string[];
  paperImages?: string[]; // รูปภาพที่แสดงในกระดาษของ Folder (สูงสุด 3 ใบ)
  projectUrl?: string; // ลิงก์ไปยัง GitHub (all) หรือ Figma (design)
}

export const projects: Project[] = [
  {
    id: 'Doctora',
    category: 'all',
    title: 'Doctora',
    techStack: ['Next.js', 'Spring Boot', 'TypeScript', 'PostgresSQL'],
    summary: 'A full-stack health platform that streamlines clinic workflows and patient management.',
    paperImages: ['/next.png', '/fm.png', '/node']
  },
  {
    id: 'DoctoraMobile',
    category: 'all',
    title: 'Doctora Mobile',
    techStack: ['React Native', 'TypeScript', 'Expo', 'REST'],
    summary: 'Mobile companion app for on-the-go consultations and appointment tracking.',
    paperImages: ['/rc.png', '/fm.png', '/node']
  },
  {
    id: 'PharmacyPOS',
    category: 'all',
    title: 'Phamacy POS',
    techStack: ['React', 'Tailwind', 'Prisma'],
    summary: 'Point-of-sale interface for pharmacies with inventory and sales reporting.',
    paperImages: ['/rc.png', '/tw.png']
  },
  {
    id: 'EatAtHome',
    category: 'all',
    title: 'EatAtHome',
    techStack: ['Figma', 'Framer'],
    summary: 'Product design case study for a food delivery experience.',
    paperImages: ['/fm.png', '/canva.png']
  },
  {
    id: 'FaceCheck',
    category: 'all',
    title: 'FaceCheck',
    techStack: ['Figma', 'Illustrator'],
    summary: 'Identity verification concept focused on safe user onboarding.',
    paperImages: ['/fm.png']
  },
  {
    id: 'RealTimeChat',
    category: 'all',
    title: 'Real Time Chat',
    techStack: ['Photoshop', 'After Effects'],
    summary: 'Motion-driven visual concept for a real-time chat brand.',
    paperImages: ['/canva.png']
  },
  {
    id: 'EatAtHome-Design',
    category: 'design',
    title: 'Eat At Home',
    techStack: ['Figma', 'Canva'],
    summary: 'Product design for an at-home food delivery experience.',
    paperImages: ['/Design/EatAtHome/77.jpg', '/Design/EatAtHome/9.jpg', '/Design/EatAtHome/1.jpg'],
    projectUrl: 'https://www.figma.com/design/SwBG8jvC401Z73mbVAxx18/EatAtHome?node-id=0-1&m=dev&t=haJLaFFp03D05Olk-1',
    sampleImages: [
      '/Design/EatAtHome/1.jpg',
      '/Design/EatAtHome/2.jpg',
      '/Design/EatAtHome/3.jpg',
      '/Design/EatAtHome/4.jpg',
      '/Design/EatAtHome/5.jpg',
      '/Design/EatAtHome/66.jpg',
      '/Design/EatAtHome/77.jpg',
      '/Design/EatAtHome/8.jpg',
      '/Design/EatAtHome/9.jpg',
      '/Design/EatAtHome/10.jpg',
      '/Design/EatAtHome/11.jpg',
      '/Design/EatAtHome/12.jpg',
      '/Design/EatAtHome/13.jpg',
      '/Design/EatAtHome/14.jpg',
      '/Design/EatAtHome/15.jpg',
      '/Design/EatAtHome/16.jpg',
      '/Design/EatAtHome/17.jpg',
      '/Design/EatAtHome/18.jpg',
      '/Design/EatAtHome/20.jpg',
      '/Design/EatAtHome/21.jpg',
      '/Design/EatAtHome/22.jpg',
      '/Design/EatAtHome/23.jpg',
      '/Design/EatAtHome/24.jpg',
      '/Design/EatAtHome/25.jpg',
      '/Design/EatAtHome/26.jpg',
    ]
  },
  {
    id: 'Doctora-Design',
    category: 'design',
    title: 'Doctora',
    techStack: ['Figma'],
    summary: 'Design system and UX flows for clinic scheduling.',
    paperImages: ['/Design/Doctora/1.jpg', '/Design/Doctora/12.jpg', '/Design/Doctora/10.jpg'],
    projectUrl: 'https://www.figma.com/design/qTf5bGDSNlYPHPKEhrCd5x/Doctora--Web-Application-?node-id=3-37&m=dev&t=jEIVlYfSSS9PSXGb-1',
    sampleImages: [
      '/Design/Doctora/1.jpg',
      '/Design/Doctora/2.jpg',
      '/Design/Doctora/3.jpg',
      '/Design/Doctora/4.jpg',
      '/Design/Doctora/5.jpg',
      '/Design/Doctora/6.jpg',
      '/Design/Doctora/7.jpg',
      '/Design/Doctora/8.jpg',
      '/Design/Doctora/9.jpg',
      '/Design/Doctora/10.jpg',
      '/Design/Doctora/11.jpg',
      '/Design/Doctora/12.jpg',
    ]
  },
  {
    id: 'DoctoraMobile-Design',
    category: 'design',
    title: 'Doctora Mobile',
    techStack: ['Figma'],
    summary: 'Mobile-first UX prototypes for patient interactions.',
    paperImages: ['/Design/Doctora%20Mobile/3.jpg', '/Design/Doctora%20Mobile/9.jpg', '/Design/Doctora%20Mobile/10.jpg'],
    projectUrl: 'https://www.figma.com/design/BlrJrEzooCjfBLSv7XOFhd/Doctora--Mobile-?node-id=0-1&m=dev&t=Bc9CqN2cUKeLy56o-1',
    sampleImages: [
      '/Design/Doctora%20Mobile/1.jpg',
      '/Design/Doctora%20Mobile/2.jpg',
      '/Design/Doctora%20Mobile/3.jpg',
      '/Design/Doctora%20Mobile/4.jpg',
      '/Design/Doctora%20Mobile/5.jpg',
      '/Design/Doctora%20Mobile/6.jpg',
      '/Design/Doctora%20Mobile/7.jpg',
      '/Design/Doctora%20Mobile/8.jpg',
      '/Design/Doctora%20Mobile/9.jpg',
      '/Design/Doctora%20Mobile/10.jpg',
      '/Design/Doctora%20Mobile/11.jpg'
    ]
  },
  {
    id: 'EliteTutor',
    category: 'design',
    title: 'Elite Tutor',
    techStack: ['Figma'],
    summary: 'Education marketplace UX for booking tutors.',
    paperImages: ['/Design/EliteTutor/7.jpg', '/Design/EliteTutor/11.jpg', '/Design/EliteTutor/1.jpg'],
    projectUrl: 'https://www.figma.com/design/YBB9t4B1BeufhU6jBCSUXC/Elite-Tutor?node-id=0-1&m=dev&t=nju3veoOXHGz12rF-1',
    sampleImages: [
      '/Design/EliteTutor/1.jpg',
      '/Design/EliteTutor/2.jpg',
      '/Design/EliteTutor/3.jpg',
      '/Design/EliteTutor/4.jpg',
      '/Design/EliteTutor/5.jpg',
      '/Design/EliteTutor/6.jpg',
      '/Design/EliteTutor/7.jpg',
      '/Design/EliteTutor/8.jpg',
      '/Design/EliteTutor/9.jpg',
      '/Design/EliteTutor/10.jpg',
      '/Design/EliteTutor/11.jpg',
      '/Design/EliteTutor/12.jpg',
      '/Design/EliteTutor/13.jpg',
      '/Design/EliteTutor/14.jpg',
      '/Design/EliteTutor/15.jpg',
    ]
  },
  {
    id: 'LaundryTracker',
    category: 'design',
    title: 'Laundry Tracker',
    techStack: ['Figma'],
    summary: 'Service design for tracking laundry pickup and delivery.',
    paperImages: ['/Design/LaundryTracker/1.jpg', '/Design/LaundryTracker/6.jpg', '/Design/LaundryTracker/3.jpg'],
    projectUrl: 'https://www.figma.com/design/azSBMRLhdAVTauFyCcdcBX/Laundry-Tracker?node-id=0-1&m=dev&t=R8vS8DVg0BzY4KD2-1',
    sampleImages: [
      '/Design/LaundryTracker/1.jpg',
      '/Design/LaundryTracker/2.jpg',
      '/Design/LaundryTracker/3.jpg',
      '/Design/LaundryTracker/4.jpg',
      '/Design/LaundryTracker/5.jpg',
      '/Design/LaundryTracker/6.jpg',
      '/Design/LaundryTracker/7.jpg',
      '/Design/LaundryTracker/8.jpg',
      '/Design/LaundryTracker/9.jpg',
      '/Design/LaundryTracker/10.jpg',
      '/Design/LaundryTracker/11.jpg',
    ]
  },
  {
    id: 'RealTimeChat-Design',
    category: 'design',
    title: 'RealTimeChat',
    techStack: ['Figma'],
    summary: 'UI/UX concept for a chat platform.',
    paperImages: ['/Design/RealTimeChat/1.jpg'],
    projectUrl: 'https://www.figma.com/design/X5HJLxx5X85UHpEgcGEnWo/RealTimeChat?node-id=0-1&m=dev&t=xsFUg1wuoEILluai-1',
    sampleImages: [
      '/Design/RealTimeChat/1.jpg'
    ]
  }
];
