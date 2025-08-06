import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "boulevard",
    companyName: "Freelancing",
    positions: [
      {
        id: "boulevard-web-dev",
        title: "Software Developer",
        employmentPeriod: {
          start: "07.2024",
        },
        employmentType: "Remote",
        icon: "code",
        description: `- Worked on multiple client-facing web applications including [Hookd.live](https://hookd.live) and [Quickit](https://quick-kit.vercel.app).
- Built the entire frontend architecture for Hookd.live — a modern platform to book barbers in real time — using React and Tailwind CSS.
- Developed Quickit, a custom internal app to streamline task and delivery management for clients.
- Integrated Firebase for real-time data sync, user authentication, and Firestore-based storage across both platforms.
- Collaborated closely with U.S.-based teams to iterate rapidly on features and fix bugs efficiently.`,
        skills: [
          "React",
          "Nextjs",
          "React Native",
          "Tailwind CSS",
          "Nativewind CSS",
          "Firebase",
          "Firestore",
          "Authentication",
          "Responsive Design",
          "Web App Development",
          "REST API Integration",
        ],
      },
    ],
  },
  {
    id: "ces",
    companyName: "Charotar Education Society",
    positions: [
      {
        id: "ces-fullstack-dev",
        title: "Full Stack Developer Intern",
        employmentPeriod: {
          start: "12.2024",
          end: "05.2025",
        },
        employmentType: "Remote",
        icon: "code",
        description: `- Developed a centralized Employee Management System for CES to streamline onboarding processes across educational institutions.
- Built a user-friendly interface for institutions to submit employee data and simplify administrative workflows.
- Designed an admin panel for reviewing submissions, assigning employee IDs, and maintaining organized digital records.
- Implemented features for registering new institutions and managing employee records, enhancing scalability and administrative efficiency.`,
        skills: [
          "Full Stack Development",
          "React",
          "Node.js",
          "MongoDB",
          "Firebase",
          "Admin Dashboard",
          "Authentication",
          "Database Design",
        ],
      },
    ],
  },
];
