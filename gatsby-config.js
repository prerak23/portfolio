module.exports = {
  pathPrefix: "/prerak23",
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://elastic-meninsky-aa7c74.netlify.app/`,
    // Your Name
    name: 'Prerak Srivastava',
    // Main Site Title
    title: `Ryan Fitzgerald | Researcher`,
    // Description that goes under your name in main bio
    description: `Research Scientist at SAP | P.h.D`,
    // Optional: Twitter account handle
    scholar: `https://scholar.google.com/citations?user=bh-NSVQAAAAJ&hl=en`,
    // Optional: Github account URL
    github: `https://github.com/prerak23`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/prerak-aar/`,
    // Content of the About Me section
    about: `Hi! I defended my PhD in October 2023 under the supervision of Emmanuel Vincent and Antoine Deleforge at INRIA, Nancy. The main focus of this PhD was to built Machine learning systems applied to audio signals in order to estimate acoustic room parameters and sound source localization. This research further branched out to niche topics such as Acoustics, Signal Processing, Bayesien Inference and Deep Neural Network. Prior to this, i completed my Masters in Natural Language Processing from Université de Lorraine, Nancy, this masters programe was cumulated with a 6 month Research Internship at Orange Labs, Rennes, in this brief time we manage to get a acceptence for our reserach paper submitted to WASPPA 2021. So by profession i am researcher. On a daily basis, i understand and build systems to analyze audio, speech and text using machine learning techinques.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.


    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'ML/AI Libraries',
        description:
          'Pytorch, Tensorflow, Sklearn, Scipy, ONNX Runtime',
      },
      {
        name: 'Programming Languages',
        description: 'Python, Matlab, C++, Bash Scripting, Latex',
      },
      {
        name: 'Tools',
        description: 'Git, Cython, Matplotlib',
      },
      {
        name: 'Languages',
        description:
          'English (Fluent), French (Professional), Hindi (Native)',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Data Scientist-Researcher',
        description_c: 'SAP Labs (Sophia-Antipolis), January 2024 - Present',
        link : ""
      },
      {
        name: 'Doctoral Research',
        description_c: 'INRIA (Nancy), September 2020 - October 2023',
        link: 'https://www.theses.fr/273494759',
        description_t:'Improved realism in audio simulations and studied its impact on supervised learning algorithms focused on the application of Sound Source Localization and Room Parameter Estimation',
        link1: 'https://scholar.google.fr/citations?user=RpYDOJQAAAAJ&hl=fr',
        link2: 'https://scholar.google.fr/citations?user=s7TQp00AAAAJ&hl=fr',
        sname1 : 'Emmanuel Vincent',
        sname2: 'Antoine Deleforge'
        
      },
      {
        name: 'Research Intern',
        description_c: 'Orange Labs (Rennes), March 2020 - September 2020',
        link: 'https://ieeexplore.ieee.org/abstract/document/9632737',
        description_t: 'Self-attention based DNN architecture to improve Sound Source Localization',
        link1: 'https://scholar.google.fr/citations?user=CgCFORIAAAAJ&hl=en',
        link2: 'http://pagrumiaux.fr/about',
        sname1 : 'Srdan Kitic',
        sname2: 'Pierre-Amaury Grumiaux'
      },
      {
        name: 'NLP Intern',
        description_c: 'LORIA (Nancy), October 2018 - June 2019',
        link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=bh-NSVQAAAAJ&citation_for_view=bh-NSVQAAAAJ:u5HHmVD_uO8C',
        description_t:'Anamoly detection with DNN models',
        link1: 'https://scholar.google.fr/citations?user=CgCFORIAAAAJ&hl=en',
        sname1 : 'Christophe Cerisara',
      },
    ],

    education: [
      {
        name: 'PhD in Computer Science (Signal Processing and ML/AI)',
        description_c: 'Université de Lorraine (Nancy)',
        link: 'https://www.theses.fr/273494759',
        description_t:'2020-2023',
      },
      {
        name: 'MSc in Natural Language Processing',
        description_c: 'Université de Lorraine, IDMC (Nancy)',
        description_t: '2018-2020',
      },
      {
        name: 'BE in Electronics & Communication',
        description_c: 'Government Engineering College, Ajmer (Rajasthan)',
        description_t:'2014-2018',
      },
    ],

    projects: [

      {
        name: 'How to (Virtually) Train Your Speaker Localizer',
        description:
          '2023 INTERSPEECH',
        link: 'https://arxiv.org/pdf/2207.09133',
      },
      {
        name: 'Realistic sources, receivers and walls improve the generalisability of virtually-supervised blind acoustic parameter estimators',
        description:
          '2022 International Workshop on Acoustic Signal Enhancement (IWAENC)',
        link: 'https://arxiv.org/pdf/2207.09133',
      },
      {
        name: 'Blind Room Parameter Estimation Using Multiple-Multichannel Speech Recording',
        description: '2021 IEEE Workshop on Applications of Signal Processing to Audio and Acoustics (WASPAA)',
        link: 'https://ieeexplore.ieee.org/abstract/document/9632778',
      },
      {
        name: 'SALADnet: Self-attentive multisource localization in the Ambisonics domain',
        description:
          '2021 IEEE Workshop on Applications of Signal Processing to Audio and Acoustics (WASPAA)',
        link: 'https://arxiv.org/pdf/2107.11066',
      },
      {
        name: 'A dataset of dynamic reverberant sound scenes with directional interferers for sound event localization and detection',
        description:'2021 DCASE SELD Challange',
        link: 'https://arxiv.org/abs/2106.06999'
      }
    ],

  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
