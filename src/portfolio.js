/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Mughees Mehdi",
  title: "Hi all, I'm Mughees",
  subTitle: emoji(
    "Experienced Senior Full Stack Developer skilled in building, testing, and maintaining enterprise applications with integrated AI and advanced tech. Known for problem-solving, efficient solutions, and strong team collaboration, I’m seeking a challenging remote role to apply my expertise."
  ),
  resumeLink:
    "./containers/greeting/resumeMughees.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/MugheesMehdi07",
  linkedin: "https://www.linkedin.com/in/mughees-mehdi",
  stackoverflow: "https://stackoverflow.com/users/4974301/mughees-mehdi",
  gmail: "mugheesmehdi@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};
// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Developing, testing, and maintaining enterprise applications while integrating advanced technologies and AI into web solutions.",
  skills: [
    emoji(
      "⚡ Develop web and software applications using Python (Django, Flask) and JavaScript (React), creating dynamic and responsive user experiences, with architectures like microservices, RESTful APIs, MVC, and serverless."
    ),
    emoji("⚡ Manage and optimize databases such as MSSQL, PostgreSQL, MySQL, and MongoDB, with expertise in search engines like Elasticsearch."),
    emoji(
      "⚡  Build and implement machine learning models using TensorFlow, PyTorch, and work with large language models like Llama, Bard, Falcon, and GPT-4 for advanced AI solutions."
    ),
    emoji(
      "⚡ Deploy scalable applications with AWS services, Docker, and CI/CD pipelines, ensuring reliable DevOps and cloud integration."
    ),
    emoji(
      "⚡ Coordinate projects through JIRA, Trello, Asana, Notion, Monday, and Confluence, and collaborate on code with GitHub, GitLab, SVN, CodeCommit and Bitbucket for seamless teamwork."
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fa-brands fa-python"
    },
    {
      skillName: "Flask",
      fontAwesomeClassname: "fa fa-light fa-flask"
    },
    {
      skillName: "Django & DRF",
      fontAwesomeClassname: "fa fa-solid fa-d"
    },
    {
      skillName: "Celery",
      fontAwesomeClassname: "fa fa-solid fa-c"
    },
    {
      skillName: "TensorFlow",
      fontAwesomeClassname: "fa fa-solid fa-arrow-up"
    },
    {
      skillName: "PyTorch",
      fontAwesomeClassname: "fa fa-solid fa-droplet"
    },
    {
      skillName: "Keras",
      fontAwesomeClassname: "fa fa-solid fa-k"
    },
    {
      skillName: "Pandas",
      fontAwesomeClassname: "fa fa-solid fa-grip-lines-vertical"
    },
    {
      skillName: "Numpy",
      fontAwesomeClassname: "fa fa-solid fa-cube"
    },
    {
      skillName: "SpaCy",
      fontAwesomeClassname: "fa fa-solid fa-s"
    },
    {
      skillName: "OpenCV",
      fontAwesomeClassname: "fa fa-solid fa-cubes"
    },
    {
      skillName: "Pillow",
      fontAwesomeClassname: "fa-brands fa-python"
    },
    {
      skillName: "MoviePy",
      fontAwesomeClassname: "fa-solid fa-tape"
    },
    {
      skillName: "FFMPEG",
      fontAwesomeClassname: "fa-brands fa-gg"
    },
    {
      skillName: "NLTK",
      fontAwesomeClassname: "fa-brands fa-python"
    },
    {
      skillName: "HTML",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Javascript — ES6",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fa fa-brands fa-react"
    },
    {
      skillName: "Redux",
      fontAwesomeClassname: "fa fa-solid fa-fan"
    },
    {
      skillName: "LLM's",
      fontAwesomeClassname: "fa-solid fa-language"
    },
    ,
    {
      skillName: "C#",
      fontAwesomeClassname: "fa-solid fa-hashtag"
    },
    {
      skillName: "Unity",
      fontAwesomeClassname: "fab fa-unity"
    },
    {
      skillName: "Photon",
      fontAwesomeClassname: "fa-solid fa-circle-dot"
    },
    {
      skillName: "Databases",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Apache",
      fontAwesomeClassname: "fa-solid fa-feather-pointed"
    },
    {
      skillName: "NGINX",
      fontAwesomeClassname: "fa-solid fa-n"
    },
    {
      skillName: "Heroku",
      fontAwesomeClassname: "fa-solid fa-kip-sign"
    },
    {
      skillName: "Trello",
      fontAwesomeClassname: "fa-solid fa-square-poll-vertical"
    },
    {
      skillName: "JIRA",
      fontAwesomeClassname: "fa fa-solid fa-angles-right"
    },
    {
      skillName: "Notion",
      fontAwesomeClassname: "fa-solid fa-cube"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Information Technology University",
      logo: require("./assets/images/ituLogo.jpg"),
      subHeader: "Masters of Science in Data Science",
      duration: "January 2017 - April 2019",
    },
    {
      schoolName: "University of California San Diego — Edx",
      logo: require("./assets/images/ucsdLogo.png"),
      subHeader: "Micro Masters in Data Science",
      duration: "January 2017 - April 2018",
    },
    {
      schoolName: "PUCIT, University of Punjab",
      logo: require("./assets/images/pucitLogov2.png"),
      subHeader: "Bachelors of Science in Computer Software Engineering",
      duration: "January 2012 - April 2016",
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "AI & LLM's", //Insert stack or technology you have experience in
      progressPercentage: "95%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "92%"
    },
    {
      Stack: "Frontend",
      progressPercentage: "87%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Full Stack Developer",
      company: "Broadband9 LTD",
      companylogo: require("./assets/images/bLogo.jpeg"),
      date: "May 2024 – Present",
      desc: "AI-driven IT company specializing in oftware solutions.",
      descBullets: [
        "Spearheaded enterprise app development with expertise in both front-end and back-end technologies.",
        "Designed and delivered innovative AI and web-based solutions to meet diverse client needs.",
        "Oversaw team leadership, client communication, and end-to-end project management."
      ]
    },
    {
      role: "AI Engineer — LLM",
      company: "Turing",
      companylogo: require("./assets/images/turingLogo.jpeg"),
      date: "May 2024 – Present",
      desc: "A tech company advancing AI-powered solutions.",
      descBullets: [
        "Developed cutting-edge AI applications with a focus on RAGs (Retrieval-Augmented Generation) and LLMs (Large Language Models).",
        "Delivered robust AI-driven tools and platforms, enhancing natural language understanding and generation capabilities.",
        "Collaborated closely with cross-functional teams to innovate and refine AI models, driving impactful client outcomes."
      ]
    },
    {
      role: "Senior Full Stack Developer",
      company: "RootPointers",
      companylogo: require("./assets/images/rootpointersLogo.jpeg"),
      date: "August 2021 – April 2024",
      desc: "IT company offering AI-powered custom software solutions.",
      descBullets: [
        "Led development of enterprise apps with front-end and back-end skills.",
        "Delivered AI and web development solutions.",
        "Managed team, client interactions, and project delivery."
      ]
    },    
    {
      role: "Full Stack Developer",
      company: "xiQ",
      companylogo: require("./assets/images/xiQLogo.png"),
      date: "January 2020 – August 2021",
      desc: "Silicon Valley-based B2B Sales and Marketing platform.",
      descBullets: [
        "Enhanced and maintained technology infrastructure with a focus on AI integration in B2B sales.",
        "Developed and maintained features using Django, React.js, and SQL.",
        "Mentored junior developers, promoting technical excellence and efficiency."
      ]
    },
    {
      role: "Back End Developer",
      company: "Datics",
      companylogo: require("./assets/images/daticsLogo.jpg"),
      date: "January 2019 – January 2020",
      desc: "Designed and implemented database solutions and API integrations.",
      descBullets: [
        "Developed Sparrowcharts.com, a social media marketing analytics platform.",
        "Focused on server-side logic and cloud-based solutions."
      ]
    },
    {
      role: "Software Engineer (Unity, C#)",
      company: "Brain Games Studio",
      companylogo: require("./assets/images/brainGamesStudioLogo.jpg"),
      date: "March 2017 – December 2018",
      desc: "A gaming studio known for innovating interactive gaming experiences.",
      descBullets: [
        "Engineered engaging gameplay features using Unity and C#, enhancing user experience and game functionality.",
        "Collaborated with designers and developers to create high-quality, performance-optimized games across platforms.",
      ]
    },
    {
      role: "Software Engineer (Unity, C#)",
      company: "GenITeam Solutions",
      companylogo: require("./assets/images/geniteamLogo.jpg"),
      date: "July 2016 – October 2017",
      desc: "Gaming tech company that crafts immersive digital experiences.",
      descBullets: [
        "Developed and optimized game mechanics in Unity and C#, ensuring smooth performance and engaging player interactions.",
        "Worked closely with cross-disciplinary teams to deliver high-quality, feature-rich games tailored to client specifications.",
      ]
    }              
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications and Achievements🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "AWS Fundamentals",
      subtitle: "Successfully completed certification for AWS Fundamentals course devised by Amazon Web Services.",
      image: require("./assets/images/awsLogo.png"),
      imageAlt: "AWS Logo",
      footerLink: [
        {
          name: "Award Letter",
          url: "https://www.coursera.org/account/accomplishments/verify/MYW5377R9CBD"
        },
      ]
    },
    {
      title: "Mastering Rect",
      subtitle: "Successfully achieved certification in React, strengthening my skills in building dynamic, user-friendly web applications.",
      image: require("./assets/images/reactLogo.png"),
      imageAlt: "React Logo",
      footerLink: [
        {
          name: "Award Letter",
          url: "https://www.linkedin.com/in/mughees-mehdi/details/certifications/1635554789582/single-media-viewer/?profileId=ACoAABK4PDoBnNxZb_U_Wdn1lEu0CaRlZ6tYXRA"
        },
      ]
    },
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3227568866",
  email_address: "mugheesmehdi@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
