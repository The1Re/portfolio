import { IExperience } from "../types";
import image1 from '../assets/images/experience/militarymanagement.png'
import image2 from '../assets/images/experience/classschedulemanagement.png'
import image3 from '../assets/images/experience/serverstatuschecker.png'
import image4 from '../assets/images/experience/cafemanagement.png'

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
        image: image1,
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
        image: image2,
        link: "https://github.com/The1Re/class-schedule-management"
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
        image: image3,
        link: "https://github.com/The1Re/ip_checker"
    },
    {
        title: "Cafe Management System",
        created: 'Oct 2023',
        description: [
            "Create an application to manage cafe like POS",
            "Create and manage databases using file management."
        ],
        skill: [
            "JavaFX"
        ],
        image: image4,
        link: "https://github.com/The1Re/fresh-cafe"
    }
]