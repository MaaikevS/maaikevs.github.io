// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "Blog",
          description: "A collection of events, notes and thoughts",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "Publications by categories in reversed chronological order",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "A short CV and downloadable pdf",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-agent-based-models",
      
        title: "Agent-Based Models",
      
      description: "What are ABMs and how to implement them",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/abm/";
        
      },
    },{id: "post-euracan-39-s-participation-at-ohdsi-europe-symposium-advancing-collaborative-cancer-research",
      
        title: "EURACAN&#39;s Participation at OHDSI Europe Symposium - Advancing Collaborative Cancer Research",
      
      description: "Invited Talk and Panel Discussion at OHDSI Europe 2023",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/OHDSI-talk/";
        
      },
    },{id: "post-a-practical-guide-to-using-the-ebrains-knowledge-graph-in-your-research",
      
        title: "A Practical Guide to Using the EBRAINS Knowledge Graph in (your) Research",
      
      description: "Poster presentation at FENS 2022",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2022/fens-poster/";
        
      },
    },{id: "post-making-the-most-of-precious-data-challenges-and-opportunities-in-mining-open-data",
      
        title: "Making the most of precious data - challenges and opportunities in mining open...",
      
      description: "Invited Talk and Panel Discussion at FENS 2022 (Special Interest Event)",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2022/fens-talk/";
        
      },
    },{id: "post-making-small-data-big-building-a-graph-database-from-experimental-brain-research",
      
        title: "Making Small Data Big - Building a graph database from experimental brain research...",
      
      description: "Nature Portfolio Webcast",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2022/nature-webcast/";
        
      },
    },{id: "post-how-to-make-data-public-ethics-regulations-and-solutions",
      
        title: "How to make data public - ethics, regulations and solutions",
      
      description: "Talk at the EAN-EBRAINS Joint Workshop - The Future of Medical Data Sharing in Clinical Neurosciences",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/ethics-talk/";
        
      },
    },{id: "post-a-day-in-the-life-of-a-data-curator",
      
        title: "A day in the life of a data curator",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/day-as-curator/";
        
      },
    },{id: "post-open-data-in-neuroscience-data-sharing-in-ebrains",
      
        title: "Open data in neuroscience - Data sharing in EBRAINS",
      
      description: "Course on the INCF training space",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/incf-course/";
        
      },
    },{id: "post-publishing-and-accessing-research-through-ebrains",
      
        title: "Publishing and Accessing Research through EBRAINS",
      
      description: "Talk at the Mediterranean seminar for consciousness",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/mesec-talk/";
        
      },
    },{id: "news-ai-mind-meets-ebrains-understanding-the-ageing-brain-is-a-challenge-that-cannot-be-solved-alone",
          title: 'AI-MIND meets EBRAINS. Understanding the ageing brain is a challenge that cannot be...',
          description: "",
          section: "News",},{id: "news-our-paper-was-featured-by-the-psychonomic-society",
          title: 'Our paper was featured by the psychonomic society.',
          description: "",
          section: "News",},{id: "news-i-became-an-associative-guest-editor-at-frontiers-neuroinformatics-to-edit-a-special-research-topic",
          title: 'I became an associative guest editor at Frontiers Neuroinformatics to edit a special...',
          description: "",
          section: "News",},{id: "news-the-blueberry-project-officially-kicked-off",
          title: 'The Blueberry project officially kicked off.',
          description: "",
          section: "News",},{id: "news-organised-a-successful-study-a-thon-with-promising-results",
          title: 'Organised a successful study-a-thon with promising results.',
          description: "",
          section: "News",},{id: "news-represented-euracan-at-the-ohdsi-conference",
          title: 'Represented EURACAN at the OHDSI conference.',
          description: "",
          section: "News",},{id: "news-presented-my-current-work-at-the-encr-ai-workshop",
          title: 'Presented my current work at the ENCR AI workshop.',
          description: "",
          section: "News",},{id: "news-the-neuroinformatics-research-topic-is-now-available-as-an-ebook",
          title: 'The Neuroinformatics research topic is now available as an EBOOK.',
          description: "",
          section: "News",},{id: "news-the-blueberry-project-has-delivered-its-final-blueprint",
          title: 'The Blueberry project has delivered its final blueprint',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D%76%61%6E%73%77%69%65%74%65%6E@%6F%75%74%6C%6F%6F%6B.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/MaaikevS", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/maaike-van-swieten", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-7361-9467", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Maaike-Van-Swieten/", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=Z003p6oAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
