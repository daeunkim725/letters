const CONFIG = {
  // profile setting
  profile: {
    name: 'Daeun Kim',
    image: 'nkim/Downloads/notion-avatar-1672550289008.svg',  // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: 'hello'
    bio: 'I am a student at Princeton University studying Operations Research and Financial Engineering',
    email: 'dk4994@princeton.edu',
    github: 'daeunkim725',
    linkedin: 'https://github.com/daeunkim725',
    instagram: 'daeun_nkim',
  },
  projects: [
    {
      name: 'Untilled',
      href: 'https://untilled.web.app'
    }
  ],
  // blog setting
  blog: {
    title: 'Daeuns Letters',
    description: 'welcome to my website!',
    theme: 'auto' // ['light', 'dark', 'auto']
  },

  // CONFIG configration
  link: 'https://daeun-kim-letters.vercel.app',
  since: 2022, // If leave this empty, current year will be used.
  lang: 'en-US', // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: 'https://og-image-korean.vercel.app', // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ['Blog', 'Website', 'Notion'],
  },

  // notion configuration
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: '' // ex. G-9N3FE0117Q
    }
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: '' // ex. qvdR1gXMirk_DCUOKPgRnxu2x6fqSPrquYnEZZMjR9w
    }
  },
  utterances: {
    enable: true,
    config: {
      repo: 'daeunkim725/letter',
      'issue-term': 'og:title',
      label: '💬 Utterances',
    }
  },
  isProd: process.env.VERCEL_ENV === 'production' // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
module.exports = CONFIG
