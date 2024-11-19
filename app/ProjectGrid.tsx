import Image from "next/image";
import Link from "next/link"; // Import Link from next/link
import projects, { Project } from "./projects";

export default function ProjectGrid() {
    return (
        <section className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project: Project) => (
                <Link href={project.link} key={project.id} passHref>
                    <div className="p-4 border rounded-md shadow hover:shadow-lg transition-shadow cursor-pointer">
                        <Image
                            src={project.image}
                            alt={project.title}
                            width={400}
                            height={300}
                            className="w-full h-auto rounded-md mb-4"
                        />
                        <h2 className="text-xl font-semibold">{project.title}</h2>
                        <p className="text-sm mt-2">{project.description}</p>
                    </div>
                </Link>
            ))}
        </section>
    );
}
