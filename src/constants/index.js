import {
    postgresql,
    sql,
    git,
    nginx,
    docker,
    golang,
    contact,
    github,
    html,
    javascript,
    nextjs,
    hhru,
    cryptowallet,
    ajaxpeople,
    telegram,
    vk,
    mail,

} from "../assets/icons";

export const skills = [
    {
        imageUrl: golang,
        name: "Golang",
        type: "Programminng language",
    },
    {
        imageUrl: docker,
        name: "Docker",
        type: "Container",
    },
    {
        imageUrl: postgresql,
        name: "postgresql",
        type: "DB",
    },
    {
        imageUrl: sql,
        name: "sql",
        type: "DB",
    },
    {
        imageUrl: nginx,
        name: "Nginx",
        type: "Web-server",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    }
];

export const socialMedias = [
    {
        name: 'telegram',
        iconUrl: telegram,
        link: 'https://t.me/Matthew_PMA',
    },
    {
        name: 'vk',
        iconUrl: vk,
        link: 'https://vk.com/matthew_pma',
    },
    {
        name: 'mail',
        iconUrl: mail,
        link: 'mailto:serbinovich.md@dvfu.ru',
    }
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Immertion',
    },
    {
        name: 'hh.ru',
        iconUrl: hhru,
        link: 'https://vladivostok.hh.ru/applicant/resumes/view?resume=85ca2af9ff0c778b180039ed1f6d566134536c',
    }
];

export const projects = [
    {
        iconUrl: ajaxpeople,
        theme: 'btn-back-blue',
        name: 'Backend социального сервиса',
        description: 'Проект посвящен разработке социального сервиса для студентов, преподавателей и работников ДВФУ, улучшающего поиск помощников, консультаций и участия в мероприятиях.',
        link: 'https://github.com/Immertion/ajax-people',
    },
    {
        iconUrl: cryptowallet,
        theme: 'btn-back-pink',
        name: 'Криптовалютный кошелек',
        description: 'Разработал некастодиальный криптовалютный кошелек, обладающий базовыми функциями и удобным интерфейсом, построенный на сети Ethereum.',
        link: 'https://github.com/Immertion/cyberSafe',
    }
];