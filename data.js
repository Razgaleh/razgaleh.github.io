export const bio = [
  // "   Hello, I'm Fatemeh!",
  // "   I'm currently an ML & AI Technical Solutions Associate at Arrow Electronics!",
  // "   Feel free to explore the projects I've completed during my professional and academic journey below.",
  // "   Don't hesitate to reach out to me via my LinkedIn or GitHub.",
  // "   Thank you for visiting my portfolio website, and I hope you enjoy exploring my projects!",
   
];

export const skills = [
  // AI/ML Skills
  {
    title: "AI Frameworks",
    skillName: "LangChain",
    color: "rainbow-1",
    percentage: "60",
    category: "ai",
  }, {
    title: "AI Frameworks",
    skillName: "TensorFlow",
    color: "rainbow-2",
    percentage: "70",
    category: "ai",
  },{
    title: "AI Frameworks",
    skillName: "Keras",
    color: "rainbow-3",
    percentage: "70",
    category: "ai",
  },  {
    title: "AI Frameworks",
    skillName: "Scikit-Learn",
    color: "rainbow-4",
    percentage: "70",
    category: "ai",
  }, {
    title: "AI Frameworks",
    skillName: "PyTorch",
    color: "rainbow-5",
    percentage: "20",
    category: "ai",
  },{
    title: "AI Frameworks",
    skillName: "JAX",
    color: "rainbow-6",
    percentage: "10",
    category: "ai",
  },{
    title: "AI Frameworks",
    skillName: "LlamaIndex",
    color: "rainbow-7",
    percentage: "10",
    category: "ai",
  },{
    title: "MLOps Tools",
    skillName: "Docker",
    color: "rainbow-1",
    percentage: "70",
    category: "ai",
  },{
    title: "MLOps Tools",
    skillName: "Kubernetes",
    color: "rainbow-2",
    percentage: "80",
    category: "ai",
  },{
    title: "MLOps Tools",
    skillName: "GitHub / Git",
    color: "rainbow-3",
    percentage: "80",
    category: "ai",
  },
  // Cloud & DevOps Skills
  {
    title: "Cloud Platforms",
    skillName: "Azure",
    color: "ocean-4",
    percentage: "80",
    category: "cloud",
  },{
    title: "Cloud Platforms",
    skillName: "Google Cloud Platform",
    color: "ocean-5",
    percentage: "50",
    category: "cloud",
  },
  // Programming Skills
  {
    title: "Programming Languages",
    skillName: "Python",
    color: "sunset-1",
    percentage: "80",
    category: "programming",
  }, {
    title: "Programming Languages",
    skillName: "C++ / C",
    color: "sunset-2",
    percentage: "50",
    category: "programming",
  },
  {
    title: "Programming Languages",
    skillName: "JavaScript",
    color: "sunset-4",
    percentage: "50",
    category: "programming",
  },{
    title: "Programming Languages",
    skillName: "Express & Node.js",
    color: "sunset-5",
    percentage: "60",
    category: "programming",
  },{
    title: "Programming Languages",
    skillName: "HTML",
    color: "sunset-6",
    percentage: "90",
    category: "programming",
  },{
    title: "Programming Languages",
    skillName: "CSS",
    color: "sunset-7",
    percentage: "80",
    category: "programming",
  },
  // Software
  {
    title: "Software",
    skillName: "MATLAB",
    color: "forest-1",
    percentage: "70",
    category: "software",
  },{
    title: "Software",
    skillName: "Mathematica",
    color: "forest-2",
    percentage: "80",
    category: "software",
  },{
    title: "Software",
    skillName: "LabVIEW",
    color: "forest-3",
    percentage: "50",
    category: "software",
  },{
    title: "Software",
    skillName: "SolidWorks",
    color: "forest-4",
    percentage: "50",
    category: "software",
  },{
    title: "Software",
    skillName: "Arduino",
    color: "forest-5",
    percentage: "80",
    category: "software",
  },{
    title: "Software",
    skillName: "SQL",
    color: "forest-1",
    percentage: "60",
    category: "software",
  },{
    title: "Software",
    skillName: "MySQL",
    color: "forest-2",
    percentage: "60",
    category: "software",
  },
  // Languages
  {
    title: "Languages",
    skillName: "English - Fluent",
    color: "cosmic-1",
    percentage: "100",
    category: "languages",
  },{
    title: "Languages",
    skillName: "Persian - Fluent",
    color: "cosmic-2",
    percentage: "100",
    category: "languages",
  },{
    title: "Languages",
    skillName: "French - Intermediate - DELF B2",
    color: "cosmic-3",
    percentage: "70",
    category: "languages",
  },{
    title: "Languages",
    skillName: "German - Beginner",
    color: "cosmic-4",
    percentage: "10",
    category: "languages",
  }

];

export const projects = {
  mlaiProjects: [
    {
      projectName: "Arrow RAG Assistant",
      image: "images/arrow-ai-assistant.png",
      summary:
        "Retrieval Augmented Generation (RAG) with LangChain and Streamlit, runnable via NVIDIA NIMs or locally.",
      preview: "https://github.com/Razgaleh/Arrow-RAG-Demo",
      techStack: ["RAG", "Gen AI", "LangChain", "NVIDIA NIMs", "Python", "Streamlit"],
    },
    {
      projectName: "Deep Learning in Particle Physics",
      image: "images/neural-networks.webp",
      summary:
        "SUSY Particle Binary Classification Neural Network Model",
      preview: "https://github.com/Razgaleh/SUSY-Classification",
      techStack: ["Python", "Keras", "TensorFlow", "Scikit-Learn"],
    },
    {
      projectName: "Solar Radiation Prediction",
      image: "images/solar-radiation.webp",
      summary:
        "Linear Regression Model",
      preview: "https://github.com/Razgaleh/Solar-Radiation-Prediction/",
      techStack: ["Python", "Scikit-Learn"],
    },
    {
      projectName: "Twitter Sentiment Analysis",
      image: "images/twitter-logo.webp",
      summary:
        "Natural Language Processing (NLP) Model",
      preview: "https://github.com/Razgaleh/Twitter-Sentiment-Analysis",
      techStack: ["Python", "NLTK", "Scikit-Learn"],
    },
    {
      projectName: "IMDB Movie Reviews Prediction Model",
      image: "images/imdb-logo.png",
      summary:
        "Neural Networks & Deep Learning Model",
      preview: "https://github.com/Razgaleh/IMDB",
      techStack: ["Python", "TensorFlow", "Keras"],
    },
    {
      projectName: "FIFA World Cup 2022 Data Analysis",
      image: "images/fifa-logo.webp",
      summary:
        "Relational Database (RDBMS) Management & Advanced Data Analysis",
      preview: "https://github.com/Razgaleh/FIFA-World-Cup-2022",
      techStack: ["Python", "SQL", "Express & Node.js"],
    },
    {
      projectName: "Motion Detection in Traffic Videos",
      image: "images/highway.jpg",
      summary:
        "Car Motion Detection and Counter",
      preview: "https://github.com/Razgaleh/Motion-Detection",
      techStack: ["Python", "OpenCV"],
    },
    {
      projectName: "Speech Recognition Airport Virtual Assistant",
      image: "images/speech-logo.png",
      summary:
        "An Airport Virtual Assistant Using Virtual Assistant",
      preview: "https://github.com/Razgaleh/Speech-Recognition",
      techStack: ["Python", "Mozilla DeepSpeech"],
    },
  ],
  softwareProjects: [  
    {
      projectName: "SmartHome App",
      image: "images/smart-home-logo.webp",
      summary:
        "Smart Device Database Management Web App",
      preview: "https://drive.google.com/file/d/1AtOi36HshWupw7mxQvmP2V1ljjzLsW-2/view?usp=sharing",
      techStack: ["Node.js", "SQL", "Back-end"],
    },{
      projectName: "WeStudy App",
      image: "images/study-logo.jpeg",
      summary:
        "Study Partner Finder App",
      preview: "https://drive.google.com/file/d/1G_39Klq-7N939JJqDaUaijWner4oMcmQ/view?usp=sharing",
      techStack: ["Team Work", "Node.js", "Agile Software Development"],
    },{
      projectName: "Cryptocurrency Exchange Command Line Program",
      image: "images/crypto-logo.webp",
      summary:
        "Command Line Interface Program",
      preview: "https://drive.google.com/file/d/1CSDV9h8Td_TzhIlmUS65sBfEUFrwFY6g/view?usp=sharing",
      techStack: ["C++"],
    },{
      projectName: "OttoDeck DJ App",
      image: "images/dj-logo.jpg",
      summary:
        "Audio Player & Mixer App",
      preview: "https://drive.google.com/file/d/1d-NQxDofOhMy3EIuCUY4QHEZy-_jc8-1/view?usp=sharing",
      techStack: ["C++", "Object Oriented Programming"],
    },{
      projectName: "Audio Player & Mixer Application",
      image: "images/audio-app-logo.png",
      summary:
        "A Web-based Audio Player & Mixer Application",
      preview: "https://github.com/Razgaleh/Web-Audio-Application",
      techStack: ["JavaScript", "p5.js Sound", "HTML", "CSS"],
    },
    {
      projectName: "Audio Visualizer Application",
      image: "images/audio-visual-logo.png",
      summary:
        "A Web-based Audio Visualizer Application with Speech Recognition",
      preview: "https://github.com/Razgaleh/Web-Audio-Application",
      techStack: ["JavaScript", "Meyda", "p5.js Sound", "p5.jsSpeech", "HTML", "CSS"],
    },
    {
      projectName: "Automated Video Conversion Application",
      image: "images/video-logo.png",
      summary:
        "Video Criteria Check & Conversion",
      preview: "https://github.com/Razgaleh/Video-Conversion",
      techStack: ["Python", "FFMPEG"],
    },
    {
      projectName: "Audio Steganography",
      image: "images/audio-stag-logo.png",
      summary:
        "Encoding & Decoding Audio Signals",
      preview: "https://github.com/Razgaleh/Audio-Steganography",
      techStack: ["Python", "ThinkDSP"],
    },
    {
      projectName: "2D Platformer Video Game",
      image: "images/video-game-logo.png",
      summary:
        "Web Browser Video Game",
      preview: "https://drive.google.com/file/d/1H7FVDq1sNKyY7YTb9fYfnw0npKfRi7F-/view?usp=sharelink",
      techStack: ["JavaScript", "p5.js"],
    }
  ],
  webProjects: [
    {
      projectName: "Personal Portfolio Website",
      image: "images/portfolio-logo.png",
      summary:
        "Modern responsive portfolio website with interactive animations and dynamic content loading",
      preview: "https://github.com/Razgaleh/razgaleh.github.io",
      techStack: ["JavaScript", "CSS", "HTML"],
    },
    {
      projectName: "Previous Portfolio Website",
      image: "images/old-portfolio-logo.png",
      summary:
        "Previous Portfolio Website Implementation",
      preview: "https://github.com/Razgaleh/razgaleh.github.io",
      techStack: ["SCSS", "CSS", "HTML"],
    },
    {
      projectName: "Chess Club Newsletter Website",
      image: "images/chess-website-logo.png",
      summary:
        "Responsive newsletter website with dynamic content management and user interaction features",
      preview: "https://github.com/Razgaleh/Chess-Club-Newsletter-Mock-Website",
      techStack: ["JavaScript", "CSS", "HTML"],
    }, 
    {
      projectName: "Discovery Center Theme Park Website",
      image: "images/discovery-website-logo.png",
      summary:
        "Collaborative theme park website with interactive features and responsive design",
      preview: "https://github.com/Razgaleh/Discovery-Center-Mock-Website",
      techStack: ["Team Work", "CSS", "HTML", "Front-end"],
    },
  ],
  physicsProjects: [
    {
      projectName: "Hf Rod Ablation Source Picomotor",
      image: "images/pico-motor-logo.png",
      summary:
        "Arduino-based Command Line Interface for Controlling the Rotation of the HF Rod in the Ion Trap's Ablation Source",
      preview: "https://github.com/Razgaleh/Precision-Motor-Control/blob/main/Precision_Motor_Ctrl_Test_Final.ino",
      techStack: ["C", "Arduino"],
    },
    {
      projectName: "Polarimeter",
      image: "images/polarimeter-logo.png",
      summary: "Laser Beam Polarity Measurement Using Optical Setup, Arduino Interface, and MATLAB Data Acquisition",
      preview:
        "https://github.com/Razgaleh/Polarimeter",
      techStack: ["Optics", "Lasers", "Arduino", "MATLAB", "Voltage Divider Circuit"],
    },
    {
      projectName: "Visual Display of Music",
      image: "images/audio-visual-logo.png",
      summary: " Electronic Music Visualizer",
      preview:
        "https://docs.google.com/presentation/d/1Z0vnaYgfT2vSQzQ_hytnMh6xuGdLOKmO/edit?usp=sharing&ouid=108455844285398591572&rtpof=true&sd=true",
      techStack: ["Team Work", "Electronics", "Voltage Amplifier", "Band-Pass Filters", "Comparator Circuit"],
    },
  ],
};

export const certs = [
  {
    title: "NVIDIA-Certified Associate: Generative AI and LLMs",
    duration: "In Progress",
    tags: ["Generative AI", "LLMs", "RAG","NVIDIA"],
    icon: "robot",
  },  
  {
    title: "Microsoft Certified: Azure Data Scientist Associate",
    duration: "In Progress",
    tags: ["Data Science","Cloud", "AI", "Azure", "Microsoft"],
    icon: "chart-line",
  }, 
  {
    title: "NVIDIA-Certified Associate: AI Infrastructure and Operations",
    duration: "June 2024",
    tags: ["Generative AI", "AI Infrastructure", "NVIDIA"],
    icon: "server",
  },
  {
    title: "NVIDIA Partners Certifications",
    duration: "June & May 2024",
    tags: ["AI Technical", "Omniverse", "DGX Compute Systems Technical & Installation ", "Embedded Compute Technical", 
      "Networking Technical ",
      "Virtual Desktops Technical ",
      "Visualization Technical ",
      "DGX Cloud Curriculum",
      "Compute Technical",
       "NVIDIA"],
    icon: "microchip",
  }, 
  {
    title: "Arrow AI CoE Team Technical Curriculum",
    duration: "May 2024",
    tags: ["AI Center of Excellence", "AI", "Arrow Electronics"],
    icon: "cogs",
  },
  {
    title: "QxQ Quantum Computing",
    duration: "May 2024",
    tags: ["Quantum Computing", "Physics"],
    icon: "atom",
  },{
    title: "Microsoft Certified: Azure Fundamentals, AZ-900",
    duration: "April 2024",
    tags: ["Cloud", "Azure", "Microsoft"],
    icon: "cloud",
  },{
    title: "ArrowSphere Platform Accreditation",
    duration: "March 2024",
    tags: ["Cloud", "ArrowSphere","Arrow Electronics"],
    icon: "globe",
  },
  {
    title: "Google IT Support Specialization",
    duration: "Aug 2021",
    tags: ["Cloud", "GCP","Google"],
    icon: "headset",
  },{
    title: "Data Engineering, Big Data, and Machine Learning on GCP Specialization",
    duration: "October 2021",
    tags: ["Cloud", "GCP","Google"],
    icon: "database",
  },{
    title: "Preparing for Google Cloud Certification: Cloud Data Engineer",
    duration: "May 2020",
    tags: ["Data Engineer","Cloud", "GCP","Google"],
    icon: "wrench",
  },{
    title: "Preparing for Google Cloud Certification: Cloud Engineer",
    duration: "May 2020",
    tags: ["Cloud Engineer","Cloud", "GCP","Google"],
    icon: "tools",
  }
  
];
export const experience = [
  {
    title: "AI Technical Solutions Engineer",
    duration: "Jan. 2025 - Present",
    subtitle: "Arrow Electronics",
    details: [
"Currently developing NeMo Curator Demo and integrating it into Fine-tuning Demo",
// "Collaborating with the Arrow internal Data Science team to create an Agentic AI SKU Auto-Classifier",
"Partnering with WWT & N50 Project to develop a multi-lingual AI Tutor to enable students",
"Developed PEFT demo using NVIDIA NeMo to showcase LoRA & LLM finetuning techniques",
"Deployed Elastic Search RAG demo and OPEA ChatQnA demos for partner engagement",
"Collaborating across Data/AI team on the deployment of the NVIDIA ACE Digital Human",
"Partnering with the NVIDIA AI Workbench team on AI projects such as PDF-to-Podcast",
"Designing and developing multi-vendor AI solutions and POCs with cross-functional teams",
"Held webinars to enable partners on AI solutions, focusing on LLM Agents and Finetuning",
"Co-led and designed biweekly AI Developer Essentials sessions to enable engineering team",
"Enabling Arrow partners in AI by understanding their unique AI needs and showcasing AI demos",
    ],

    tags: [],
    icon: "brain",
  },
  {
    title: "AI Technical Solutions Associate",
    duration: "Jan. 2024 - Dec. 2024",
    subtitle: "Arrow Electronics",
    details: ["Developed a customizable RAG app using LangChain from scratch for specialized AI Assistants",
      "Deployed locally hosted RAG apps on the NVIDIA DGX platform for Arrow AI Assistants",
      "Developed NVIDIA-focused AI demos using NVIDIA NIMs to enhance business development",
      "Engaged with partners to identify and address their AI needs and challenges",
      "Presented AI demos at Arrow Technology Summit (ATS) to share insights into AI technologies",
      "Assessed potential AI company partnerships in supplier discovery meetings",
      "Created AI security guidelines to support the marketing team ",
      "Led ML & AI technology training sessions for the pre-sales te",
      "Active member of Cloud, Data, & AI team and Arrow Electronics",
    ],

    tags: ["Docker", "Kubernetes", "LangChain", "LlamaIndex", "RAG", "LLMs"],
    icon: "rocket",
  },
  {
    title: "Undergraduate Research Assistant",
    duration: "Jan. 2016 - Sep. 2019",
    subtitle: "Joint Institute for Laboratory Astrophysics (JILA)",
    details: [
      "Precision Measurement of the Electron's Electric Dipole Moment (eEDM)",
      "Supervised by Nobel Laureate Prof. Eric Cornell & Prof. Jun Ye",
      "Developed Programming, Electrical, Optical & Mechanical Projects",
      "Notable Projects : Hf Rod Ablation Source Picomotor & Polarimeter",
    ],
    tags: [
      "Experimental Physics",
      "C",
      "Arduino",
      "Optical Alignment",
      "Circuit Design",
      "Laser"
    ],
    icon: "flask",
  }

];

export const education = [  
  {
    title: "MS in Artificial Intelligence",
    duration: "2025 - Current",
    subtitle: "UT Austin",
    details: [ "In Progress"],
    tags: [
      "Deep Learning",
    ],
    icon: "brain",
  },
  {
    title: "BS in Computer Science with Specialization in ML & AI ",
    duration: "2020 - 2023",
    subtitle: "University of London",
    details: [ "First Class Honors"],
    tags: [
      "Neural Networks & Machine Learning",
      "Artificial Intelligence",
      "Data Science",
      "Natural Language Processing",
      "Intelligent Signal Processing",
      "Object Oriented Programming",
    ],
    icon: "graduation-cap",
  },
  {
    title: "Coursework in Engineering Physics",
    duration: "2015 - 2017",
    subtitle: "University of Colorado Boulder",
    details: [],
    tags: ["Quantum Mechanics I", "Electromagnetism I", "Modern Physics", "Complex Analysis" , "Electronics Lab"],
    icon: "atom",
  },
];

export const footer = [
//   {
//     label: "Dev Profiles",
//     data: [
//       {
//         text: "Stackoverflow",
//         link: "https://stackoverflow.com/users/8461233/vinay-somawat",
//       },
//       {
//         text: "GitHub",
//         link: "https://github.com/vinaysomawat",
//       },
//       {
//         text: "LeetCode",
//         link: "https://leetcode.com/somawatvinay/",
//       },
//     ],
//   },
//   {
//     label: "Resources",
//     data: [
//       {
//         text: "Enable Dark/Light Mode",
//         func: "enableDarkMode()",
//       },
//       {
//         text: "Print this page",
//         func: "window.print()",
//       },
//       {
//         text: "Clone this page",
//         link: "https://github.com/vinaysomawat/vinaysomawat.github.io",
//       },
//     ],
//   },
  // {
  //   label: "Links",
  //   data: [
  //     {
  //       text: "linkedin",
  //       icon: "linkedin",
  //       link: "https://www.linkedin.com/in/razgaleh/",
  //     },
  //     {
  //       text: "twitter",
  //       icon: "twitter",
  //       link: "https://twitter.com/razgaleh",
  //     },
  //     {
  //       text: "github",
  //       icon: "github",
  //       link: "https://github.com/razgaleh",
  //     },{
  //       text: "medium",
  //       icon: "medium",
  //       link: "https://medium.com/razgaleh",
  //     },
  //   ],
  // },
  {
    label: "copyright-text",
    data: [
      "2025",
    ],
  },
];

