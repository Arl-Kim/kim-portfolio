const projectData = [
  {
    id: "moocourses",
    title: "Transfrontières MooCourses Project",
    industry: "Education",
    industryIcon: "school",
    shortDescription:
      "Transfrontières' online learning platform with customised EdTech tools through which learners and tutors interact and share knowledge.",
    video: "/images/moocourses_proj_long.mp4",
    duration: "2 Months",
    launched: "April 2024",
    laptopImage: "/images/moocourses_laptop.mp4",
    projectOverview:
      "The Transfrontières MooCourses Project aimed to revolutionize online learning by providing a robust platform with customized EdTech tools. It facilitates interaction and knowledge sharing among learners and tutors, making the Education and Training service at Transfrontières Agencies Limited more accessible and effective. Through the platform, clients can now learn French Language for Professional Purposes, ICT, Music, and Research. I built a highly scalable system to allow for additional education and training modules which are due to be added over the next few months. MooCourses has been highly rated by users for its comprehensive approach to online learning and its innovative features.",
    features: [
      "Custom EdTech Tools",
      "Interactive Learning Modules",
      "Live User Chat",
      "Highly Scalable",
      "Secure User Authentication",
    ],
    challenges: [
      {
        heading: "Technical Constraints",
        description:
          "Implementing real-time collaboration features with low latency was a significant technical challenge that required careful optimization.",
      },
      {
        heading: "User Engagement",
        description:
          "Ensuring consistent user engagement in a virtual learning environment was a challenging aspect of the project.",
      },
    ],
    solutions: [
      {
        heading: "Optimization Techniques",
        description:
          "I used advanced optimization techniques and robust server architecture to minimize latency and ensure seamless real-time collaboration.",
      },
      {
        heading: "Interactive & Gamified Elements",
        description:
          "I integrated interactive and gamified elements such as quizzes, badges, and leaderboards to enhance user engagement and make learning more enjoyable.",
      },
    ],
    mobileImage: "/images/moocourses_mobile.webp",
    tabletImage: "/images/moocourses_tablet.webp",
    impact: [
      "The MooCourses platform has significantly improved the accessibility of education and training for individual students and businesses across Kenya and other parts of the world, allowing them to learn from anywhere. The real-time feedback and collaboration features have enabled more effective tutor-student interactions, thereby enhancing the overall learning experience. Including highly interactive modules in the platform has significantly increased user engagement, with more students completing their courses. Through this project Transfrontières Agencies Limited experienced a massive transformation in how they offer their Education and Training service to their clients. It perfectly aligned with their objective of full service digitalization.",
    ],
    techStackDescription:
      "For this project, I utilized a robust technology stack. I used HTML5 and CSS3 for front-end development to create a responsive and user-friendly interface. For the back-end I employed PHP, and it enabled me to handle server-side logic and operations efficiently. I chose MySQL as the database management system to efficiently store and manage user and course data.",
    techStack: [
      { name: "HTML5", logo: "/images/html.svg" },
      { name: "CSS", logo: "/images/css.svg" },
      { name: "PHP", logo: "/images/php.svg" },
      { name: "MySQL", logo: "/images/mysql_server.svg" },
    ],
    hasVideoDisplay: true,
  },
  {
    id: "raasis",
    title: "The Ra'Asis Software React App",
    industry: "Software Engineering",
    industryIcon: "developer_board",
    shortDescription:
      "A dynamic React application through which Ra'Asis Software's clients can directly access Ra'Asis services and development teams for their projects.",
    video: "/images/raasis_proj_long.mp4",
    duration: "3 Months",
    launched: "May 2024",
    laptopImage: "/images/raasis_laptop.mp4",
    projectOverview:
      "This project involved the development of a dynamic platform designed to bridge the gap between Ra'Asis Software clients and their services and development teams. The application offers an intuitive and efficient way for the startup to showcase their services, products and portfolio, track their progress, and interact directtly with their clients. It ensures a seamless user experience, facilitating effective communication and efficient project management.",
    features: [
      "Interactive & User-Friendly Interface",
      "Dynamic Components",
      "Service Tracking & Client Management",
      "Interactive Blog",
      "User Management",
    ],
    challenges: [
      {
        heading: "Scalability",
        description:
          "Ensuring the application can handle increasing numbers of users and data without compromising performance.",
      },
      {
        heading: "User Engagement",
        description:
          "Creating an engaging user experience that encourages clients to actively use the platform and have a high likelihood of selecting Ra'Asis Software's development teams and services.",
      },
    ],
    solutions: [
      {
        heading: "Optimized Architecture",
        description:
          "Implemented a scalable architecture using MongoDB, Node.js & Express together with React, allowing the application to grow with the user base.",
      },
      {
        heading: "Interactive Features",
        description:
          "Developed interactive features and real-time updates to keep users engaged and informed throughout their project lifecycle.",
      },
    ],
    mobileImage: "/images/raasis_mobile.webp",
    tabletImage: "/images/raasis_tablet.webp",
    impact: [
      "The developed application has enhanced client satisfaction through direct and efficient communication with development teams, leading to better project outcomes. Ra'Asis Software now have improved project management and tracking capabilities, allowing clients and project managers alike to monitor progress and make informed decisions in real-time. The scalable nature of the application supports future growth, ensuring the platform remains robust and reliable as the service scope, user base and overall traffic expands.",
    ],
    techStackDescription:
      "I leveraged a modern technology stack to deliver a seamless and efficient user experience. Utilizing React, Vanilla JS and CSS for the frontend and Node.js with a MongoDB database for the backend, the platform is designed to be highly responsive and scalable, meeting the demands of a growing service scope, portfolio and user base.",
    techStack: [
      { name: "React", logo: "/images/react.svg" },
      { name: "Node.js", logo: "/images/node.svg" },
      { name: "JavaScript", logo: "/images/javascript.svg" },
      { name: "MongoDB", logo: "/images/mongodb.svg" },
      { name: "CSS", logo: "/images/css.svg" },
    ],
    hasVideoDisplay: true,
  },
  {
    id: "oaksafrica",
    title: "The Oaks Africa Foundation Project",
    industry: "Non-Profit",
    industryIcon: "volunteer_activism",
    shortDescription:
      "An online platform for Oaks Africa Foundation to provide information about their mission, vision and community development projects and initiatives. It facilitates a seamless interface to run OAF scholarship and sponsorship programs online.",
    video: "/images/oaksafrica_proj_long.mp4",
    duration: "2 Months",
    launched: "August 2023",
    laptopImage: "/images/oaksafrica_laptop.mp4",
    projectOverview:
      "The Oaks Africa Foundation website project aimed to create a visually appealing, user-friendly, and responsive platform that aligned with the foundation's objectives. Through the platform, interested parties can get information about the foundation's agenda, mission, vision scholarship and sponsorship programs and many other OAF projects. It offers interactive ways for visitors to apply for scholarships, donate funds, apply for sponsorship programs, and start sponsoring. The project also included the adoption and customization of a content management system (CMS) for easy content updates and maintenance, along with integrating basic and advanced SEO practices to enhance visibility in search engine results. I worked alone in the first stage of the project up to deployment. Mid last year, I collaborated with a graphics designer and a front-end developer to redesign the website to what it is at the moment.",
    features: [
      "Responsive Design",
      "CMS For Easy Content Updates",
      "Scholarship Application Forms",
      "Sponsorship Application Forms",
      "Secure Donation & Sponsorship Payment Integrations",
      "Newsletter Subscription & Auto-Updates",
    ],
    challenges: [
      {
        heading: "Content Management",
        description:
          "Adoption and customization of an intuitive CMS to allow the foundation's team to easily update and manage content without deep technical expertise was one of the challenges encountered.",
      },
      {
        heading: "User Engagement",
        description:
          "Ensuring high user engagement and interaction through the website, particularly for applying to programs and donating to fund the programs was also a challenge that needed to be addressed.",
      },
    ],
    solutions: [
      {
        heading: "User-Friendly CMS",
        description:
          "We implemented a WordPress-based CMS, utilizing customized theme templates and additional features that provided easy content management by the foundation's team.",
      },
      {
        heading: "Interactive Features",
        description:
          "We also designed and developed interactive features such as application forms and donation integrations to enhance user engagement and interaction.",
      },
    ],
    mobileImage: "/images/oaksafrica_mobile.webp",
    tabletImage: "/images/oaksafrica_tablet.webp",
    impact: [
      "The website has significantly increased the foundation’s online visibility, leading to higher traffic and increased engagement with the community. The interactive scholarship and sponsorship applications, secure online donation payments and constant communication channels through newsletters and website adverts have simplified the process for users and elevated their experiences. The results are evident in more scholarship applications and donations as compared to when the process was only handled offline. The user-friendly CMS has empowered the foundation’s team to manage and update content efficiently without needing frequent technical support.",
    ],
    techStackDescription:
      "For this project, we utilized a robust technology stack to ensure a responsive, user-friendly, and highly functional website. I initially built the front-end using HTML, CSS, and JavaScript to create a dynamic and engaging user experience. For the back-end I utilized WordPress, PHP, and MySQL, providing a robust and scalable platform for content management and data handling. I integrated IntaSend API for secure and efficient payment processing in online donations and sponsorship funding.",
    techStack: [
      { name: "WordPress", logo: "/images/wordpress.svg" },
      { name: "HTML5", logo: "/images/html.svg" },
      { name: "CSS", logo: "/images/css.svg" },
      { name: "JavaScript", logo: "/images/javascript.svg" },
      { name: "PHP", logo: "/images/php.svg" },
      { name: "MySQL", logo: "/images/mysql_server.svg" },
    ],
    hasVideoDisplay: true,
  },
  {
    id: "transfrontieres",
    title: "Transfrontières Agencies Website",
    industry: "Multi-Service",
    industryIcon: "link",
    shortDescription:
      "A comprehensive website for Transfrontières Agencies Limited to connect clients with a wide range of integrated services, including Communications, Education & Training, ICT, and Events Management.",
    video: "/images/transfro_proj_long.mp4",
    duration: "2 Months",
    launched: "July 2023",
    laptopImage: "/images/transfro_laptop.mp4",
    projectOverview:
      "The Transfrontières Agencies Website is an Integrated Services platform that was developed to streamline the connection between the agency and its clients, primarily businesses and brands. The website offers an easy-to-navigate interface where clients can book consultations and directly access digital solutions in Communications, Education & Training, ICT, and Events through secure links. I worked alone in the first stage of the project up to deployment. In recent times I have collaborated with a graphics designer and a front-end developer to redesign the website to what it is at the moment.",
    features: [
      "User-friendly Interface",
      "Online Booking System For Consultations",
      "Secure Access To Digital Solutions",
      "Live Chat Support",
      "Responsive Design For All Screen Sizes",
    ],
    challenges: [
      {
        heading: "Service Integration",
        description:
          "Integrating all the services including their sub-services into a single cohesive platform required a robust and flexible architecture.",
      },
      {
        heading: "User Experience",
        description:
          "Ensuring a seamless user experience across diverse services and client needs was a complex task, necessitating meticulous design and testing.",
      },
      {
        heading: "Security",
        description:
          "Implementing secure access to digital solutions and ensuring data protection across all services was also one of the main challenges in this project.",
      },
    ],
    solutions: [
      {
        heading: "Modular Architecture",
        description:
          "Initially, I developed a modular architecture that allows for flexible integration of various services, which has made it easy to manage and scale the platform as was evident when we redesigned it.",
      },
      {
        heading: "Enhanced UX Design",
        description:
          "Through user research and iterative design, I created an intuitive and seamless user experience that caters to individuals of all ages and businesses in different levels.",
      },
      {
        heading: "Advanced Security Measures",
        description:
          "I implemented secure links and robust authentication mechanisms to protect user data and ensure safe access to all the available digital solutions.",
      },
    ],
    mobileImage: "/images/transfro_mobile.webp",
    tabletImage: "/images/transfro_tablet.webp",
    impact: [
      "The integrated services on the website have significantly improved client engagement, providing a centralized platform for accessing all the offerings of Transfrontières Agencies Ltd. The online booking system has streamlined all consultation processes, making it more efficient and convenient for Transfrontières' clients. The secure linking to the available digital solutions per service have increased client trust and satisfaction, leading to positive feedback and higher retention rates.",
    ],
    techStackDescription:
      "We used WordPress for a flexible CMS, with HTML, CSS, and JavaScript for front-end development. I utilized PHP for the back-end processes, and MySQL for database management, ensuring a robust, scalable and secure platform.",
    techStack: [
      { name: "WordPress", logo: "/images/wordpress.svg" },
      { name: "HTML5", logo: "/images/html.svg" },
      { name: "CSS3", logo: "/images/css.svg" },
      { name: "JavaScript", logo: "/images/javascript.svg" },
      { name: "PHP", logo: "/images/php.svg" },
      { name: "MySQL", logo: "/images/mysql_server.svg" },
    ],
    hasVideoDisplay: true,
  },
  {
    id: "mwalimufred",
    title: "Mwalimu Fred Online Project",
    industry: "Education",
    industryIcon: "school",
    shortDescription:
      "An online platform that provides a secure learning environment and top quality learning materials and resources for Junior Secondary School students in Kenya.",
    video: "/images/mwalimufred_proj_long.mp4",
    duration: "2 Months",
    launched: "July 2024",
    laptopImage: "/images/mwalimufred_laptop.mp4",
    projectOverview:
      "Mwalimu Fred Online is a premier educational platform dedicated to providing top-quality learning, secure learning environment, materials and resources in line with the curriculum standards set by the Ministry of Education, Kenya National Examinations Council, and the Kenya Institute of Curriculum Development. The platform focuses on Junior School, Senior School, and College students, emphasizing the new Competency-Based Curriculum (CBC) and Digital Literacy as one of its core competencies. The system developed provides a remote and efficient way for students and teachers to enforce their mandate under CBC.",
    features: [
      "Intuitive UI/UX",
      "Comprehensive Assessment Tools",
      "Advanced Analytics & Reporting",
      "Interactive Learning Tools",
      "Mobile Accessibility",
      "User Live Chat",
      "Integrations & Interoperability",
    ],
    challenges: [
      {
        heading: "Custom Feature Development",
        description:
          "Adapting the available open-source frameworks to meet unique client requirements involved extensive custom development.",
      },
      {
        heading: "Data Migration",
        description:
          "Transferring existing data into the system required careful planning and execution to avoid data loss or inconsistencies.",
      },
      {
        heading: "Performance Optimization",
        description:
          "Ensuring the platform could handle high traffic and large numbers of concurrent users with different roles necessitated significant performance tuning and optimization.",
      },
      {
        heading: "User Training",
        description:
          "Providing adequate training and support for all users using the platform was crucial to ensure successful adoption.",
      },
    ],
    solutions: [
      {
        heading: "Custom Plugin Development",
        description:
          "I created custom plugins to extend the system's functionality to meet specific client requirements seamlessly.",
      },
      {
        heading: "Automated Data Migration Tools",
        description:
          "I configured and utilized automated tools for efficient and accurate data migration, which ensured data integrity and easened the process of managing the system.",
      },
      {
        heading: "Performance Tuning",
        description:
          "To meet the requirement of top notch performance, I implemented caching, load balancing, and a number performance optimization best practices. This enabled the system to handle high traffic while operating smoothly and seamlessly.",
      },
      {
        heading: "Comprehensive User Training",
        description:
          "I planned for and conducted extensive training sessions and provided detailed documentation that helped users become proficient with the platform.",
      },
    ],
    mobileImage: "/images/mwalimufred_mobile.webp",
    tabletImage: "/images/mwalimufred_tablet.webp",
    impact: [
      'The "Mwalimu Fred Online" platform has significantly transformed the educational landscape for Junior School, Senior School, and College students in Kenya. By aligning with the Ministry of Education, Kenya National Examinations Council, and the Kenya Institute of Curriculum Development standards, the platform ensures that students have access to high-quality, curriculum-compliant resources. The emphasis on the Competency-Based Curriculum (CBC) and Digital Literacy has empowered students to develop essential skills for the future. Teachers and students now have a remote, efficient, and secure way to engage with educational content, making learning more accessible and effective. This innovative approach has enhanced the overall learning experience, fostering academic excellence and digital proficiency among students and teachers alike.',
    ],
    techStackDescription:
      "I utilized HTML5, CSS, and JavaScript for front-end development, ensuring a responsive and engaging user interface. On the back end, I employed PHP to handle server-side processes, and MySQL for robust and scalable database management. This combination of technologies provided a solid foundation for developing a secure, efficient, and high-performing educational platform.",
    techStack: [
      { name: "HTML5", logo: "/images/html.svg" },
      { name: "CSS3", logo: "/images/css.svg" },
      { name: "JavaScript", logo: "/images/javascript.svg" },
      { name: "PHP", logo: "/images/php.svg" },
      { name: "MySQL", logo: "/images/mysql_server.svg" },
    ],
    hasVideoDisplay: true,
  },
  {
    id: "greatlakescrisis",
    title: "The Great Lakes Crisis Blog",
    industry: "Media",
    industryIcon: "media_link",
    shortDescription:
      "A blogging site for personal expression and professional expertise, focusing on the intricate conflicts and crises within the Great Lakes region of Africa.",
    video: "/images/greatlakescrisis_proj_long.mp4",
    duration: "1 Month",
    launched: "July 2024",
    laptopImage: "/images/greatlakescrisis_laptop.webp",
    projectOverview:
      "The Great Lakes Crisis project involved the creation of a blogging site designed to provide a platform for personal expression and professional expertise, shedding light on the complex conflicts and crises within the Great Lakes region of Africa. The site aims to inform, educate, and engage readers by offering in-depth analyses, personal narratives, and expert insights into the multifaceted issues affecting this region. Users can subscribe to the blog for regular updates and actively contribute through comments and discussions, fostering a community of informed and engaged readers. The site is available in English, French and Swahili which ensures inclusivity for all peoples within the region and even beyond. Through its comprehensive content, the platform seeks to raise awareness and foster a deeper understanding of the challenges and dynamics at play in the Great Lakes area so that collectively, permanent and sustainable solutions can be implemented.",
    features: [
      "Interactive User Interface",
      "Easy Subscription Options",
      "Comment & Discussion Features",
      "Membership Accounts",
      "Multi-Author Support",
      "Social Media Integration",
      "Multi-Lingual Support",
      "Admin & Editor Dashboards",
    ],
    challenges: [
      {
        heading: "Content Management",
        description:
          "Ensuring the smooth organization and categorization of diverse content types required meticulous planning and implementation.",
      },
      {
        heading: "User Engagement",
        description:
          "Encouraging active participation from readers through comments and discussions necessitated the development of user-friendly interaction features.",
      },
      {
        heading: "Security",
        description:
          "Implementing robust security measures to protect user data and prevent spam or malicious activity was a critical challenge.",
      },
      {
        heading: "Scalability",
        description:
          "Designing the platform to handle potential high traffic and increasing content volume while maintaining performance was essential.",
      },
    ],
    solutions: [
      {
        heading: "User Engagement Strategies",
        description:
          "I implemented features such as social media integration and interactive comment sections to foster active participation and community engagement.",
      },
      {
        heading: "Advanced Security Measures",
        description:
          "I deployed security plugins and setup best practices to protect user data, prevent spam, and safeguard the platform against malicious activities.",
      },
      {
        heading: "SEO Optimization Techniques",
        description:
          " Applied SEO best practices and configured SEO plugins to improve search engine visibility and increase the reach.",
      },
      {
        heading: "Scalability Solutions",
        description:
          "I optimized the site with performance enhancements specifically caching and content delivery networks (CDNs) to handle high traffic and ensure smooth operation.",
      },
      {
        heading: "Custom Plugin Development",
        description:
          "I developed custom plugins to enhance WordPress functionality, enabling seamless integration of subscription options, comment systems, and multi-author support.",
      },
    ],
    mobileImage: "/images/greatlakescrisis_mobile.webp",
    tabletImage: "/images/greatlakescrisis_tablet.webp",
    impact: [
      'The "Great Lakes Crisis" blog website has made a significant impact by providing a dedicated platform for both personal expression and professional expertise on the conflicts and crises in the Great Lakes region of Africa. The developed platform offers in-depth analyses, personal narratives, and expert insights, going a long way in raising awareness and fostering a deeper understanding of the complex issues affecting the region. The capability of users to subscribe and actively engage through comments and discussions has built a vibrant community of informed readers. This platform not only educates and informs but also encourages dialogue and collaboration, contributing to a more nuanced and comprehensive discourse on the Great Lakes crises. It has opened an avenue through which long lasting solutions to the problems affecting the people of the Great Lakes region can be sought',
    ],
    techStackDescription:
      "I utilized HTML5 and CSS, for front-end development, ensuring a responsive and engaging user interface. For the back end, I employed PHP to handle server-side processes, and MySQL for robust and scalable database management. WordPress served as the content management system, providing a flexible and user-friendly platform for blogging. This combination of technologies provided a solid foundation for developing a secure, efficient, and high-performing blogging site.",
    techStack: [
      { name: "HTML5", logo: "/images/html.svg" },
      { name: "CSS3", logo: "/images/css.svg" },
      { name: "WordPress", logo: "/images/wordpress.svg" },
      { name: "PHP", logo: "/images/php.svg" },
      { name: "MySQL", logo: "/images/mysql_server.svg" },
    ],
  },
  {
    id: "katf-web",
    title: "The KATF Web Project",
    industry: "French Education",
    industryIcon: "school",
    shortDescription:
      "A React application that provides an informative online platform for members of The Kenya Association of Teachers of French(KATF) and other interested parties.",
    video: "/images/katf_proj_long.mp4",
    duration: "1 Month",
    launched: "September 2024",
    laptopImage: "/images/katf_laptop.mp4",
    projectOverview:
      "The KATF web project involved the creation of a React app to provide an online platform for The Kenya Association of Teachers of French. The main aim of the project was to increase the visibility and reach of the association online. The platform showcases information about KATF, provides updates on past and upcoming events, latest news, membership, available resources and all other relevant content in both French and English languages. The website will serve as a resource for teachers of French in Kenya and will also be accessible to the general public.",
    features: [
      "Interactive Dynamic Interfaces",
      "Language Toggling (French & English)",
      "15++ Pages",
      "Responsive Design",
    ],
    challenges: [
      {
        heading: "Complex Multilingual Content Management",
        description:
          "Managing and structuring content for multiple languages was a significant challenge. The website needed to support dynamic content changes across different sections in at least two languages (English and French). Ensuring that translations were consistent and the user interface adapted fluidly to language switches added complexity to both the frontend and content management.",
      },
      {
        heading: "Managing SEO & Analytics For Multiple Routes",
        description:
          "Ensuring effective SEO and tracking user behavior through Google Analytics across multiple routes posed difficulties. Each page, especially for news articles and case studies, needed distinct metadata and tracking events to accurately capture page views and interactions without duplication or loss of data.",
      },
      {
        heading: "Handling Dynamic Data & Efficient State Management",
        description:
          "Since the website included a news section with frequently updated content, managing dynamic data was a challenge. Additionally, the need to ensure that user selected category-specific data loaded efficiently, without causing delays or unnecessary re-renders, required careful planning for state management.",
      },
    ],
    solutions: [
      {
        heading: "Multilingual Support Using Context Switching",
        description:
          "I implemented a LanguageContext interface to manage and dynamically switch between languages across the site. This ensured that content rendered based on the selected language, and translations were centrally stored, making it easier to maintain consistency and scalability.",
      },
      {
        heading: "Implementing SEO & Analytics Best Practices",
        description:
          "To address the SEO and analytics issues, I utilized the react-helmet-async library for injecting dynamic meta tags per page, and ReactGA4 to track page views and user interactions across the app. This ensured each page had accurate metadata for search engines and user activity tracking was precise.",
      },
      {
        heading: "Optimizing State Management",
        description:
          "I addressed the state management challenges by using React's useEffect and useContext hooks to load data only when necessary, minimizing re-renders. This ensured efficient loading of news articles and events information with smooth transitions between different content categories without overwhelming the user experience.",
      },
    ],
    mobileImage: "/images/katf_mobile.webp",
    tabletImage: "/images/katf_tablet.webp",
    impact: [
      "The KATF Web Project has significantly amplified the online presence of The Kenya Association of Teachers of French (KATF), fostering better engagement with both its members and the general public. By providing essential information in both French and English, the platform has broadened its accessibility, enabling a wider audience to connect with the association’s resources and events. The seamless user experience allows teachers to access updates on important events, relevant news, and resources in real-time, fostering a more informed and active community. Furthermore, the site’s visibility promotes the learning and teaching of French in Kenya, supporting KATF's mission and empowering educators with a centralized platform for collaboration and growth. Overall, the project has modernized KATF’s outreach, enabling it to better serve its members and enhance the association’s relevance in this digital era.",
    ],
    techStackDescription:
      "For development, I utilized React as the primary JavaScript library, allowing me to create a dynamic and responsive user interface. React’s component-based architecture made it easier to manage and reuse code, enhancing development efficiency. JavaScript was the core language that I used to implement the logic and functionality across the site, ensuring seamless interaction and dynamic content updates. I also employed CSS3 to style the website, ensuring it was visually appealing and provided a smooth user experience on both desktop and mobile devices. This combination of technologies allowed me to build a fast, scalable, and modern platform for KATF.",
    techStack: [
      { name: "React", logo: "/images/react.svg" },
      { name: "JavaScript", logo: "/images/javascript.svg" },
      { name: "CSS3", logo: "/images/css.svg" },
    ],
    hasVideoDisplay: true,
  },
  {
    id: "zealed-web",
    title: "The Zealed Website Project",
    industry: "Multi-Service",
    industryIcon: "link",
    shortDescription:
      "A React application for Zealed.Co that provides a professional and informative static web platform for them to establish a commanding online presence.",
    video: "/images/zealed_proj_long.mp4",
    duration: "1 Month",
    launched: "March 2025",
    laptopImage: "/images/zealed_responsive.webp",
    projectOverview:
      "This project involved the development of a React application that has provided a professional and user-friendly web platform for exploring internship opportunities, accessing valuable career tips, and information about what Zealed has to offer. The project was planned to be executed in two phases, ensuring scalability and a structured development approach. The first phase of the project involved the development of a simple 5-page foundational website that is now available on any device with an internet connection. I contributed directly as Scrum Master and Front-End Developer working with one other team member, a Graphics and UI/UX designer. My main role was transforming the client-approved designs into functional reusable React components and pages.  The project is currently well into the second phase where we are upgrading to a full-stack web application with more advanced features and functionalities. In this second phase I have been contributing in the capacity of Scrum Master and Full-Stack Developer in a team of two.",
    features: [
      "Interactive Dynamic Interfaces",
      "Direct Internship Application Buttons",
      "Internship Categorization",
      "Responsive Design",
      "Clean Navigation and Layout",
    ],
    challenges: [
      {
        heading: "Initial Content Structuring",
        description:
          "Defining how to structure the content for internships and resources without backend support in phase one posed a limitation in scalability and filtering logic.",
      },
      {
        heading: "Balancing Aesthetics and Usability",
        description:
          "Creating a clean UI that remains intuitive while showcasing dynamic internship categories required careful layout and design iterations.",
      },
      {
        heading: "Responsiveness Across Devices",
        description:
          "Ensuring the website performed smoothly across a variety of devices (mobile, tablet, desktop) needed repeated testing and layout adjustments.",
      },
    ],
    solutions: [
      {
        heading: "Static Data Mockups for Phase One",
        description:
          "Utilized structured JSON files and component states to simulate backend functionality and ensure smooth data display for early deployment.",
      },
      {
        heading: "Implemented Reusable Components",
        description:
          "I ensured to build modular and reusable UI components that helped maintain a clean codebase and simplify future expansion in Phase Two.",
      },
      {
        heading: "Responsive Grid and Flexbox Layouts",
        description:
          "I used a combination of CSS Grid and Flexbox with media queries and conducted thourough testing to ensure optimal responsiveness across all screen sizes.",
      },
    ],
    mobileImage: "/images/zealed_mobile.webp",
    tabletImage: "/images/zealed_tablet.webp",
    impact: [
      "The Zealed website project significantly boosted internship visibility for students and recent graduates by offering a centralized, easy-to-navigate platform where internship opportunities could be showcased clearly and attractively. Through categorized listings and direct application links, users could easily discover roles relevant to their interests and qualifications, thereby increasing their chances of securing meaningful placements. Additionally, the project enhanced the overall professionalism and online presence of Zealed.Co by presenting a modern, responsive website that reflects the brand’s mission and values. This not only strengthened credibility with potential partners and users but also positioned Zealed as a forward-thinking connector in the internship ecosystem. The clean and intuitive design of the site further improved user engagement, ensuring that visitors could interact seamlessly with content, access resources, and navigate between pages without confusion, resulting in a more satisfying and productive user experience.",
    ],
    techStackDescription:
      "The Zealed website was built with a modern frontend stack, leveraging React for component-driven UI development, JavaScript for interactivity, and CSS3 for responsive styling. The stack ensures high performance and easy scalability as we move to the full-stack version in Phase Two.",
    techStack: [
      { name: "Vite", logo: "/images/vite.svg" },
      { name: "React", logo: "/images/react.svg" },
      { name: "JavaScript", logo: "/images/javascript.svg" },
      { name: "CSS3", logo: "/images/css.svg" },
    ],
  },
  {
    id: "zealed-web-app",
    title: "The Zealed Web Application Project",
    industry: "Multi-Service, Careers",
    industryIcon: "business_center",
    shortDescription:
      "A MERN stack web application for Zealed.Co for dynamic internship listings, with features that cater to posting internship opportunities, tracking applications and sharing and contributing career tips.",
    video: "/images/zealed_app_proj_long.mp4",
    duration: "1 Month",
    launched: "June 2025 (MVP)",
    laptopImage: "/images/zealed_app_laptop.mp4",
    projectOverview:
      "The second phase of the Zealed Web Project resulted in the creation of an improved dynamic web platform for Zealed.Co. I worked hand in hand with the Product Owner and a Graphics and UI/UX Designer contributing my Full-Stack and Scrum Master expertise to build a full-featured MERN stack web application designed to streamline the internship experience for both organizations/employers and applicants. Built using MongoDB, Express.js, React, and Node.js, the platform allows administrators, authorized editors and employers to dynamically post and manage internship opportunities, while providing applicants with an intuitive interface to browse listings, submit applications, and track their application progress. Beyond listings and application tracking, the portal includes a collaborative space where users can share and contribute career development tips, creating a vibrant community focused on professional growth. This comprehensive system supports both administrative efficiency and user engagement, making it a valuable tool for Zealed.Co’s talent development ecosystem. We just launched the MVP and the work continues to improve the platform continuously, applying strict Agile Scrum with efficient Continuous Integration/Continuous Development methods.",
    features: [
      "User Management",
      "Role-Based Access Control (RBAC)",
      "Dynamic Internship Listings",
      "Resume Upload & Application Tracking",
      "Interactive Career Tips Section",
      "LinkedIn & Third-Party Integrations",
      "Payment Gateway Integration",
    ],
    challenges: [
      {
        heading: "Complex Role-Based Access Control (RBAC)",
        description:
          "Designing and implementing flexible user permissions for admins, editors, employers, and applicants required careful planning to avoid privilege escalation and maintain a secure data environment.",
      },
      {
        heading: "Dynamic Content Management",
        description:
          "Ensuring internships and career tips could be created, updated, and deleted in real-time without breaking page consistency or UX flow demanded robust API and frontend-state synchronization.",
      },
      {
        heading: "Integration with External Services",
        description:
          "Incorporating email notifications, file uploads (e.g., resumes), and third-party APIs especially LinkedIn and Mailgun introduced dependencies that had to be securely and reliably managed.",
      },
      {
        heading: "Application Status Tracking",
        description:
          "Building an intuitive system to allow applicants to monitor their application progress required a scalable backend schema and clear UI logic to handle various stages like submitted, under review, shortlisted, or rejected.",
      },
      {
        heading: "Responsive UI/UX Collaboration",
        description:
          "Translating static UI/UX designs into dynamic, responsive React components involved constant communication with the designer to ensure alignment with product vision across multiple devices and screen sizes.",
      },
    ],
    solutions: [
      {
        heading: "Granular Role-Based Middleware",
        description:
          "I implemented a middleware-based RBAC system in Express.js, supported by token-based role checks in the frontend, to ensure access was securely segmented for each user role without code duplication or privilege leaks.",
      },
      {
        heading: "Robust CRUD APIs and State Sync",
        description:
          "I built scalable RESTful endpoints with MongoDB queries optimized for dynamic data, and used React state management alongside optimistic UI updates to maintain real-time consistency across content operations.",
      },
      {
        heading: "Secure and Modular API Integrations",
        description:
          "I modularized integration logic for services like Mailgun and LinkedIn OAuth, securely storing API keys in environment configs and isolating third-party failures from affecting core platform workflows.",
      },
      {
        heading: "Flexible Status Workflow System",
        description:
          "I designed a flexible status tracking model in MongoDB, mapping application stages to enums and creating visual UI indicators for applicants to track their progress easily and transparently.",
      },
      {
        heading: "Agile Design-Dev Feedback Loops",
        description:
          "We maintained a tight feedback loop with the designer and product owner using Figma and iterative previews, enabling smooth transitions from mockups to responsive, pixel-perfect React components compatible across screen sizes.",
      },
    ],
    mobileImage: "/images/zealed_app_mobile.webp",
    tabletImage: "/images/zealed_app_tablet.webp",
    impact: [
      "The second phase of the Zealed Web Project deepened the platform’s real-world impact by transforming it from a static showcase into a dynamic, interactive ecosystem for opportunity and growth. For individuals, especially students and early-career professionals, the platform now offers a more empowering experience, enabling them not just to discover internships but to actively manage their applications and learn from community-contributed career insights. Employers and organizations benefit from a streamlined channel to attract and assess candidates, saving time and ensuring their opportunities reach the right audiences. At a broader level, the platform fosters a culture of knowledge-sharing and mentorship through its collaborative features, promoting professional development within the community. Overrall, this upgraded system plays a pivotal role in bridging the gap between talent and opportunity, by supporting structured workflows, inclusive access, and continuous engagement,  reinforcing Zealed.Co’s commitment to youth empowerment and workforce readiness across the region.",
    ],
    techStackDescription:
      "The Zealed Web App was built using the MERN stack: MongoDB, Express.js, React, and Node.js, providing a robust and scalable foundation for both frontend and backend development. React, bundled with Vite for faster build times and a more efficient development experience, powered the dynamic and responsive user interface, enabling smooth navigation and real-time updates across the platform. Express.js and Node.js handled the backend logic and RESTful APIs, ensuring secure data flow and seamless integration with the external services, Mailgun and LinkedIn. MongoDB served as the primary database, offering flexibility in managing complex user roles, application statuses, and dynamic content structures. On the design side, Figma was used by the UI/UX designer to craft high-fidelity prototypes, allowing for smooth handoff and close collaboration between design and development. This modern, full-stack architecture allows for rapid iteration, strong performance, and scalability as the platform evolves beyond its MVP.",
    techStack: [
      { name: "MongoDB", logo: "/images/mongodb.svg" },
      { name: "Express.js", logo: "/images/express.svg" },
      { name: "React", logo: "/images/react.svg" },
      { name: "Node.js", logo: "/images/node.svg" },
      { name: "Vite", logo: "/images/vite.svg" },
      { name: "CSS3", logo: "/images/css.svg" },
    ],
    hasVideoDisplay: true,
  },
];

const populateCaseStudyPage = (projectId) => {
  const project = projectData.find((item) => item.id === projectId);
  if (project) {
    document.getElementById("page_title").innerText =
      "Case Study " + "| " + project.title;
    document.getElementById("case_study_industry").textContent =
      project.industry;
    document.getElementById("case_study_title").textContent = project.title;
    document.getElementById("case_study_short_description").textContent =
      project.shortDescription;
    document.getElementById("case_study_video").src = project.video;

    document.getElementById("material_symbol").textContent =
      project.industryIcon;
    document.getElementById("case_industry").textContent = project.industry;
    document.getElementById("case_study_duration").textContent =
      project.duration;
    document.getElementById("case_study_launched").textContent =
      project.launched;

    // Handle laptop media section (video or image)
    const mediaContainer = document.getElementById("laptop_media_container");
    mediaContainer.innerHTML = ""; // Clear existing content

    if (project.hasVideoDisplay) {
      // Create video element
      const videoElement = document.createElement("video");
      videoElement.src = project.laptopImage;
      videoElement.autoplay = true;
      videoElement.loop = true;
      videoElement.muted = true;
      videoElement.classList.add("case-study-media");
      mediaContainer.appendChild(videoElement);
    } else {
      // Create image element
      const imgElement = document.createElement("img");
      imgElement.src = project.laptopImage;
      imgElement.alt = project.title + " screenshot";
      imgElement.classList.add("case-study-media");
      mediaContainer.appendChild(imgElement);
    }

    document.getElementById("project_overview").textContent =
      project.projectOverview;

    const featuresList = document.getElementById("key_features");
    featuresList.innerHTML = "";
    project.features.forEach((feature) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = "<i class='bx bx-list-check'></i>" + feature;
      featuresList.appendChild(listItem);
    });

    const challengesSection = document.getElementById("challenges_section");
    challengesSection.innerHTML = "";
    project.challenges.forEach((challenge) => {
      const challengeDiv = document.createElement("div");
      challengeDiv.classList = "challenge-text";
      challengeDiv.innerHTML = `<h3>${challenge.heading}</h3><p>${challenge.description}</p>`;
      challengesSection.appendChild(challengeDiv);
    });

    document.getElementById("mobile_image").src = project.mobileImage;

    const solutionsSection = document.getElementById("solutions_section");
    solutionsSection.innerHTML = "";
    project.solutions.forEach((solution) => {
      const solutionDiv = document.createElement("div");
      solutionDiv.classList = "solution-text";
      solutionDiv.innerHTML = `<h3>${solution.heading}</h3><p>${solution.description}</p>`;
      solutionsSection.appendChild(solutionDiv);
    });

    document.getElementById("tablet_image").src = project.tabletImage;

    const impactSection = document.getElementById("impact_section");
    impactSection.innerHTML = `<p>${project.impact.join("</p><p>")}</p>`;

    document.getElementById("tech_stack_description").textContent =
      project.techStackDescription;
    const techStackCards = document.getElementById("tech_stack_section");
    techStackCards.innerHTML = "";
    project.techStack.forEach((tech) => {
      const techCard = document.createElement("div");
      techCard.classList.add("tech-stack-card");
      techCard.innerHTML = `<div class="tech-image"><img src="${tech.logo}" alt="${tech.name}"></div><div class="tech-text"><h4>${tech.name}</h4></div>`;
      techStackCards.appendChild(techCard);
    });
  } else {
    console.error("Project not found!");
  }
};

const handleCaseStudyPage = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const projectId = urlParams.get("id");
  populateCaseStudyPage(projectId);
};

document.addEventListener("DOMContentLoaded", handleCaseStudyPage);
