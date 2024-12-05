import { IExperience } from "../types";

export const experiences: IExperience[] = [
    {
        title: 'Military Management',
        created: 'Oct 2024',
        description: [
            "Project database and management system learn about mvc",
            "Designed and created a database for a military management web application"
        ],
        skill: [
            "PHP", "HTML", "CSS", "MySQL"
        ],
        image: '/images/experience/militarymanagement.png',
        link: "https://github.com/The1Re/ku-military"
    },
    {
        title: 'Class Schedule Management',
        created: 'Aug 2024',
        description: [
            "It is an application designed to assist instructors in scheduling classes for students, addressing issues such as overlapping sections and conflicting schedules for instructors after the timetable has been arranged. "
        ],
        skill: [
            "React", "TypeScript", "TailwindCSS"
        ],
        image: '/images/experience/militarymanagement.png',
        link: "https://github.com/The1Re/class-schedule-management.git"
    },
    {
        title: "Server Status Checker",
        created: 'Jul 2024',
        description: [
            "Created Flutter application for andriod that checks if an Ip address or HTTP is still online."
        ],
        skill: [
            "Flutter", "Dart"
        ],
        image: '/images/experience/serverstatuschecker.png',
        link: "https://github.com/The1Re/ip_checker.git"
    }
]