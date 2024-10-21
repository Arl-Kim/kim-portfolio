const projectData = [
    {
      id: 'moocourses',
      title: 'Transfrontières MooCourses Project',
      industry: 'Education',
      industryIcon: 'school',
      shortDescription: 'Transfrontières\' online learning platform with customised EdTech tools through which learners and tutors interact and share knowledge.',
      image: '/images/moocourses_proj_long.gif',
      duration: '2 Months',
      launched: 'April 2024',
      laptopImage: '/images/moocourses_laptop.gif',
      projectOverview: 'The Transfrontières MooCourses Project aimed to revolutionize online learning by providing a robust platform with customized EdTech tools. It facilitates interaction and knowledge sharing among learners and tutors, making the Education and Training service at Transfrontières Agencies Limited more accessible and effective. Through the platform, clients can now learn French Language for Professional Purposes, ICT, Music, and Research. I built a highly scalable system to allow for additional education and training modules which are due to be added over the next few months. MooCourses has been highly rated by users for its comprehensive approach to online learning and its innovative features.',
      features: [
        'Custom EdTech Tools',
        'Interactive Learning Modules',
        'Live User Chat',
        'Highly Scalable',
        'Secure User Authentication'
      ],
      challenges: [
        {
          heading: 'Technical Constraints',
          description: 'Implementing real-time collaboration features with low latency was a significant technical challenge that required careful optimization.'
        },
        {
          heading: 'User Engagement',
          description: 'Ensuring consistent user engagement in a virtual learning environment was a challenging aspect of the project.'
        }
      ],
      solutions: [
        {
          heading: 'Optimization Techniques',
          description: 'I used advanced optimization techniques and robust server architecture to minimize latency and ensure seamless real-time collaboration.'
        },
        {
          heading: 'Interactive & Gamified Elements',
          description: 'I integrated interactive and gamified elements such as quizzes, badges, and leaderboards to enhance user engagement and make learning more enjoyable.'
        }
      ],
      mobileImage: '/images/moocourses_mobile.webp',
      tabletImage: '/images/moocourses_tablet.webp',
      impact: [
        'The MooCourses platform has significantly improved the accessibility of education and training for individual students and businesses across Kenya and other parts of the world, allowing them to learn from anywhere. The real-time feedback and collaboration features have enabled more effective tutor-student interactions, thereby enhancing the overall learning experience. Including highly interactive modules in the platform has significantly increased user engagement, with more students completing their courses. Through this project Transfrontières Agencies Limited experienced a massive transformation in how they offer their Education and Training service to their clients. It perfectly aligned with their objective of full service digitalization.'
      ],
      techStackDescription: 'For this project, I utilized a robust technology stack. I used HTML5 and CSS3 for front-end development to create a responsive and user-friendly interface. For the back-end I employed PHP, and it enabled me to handle server-side logic and operations efficiently. I chose MySQL as the database management system to efficiently store and manage user and course data.',
      techStack: [
        { name: 'HTML5', logo: '/images/html.svg' },
        { name: 'CSS', logo: '/images/css.svg' },
        { name: 'PHP', logo: '/images/php.svg' },
        { name: 'MySQL', logo: '/images/mysql_server.svg' }
      ]
    },
    {
        id: 'raasis',
        title: 'The Ra\'Asis Software React App',
        industry: 'Software Engineering',
        industryIcon: 'developer_board',
        shortDescription: 'A dynamic React application through which Ra\'Asis Software\'s clients can directly access Ra\'Asis services and development teams for their projects.',
        image: '/images/raasis_proj_long.gif',
        duration: '3 Months',
        launched: 'May 2024',
        laptopImage: '/images/raasis_laptop.gif',
        projectOverview: 'This project involved the development of a dynamic platform designed to bridge the gap between Ra\'Asis Software clients and their services and development teams. The application offers an intuitive and efficient way for the startup to showcase their services, products and portfolio, track their progress, and interact directtly with their clients. It ensures a seamless user experience, facilitating effective communication and efficient project management.',
        features: [
          'Interactive & User-Friendly Interface',
          'Dynamic Components',
          'Service Tracking & Client Management',
          'Interactive Blog',
          'User Management'
        ],
        challenges: [
          {
            heading: 'Scalability',
            description: 'Ensuring the application can handle increasing numbers of users and data without compromising performance.'
          },
          {
            heading: 'User Engagement',
            description: 'Creating an engaging user experience that encourages clients to actively use the platform and have a high likelihood of selecting Ra\'Asis Software\'s development teams and services.'
          }
        ],
        solutions: [
          {
            heading: 'Optimized Architecture',
            description: 'Implemented a scalable architecture using MongoDB, Node.js & Express together with React, allowing the application to grow with the user base.'
          },
          {
            heading: 'Interactive Features',
            description: 'Developed interactive features and real-time updates to keep users engaged and informed throughout their project lifecycle.'
          }
        ],
        mobileImage: '/images/raasis_mobile.webp',
        tabletImage: '/images/raasis_tablet.webp',
        impact: [
          'The developed application has enhanced client satisfaction through direct and efficient communication with development teams, leading to better project outcomes. Ra\'Asis Software now have improved project management and tracking capabilities, allowing clients and project managers alike to monitor progress and make informed decisions in real-time. The scalable nature of the application supports future growth, ensuring the platform remains robust and reliable as the service scope, user base and overall traffic expands.'
        ],
        techStackDescription: 'I leveraged a modern technology stack to deliver a seamless and efficient user experience. Utilizing React, Vanilla JS and CSS for the frontend and Node.js with a MongoDB database for the backend, the platform is designed to be highly responsive and scalable, meeting the demands of a growing service scope, portfolio and user base.',
        techStack: [
          { name: 'React', logo: '/images/react.svg' },
          { name: 'Node.js', logo: '/images/node.svg' },
          { name: 'JavaScript', logo: '/images/javascript.svg' },
          {name: 'MongoDB', logo: '/images/mongodb.svg' },
          { name: 'CSS', logo: '/images/css.svg' }
        ]
      },
      {
        id: 'oaksafrica',
        title: 'The Oaks Africa Foundation Project',
        industry: 'Non-Profit',
        industryIcon: 'volunteer_activism',
        shortDescription: 'An online platform for Oaks Africa Foundation to provide information about their mission, vision and community development projects and initiatives. It facilitates a seamless interface to run OAF scholarship and sponsorship programs online.',
        image: '/images/oaksafrica_proj_long.gif',
        duration: '2 Months',
        launched: 'August 2023',
        laptopImage: '/images/oaksafrica_laptop.gif',
        projectOverview: 'The Oaks Africa Foundation website project aimed to create a visually appealing, user-friendly, and responsive platform that aligned with the foundation\'s objectives. Through the platform, interested parties can get information about the foundation\'s agenda, mission, vision scholarship and sponsorship programs and many other OAF projects. It offers interactive ways for visitors to apply for scholarships, donate funds, apply for sponsorship programs, and start sponsoring. The project also included the adoption and customization of a content management system (CMS) for easy content updates and maintenance, along with integrating basic and advanced SEO practices to enhance visibility in search engine results.',
        features: [
          'Responsive Design',
          'CMS For Easy Content Updates',
          'Scholarship Application Forms',
          'Sponsorship Application Forms',
          'Secure Donation & Sponsorship Payment Integrations',
          'Newsletter Subscription & Auto-Updates',
        ],
        challenges: [
          {
            heading: 'Content Management',
            description: 'Adoption and customization of an intuitive CMS to allow the foundation\'s team to easily update and manage content without deep technical expertise was one of the challenges encountered.'
          },
          {
            heading: 'User Engagement',
            description: 'Ensuring high user engagement and interaction through the website, particularly for applying to programs and donating to fund the programs was also a challenge that needed to be addressed.'
          }
        ],
        solutions: [
          {
            heading: 'User-Friendly CMS',
            description: 'I implemented a WordPress-based CMS, utilizing customized theme templates and additional features that provided easy content management by the foundation\'s team.'
          },
          {
            heading: 'Interactive Features',
            description: 'I also designed and developed interactive features such as application forms and donation integrations to enhance user engagement and interaction.'
          }
        ],
        mobileImage: '/images/oaksafrica_mobile.webp',
        tabletImage: '/images/oaksafrica_tablet.webp',
        impact: [
          'The website has significantly increased the foundation’s online visibility, leading to higher traffic and increased engagement with the community. The interactive scholarship and sponsorship applications, secure online donation payments and constant communication channels through newsletters and website adverts have simplified the process for users and elevated their experiences. The results are evident in more scholarship applications and donations as compared to when the process was only handled offline. The user-friendly CMS has empowered the foundation’s team to manage and update content efficiently without needing frequent technical support.'
        ],
        techStackDescription: 'For this project, I utilized a robust technology stack to ensure a responsive, user-friendly, and highly functional website. I built the front-end using HTML, CSS, and JavaScript to create a dynamic and engaging user experience. For the back-end I utilized WordPress, PHP, and MySQL, providing a robust and scalable platform for content management and data handling. I integrated IntaSend API for secure and efficient payment processing in online donations and sponsorship funding.',
        techStack: [
          { name: 'WordPress', logo: '/images/wordpress.svg' },
          { name: 'HTML5', logo: '/images/html.svg' },
          { name: 'CSS', logo: '/images/css.svg' },
          { name: 'JavaScript', logo: '/images/javascript.svg' },
          { name: 'PHP', logo: '/images/php.svg' },
          { name: 'MySQL', logo: '/images/mysql_server.svg' }
        ]
      },
      {
        id: 'transfrontieres',
        title: 'Transfrontières Agencies Website',
        industry: 'Multi-Service',
        industryIcon: 'link',
        shortDescription: 'A comprehensive website for Transfrontières Agencies Limited to connect clients with a wide range of integrated services, including Communications, Education & Training, ICT, and Events Management.',
        image: '/images/transfro_proj_long.gif',
        duration: '2 Months',
        launched: 'July 2023',
        laptopImage: '/images/transfro_laptop.gif',
        projectOverview: 'The Transfrontières Agencies Website is an Integrated Services platform that was developed to streamline the connection between the agency and its clients, primarily businesses and brands. The website offers an easy-to-navigate interface where clients can book consultations and directly access digital solutions in Communications, Education & Training, ICT, and Events through secure links.',
        features: [
          'User-friendly Interface',
          'Online Booking System For Consultations',
          'Secure Access To Digital Solutions',
          'Live Chat Support',
          'Responsive Design For All Screen Sizes'
        ],
        challenges: [
          {
            heading: 'Service Integration',
            description: 'Integrating all the services including their sub-services into a single cohesive platform required a robust and flexible architecture.',
          },
          {
            heading: 'User Experience',
            description: 'Ensuring a seamless user experience across diverse services and client needs was a complex task, necessitating meticulous design and testing.'
          },
          {
            heading: 'Security',
            description: 'Implementing secure access to digital solutions and ensuring data protection across all services was also one of the main challenges in this project.'
          }
        ],
        solutions: [
          {
            heading: 'Modular Architecture',
            description: 'I developed a modular architecture that allows for flexible integration of various services, making it easy to manage and scale the platform.'
          },
          {
            heading: 'Enhanced UX Design',
            description: 'Through user research and iterative design, I created an intuitive and seamless user experience that caters to individuals of all ages and businesses in different levels.'
          },
          {
            heading: 'Advanced Security Measures',
            description: 'I implemented secure links and robust authentication mechanisms to protect user data and ensure safe access to all the available digital solutions.'
          }
        ],
        mobileImage: '/images/transfro_mobile.webp',
        tabletImage: '/images/transfro_tablet.webp',
        impact: [
          'The integrated services on the website have significantly improved client engagement, providing a centralized platform for accessing all the offerings of Transfrontières Agencies Ltd. The online booking system has streamlined all consultation processes, making it more efficient and convenient for Transfrontières\' clients. The secure linking to the available digital solutions per service have increased client trust and satisfaction, leading to positive feedback and higher retention rates.'
        ],
        techStackDescription: 'I used WordPress for a flexible CMS, with HTML, CSS, and JavaScript for front-end development. I utilized PHP for the back-end processes, and MySQL for database management, ensuring a robust, scalable and secure platform.',
        techStack: [
          { name: 'WordPress', logo: '/images/wordpress.svg' },
          { name: 'HTML5', logo: '/images/html.svg'},
          {name: 'CSS3', logo: '/images/css.svg'},
          {name: 'JavaScript', logo: '/images/javascript.svg'},
          {name: 'PHP', logo: '/images/php.svg'},
          {name: 'MySQL', logo: '/images/mysql_server.svg'}
        ]
      },
      {
        id: 'mwalimufred',
        title: 'Mwalimu Fred Online Project',
        industry: 'Education',
        industryIcon: 'school',
        shortDescription: 'An online platform that provides a secure learning environment and top quality learning materials and resources for Junior Secondary School students in Kenya.',
        image: '/images/mwalimufred_proj_long.gif',
        duration: '2 Months',
        launched: 'July 2024',
        laptopImage: '/images/mwalimufred_laptop.webp',
        projectOverview: 'Mwalimu Fred Online is a premier educational platform dedicated to providing top-quality learning, secure learning environment, materials and resources in line with the curriculum standards set by the Ministry of Education, Kenya National Examinations Council, and the Kenya Institute of Curriculum Development. The platform focuses on Junior School, Senior School, and College students, emphasizing the new Competency-Based Curriculum (CBC) and Digital Literacy as one of its core competencies. The system developed provides a remote and efficient way for students and teachers to enforce their mandate under CBC.',
        features: [
          'Intuitive UI/UX',
          'Comprehensive Assessment Tools',
          'Advanced Analytics & Reporting',
          'Interactive Learning Tools',
          'Mobile Accessibility',
          'User Live Chat',
          'Integrations & Interoperability'
        ],
        challenges: [
          {
            heading: 'Custom Feature Development',
            description: 'Adapting the available open-source frameworks to meet unique client requirements involved extensive custom development.',
          },
          {
            heading: 'Data Migration',
            description: 'Transferring existing data into the system required careful planning and execution to avoid data loss or inconsistencies.'
          },
          {
            heading: 'Performance Optimization',
            description: 'Ensuring the platform could handle high traffic and large numbers of concurrent users with different roles necessitated significant performance tuning and optimization.'
          },
          {
            heading: 'User Training',
            description: 'Providing adequate training and support for all users using the platform was crucial to ensure successful adoption.'
          }
        ],
        solutions: [
          {
            heading: 'Custom Plugin Development',
            description: 'I created custom plugins to extend the system\'s functionality to meet specific client requirements seamlessly.'
          },
          {
            heading: 'Automated Data Migration Tools',
            description: 'I configured and utilized automated tools for efficient and accurate data migration, which ensured data integrity and easened the process of managing the system.'
          },
          {
            heading: 'Performance Tuning',
            description: 'To meet the requirement of top notch performance, I implemented caching, load balancing, and a number performance optimization best practices. This enabled the system to handle high traffic while operating smoothly and seamlessly.'
          },
          {
            heading: 'Comprehensive User Training',
            description: 'I planned for and conducted extensive training sessions and provided detailed documentation that helped users become proficient with the platform.'
          }
        ],
        mobileImage: '/images/mwalimufred_mobile.webp',
        tabletImage: '/images/mwalimufred_tablet.webp',
        impact: [
          'The "Mwalimu Fred Online" platform has significantly transformed the educational landscape for Junior School, Senior School, and College students in Kenya. By aligning with the Ministry of Education, Kenya National Examinations Council, and the Kenya Institute of Curriculum Development standards, the platform ensures that students have access to high-quality, curriculum-compliant resources. The emphasis on the Competency-Based Curriculum (CBC) and Digital Literacy has empowered students to develop essential skills for the future. Teachers and students now have a remote, efficient, and secure way to engage with educational content, making learning more accessible and effective. This innovative approach has enhanced the overall learning experience, fostering academic excellence and digital proficiency among students and teachers alike.'
        ],
        techStackDescription: 'I utilized HTML5, CSS, and JavaScript for front-end development, ensuring a responsive and engaging user interface. On the back end, I employed PHP to handle server-side processes, and MySQL for robust and scalable database management. This combination of technologies provided a solid foundation for developing a secure, efficient, and high-performing educational platform.',
        techStack: [
          { name: 'HTML5', logo: '/images/html.svg'},
          {name: 'CSS3', logo: '/images/css.svg'},
          {name: 'JavaScript', logo: '/images/javascript.svg'},
          {name: 'PHP', logo: '/images/php.svg'},
          {name: 'MySQL', logo: '/images/mysql_server.svg'}
        ]
      },
      {
        id: 'greatlakescrisis',
        title: 'The Great Lakes Crisis Blog',
        industry: 'Media',
        industryIcon: 'media_link',
        shortDescription: 'A blogging site for personal expression and professional expertise, focusing on the intricate conflicts and crises within the Great Lakes region of Africa.',
        image: '/images/greatlakescrisis_proj_long.gif',
        duration: '1 Month',
        launched: 'July 2024',
        laptopImage: '/images/greatlakescrisis_laptop.webp',
        projectOverview: 'The Great Lakes Crisis project involved the creation of a blogging site designed to provide a platform for personal expression and professional expertise, shedding light on the complex conflicts and crises within the Great Lakes region of Africa. The site aims to inform, educate, and engage readers by offering in-depth analyses, personal narratives, and expert insights into the multifaceted issues affecting this region. Users can subscribe to the blog for regular updates and actively contribute through comments and discussions, fostering a community of informed and engaged readers. The site is available in English, French and Swahili which ensures inclusivity for all peoples within the region and even beyond. Through its comprehensive content, the platform seeks to raise awareness and foster a deeper understanding of the challenges and dynamics at play in the Great Lakes area so that collectively, permanent and sustainable solutions can be implemented.',
        features: [
          'Interactive User Interface',
          'Easy Subscription Options',
          'Comment & Discussion Features',
          'Membership Accounts',
          'Multi-Author Support',
          'Social Media Integration',
          'Multi-Lingual Support',
          'Admin & Editor Dashboards'
        ],
        challenges: [
          {
            heading: 'Content Management',
            description: 'Ensuring the smooth organization and categorization of diverse content types required meticulous planning and implementation.',
          },
          {
            heading: 'User Engagement',
            description: 'Encouraging active participation from readers through comments and discussions necessitated the development of user-friendly interaction features.'
          },
          {
            heading: 'Security',
            description: 'Implementing robust security measures to protect user data and prevent spam or malicious activity was a critical challenge.'
          },
          {
            heading: 'Scalability',
            description: 'Designing the platform to handle potential high traffic and increasing content volume while maintaining performance was essential.'
          }
        ],
        solutions: [
          {
            heading: 'User Engagement Strategies',
            description: 'I implemented features such as social media integration and interactive comment sections to foster active participation and community engagement.'
          },
          {
            heading: 'Advanced Security Measures',
            description: 'I deployed security plugins and setup best practices to protect user data, prevent spam, and safeguard the platform against malicious activities.'
          },
          {
            heading: 'SEO Optimization Techniques',
            description: ' Applied SEO best practices and configured SEO plugins to improve search engine visibility and increase the reach.'
          },
          {
            heading: 'Scalability Solutions',
            description: 'I optimized the site with performance enhancements specifically caching and content delivery networks (CDNs) to handle high traffic and ensure smooth operation.'
          },
          {
            heading: 'Custom Plugin Development',
            description: 'I developed custom plugins to enhance WordPress functionality, enabling seamless integration of subscription options, comment systems, and multi-author support.'
          }
        ],
        mobileImage: '/images/greatlakescrisis_mobile.webp',
        tabletImage: '/images/greatlakescrisis_tablet.webp',
        impact: [
          'The "Great Lakes Crisis" blog website has made a significant impact by providing a dedicated platform for both personal expression and professional expertise on the conflicts and crises in the Great Lakes region of Africa. The developed platform offers in-depth analyses, personal narratives, and expert insights, going a long way in raising awareness and fostering a deeper understanding of the complex issues affecting the region. The capability of users to subscribe and actively engage through comments and discussions has built a vibrant community of informed readers. This platform not only educates and informs but also encourages dialogue and collaboration, contributing to a more nuanced and comprehensive discourse on the Great Lakes crises. It has opened an avenue through which long lasting solutions to the problems affecting the people of the Great Lakes region can be sought'
        ],
        techStackDescription: 'I utilized HTML5 and CSS, for front-end development, ensuring a responsive and engaging user interface. For the back end, I employed PHP to handle server-side processes, and MySQL for robust and scalable database management. WordPress served as the content management system, providing a flexible and user-friendly platform for blogging. This combination of technologies provided a solid foundation for developing a secure, efficient, and high-performing blogging site.',
        techStack: [
          { name: 'HTML5', logo: '/images/html.svg'},
          {name: 'CSS3', logo: '/images/css.svg'},
          {name: 'WordPress', logo: '/images/wordpress.svg'},
          {name: 'PHP', logo: '/images/php.svg'},
          {name: 'MySQL', logo: '/images/mysql_server.svg'}
        ]
      },
      {
        id: 'katf-web',
        title: 'The KATF Web Project',
        industry: 'French Education',
        industryIcon: 'school',
        shortDescription: 'A React application that provides an informative online platform for members of The Kenya Association of Teachers of French(KATF) and other interested parties.',
        image: '/images/katf_proj_long.gif',
        duration: '1 Month',
        launched: 'September 2024',
        laptopImage: '/images/katf_laptop.gif',
        projectOverview: 'The KATF web project involved the creation of a React app to provide an online platform for The Kenya Association of Teachers of French. The main aim of the project was to increase the visibility and reach of the association online. The platform showcases information about KATF, provides updates on past and upcoming events, latest news, membership, available resources and all other relevant content in both French and English languages. The website will serve as a resource for teachers of French in Kenya and will also be accessible to the general public.',
        features: [
          'Interactive Dynamic Interfaces',
          'Language Toggling (French & English)',
          '15++ Pages',
          'Responsive Design'
        ],
        challenges: [
          {
            heading: 'Complex Multilingual Content Management',
            description: 'Managing and structuring content for multiple languages was a significant challenge. The website needed to support dynamic content changes across different sections in at least two languages (English and French). Ensuring that translations were consistent and the user interface adapted fluidly to language switches added complexity to both the frontend and content management.',
          },
          {
            heading: 'Managing SEO & Analytics For Multiple Routes',
            description: 'Ensuring effective SEO and tracking user behavior through Google Analytics across multiple routes posed difficulties. Each page, especially for news articles and case studies, needed distinct metadata and tracking events to accurately capture page views and interactions without duplication or loss of data.'
          },
          {
            heading: 'Handling Dynamic Data & Efficient State Management',
            description: 'Since the website included a news section with frequently updated content, managing dynamic data was a challenge. Additionally, the need to ensure that user selected category-specific data loaded efficiently, without causing delays or unnecessary re-renders, required careful planning for state management.'
          }
        ],
        solutions: [
          {
            heading: 'Multilingual Support Using Context Switching',
            description: 'I implemented a LanguageContext interface to manage and dynamically switch between languages across the site. This ensured that content rendered based on the selected language, and translations were centrally stored, making it easier to maintain consistency and scalability.'
          },
          {
            heading: 'Implementing SEO & Analytics Best Practices',
            description: 'To address the SEO and analytics issues, I utilized the react-helmet-async library for injecting dynamic meta tags per page, and ReactGA4 to track page views and user interactions across the app. This ensured each page had accurate metadata for search engines and user activity tracking was precise.'
          },
          {
            heading: 'Optimizing State Management',
            description: 'I addressed the state management challenges by using React\'s useEffect and useContext hooks to load data only when necessary, minimizing re-renders. This ensured efficient loading of news articles and events information with smooth transitions between different content categories without overwhelming the user experience.'
          }
        ],
        mobileImage: '/images/katf_mobile.webp',
        tabletImage: '/images/katf_tablet.webp',
        impact: [
          'The KATF Web Project has significantly amplified the online presence of The Kenya Association of Teachers of French (KATF), fostering better engagement with both its members and the general public. By providing essential information in both French and English, the platform has broadened its accessibility, enabling a wider audience to connect with the association’s resources and events. The seamless user experience allows teachers to access updates on important events, relevant news, and resources in real-time, fostering a more informed and active community. Furthermore, the site’s visibility promotes the learning and teaching of French in Kenya, supporting KATF\'s mission and empowering educators with a centralized platform for collaboration and growth. Overall, the project has modernized KATF’s outreach, enabling it to better serve its members and enhance the association’s relevance in this digital era.'
        ],
        techStackDescription: 'For development, I utilized React as the primary JavaScript library, allowing me to create a dynamic and responsive user interface. React’s component-based architecture made it easier to manage and reuse code, enhancing development efficiency. JavaScript was the core language that I used to implement the logic and functionality across the site, ensuring seamless interaction and dynamic content updates. I also employed CSS3 to style the website, ensuring it was visually appealing and provided a smooth user experience on both desktop and mobile devices. This combination of technologies allowed me to build a fast, scalable, and modern platform for KATF.',
        techStack: [
          { name: 'React', logo: '/images/react.svg' },
          { name: 'JavaScript', logo: '/images/javascript.svg' },
          { name: 'CSS3', logo: '/images/css.svg' },
        ]
      }
  ];
  
  function populateCaseStudyPage(projectId) {
    const project = projectData.find(item => item.id === projectId);
    if (project) {
      document.getElementById('page_title').innerText = "Case Study " + "| " + project.title; 
      document.getElementById('case_study_industry').textContent = project.industry;
      document.getElementById('case_study_title').textContent = project.title;
      document.getElementById('case_study_short_description').textContent = project.shortDescription;
      document.getElementById('case_study_image').src = project.image;
      
      document.getElementById('material_symbol').textContent = project.industryIcon;
      document.getElementById('case_industry').textContent = project.industry;
      document.getElementById('case_study_duration').textContent = project.duration;
      document.getElementById('case_study_launched').textContent = project.launched;
      document.getElementById('laptop_image').src = project.laptopImage;
  
      document.getElementById('project_overview').textContent = project.projectOverview;
  
      const featuresList = document.getElementById('key_features');
      featuresList.innerHTML = '';
      project.features.forEach(feature => {
        const listItem = document.createElement('li');
        listItem.innerHTML = "<i class='bx bx-list-check'></i>" + feature;
        featuresList.appendChild(listItem);
      });
  
      const challengesSection = document.getElementById('challenges_section');
      challengesSection.innerHTML = '';
      project.challenges.forEach(challenge => {
        const challengeDiv = document.createElement('div');
        challengeDiv.classList = 'challenge-text'
        challengeDiv.innerHTML = `<h3>${challenge.heading}</h3><p>${challenge.description}</p>`;
        challengesSection.appendChild(challengeDiv);
      });

      document.getElementById('mobile_image').src = project.mobileImage;
  
      const solutionsSection = document.getElementById('solutions_section');
      solutionsSection.innerHTML = '';
      project.solutions.forEach(solution => {
        const solutionDiv = document.createElement('div');
        solutionDiv.classList = 'solution-text'
        solutionDiv.innerHTML = `<h3>${solution.heading}</h3><p>${solution.description}</p>`;
        solutionsSection.appendChild(solutionDiv);
      });

      document.getElementById('tablet_image').src = project.tabletImage;
  
      const impactSection = document.getElementById('impact_section');
      impactSection.innerHTML = `<p>${project.impact.join('</p><p>')}</p>`;
  
      document.getElementById('tech_stack_description').textContent = project.techStackDescription;
      const techStackCards = document.getElementById('tech_stack_section');
      techStackCards.innerHTML = '';
      project.techStack.forEach(tech => {
        const techCard = document.createElement('div');
        techCard.classList.add('tech-stack-card');
        techCard.innerHTML = `<div class="tech-image"><img src="${tech.logo}" alt="${tech.name}"></div><div class="tech-text"><h4>${tech.name}</h4></div>`;
        techStackCards.appendChild(techCard);
      });
    } else {
      console.error('Project not found!');
    }
  }
  
  function handleCaseStudyPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');
    populateCaseStudyPage(projectId);
  }
  
  document.addEventListener('DOMContentLoaded', handleCaseStudyPage);
  