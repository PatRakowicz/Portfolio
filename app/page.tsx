import Image from "next/image";

export default function Home() {
    return (
        <div className="flex items-center justify-center min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <div className="flex flex-col items-center max-w-3xl w-full gap-16">
                {/* Main Section */}
                <main className="flex flex-col items-center gap-8 text-center">
                    <h1 className="text-4xl font-bold">Hello, I'm Pat</h1>
                    <p className="text-lg max-w-xl">
                        I'm a software engineer specializing in building modern web
                        applications with Next.js and Tailwind CSS. Check out some of my
                        recent projects below.
                    </p>
                </main>

                {/* Projects Grid */}
                <section className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="p-4 border rounded-md shadow hover:shadow-lg transition-shadow">
                        <h2 className="text-xl font-semibold">Project 1</h2>
                        <p className="text-sm mt-2">
                            Brief description of the project. Click to learn more.
                        </p>
                    </div>
                    <div className="p-4 border rounded-md shadow hover:shadow-lg transition-shadow">
                        <h2 className="text-xl font-semibold">Project 2</h2>
                        <p className="text-sm mt-2">
                            Brief description of the project. Click to learn more.
                        </p>
                    </div>
                    <div className="p-4 border rounded-md shadow hover:shadow-lg transition-shadow">
                        <h2 className="text-xl font-semibold">Project 3</h2>
                        <p className="text-sm mt-2">
                            Brief description of the project. Click to learn more.
                        </p>
                    </div>
                    <div className="p-4 border rounded-md shadow hover:shadow-lg transition-shadow">
                        <h2 className="text-xl font-semibold">Project 4</h2>
                        <p className="text-sm mt-2">
                            Brief description of the project. Click to learn more.
                        </p>
                    </div>
                </section>

                {/* Footer */}
                <footer className="flex gap-6 items-center justify-center">
                    <a
                        href="https://github.com/your-github-username"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline hover:underline-offset-4"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://linkedin.com/in/your-linkedin-username"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline hover:underline-offset-4"
                    >
                        LinkedIn
                    </a>
                </footer>
            </div>
        </div>
    );
}
