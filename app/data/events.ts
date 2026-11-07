// Static event data for IFToMM YFG Events Platform
// This replaces the Wix CMS backend with hardcoded content

export interface YFGEvent {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  date?: string;
  dateFormatted: string;
  location: string;
  venue: string;
  status: 'upcoming' | 'planning' | 'past' | 'cancelled';
  category: 'symposium' | 'conference' | 'summer-school' | 'winter-school';
  registrationUrl?: string;
  websiteUrl?: string;
  imagePlaceholder: string;
}

export interface CommitteeMember {
  name: string;
  country: string;
  role?: string;
  institution?: string;
}

export const SUMMER_SCHOOL: YFGEvent = {
  id: 'summer-school-2027',
  slug: 'summer-school-2027',
  title: 'Mechanisms for Flight',
  subtitle: 'Tokyo Summer School 2027',
  description:
    'Explore mechanism and machine science through two flight projects: a mechanism-based aircraft and a quadrotor.',
  date: '2027-07-05',
  dateFormatted: 'July 5–16, 2027',
  location: 'Tokyo, Japan',
  venue: 'Tokyo Metropolitan University, Hino Campus',
  status: 'planning',
  category: 'summer-school',
  imagePlaceholder: 'SUMMER',
};

export const WINTER_SCHOOL: YFGEvent = {
  id: 'winter-school-2027',
  slug: 'winter-school-2027',
  title: 'IFToMM YFG Winter School 2027',
  subtitle: 'Winter School 2027',
  description:
    'The Young Faculty Group is exploring a 2027 winter school in Chile or elsewhere in Latin America.',
  dateFormatted: 'Dates to be confirmed',
  location: 'Latin America (tentative)',
  venue: 'To be confirmed',
  status: 'planning',
  category: 'winter-school',
  imagePlaceholder: 'WINTER',
};

export const YFG_EVENTS: YFGEvent[] = [
  {
    id: 'yfgs-2026',
    slug: 'yfgs-2026',
    title: 'IFToMM YFGS 2026',
    subtitle: '2nd IFToMM Young Faculty Group Symposium',
    description:
      'The 2nd IFToMM Young Faculty Group Symposium will be held in Monastir, Tunisia. The official SciencesConf website lists conference days on April 15–17, 2026, with submissions, registration, and programme details published there.',
    date: '2026-04-15',
    dateFormatted: 'Apr 15–17, 2026',
    location: 'Monastir, Tunisia',
    venue: 'See official website',
    status: 'upcoming',
    category: 'symposium',
    registrationUrl: '/yfg/registration',
    websiteUrl: 'https://iftomm-yfgs2026.sciencesconf.org',
    imagePlaceholder: 'YFG',
  },
  {
    id: 'yfg-mms-2025',
    slug: 'yfg-mms-2025',
    title: 'IFToMM YFG-MMS 2025',
    subtitle:
      '2nd Symposium on Emerging Fields in Mechanism and Machine Science',
    description:
      'The IFToMM YFG-MMS 2025 Symposium was planned for RWTH Aachen University but was cancelled.',
    date: '2025-09-30',
    dateFormatted: 'Sep 30 – Oct 1, 2025',
    location: 'Aachen, Germany',
    venue: 'RWTH Aachen University',
    status: 'cancelled',
    category: 'symposium',
    imagePlaceholder: 'YFG',
  },
  {
    id: 'hmds-2027',
    slug: 'hmds-2027',
    title: 'HMDS 2027',
    subtitle:
      '2nd International Symposium on Heterogeneous and Multi-Domain Systems',
    description:
      'HMDS 2027 focuses on cutting-edge research in cyber-physical systems integration, multi-domain coordination, advanced robotics, and system interoperability. Features workshops, paper presentations, poster sessions, and cultural activities.',
    date: '2027-03-30',
    dateFormatted: 'Mar 30–Apr 2, 2027',
    location: 'Tokyo, Japan',
    venue: 'Tokyo Metropolitan University, Minami-Osawa Campus',
    status: 'upcoming',
    category: 'conference',
    registrationUrl: '/hmds/registration',
    websiteUrl: 'https://hmds2027.org/',
    imagePlaceholder: 'HMDS',
  },
  {
    id: 'hmds-2025',
    slug: 'hmds-2025',
    title: 'HMDS 2025',
    subtitle:
      '1st International Symposium on Heterogeneous and Multi-Domain Systems',
    description:
      'The inaugural HMDS symposium held at Tokyo Metropolitan University, covering cyber-physical systems, multi-domain coordination, and advanced robotics.',
    date: '2025-06-22',
    dateFormatted: 'Jun 22–26, 2025',
    location: 'Tokyo, Japan',
    venue: 'Tokyo Metropolitan University, Minami-Osawa Campus',
    status: 'past',
    category: 'conference',
    websiteUrl: 'https://hmds2026.vercel.app',
    imagePlaceholder: 'HMDS',
  },
  SUMMER_SCHOOL,
  {
    id: 'yfg-mms-2024',
    slug: 'yfg-mms-2024',
    title: 'IFToMM YFG-MMS 2024',
    subtitle:
      '1st Symposium on Emerging Fields in Mechanism and Machine Science',
    description:
      'The inaugural IFToMM YFG-MMS Online Symposium — a single-track, peer-reviewed event for young faculty members. Each talk was structured as 5 minutes for self-introduction + 10–15 minutes for the research topic.',
    date: '2024-11-19',
    dateFormatted: 'Nov 19–21, 2024',
    location: 'Online',
    venue: 'Online',
    status: 'past',
    category: 'symposium',
    imagePlaceholder: 'ONLINE',
  },
  WINTER_SCHOOL,
];

export const YFG_MMS_2025_DATES = [
  { event: 'Submission start', date: 'Mar 3, 2025' },
  { event: 'Abstract deadline', date: 'Jun 1, 2025' },
  { event: 'Acceptance notification', date: 'Jul 20, 2025' },
  { event: 'Registration deadline', date: 'Sep 7, 2025' },
  { event: 'Symposium', date: 'Sep 30 – Oct 1, 2025' },
];

export const YFG_MMS_2025_ORGANIZING: CommitteeMember[] = [
  { name: 'Claudio Villegas', country: 'Chile' },
  { name: 'Qizhi Meng', country: 'China' },
  { name: 'Christian Mirz', country: 'Germany' },
  { name: 'Sajjad Keshtkar', country: 'Japan' },
];

export const YFG_MMS_2025_TECHNICAL: CommitteeMember[] = [
  { name: 'Saioa Herrero', country: 'Spain' },
  { name: 'Francisco Geu', country: 'Germany' },
  { name: 'Mariana Rodrigues', country: 'Portugal' },
  { name: 'Pau Català', country: 'Spain' },
  { name: 'Michał Olinski', country: 'Poland' },
  { name: 'Jiang Ming', country: 'Japan' },
  { name: 'Daniel Lavayen', country: 'Peru' },
  { name: 'Onur Denizhan', country: 'Türkiye' },
  { name: 'María Contreras', country: 'Mexico' },
];

export const YFG_MMS_2024_ORGANIZING: CommitteeMember[] = [
  { name: 'Francisco Geu Flores', country: 'Germany' },
  { name: 'Sajjad Keshtkar', country: 'Japan' },
  { name: 'Claudio Villegas', country: 'Chile' },
];

export const YFG_MMS_2024_TECHNICAL: CommitteeMember[] = [
  { name: 'Cristina Castejón', country: 'Spain' },
  { name: 'Pau Català', country: 'Spain' },
  { name: 'Onur Denizhan', country: 'Turkey' },
  { name: 'Saioa Herrero', country: 'Spain' },
  { name: 'Andres Kecskemethy', country: 'Germany' },
  { name: 'Qizhi Meng', country: 'China' },
  { name: 'Jiang Ming', country: 'Japan' },
];

export const HMDS_TOPICS = [
  'System Integration & Interoperability',
  'Multi-Domain Control & Coordination',
  'Modeling, Simulation & Design',
  'Cyber-Physical Systems & IoT',
  'Autonomous Systems & AI',
  'Bio-Hybrid Robotics',
  'Digital Twins & Prototyping',
  'Medical Mechatronics',
  'Sensor Fusion & Data Integration',
  'Machine Learning for System Integration',
];

export const HMDS_ORGANIZING: CommitteeMember[] = [
  {
    name: 'Prof. Hirohisa Kojima',
    country: 'Japan',
    role: 'Chair',
    institution: 'Tokyo Metropolitan University',
  },
  {
    name: 'Sajjad Keshtkar',
    country: 'Japan',
    institution: 'Tokyo Metropolitan University',
  },
  {
    name: 'Claudio Villegas',
    country: 'Chile',
    institution: 'University of Bío-Bío',
  },
  {
    name: 'Jiang Ming',
    country: 'Japan',
    institution: 'Tokyo Institute of Technology',
  },
];

export const HMDS_TECHNICAL: CommitteeMember[] = [
  {
    name: 'Francisco Geu Flores',
    country: 'Germany',
    institution: 'University of Duisburg-Essen',
  },
  {
    name: 'Sergio Fuentes del Toro',
    country: 'Spain',
    institution: 'Universidad Carlos III de Madrid',
  },
  {
    name: 'Hironi Sahara',
    country: 'Japan',
    institution: 'Tokyo Metropolitan University',
  },
  {
    name: 'Fernando Viadero Monasterio',
    country: 'Spain',
    institution: 'Universidad Carlos III de Madrid',
  },
  {
    name: 'Mariana Rodrigues',
    country: 'Portugal',
    institution: 'University of Porto',
  },
  {
    name: 'Eusebio Hernandez Martinez',
    country: 'Mexico',
    institution: 'Instituto Politécnico Nacional',
  },
  {
    name: 'Pau Català',
    country: 'Spain',
    institution: 'Universitat Politècnica de Catalunya',
  },
  {
    name: 'Irandi Gutiérrez Carmona',
    country: 'Mexico',
    institution: 'Tecnológico de Monterrey',
  },
  {
    name: 'Arturo Diaz Ponce',
    country: 'Mexico',
    institution: 'Centro de Investigaciones en Óptica',
  },
  {
    name: 'Iván Trejo Zúñiga',
    country: 'Mexico',
    institution: 'Universidad Tecnológica de San Juan del Río',
  },
];

export const MMS_TOPICS = [
  'Biomechanical Engineering',
  'Computational Kinematics',
  'Engines and Power Trains',
  'Gearing and Transmissions',
  'Linkages and Mechanical Controls',
  'Micromachines',
  'Multibody Dynamics',
  'Reliability',
  'Robotics and Mechatronics',
  'Rotor Dynamics',
  'Sustainable Energy Systems',
  'Transportation Machinery',
  'Tribology',
  'Vibrations',
  'Education',
  'History of MMS',
  'Sustainability',
];
