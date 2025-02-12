import {
  faPalette,
  faCode,
  faMobileAlt,
  faBullhorn,
  faFileAlt,
  faCloud,
  faCogs, // Services
  faHeartbeat,
  faUtensils,
  faBuilding,
  faDumbbell,
  faGraduationCap,
  faPlane,
  faBolt,
  faShoppingCart,
  faFutbol,
  faChartLine,
  faServer,
  faTruck, // Industries
  faMoneyBillWave,
  faStore,
  faShoppingBasket,
  faMapMarkedAlt, // Portfolio
} from "@fortawesome/free-solid-svg-icons";

export const menuData = {
  Services: [
    {
      label: "UI/UX Design",
      icon: faPalette,
      description:
        "Designing user interfaces and experiences that are both intuitive and engaging, ensuring a seamless interaction with your product.",
      path: "/services/ui_ux_design",
    },
    {
      label: "Website Development",
      icon: faCode,
      description:
        "Creating responsive and visually appealing websites tailored to meet your business goals and provide a great user experience.",
      path: "/services/website_development",
    },
    {
      label: "Mobile App Development",
      icon: faMobileAlt,
      description:
        "Developing custom mobile applications for both iOS and Android to enhance user engagement and expand your digital presence.",
      path: "/services/mobile_app_development",
    },
    {
      label: "Digital Marketing",
      icon: faBullhorn,
      description:
        "Strategizing and executing targeted digital marketing campaigns to boost your online visibility, traffic, and conversions.",
      path: "/services/digital_marketing",
    },
    {
      label: "CMS Website",
      icon: faFileAlt,
      description:
        "Building content management systems (CMS) websites that empower you to manage and update your content effortlessly and effectively.",
      path: "/services/cms_website",
    },
    {
      label: "Salesforce Development",
      icon: faCloud,
      description:
        "Customizing Salesforce solutions to streamline your sales, marketing, and customer service processes for better efficiency and scalability.",
      path: "/services/salesforce_development",
    },
    {
      label: "Custom Software Development",
      icon: faCogs,
      description:
        "Developing tailored software solutions to meet the unique needs of your business, ensuring enhanced functionality and growth.",
      path: "/services/custom_software_development",
    },
  ],

  Industries: [
    {
      label: "Health Care",
      icon: faHeartbeat,
      description:
        "Offering digital solutions like custom software development, UI/UX design, and mobile apps to enhance patient care and streamline healthcare operations.",
      path: "/industries/health_care",
    },
    {
      label: "Food",
      icon: faUtensils,
      description:
        "Developing user-friendly websites, mobile apps, and custom software for the food industry to improve online ordering, delivery, and customer engagement.",
      path: "/industries/food",
    },
    {
      label: "Business",
      icon: faBuilding,
      description:
        "Helping businesses scale with custom software solutions, CMS websites, and digital marketing to optimize processes and drive growth.",
      path: "/industries/business",
    },
    {
      label: "Health & Fitness",
      icon: faDumbbell,
      description:
        "Providing fitness apps, websites, and digital marketing strategies to help fitness businesses grow and engage users in a digital-first environment.",
      path: "/industries/health_fitness",
    },
    {
      label: "M-Learning",
      icon: faGraduationCap,
      description:
        "Creating mobile learning platforms with UI/UX design and app development to provide seamless educational experiences on the go.",
      path: "/industries/m-learning",
    },
    {
      label: "Travel",
      icon: faPlane,
      description:
        "Building custom travel apps, websites, and digital marketing campaigns to enhance the travel experience for businesses and customers alike.",
      path: "/industries/travel",
    },
    {
      label: "On Demand",
      icon: faBolt,
      description:
        "Designing on-demand service platforms with custom software and app development to provide quick, efficient service in various industries.",
      path: "/industries/on_demand",
    },
    {
      label: "E-Commerce",
      icon: faShoppingCart,
      description:
        "Developing custom e-commerce platforms, CMS websites, and mobile apps that help online businesses boost sales and streamline operations.",
      path: "/industries/e-commerce",
    },
    {
      label: "Sports",
      icon: faFutbol,
      description:
        "Creating sports apps, websites, and custom software solutions to enhance fan engagement, team management, and performance tracking.",
      path: "/industries/sports",
    },
    {
      label: "Finance",
      icon: faChartLine,
      description:
        "Developing tailored financial platforms with custom software, CMS websites, and digital marketing strategies for the finance industry.",
      path: "/industries/finance",
    },
    {
      label: "SaaS",
      icon: faServer,
      description:
        "Building SaaS platforms with custom software development, UI/UX design, and CMS solutions to optimize workflows and customer engagement.",
      path: "/industries/saas",
    },
    {
      label: "Logistics",
      icon: faTruck,
      description:
        "Offering custom software solutions, mobile apps, and digital marketing to optimize supply chain management and logistics operations.",
      path: "/industries/logistics",
    },
  ],

  Portfolio: [
    {
      label: "Bada Bhai Hai Na",
      icon: faMoneyBillWave,
      description:
        "Designed and developed a comprehensive online platform for Bada Bhai Hai Na, offering easy access to financing solutions and tools for business owners seeking flexible funding options.",
      path: "/portfolio/bbhn",
    },
    {
      label: "Green AI Pos",
      icon: faStore,
      description:
        "Built an AI-powered point-of-sale (POS) system for Green AI Pos, helping streamline restaurant operations in Australia with advanced technology that improves efficiency and customer experience.",
      path: "/portfolio/green-ai-pos",
    },
    {
      label: "Green Farm Products",
      icon: faShoppingBasket,
      description:
        "Developed a custom POS system, e-commerce platform, and CRM solution for Green Farm Products, a meat-selling business in Australia, to streamline sales, manage inventory, and enhance customer relationships.",
      path: "/portfolio/green-farm-products",
    },
    {
      label: "Journey Monk",
      icon: faMapMarkedAlt,
      description:
        "Created a dynamic and user-friendly website for Journey Monk, a travel agency, to enhance their online presence and provide customers with a seamless booking experience.",
      path: "/portfolio/journey-monk",
    },
  ],
};
