import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Cristopher',
    lastName:  'Leonardo',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'UX Student',
    avatar:    '/images/avaqqtwwar.jpg',
    location:  'America/Sao_Paulo',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: false,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'Discord',
        icon: 'discord',
        link: 'https://discord.gg/sweetgg',
    },
    {
        name: 'TikTok',
        icon: 'tk',
        link: 'https://www.linkedin.com/company/once-ui/',
    },
    {
        name: 'X',
        icon: 'x',
        link: '',
    },
]

const home = {
    label: 'Inicio',
    title: `Sweet Roleplay`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Bem-vindo ao Sweet Roleplay</>,
    subline: <> <b>Sweet Roleplay</b> Um servidor único, com um sabor doce que vai conquistar seu coração!.</>
    // subline: <>I'm Selene, a design engineer at <InlineCode>FLY</InlineCode>, where I craft intuitive<br/> user experiences. After hours, I build my own projects.</>
}

const about = {
    label: 'About',
    title: 'Sobre',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: false
    },
    avatar: {
        display: false
    },
    calendar: {
        display: true,
        link: 'https://cal.com'
    },
    intro: {
        display: false,
        title: 'Introduction',
        description: <>Flynnzito é um engenheiro de design baseado em São Paulo, apaixonado por transformar desafios complexos em soluções de design simples e elegantes. Seu trabalho abrange interfaces digitais, experiências interativas e a convergência entre design e tecnologia..</>
    },
    work: {
        display: false, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'FLY',
                timeframe: '2022 - Present',
                role: 'Senior Design Engineer',
                achievements: [
                    <>Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user engagement and 30% faster load times.</>,
                    <>Spearheaded the integration of AI tools into design workflows, enabling designers to iterate 50% faster.</>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/projects/project-01/cover-01.jpg',
                        alt: 'Sweet Projet',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: 'Creativ3',
                timeframe: '2018 - 2022',
                role: 'Lead Designer',
                achievements: [
                    <>Developed a design system that unified the brand across multiple platforms, improving design consistency by 40%.</>,
                    <>Led a cross-functional team to launch a new product line, contributing to a 15% increase in overall company revenue.</>
                ],
                images: [ ]
            }
        ]
    },
    studies: {
        display: false, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'University of Jakarta',
                description: <>Studied software engineering.</>,
            },
            {
                name: 'Build the Future',
                description: <>Studied online marketing and personal branding.</>,
            }
        ]
    },
    technical: {
        display: false, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Figma',
                description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
                images: [
                    {
                        src: '/images/projects/project-01/cover-02.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/cover-03.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'Next.js',
                description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
                images: [
                    {
                        src: '/images/projects/project-01/img04.png',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            }
        ]
    }
}

const blog = {
    label: 'Atualizações',
    title: 'Atualização sobre o servidor e os design',
    description: `Read what ${person.name} has been up to recently`
}

const work = {
    label: 'Trabalhos',
    title: 'My projects',
    description: `Designers Desenvolvidos`
}

const gallery = {
    label: 'Imagens',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`, // horizontal - vertical
    images: [
        { 
            src: '/images/gallery/01.png', 
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };