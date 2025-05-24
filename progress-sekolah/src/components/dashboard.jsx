import React, { useState } from "react";
import { projects } from "../data/projects";
import NavBar from "./nav-bar";
import Category from "./category";
import ProjectCard from "./project-card";
import { motion, AnimatePresence } from "framer-motion";
import { Filter } from "lucide-react";

export default function Dashboard() {
  const [filter, setFilter] = useState("All");

  // Filter data proyek sesuai kategori
  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.kategori === filter);

  return (
    <>
      <NavBar />

      <main className="max-w-5xl mx-auto p-4">
        {/* Filter Kategori dengan Icon */}
        <div className="flex items-center space-x-2 mb-6">
          <Filter className="w-6 h-6 text-blue-500" />
          <Category filter={filter} setFilter={setFilter} />
        </div>

        {/* Daftar Project dengan animasi */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </main>
    </>
  );
}
