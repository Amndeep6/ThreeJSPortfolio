"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Section from "@/components/Section";

// Skills data
const skills = [
  { name: "JavaScript", icon: "💻", level: 90 },
  { name: "TypeScript", icon: "📘", level: 85 },
  { name: "React", icon: "⚛️", level: 95 },
  { name: "Next.js", icon: "▲", level: 90 },
  { name: "Node.js", icon: "🟢", level: 80 },
  { name: "Tailwind CSS", icon: "🎨", level: 95 },
  { name: "Three.js", icon: "🔮", level: 75 },
  { name: "MongoDB", icon: "🍃", level: 85 },
];

// Experience data
const experiences = [
  {
    title: "Software Engineer",
    company: "JTEKT Electronics India Pvt. Ltd.",
    period: "2024 - Present",
    description:
      "Leading the frontend development team, implementing modern UI/UX designs, and optimizing application performance.",
  },
  {
    title: "Associate Software Engineer",
    company: "JTEKT Electronics India Pvt. Ltd.",
    period: "2022 - 2024",
    description:
      "Developed and maintained full-stack applications using React, Node.js, and MongoDB. Implemented RESTful APIs and improved application performance.",
  },
  {
    title: "Intern",
    company: "JTEKT Electronics India Pvt. Ltd.",
    period: "2021 - 2022",
    description:
      "Built responsive websites and web applications. Collaborated with designers to implement UI/UX designs.",
  },
];

// Education data
const education = [
  {
    degree: "Bachelor of Computer Science",
    institution: "J.C. Bose University of Science and Technology, YMCA",
    period: "2018 - 2022",
    description:
      "Specialized in Web Technologies and Software Engineering. Graduated with honors.",
  },
  {
    degree: "Higher Secondary Education",
    institution: "S.D. Modern Public School, Hansi, Haryana",
    period: "2017- 2018",
    description:
      "Focused on Programming and Software Development. Participated in various coding competitions.",
  },
];

export default function About() {
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
              About Me
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
              Get to know more about me, my experience, and my skills.
            </motion.p>
          </div>
        </div>
      </Section>

      {/* Personal Info Section */}
      <Section className="bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/profile.jpg"
                alt="Amandeep Singh"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Amandeep Singh
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                I'm a passionate Full Stack Developer with a focus on creating immersive web
                experiences. With over 3+ years of experience in the industry, I've worked on a
                variety of projects ranging from small business websites to complex web applications.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                My journey in web development started with a fascination for creating interactive
                experiences. Today, I combine technical expertise with creative problem-solving to
                build applications that are both functional and visually appealing.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-8">
                When I'm not coding, you can find me exploring new technologies, contributing to
                open-source projects, or enjoying outdoor activities.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Location
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">Gurugram, Haryana</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Email
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">abhijotrawal0306@gmail.com</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Availability
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">Freelance / Full-time</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Experience
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">3+ Years</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section className="bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              My Skills
            </h2>
            <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
            <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Here are some of the technologies and tools I work with on a daily basis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md"
              >
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">{skill.icon}</span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {skill.name}
                  </h3>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <motion.div
                    className="bg-blue-600 dark:bg-blue-400 h-2.5 rounded-full"
                    style={{ width: `${skill.level}%` }}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  ></motion.div>
                </div>
                <div className="flex justify-end mt-2">
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    {skill.level}%
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Experience Section */}
      <Section className="bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Work Experience
            </h2>
            <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
            <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              My professional journey in the tech industry.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="mb-12 relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-4 before:h-4 before:rounded-full before:bg-blue-600 dark:before:bg-blue-400 before:z-10 after:content-[''] after:absolute after:left-[7px] after:top-6 after:bottom-0 after:w-0.5 after:bg-gray-300 dark:after:bg-gray-700 last:after:hidden"
              >
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {exp.title}
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      {exp.company}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {exp.period}
                    </p>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Education Section */}
      <Section className="bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Education
            </h2>
            <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
            <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              My academic background and qualifications.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="mb-12 relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-4 before:h-4 before:rounded-full before:bg-blue-600 dark:before:bg-blue-400 before:z-10 after:content-[''] after:absolute after:left-[7px] after:top-6 after:bottom-0 after:w-0.5 after:bg-gray-300 dark:after:bg-gray-700 last:after:hidden"
              >
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {edu.degree}
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      {edu.institution}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {edu.period}
                    </p>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">{edu.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
} 