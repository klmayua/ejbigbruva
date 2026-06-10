export interface RouteMeta {
  path: string;
  title: string;
  description: string;
}

export const routes: Record<string, RouteMeta> = {
  home: {
    path: '/',
    title: 'EJTheVoice | Ejike Ibedilo Institutional',
    description: 'Broadcaster. Storyteller. Mentor. Voice of Generations.'
  },
  about: {
    path: '/about',
    title: 'About | EJTheVoice - Ejike Ibedilo',
    description: 'The Man Behind The Voice. Redefining the landscape of modern broadcasting.'
  },
  legacy: {
    path: '/legacy',
    title: 'Legacy | EJTheVoice - Ejike Ibedilo',
    description: 'Over four decades of broadcasting, mentorship, and cultural influence.'
  },
  media: {
    path: '/media',
    title: 'Media Repository | EJTheVoice',
    description: 'Archive of recordings, broadcasts, and masterclasses.'
  },
  movies: {
    path: '/movies',
    title: 'The Cinematic Archive | EJTheVoice',
    description: 'Exploring Ejike Ibedilo\'s contributions to film and political thriller storytelling.'
  },
  voice: {
    path: '/voice',
    title: 'Voice Demos & Narration | EJTheVoice',
    description: 'Listen to the Poise, Depth, and persuasive resonance of the voice.'
  },
  events: {
    path: '/events',
    title: 'Keynotes & Appearances | EJTheVoice',
    description: 'Upcoming schedules, roundtables, and public broadcasts.'
  },
  gallery: {
    path: '/gallery',
    title: 'Visual Chronicles | EJTheVoice',
    description: 'Photographic archive of a historic media career.'
  },
  community: {
    path: '/community',
    title: 'Circle of Influence | EJTheVoice',
    description: 'Mentorship network, masterclass registries, and forums.'
  },
  press: {
    path: '/press',
    title: 'Press & Media Kit | EJTheVoice',
    description: 'Standardized credentials, biographies, and assets.'
  },
  contact: {
    path: '/contact',
    title: 'Acquisition & Booking | EJTheVoice',
    description: 'Inquire for institutional voice work, keynote speeches, and mentoring registries.'
  }
};
