import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
    {
        id: "hookd",
        title: "Hookd.live",
        period: { start: "07.2024", end: "08.2024" },
        link: "https://hookd.live/",
        skills: ["React.js", "Node.js", "Stripe", "Firebase", "Tailwind", "Javascript"],
        description: `An AI-powered content optimization platform that transforms your drafts into viral content.
- Generate high-performing, optimized content before publishing
- Real-time AI analysis and content scoring
- Built using Firebase Auth, Firestore, and modern UI with Tailwind CSS`,
    },

    {
        id: "quickit",
        title: "Quickit",
        period: { start: "07.2024", end: "07.2024" },
        link: "https://quick-kit.vercel.app/",
        skills: ["Next.js", "Stripe", "Tailwind", "Firebase"],
        description: `An AI-powered platform to generate professional media kits in seconds.
- Instantly create brand-ready media kits using your Instagram and TikTok handles
- Tailored for content creators looking to land brand deals faster`,
    }
    ,
    {
        id: "devunoai",
        title: "DevunoAI",
        period: { start: "04.2025", end: "04.2025" },
        link: "https://devuno.onrender.com/",
        skills: ["React.js", "Node.js", "Gemini API"],
        description: `An AI-based code review tool.
- Paste code and receive instant review using Gemini
- Clean UI with animated transitions`,
    },
    {
        id: "jsonbazaar",
        title: "JSONBazaar",
        period: { start: "08.2024", end: "08.2024" },
        link: "https://jsonbazaar.onrender.com/",
        skills: ["Node.js", "Express.js", "EJS", "JavaScript"],
        description: `A free mock API store to test frontend projects.
- Create and manage mock APIs
- Dynamic EJS frontend with Express backend`,
    },
    {
        id: "dappr",
        title: "Dappr",
        period: { start: "06.2025", end: "06.2025" },
        link: "https://github.com/vivekupasani/Dappr",
        skills: [
            "React Native",
            "Ethers.js",
            "WalletConnect v2",
            "Metamask",
            "Solidity",
            "Ethereum",
        ],
        description: `A decentralized, censorship-resistant social media dApp.
- MetaMask wallet connection using WalletConnect v2
- On-chain user registration and posts
- Built with React Native, Ethers.js, Solidity`,
    },
    {
        id: "mock3wallet",
        title: "Mock3Wallet",
        period: { start: "06.2025", end: "06.2025" },
        link: "https://github.com/vivekupasani/mock3wallet",
        skills: ["React Native", "Node.js", "Express.js", "MongoDB"],
        description: `A Web3 wallet simulation with dummy tokens and transactions.
- Simulated token balances, transfers, and contact book
- Backend with Express and MongoDB`,
    },
    {
        id: "syncra",
        title: "Syncra AI",
        period: { start: "05.2025", end: "05.2025" },
        link: "https://github.com/vivekupasani/syncra",
        skills: ["Flutter", "Node.js", "Gemini API"],
        description: `AI-powered voice assistant for real-time answers and image generation.
- Speech input and AI response using Gemini
- Built using Flutter and Node.js`,
    },
    {
        id: "cloudstash",
        title: "CloudStash",
        period: { start: "12.2024", end: "12.2024" },
        link: "https://cloudstash-vivekupasani.onrender.com/",
        skills: ["Flutter", "Firebase", "Node.js", "MongoDB"],
        description: `A cloud storage app like Google Drive.
- Firebase Auth + Firestore
- File upload, view, and delete
- Node.js backend for storage management`,
    },
    {
        id: "pixsy",
        title: "Pixsy",
        period: { start: "11.2024", end: "12.2024" },
        link: "https://pixsy-b2ccb.web.app/",
        skills: ["Flutter", "Firebase", "BLoC", "Clean Architecture"],
        description: `A social media platform for sharing photos and connecting with users.
- Real-time post feed, profile pages, follow system
- Built with BLoC and Firebase`,
    },
    {
        id: "chatapp",
        title: "ChatApp",
        period: { start: "10.2024", end: "11.2024" },
        link: "https://github.com/vivekupasani/chatapp",
        skills: ["Kotlin", "Firebase", "MVVM"],
        description: `A real-time chat application.
- Login/signup with Firebase Auth
- Chat with other users, profile support
- Built in Kotlin using MVVM architecture`,
    },
    {
        id: "pixster",
        title: "Pixster",
        period: { start: "09.2024", end: "10.2024" },
        link: "https://github.com/vivekupasani/pixster",
        skills: ["Flutter", "HTTP", "Hive", "BLoC"],
        description: `A wallpaper browsing app.
- Search and download high-quality wallpapers
- Save favorites with local Hive DB
- Uses BLoC for state management`,
    },
];
