import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Frontend Developer",
      icon: backend,
    },
    {
      title: "Problem Solver",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    // {
    //   name: "MongoDB",
    //   icon: mongodb,
    // },
    {
      name: "Three JS",
      icon: threejs,
    },
    // {
    //   name: "git",
    //   icon: git,
    // },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "Football Coach",
      company_name: "Maine East High School",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2019 - April 2022",
      points: [
        "Successfully developed players' physical and mental skills through effective training programs, player evaluations, and individual coaching sessions.",
        "Demonstrated expertise in developing and implementing effective game strategies and tactics, based on in-depth knowledge of opponent strengths and weaknesses.",
        "Built strong team chemistry and culture through effective leadership, motivational techniques, and fostering a positive and supportive team environment.",
        "Effectively communicated with players, assistant coaches, and support staff to ensure team cohesion, proper execution of game plans, and a positive and productive team dynamic.",
      ],
    },
    {
      title: "Financial Advisor",
      company_name: "Northwestern Mutual",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2020 - Feb 2021",
      points: [
        "Built and maintained strong client relationships, implemented personalized financial plans, and delivered exceptional service.",
        "Analyzed market trends, researched investment opportunities, and developed comprehensive financial plans aligned with client goals and risk tolerance.",
        "Communicated complex financial information clearly and concisely, conducted financial seminars and workshops, and wrote detailed investment reports.",
        "Possess relevant licenses, certifications, and training; remain up-to-date with industry changes; and possess in-depth knowledge of retirement planning, tax strategies, and estate planning.",
      ],
    },
    {
      title: "Commercial Truck Driver",
      company_name: "Delta Logistics",
      icon: shopify,
      iconBg: "#383E56",
      date: "Apr 2022 - Present",
      points: [
        "Maintained an impeccable driving record throughout career.",
        "Consistently delivered goods on-time and in good condition.",
        "Communicated effectively with dispatchers, clients, and other stakeholders.",
        "Followed all industry regulations and safety protocols.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Coding Temple",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Oct 2022 - Present",
      points: [
        "Develop and maintain web applications using Python, HTML, CSS, JavaScript, SQL, Flask, and React to create functional and visually appealing web-based products.",
        "Deployed 3 REST APIs using ReactJS and Flask in combination with PostgreSQL dbs to enable seamless communication between front-end and back-end systems, improving the overall user experience. ",
        "Provided technical support and troubleshooting for web applications using React and Flask, utilizing skills in JavaScript, HTML, CSS and Python to identify and resolve issues quickly and effectively, ensuring high-quality user experiences.",
        "Created a comprehensive database utilizing ElephantSQL for cloud-based data management, PostgreSQL for relational database management, and Insomnia for API testing, ensuring efficient and reliable storage and retrieval of information, improving scalability and performance of web applications.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I had the pleasure of working with Desroy on a project, I must say I was truly impressed with his work ethic and dedication to learning.",
      name: "Josias Guzman",
      designation: "Developer",
      company: "Altitude Fitness",
      image: "data:image/jpeg;base64,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",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Gym Page",
      description:
        "A fitness application, where users can select their preferred exercise categories and specific muscle groups. With over a thousand exercises, each with practical examples and detailed instructions.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "material/ui",
          color: "green-text-gradient",
        },
        {
          name: "rapidapi",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/dmaxwell7/gym_final_project",
    },
    {
      name: "AI Summarizer",
      description:
        "A web-based article summarizer application utilizing OpenAI's GPT model. With this application, users can input lengthy article links to generate concise summaries.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "openai",
          color: "green-text-gradient",
        },
        {
          name: "redux",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/dmaxwell7/Ai_summarizer",
    },
    {
      name: "MetaVerse",
      description:
        "Experience your dream metaverse world like never before with this web application. With just a VR headset, users can immerse themselves in a fully interactive and customizable virtual environment.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "framer motion",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/dmaxwell7/D_MetaVerse",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };