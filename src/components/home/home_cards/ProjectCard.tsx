import Image from "next/image";
import Link from "next/link";

interface ProjectProps {
  project: {
    title: string;
    description: string;
    technologies: string[];
    githubUrl: string;
    liveUrl: string;
    image: string;
    category: string;
    createdAt: string;
  };
}

export default function ProjectCard({ project }: ProjectProps) {

  return (
    <div className="w-full max-w-xl bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition duration-300 border">
      {/* Image */}
      <div className="w-full h-56 relative">
        <img
          src={project.image}
          alt={project.title}
          // fill

          className="object-cover w-full"
        />
      </div>

      <div className="p-6 flex flex-col gap-4">
        <div className="flex justify-between text-sm text-gray-500">
          <p className="font-medium">{project.category}</p>
          <p>{new Date(project.createdAt).toLocaleDateString()}</p>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-black">{project.title}</h2>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed">
          {project.description.length > 140
            ? project.description.slice(0, 140) + "..."
            : project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-black text-white text-xs rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex gap-3">
            <a
              href={project.liveUrl}
              target="_blank"
              className="px-4 py-2 bg-black text-white rounded-lg text-sm hover:bg-gray-900 transition"
            >
              Live Demo
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              className="px-4 py-2 border border-black text-black rounded-lg text-sm hover:bg-black hover:text-white transition"
            >
              GitHub
            </a>
          </div>
          
        </div>
      </div>
    </div>
  );
}
