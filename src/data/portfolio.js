export const PERSONAL_INFO = {
  name: 'Kelvin Lima',
  username: 'kelvinlima91',
  tagline: {
    pt: 'Software developer de Mindelo, Cabo Verde. Construo produtos digitais para o mercado cabo-verdiano com Laravel, Tailwind CSS e Alpine.js.',
    en: 'Software developer from Mindelo, Cape Verde. I build digital products for the Cape Verdean market with Laravel, Tailwind CSS, and Alpine.js.',
  },
  bio: {
    pt: 'Developer apaixonado por criar produtos digitais para o mercado cabo-verdiano. Especializado em Laravel, Alpine.js e Tailwind CSS v4. Formado em Engenharia de Sistemas e Informática pela Universidade Jean Piaget de Cabo Verde.',
    en: 'Developer passionate about creating digital products for the Cape Verdean market. Specialized in Laravel, Alpine.js and Tailwind CSS v4. Graduated in Systems and Computer Engineering from Universidade Jean Piaget de Cabo Verde.',
  },
  location: 'Mindelo, Cabo Verde',
  email: 'hello@kelvinlima.dev',
  website: 'kelvinlima.dev',
};

export const PROJECTS = [
  {
    id: 'omenu-cv',
    name: 'O Menu CV',
    descriptionPt: 'Plataforma de descoberta de restaurantes e pré-encomenda de refeições para Cabo Verde. 107 testes, dashboard com KPIs em tempo real.',
    descriptionEn: 'Cape Verde restaurant discovery and meal pre-ordering platform. 107 tests, dashboard with real-time KPIs.',
    stack: ['Laravel 12', 'Alpine.js', 'Tailwind v4', 'Pest PHP'],
    language: 'PHP',
    languageColor: '#777bb4',
    demoUrl: null,
    private: true,
    tagPt: 'Destaque',
    tagEn: 'Featured',
  },
  {
    id: 'portal-vagas-cv',
    name: 'Portal de Vagas CV',
    descriptionPt: 'Portal de emprego com três perfis (Candidato, Empresa, Admin) e ciclo de moderação de vagas.',
    descriptionEn: 'Job portal with three profiles (Candidate, Company, Admin) and a vacancy moderation cycle.',
    stack: ['Laravel 12', 'Tailwind v4'],
    language: 'PHP',
    languageColor: '#777bb4',
    demoUrl: null,
    private: true,
    tagPt: 'Emprego',
    tagEn: 'Employment',
  },
  {
    id: 'reklama',
    name: 'lroOnline (Reklama)',
    descriptionPt: 'Portal eletrónico de reclamações de consumidores com dashboards para utilizadores, empresas e reguladores.',
    descriptionEn: 'Electronic consumer complaints portal with dashboards for users, companies, and regulators.',
    stack: ['Laravel', 'AJAX', 'MySQL'],
    language: 'PHP',
    languageColor: '#777bb4',
    demoUrl: null,
    private: true,
    tagPt: 'Regulação',
    tagEn: 'Regulation',
  },
];

export const EDUCATION = [
  {
    id: 'piaget-graduation',
    titlePt: 'Licenciatura em Engenharia de Sistemas e Informática',
    titleEn: 'BSc in Systems and Computer Engineering',
    institutionPt: 'Universidade Jean Piaget de Cabo Verde',
    institutionEn: 'Universidade Jean Piaget de Cabo Verde',
    period: 'Jun 2024',
    year: '2024',
    prNumber: '5',
    status: 'open',
    descriptionPt: 'Engenharia de Sistemas e Informática. Licenciatura de 4 anos com foco em desenvolvimento de software, bases de dados e sistemas de informação.',
    descriptionEn: 'Systems and Computer Engineering. 4-year degree focused on software development, databases and information systems.',
    statusNotePt: 'Unidades curriculares concluídas em junho de 2024. Defesa de tese ainda pendente.',
    statusNoteEn: 'Coursework completed in June 2024. Thesis defense still pending.',
    modules: [],
  },
  {
    id: 'piaget-tcc',
    titlePt: 'Trabalho de Fim de Curso — lroOnline (Reklama)',
    titleEn: 'Final Year Project — lroOnline (Reklama)',
    institutionPt: 'Universidade Jean Piaget de Cabo Verde',
    institutionEn: 'Universidade Jean Piaget de Cabo Verde',
    period: '2023',
    year: '2023',
    prNumber: '4',
    status: 'open',
    descriptionPt: 'Desenvolvimento da plataforma lroOnline (Reklama) como TCC. Portal eletrónico de reclamações de consumidores com sistema de dashboards multi-nível.',
    descriptionEn: 'Development of lroOnline (Reklama) as the final thesis. Electronic consumer complaints portal with multi-level dashboard system.',
    statusNotePt: 'Desenvolvimento do projeto concluído. Aguarda defesa de tese.',
    statusNoteEn: 'Project development completed. Awaiting thesis defense.',
    modules: [],
  },
  {
    id: 'piaget-webdev',
    titlePt: 'Desenvolvimento Web & Projetos Laravel',
    titleEn: 'Web Development & Laravel Projects',
    institutionPt: 'Universidade Jean Piaget de Cabo Verde',
    institutionEn: 'Universidade Jean Piaget de Cabo Verde',
    period: '2022',
    year: '2022',
    prNumber: '3',
    status: 'merged',
    descriptionPt: 'Primeiros projetos Laravel, foco em produtos para o mercado cabo-verdiano. Aprendizagem de frameworks MVC e desenvolvimento full-stack.',
    descriptionEn: 'First Laravel projects, focus on the Cape Verdean market. Learning MVC frameworks and full-stack development.',
    modules: [],
  },
  {
    id: 'piaget-fundamentals',
    titlePt: 'Fundamentos de Programação & Bases de Dados',
    titleEn: 'Programming Fundamentals & Databases',
    institutionPt: 'Universidade Jean Piaget de Cabo Verde',
    institutionEn: 'Universidade Jean Piaget de Cabo Verde',
    period: '2021',
    year: '2021',
    prNumber: '2',
    status: 'merged',
    descriptionPt: 'Algoritmos, bases de dados, POO, redes de computadores. Fundamentos sólidos em ciência da computação e matemática aplicada.',
    descriptionEn: 'Algorithms, databases, OOP, computer networks. Solid foundations in computer science and applied mathematics.',
    modules: [],
  },
  {
    id: 'piaget-start',
    titlePt: 'Início da Licenciatura em Engenharia de Sistemas e Informática',
    titleEn: 'BSc in Systems and Computer Engineering — Start',
    institutionPt: 'Universidade Jean Piaget de Cabo Verde',
    institutionEn: 'Jean Piaget University of Cape Verde',
    period: 'Out 2020',
    year: '2020',
    prNumber: '1',
    status: 'merged',
    descriptionPt: 'Início do percurso académico em Engenharia de Sistemas e Informática. Integração na vida universitária e primeiros contactos com programação estruturada.',
    descriptionEn: 'Start of the academic journey in Systems and Computer Engineering. Integration into university life and first contacts with structured programming.',
    modules: [],
  },
];

export const STACK = [
  {
    key: 'backend',
    labelPt: 'Backend',
    labelEn: 'Backend',
    items: ['PHP', 'Laravel'],
  },
  {
    key: 'frontend',
    labelPt: 'Frontend',
    labelEn: 'Frontend',
    items: ['Tailwind CSS', 'Alpine.js'],
  },
  {
    key: 'testing',
    labelPt: 'Testes',
    labelEn: 'Testing',
    items: ['Pest PHP'],
  },
  {
    key: 'database',
    labelPt: 'Base de Dados',
    labelEn: 'Database',
    items: ['MySQL', 'SQLite'],
  },
  {
    key: 'tools',
    labelPt: 'Ferramentas',
    labelEn: 'Tools',
    items: ['Git', 'GitHub', 'Vite', 'Docker', 'Railway'],
  },
];

export const TECH_DETAILS = {
  'PHP': {
    pt: 'Linguagem principal de todos os projetos. Orientação a objetos, tipagem forte com PHP 8.4.',
    en: 'Main language across all projects. Object-oriented, strongly typed with PHP 8.4.',
  },
  'Laravel': {
    pt: 'Framework MVC principal. Eloquent ORM, migrations, artisan CLI e sistema de filas.',
    en: 'Main MVC framework. Eloquent ORM, migrations, artisan CLI and queue system.',
  },
  'Tailwind CSS': {
    pt: 'Utility-first CSS. Versão 4 com engine Vite nativa e design tokens via @theme.',
    en: 'Utility-first CSS. Version 4 with native Vite engine and design tokens via @theme.',
  },
  'Alpine.js': {
    pt: 'Interatividade leve no frontend. Sem overhead de framework pesada, integra com Blade.',
    en: 'Lightweight frontend interactivity. No heavy framework overhead, integrates with Blade.',
  },
  'Pest PHP': {
    pt: 'Framework de testes elegante. 107+ testes escritos no O Menu CV com sintaxe fluente.',
    en: 'Elegant testing framework. 107+ tests written in O Menu CV with fluent syntax.',
  },
  'MySQL': {
    pt: 'Base de dados relacional em produção. Usado em todos os projetos em ambiente de produção.',
    en: 'Relational database in production. Used across all projects in production environments.',
  },
  'SQLite': {
    pt: 'Base de dados em desenvolvimento local. Leve, sem servidor, ideal para testes e dev.',
    en: 'Local development database. Lightweight, serverless, ideal for testing and development.',
  },
  'Git': {
    pt: 'Controlo de versões. Branches por feature, commits semânticos e histórico limpo.',
    en: 'Version control. Feature branches, semantic commits and clean history.',
  },
  'GitHub': {
    pt: 'Repositórios remotos, pull requests e code reviews. Todos os projetos estão aqui.',
    en: 'Remote repositories, pull requests and code reviews. All projects live here.',
  },
  'Vite': {
    pt: 'Bundler ultra-rápido. Integrado nativamente com Tailwind CSS v4 e Laravel.',
    en: 'Ultra-fast bundler. Natively integrated with Tailwind CSS v4 and Laravel.',
  },
  'Docker': {
    pt: 'Contentorização das aplicações para um deploy consistente.',
    en: 'Containerizes the applications for consistent deployment.',
  },
  'Railway': {
    pt: 'Plataforma de deploy com builds a partir de Dockerfile.',
    en: 'Deployment platform with Dockerfile-based builds.',
  },
};

export const CONTRIB_PATTERN = [2,3,1,4,3,2,0,1,3,4,2,3,0,1,2,3,4,1,2,3,4,0,2,3,4,1,2,3,0,4,2,3,1,4,3,2,0,1,3,4,2,3,0,1,2,3,4,1,2,3,4,0,2,3,4,1,2,3,0,4];
export const CONTRIB_COLORS_DARK = ['#161b22','#0e4429','#006d32','#26a641','#39d353'];
export const CONTRIB_COLORS_LIGHT = ['#ebedf0','#9be9a8','#40c463','#30a14e','#216e39'];

export const CONTRIB_MARKERS = [
  { posPercent: 8,  namePt: 'O Menu CV',          nameEn: 'O Menu CV',          datePt: 'iniciado em Julho 2024',    dateEn: 'started in July 2024' },
  { posPercent: 35, namePt: 'Reklama (lroOnline)', nameEn: 'Reklama (lroOnline)', datePt: 'iniciado em Novembro 2024', dateEn: 'started in November 2024' },
  { posPercent: 62, namePt: 'Portal de Vagas CV',  nameEn: 'Portal de Vagas CV',  datePt: 'iniciado em Março 2025',   dateEn: 'started in March 2025' },
  { posPercent: 88, namePt: 'Portfolio pessoal',   nameEn: 'Portfolio pessoal',   datePt: 'iniciado em Junho 2025',   dateEn: 'started in June 2025' },
];
