import Image from "next/image";

export default function Project1Detail() {
    return (
        <div className="min-h-screen p-8 sm:p-20">
            <h1 className="text-4xl font-bold mb-4">Project 1</h1>
            {/* Use Image here */}
            <p className="text-lg mb-4">
                This is a more detailed description of Project 1. Here, you can go into
                as much detail as you like about the project, including features,
                technologies used, challenges, and more.
            </p>
            <a
                href="https://example.com/project1" // Update with the correct project link
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
            >
                View Project
            </a>
        </div>
    );
}
