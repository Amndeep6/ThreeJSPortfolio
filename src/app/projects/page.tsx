"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";

// Project data
const allProjects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform built with Next.js, Stripe, and MongoDB. Includes product management, cart functionality, user authentication, and payment processing.",
    tags: ["Next.js", "Stripe", "MongoDB", "Tailwind CSS"],
    image: "/projects/ecommerce.jpg",
    link: "https://github.com",
    category: "web",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates. Features include task creation, assignment, status tracking, and team collaboration tools.",
    tags: ["React", "Firebase", "Redux", "Material UI"],
    image: "/projects/task-app.jpg",
    link: "https://github.com",
    category: "web",
  },
  {
    title: "AI Image Generator",
    description: "An AI-powered image generation tool using OpenAI's DALL-E API. Users can create unique images based on text prompts with various style options.",
    tags: ["OpenAI", "React", "Node.js", "Express"],
    image: "/projects/ai-image.jpg",
    link: "https://github.com",
    category: "ai",
  },
  {
    title: "3D Product Configurator",
    description: "An interactive 3D product configurator that allows users to customize products in real-time with different colors, materials, and components.",
    tags: ["Three.js", "React", "WebGL", "GSAP"],
    image: "/projects/3d-configurator.jpg",
    link: "https://github.com",
    category: "3d",
  },
  {
    title: "Crypto Dashboard",
    description: "A comprehensive cryptocurrency dashboard with real-time price tracking, portfolio management, and market analysis tools.",
    tags: ["React", "Chart.js", "API Integration", "Styled Components"],
    image: "/projects/crypto-dashboard.jpg",
    link: "https://github.com",
    category: "web",
  },
  {
    title: "Mobile Fitness App",
    description: "A mobile fitness application with workout tracking, nutrition planning, and progress visualization. Available for both iOS and Android platforms.",
    tags: ["React Native", "Firebase", "Redux", "Health API"],
    image: "/projects/fitness-app.jpg",
    link: "https://github.com",
    category: "mobile",
  },
  {
    title: "Smart Home Control System",
    description: "An IoT-based smart home control system that allows users to manage home devices through a web interface or mobile app.",
    tags: ["IoT", "React", "Node.js", "MQTT"],
    image: "/projects/smart-home.jpg",
    link: "https://github.com",
    category: "iot",
  },
  {
    title: "AR Shopping Experience",
    description: "An augmented reality shopping experience that allows users to visualize products in their own space before purchasing.",
    tags: ["AR.js", "Three.js", "WebXR", "JavaScript"],
    image: "/projects/ar-shopping.jpg",
    link: "https://github.com",
    category: "3d",
  },
  {
    title: "Weather Forecast App",
    description: "A weather forecast application with location-based weather data, interactive maps, and severe weather alerts.",
    tags: ["React", "Weather API", "Mapbox", "PWA"],
    image: "/projects/weather-app.jpg",
    link: "https://github.com",
    category: "web",
  },
];

// Categories for filtering
const categories = [
  { id: "all", name: "All Projects" },
  { id: "web", name: "Web Development" },
  { id: "mobile", name: "Mobile Apps" },
  { id: "3d", name: "3D & AR/VR" },
  { id: "ai", name: "AI & Machine Learning" },
  { id: "iot", name: "IoT Projects" },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter projects based on category and search query
  const filteredProjects = allProjects.filter((project) => {
    const matchesCategory = activeCategory === "all" || project.category === activeCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <Section className="bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4"
            >
              My Projects
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"
            ></motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
            >
              A showcase of my recent work, personal projects, and experiments.
            </motion.p>
          </div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section className="bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search and Filter */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="relative w-full md:w-64">
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 pl-10 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>

              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      activeCategory === category.id
                        ? "bg-blue-600 text-white"
                        : "bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  image={project.image}
                  link={project.link}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 mx-auto text-gray-400 dark:text-gray-600 mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="text-xl font-bold text-gray-700 dark:text-gray-300 mb-2">
                No projects found
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Try adjusting your search or filter criteria.
              </p>
            </div>
          )}
        </div>
      </Section>

      {/* Call to Action */}
      <Section className="bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Interested in working together?
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part
              of your vision.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <a
                href="/contact"
                className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
              >
                Let's Talk
              </a>
            </motion.div>
          </div>
        </div>
      </Section>
    </div>
  );
} 