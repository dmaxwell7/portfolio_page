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
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "Desroy's commitment to excellence is second to none, consistently setting the bar high for himself and others.",
      name: "Kwasi Vaughters",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "Developer ",
      company: "Coding Temple",
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