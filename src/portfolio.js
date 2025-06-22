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
  username: "José Vinicius",
  title: "Prazer, Vini!",
  subTitle: emoji(
    "Estudante de Engenharia da Computação na UFPE 🧠 | Pesquisador em IA com foco em dados, aprendizado de máquina e cibersegurança 🔬📊"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing",
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/jvss2",
  linkedin: "https://www.linkedin.com/in/jose-vinicius-souza/",
  gmail: "jvss2@cin.ufpe.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "O que eu faço",
  subTitle:
    "Pesquisador em IA e estudante de Engenharia da Computação, apaixonado por dados, aprendizado de máquina e segurança cibernética 🧠💻",

  skills: [
    emoji("⚡ Desenvolvimento e avaliação de modelos de machine learning aplicados a problemas reais como detecção de malware e anomalias"),
    emoji("⚡ Análise exploratória de dados, visualização, engenharia de atributos e balanceamento de conjuntos de dados"),
    emoji("⚡ Pesquisa e projetos em PLN, como detecção de fake news e discurso de ódio"),
    emoji("⚡ Experiência com técnicas de ensemble learning, metaclassificação e redes adversariais"),
    emoji("⚡ Automação de experimentos com Jupyter e scripts Python em plataformas como Google Colab e Azure")
  ],

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "TensorFlow",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "Scikit-learn",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "Pandas",
      fontAwesomeClassname: "fas fa-table"
    },
    {
      skillName: "NumPy",
      fontAwesomeClassname: "fas fa-square-root-alt"
    },
    {
      skillName: "Seaborn",
      fontAwesomeClassname: "fas fa-chart-line"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "Jupyter",
      fontAwesomeClassname: "fas fa-book"
    },
    {
      skillName: "Google Colab",
      fontAwesomeClassname: "fas fa-cloud"
    },
    {
      skillName: "Azure",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "NLTK",
      fontAwesomeClassname: "fas fa-language"
    }
  ],

  display: true
};



// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Universidade Federal de Pernambuco (UFPE)",
      logo: require("./assets/images/logo-ufpe.jpg"), // Substitua pelo caminho do logo se tiver
      subHeader: "Bacharelado em Engenharia da Computação",
      duration: "agosto de 2019 - Presente",
      desc: "Envolvido em projetos de pesquisa nas áreas de Inteligência Artificial, Aprendizado de Máquina, Segurança Cibernética e Processamento de Linguagem Natural.",
      descBullets: [
        "Publicação na área de detecção de malware com IA",
        "Projetos envolvendo detecção de anomalias em redes e PLN (fake news, discurso de ódio)",
        "Experiência com redes adversariais, ensemble learning e metaclassificação"
      ],
    }
  ]
};


// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Machine Learning / IA",
      progressPercentage: "85%"
    },
    {
      Stack: "Análise de Dados & Visualização",
      progressPercentage: "80%"
    },
    {
      Stack: "Programação em Python",
      progressPercentage: "90%"
    },
    {
      Stack: "Segurança Cibernética",
      progressPercentage: "70%"
    },
    {
      Stack: "Processamento de Linguagem Natural (PLN)",
      progressPercentage: "75%"
    },
    {
      Stack: "Engenharia de Software / Scripts Automatizados",
      progressPercentage: "65%"
    }
  ],
  displayCodersrank: false
};


// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Pesquisador de Iniciação Científica Independente",
      company: "Universidade Federal de Pernambuco (UFPE)",
      companylogo: require("./assets/images/logo-ufpe.jpg"),
      date: "2023 – presente",
      desc: "Pesquisa independente na área de detecção de malware e segurança da informação utilizando técnicas de aprendizado de máquina.",
      descBullets: [
        "Desenvolvimento e avaliação de modelos de classificação (ML) para detecção de códigos maliciosos",
        "Utilização de metaclassificação e ensemble learning para aumentar a precisão",
        "Coautoria de artigo científico publicado em periódico na área"
      ]
    },
    {
      role: "Bolsista de Pesquisa (FAPESQ / PET)",
      company: "Universidade Federal de Pernambuco (UFPE)",
      companylogo: require("./assets/images/logo-ufpe.jpg"),
      date: "Março 2024 – Maio 2024",
      desc: "Atuei no projeto de detecção de falhas em componentes veiculares, usando análise de sensores e séries temporais.",
      descBullets: [
        "Limpeza, análise e preparação de dados de sensores embarcados",
        "Aplicação de modelos preditivos para identificação de falhas com TensorFlow",
        "Pesquisa com base em benchmarks da literatura e validação dos modelos"
      ]
    },
    {
      role: "Pesquisador de Iniciação Científica (remoto)",
      company: "AGRLAB / Startup educacional",
      companylogo: require("./assets/images/AGRLab-logo.png"), // Substitua por um logo ou imagem simbólica
      date: "2022 – 2023",
      desc: "Criação de conteúdos e roteiros interativos para um jogo educacional voltado à área de Gerência de Projetos.",
      descBullets: [
        "Desenvolvimento de narrativas técnicas baseadas no PMBOK",
        "Adaptação de conceitos acadêmicos para ambientes lúdicos digitais",
        "Contribuição em equipe remota com entregas regulares e reuniões de planejamento"
      ]
    },
  ]
};


/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Grandes Projetos",
  subtitle: "Pesquisas e iniciativas acadêmicas com impacto na área de IA e dados",
  projects: [
    {
      image: require("./assets/images/ssciLogo.webp"), // você pode usar um ícone genérico como "research.png"
      projectName: "Detecção de Malware com Machine Learning",
      projectDesc:
        "Pesquisa apresentada na conferência SSCI 2025 (IEEE) na Noruega, propondo técnicas de classificação para detecção de malware com metaclassificação e ensemble learning.",
      footerLink: [
        {
          name: "Acesse no arXiv",
          url: "https://arxiv.org/abs/2504.00041"
        }
      ]
    },
    {
      image: require("./assets/images/logo-ufpe.jpg"), // outro ícone genérico, ou algo que represente NLP
      projectName: "Detecção de Fake News com PLN",
      projectDesc:
        "Projeto aceito no BRASNaM 2025 (Maceió), utilizando modelos clássicos de PLN para detectar desinformação em notícias curtas em português.",
      footerLink: [
        {
          name: "Apresentação em breve no BRASNaM",
          url: "" // pode adicionar o link do arXiv ou evento depois
        }
      ]
    }
  ],
  display: true
};


// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Conquistas e Certificações 🏆"),
  subtitle:
    "Minhas principais conquistas, certificações, prêmios e alguns projetos de destaque que realizei!",

  achievementsCards: [
    {
      title: "Artigo Científico Publicado 📄",
      subtitle:
        "Co-autor de um artigo que apresenta a técnica 'Bootstrap-based Balance', um método para balancear algoritmos de ensemble visando a melhoria na performance de detecção.",
      image: require("./assets/images/ssciLogo.webp"),
      imageAlt: "Logo SSCI",
      footerLink: [
        {
          name: "Ver Artigo no arXiv",
          url: "https://arxiv.org/abs/2504.00041"
        }
      ]
    }
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
  title: "Apresentações",
  subtitle: emoji(
    "Compartilhando conhecimento e colecionando crachás de palestrante 🎤"
  ),

  talks: [
    {
      title: "Vantagens e os Desafios da IA no Combate à Fake News",
      subtitle: "Palestra na Semana da Computação (Secomp) - CIn/UFPE",
      slides_url: "https://www.canva.com/design/DAGX4pMR3O4/RzEoGH7PKYoUZWVJkyncGw/view?utm_content=DAGX4pMR3O4&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h2f1041af41",
      event_url: "https://secomp.cin.ufpe.br"
    }
  ],
  display: true
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
  title: "Currículo",
  subtitle: "Faça o download da minha versão mais recente",
  resume_url: "https://link-para-seu-curriculo.com/cv.pdf", // O link que você me fornecer entrará aqui
  display: true
};

const contactInfo = {
  title: emoji("Contato ☎️"),
  subtitle:
    "Estou disponível para novos projetos ou um simples bate-papo. Fique à vontade para me contatar.",
  // number: "", // Removido pois não foi fornecido
  email_address: "jvss2@cin.ufpe.br"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
