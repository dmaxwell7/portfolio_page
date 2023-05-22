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
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
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
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
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
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };