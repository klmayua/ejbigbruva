export interface RouteMeta {
  path: string;
  title: string;
  description: string;
}

export const routes: Record<string, RouteMeta> = {
  home: {
    path: '/',
    title: 'BIGBRUVA | Ejike Ebidilo Institutional',
    description: 'Broadcaster. Storyteller. Mentor. Voice of Generations.'
  },
  about: {
    path: '/about',
    title: 'About | BIGBRUVA - Ejike Ebidilo',
    description: 'The Man Behind The Voice. Redefining the landscape of modern broadcasting.'
  },
  legacy: {
    path: '/legacy',
    title: 'Legacy | BIGBRUVA - Ejike Ebidilo',
    description: 'Over four decades of broadcasting, mentorship, and cultural influence.'
  },
  media: {
    path: '/media',
    title: 'Media Repository | BIGBRUVA',
    description: 'Archive of recordings, broadcasts, and masterclasses.'
  },
  movies: {
    path: '/movies',
    title: 'The Cinematic Archive | BIGBRUVA',
    description: 'Exploring Ejike Ebidilo\'s contributions to film and political thriller storytelling.'
  },
  voice: {
    path: '/voice',
    title: 'Voice Demos & Narration | BIGBRUVA',
    description: 'Listen to the Poise, Depth, and persuasive resonance of the voice.'
  },
  events: {
    path: '/events',
    title: 'Keynotes & Appearances | BIGBRUVA',
    description: 'Upcoming schedules, roundtables, and public broadcasts.'
  },
  gallery: {
    path: '/gallery',
    title: 'Visual Chronicles | BIGBRUVA',
    description: 'Photographic archive of a historic media career.'
  },
  community: {
    path: '/community',
    title: 'Circle of Influence | BIGBRUVA',
    description: 'Mentorship network, masterclass registries, and forums.'
  },
  press: {
    path: '/press',
    title: 'Press & Media Kit | BIGBRUVA',
    description: 'Standardized credentials, biographies, and assets.'
  },
  contact: {
    path: '/contact',
    title: 'Acquisition & Booking | BIGBRUVA',
    description: 'Inquire for institutional voice work, keynote speeches, and mentoring registries.'
  }
};
