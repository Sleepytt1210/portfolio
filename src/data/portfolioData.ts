import { PortfolioData } from '../types/portfolio';

export const portfolioData: PortfolioData = {
  name: "Dylon Chung Yee Wong",
  location: "Malaysia",
  phone: "+6010-3520010",
  email: "dylonwcy@gmail.com",
  linkedin: "https://linkedin.com/in/dylonwcy",
  github: "https://github.com/dylonwcy",
  bio: "I am a postgraduate with a passion for cyber security and back-end development. I undertake my tasks with responsibility and ensure they are completed with high quality. I am always willing to learn new things.",

  education: [
    {
      period: "September 2022 – September 2023",
      degree: "MSc Advanced Computer Security",
      institution: "University of Manchester",
      result: "First Class Honours",
      courses: ["Cryptography", "Network Security", "System Governance", "Automated Reasoning", "Software Security"],
      link: "https://core.digitary.net/sharelink/4d700ca5-98a0-4a3f-b279-2b332e0836d7/fd1cfb56-c521-4481-a418-641f23a3757b",
    },
    {
      period: "September 2019 – June 2022",
      degree: "BSc Computer Science (Security and Resilience)",
      institution: "Newcastle University",
      result: "First Class Honours",
      courses: ["Cryptography", "System and Network Security", "Information Storage", "Machine Learning", "Predictive Analysis", "Computer Vision"],
      link: "https://core.digitary.net/sharelink/cc1d4e5b-d54d-4aa6-a3b6-1eeea31283a8/671047b2-f8e9-46f0-8c84-7249923bef41",
    }
  ],

  experiences: [
    {
      period: "January 2024 – Present",
      title: "Full Stack Developer",
      company: "AGSmart IT Sdn Bhd",
      responsibilities: [
        "Develop and maintain payment gateway solution that supports most Malaysia mainstream banks, DuitNow QR and web3",
        "Develop and maintain customised dashboard with reporting and analysis tools",
        "Uses Laravel (PHP), TypeScript and Python for backend; React (Next.js, Tanstack, Tailwindcss...), Laravel Blade (PHP + HTML + JavaScript) for frontend",
        "Manages cloud deployment with popular providers like AWS, Vultr and Digital Ocean",
        "Utilises container orchestration tools such as Docker and Kubernetes. Automates the deployment using Ansible",
        "Manages data storages and Database using PostgreSQL and AWS S3 buckets. Automates regular backup data regularly on PostgreSQL replicas",
        "Engage with clients to improve application and resolve any issues encountered by the clients"
      ]
    },
    {
      period: "August 2023 – October 2023",
      title: "Freelance Backend & Blockchain Developer",
      company: "Moonkite Sdn Bhd",
      responsibilities: [
        "Developed a blockchain-based system as a proof-of-concept for a certificate issuance service",
        "Implemented RESTful API and gateway connection to the Hyperledger Fabric blockchain in Golang",
        "Setup docker environments to simulate the transaction processes"
      ]
    }
  ],

  projects: [
    {
      name: "Discord Bot – Bili-Bot",
      description: "A Discord bot hosted on Heroku to play audio upon Discord user's request.",
      technologies: ["TypeScript", "Node.js v16", "MongoDB"],
      highlights: [
        "Perform async HTTP requests via the video server's RESTful API and pipe audio stream to the Discord voice channel",
        "Securely stored data in a NoSQL database (MongoDB) for request caching"
      ]
    },
    {
      name: "FDM Group Gamification",
      description: "Led a team of 4 to develop a web application based on the Spring Boot framework of Java.",
      technologies: ["Java", "Spring Boot"],
      highlights: [
        "Designed quizzes relating to Business Intelligence, Technical Operation and Software Testing to improve student's learning experience",
        "Took account of vulnerabilities like SQL injection, XSS, LFI and XXE during development",
        "Wrote a 3000-word detailed technical report on the project"
      ]
    },
    {
      name: "Animal Shelter Decentralised Application",
      description: "Developed a decentralized web application using Solidity and React.",
      technologies: ["Solidity", "JavaScript", "React"],
      highlights: [
        "Implemented trackable secure pet adoption and monetary donation features",
        "Prevented abuse of the system by enforcing a deposit upon an adoption request",
        "Allowed transparency of statistics and improved privacy of users by enabling anonymous adoption requests"
      ]
    },
    {
      name: "Blockchain-Based Federated Learning Intrusion Detection System",
      description: "A collaborative intrusion detection system that is built on the Hyperledger Fabric blockchain network.",
      technologies: ["TypeScript", "Python", "Hyperledger Fabric"],
      highlights: [
        "Uses a BiLSTM model to predict network attacks from network traffic packets",
        "The predictions from individual participants are aggregated into a global model using the Federated Averaging algorithm",
        "Data are secured by TLS communication and Hyperledger Fabric architecture"
      ]
    },
    {
      name: "ESBMC-Solidity - Contributor",
      description: "Led a team of 3 to contribute 28 file changes which passed the tests with expected results.",
      technologies: ["C++", "Solidity"],
      highlights: [
        "Extended the static analysis tool using C++",
        "Extended the program to support more return types and correctly detect errors for inherited classes",
        "Identified and reported more issues to improve the program"
      ]
    }
  ],

  skills: [
    {
      category: "Programming Languages",
      items: ["Python", "Java", "JavaScript", "TypeScript", "Go", "C", "C++", "PHP"]
    },
    {
      category: "Database",
      items: ["MySQL", "PostgreSQL", "NoSQL (S3, MongoDB)"]
    },
    {
      category: "Linux & Security Tools",
      items: ["Kali Linux", "Ubuntu", "Bash scripting", "BurpSuite", "Wireshark", "Ghidra", "nmap", "tshark", "john-the-ripper", "sqlmap", "radare2", "wfuzz", "Metasploit"]
    },
    {
      category: "Cloud & DevOps",
      items: ["AWS", "Vultr", "Digital Ocean", "Docker", "Kubernetes", "Ansible"]
    },
    {
      category: "Frameworks & Libraries",
      items: ["React", "Next.js", "TanStack", "Laravel", "Spring Boot", "Hyperledger Fabric"]
    }
  ],

  languages: ["Chinese Mandarin (Native)", "English (Fluent)", "Bahasa Melayu (Fluent)"]
};
