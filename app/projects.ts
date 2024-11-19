// app/projects.ts
export interface Project {
    id: number;
    title: string;
    description: string;
    link: string;
    image: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: "Project 1",
        description: "Detailed description of Project 1.",
        link: "/projects/project1", // Updated link
        image: "/images/placeholder.jpg",
    },
    {
        id: 2,
        title: "Project 2",
        description: "Detailed description of Project 2.",
        link: "/projects/project2", // Updated link
        image: "/images/placeholder.jpg",
    },
    {
        id: 3,
        title: "Project 3",
        description: "Detailed description of Project 3.",
        link: "/projects/project3", // Updated link
        image: "/images/placeholder.jpg",
    },
    {
        id: 4,
        title: "Project 4",
        description: "Detailed description of Project 4.",
        link: "/projects/project4", // Updated link
        image: "/images/placeholder.jpg",
    },
    // Add more projects as needed
];

export default projects;