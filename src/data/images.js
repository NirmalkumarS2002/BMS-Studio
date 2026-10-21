// Placeholder photos (seeded, so they stay stable). Swap each URL for your own image.
const p = (seed, w = 800, h = 800) => `https://picsum.photos/seed/photolio-${seed}/${w}/${h}`;

export const images = {
  hero: p("hero", 1920, 1100),
  heroCard1: p("iceland", 240, 260),
  heroCard2: p("balloon", 240, 260),

  projects: {
    wedding: p("wedding", 900, 1000),
    tech: p("tech", 900, 800),
    vogue: p("vogue", 900, 800),
    realEstate: p("estate", 900, 800),
    jewelry: p("jewelry", 900, 800),
    family: p("family", 900, 1000),
  },

  experience: [p("exp-1", 600, 720), p("exp-2", 600, 720), p("exp-3", 600, 720)],
  experiencePill: p("pill", 220, 100),

  services: {
    portrait: p("portrait", 800, 940),
    wedding: p("svc-wedding", 800, 940),
    commercial: p("commercial", 800, 940),
    event: p("event", 800, 940),
    editorial: p("editorial", 800, 940),
    architectural: p("architecture", 800, 940),
  },

  processVideo: p("process", 640, 400),
  processVideoSrc: "", // e.g. "/videos/process.mp4" – leave empty to hide the player source

  avatars: [p("avatar-1", 100, 100), p("avatar-2", 100, 100)],
  testimonialFeature: p("david", 900, 700),

  awards: [p("award-1", 440, 500), p("award-2", 440, 500), p("award-3", 440, 500), p("award-4", 440, 500)],

  blog: [p("blog-1", 800, 800), p("blog-2", 800, 800), p("blog-3", 800, 800)],

  ctaLeft: p("cta-left", 600, 800),
  ctaRight: p("cta-right", 600, 800),
};
