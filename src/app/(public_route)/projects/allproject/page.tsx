"use client";

import { useEffect, useState } from "react";
import ProjectCard from "@/components/home/home_cards/ProjectCard";
import Nav from "@/components/home/Nav";
import { getAllProject, getAllProjects } from "@/lib/projects";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  image: string;
  category: string;
  createdAt: string;
}

export default function AllProjects() {
  const [page, setPage] = useState(1);
  const limit = 3;
  const [projects, setProjects] = useState<Project[]>([]);
  const [totalProjects, setTotalProjects] = useState(0);
  const [loading, setLoading] = useState(false);

  const totalPages = Math.ceil(totalProjects / limit);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);

        const projectRes = await getAllProjects(page, 3);
        const totalRes = await getAllProject();
        setProjects(projectRes?.data || []);
        setTotalProjects(totalRes?.data?.length || 0);

      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [page, limit]);

  const handlePrev = () => {
    if (page > 1) setPage((p) => p - 1);
  };

  const handleNext = () => {
    if (page < totalPages) setPage((p) => p + 1);
  };

  return (
    <div className="w-full">
      <Nav />

      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <h1 className="text-3xl font-bold mb-8 text-center text-white">
          All Projects
        </h1>

        {loading ? (
          <p className="text-center text-gray-500">Loading projects...</p>
        ) : projects.length === 0 ? (
          <p className="text-gray-500 text-center text-lg">No projects found.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        )}
      </div>

      {/* Pagination */}

        <div className="flex mx-auto border gap-12 py-4 px-8 items-center rounded-lg shadow-md mt-8 w-fit mb-12">
          <ArrowBigLeft
            onClick={handlePrev}
            className={`font-bold text-2xl cursor-pointer transition ${
              page === 1
                ? "text-gray-300 cursor-not-allowed"
                : "hover:text-black"
            }`}
          />

          <p className="text-xl font-bold">
            Page {page} of {totalPages}
          </p>

          <ArrowBigRight
            onClick={handleNext}
            className={`font-bold text-2xl cursor-pointer transition ${
              page === totalPages
                ? "text-gray-300 cursor-not-allowed"
                : "hover:text-black"
            }`}
          />
        </div>

    </div>
  );
}
