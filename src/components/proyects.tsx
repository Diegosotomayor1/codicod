"use client";
import { projects } from "@/app/constants/info";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { motion } from "framer-motion";
import { GithubIcon, GlobeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

export default function Proyects() {
  const isSmall = useMediaQuery("(max-width: 767px)");
  const variantsDesktop = {
    hover: { width: "66%" },
    initial: { width: "33%" },
    view: (i: number) => ({
      height: [0, 400],
      opacity: [0, 1],
      transition: { duration: 1 },
    }),
    transition: { duration: 0.3 },
  };
  return (
    <Fragment>
      {!isSmall && (
        <section className="flex gap-4 w-full flex-col md:flex-row">
          {projects.map((project, index) => (
            <motion.article
              key={project.name}
              className="relative flex items-center justify-center h-[400px] [&>section]:hover:opacity-100 [&>div]:hover:!opacity-100 [&>span]:hover:opacity-50 w-full md:w-1/3 rounded-[30px]"
              style={{ clipPath: "border-box" }}
              initial={variantsDesktop?.initial}
              whileInView={variantsDesktop?.view(index)}
              whileHover={variantsDesktop?.hover}
            >
              <div className="w-full h-full absolute rounded-xl">
                <Image
                  src={project.imageInitial}
                  width={550}
                  height={550}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <section className="w-full h-full absolute opacity-0 transition-opacity duration-300">
                <Image
                  src={project.imageHover}
                  width={900}
                  height={900}
                  alt={project.name}
                  className="w-full h-full object-cover  z-20"
                />
              </section>
              <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[rgb(0,0,0,0.8)] to-[rgb(0,0,0,0.5)] " />
              <div className="absolute top-0 left-0 w-full h-full">
                <button className="absolute top-8 left-8 rounded-xl bg-secondary px-5 py-1 text-sm text-white font-medium">
                  {project.name}
                </button>
              </div>
              <div className="absolute bottom-4 right-4 text-white opacity-0 transition-opacity duration-300 flex gap-2">
                <Link href={project.url} target="_blank" className="flex gap-1 bg-primary p-2 rounded-full hover:scale-110 transition-all hover:bg-secondary text-xs" >
                  <GlobeIcon  className="w-4 h-4"/> Vista previa
                </Link>
                {project.urlProject && <Link  className="flex gap-1 bg-primary p-2 rounded-full hover:scale-110 transition-all hover:bg-secondary text-xs" href={project.urlProject}  target="_blank">
                  <GithubIcon className="w-4 h-4" /> Ver código
                </Link>}
              </div>
            </motion.article>
          ))}
        </section>
      )}
      {isSmall && (
        <section className="flex gap-4 w-full flex-col md:flex-row">
          {projects.map((project) => (
            <article
              key={project.name}
              className="relative flex items-center justify-center h-[400px] w-full md:w-1/3 rounded-[30px]"
              style={{ clipPath: "border-box" }}
            >
              <div className="w-full h-full absolute">
                <Image
                  src={project.imageInitial}
                  width={550}
                  height={550}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.section
                className="w-full h-full absolute  transition-opacity duration-300"
                whileInView={{ opacity: [0, 1], y: [150, 0] }}
                transition={{ duration: 2 }}
              >
                <Image
                  src={project.imageHover}
                  width={900}
                  height={900}
                  alt={project.name}
                  className="w-full h-full object-cover  z-20"
                />
              </motion.section>
              <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[rgb(0,0,0,0.8)] to-[rgb(0,0,0,0.5)] " />
              <div className="absolute top-0 left-0 w-full h-full">
                <button className="absolute top-8 left-8 rounded-xl bg-secondary px-5 py-1 text-sm text-white font-medium">
                  {project.name}
                </button>
              </div>
              <div className="absolute bottom-4 right-4 text-white transition-opacity duration-300 flex gap-2">
                <Link href={project.url} target="_blank" className="flex gap-1 bg-primary p-2 rounded-full hover:scale-110 transition-all hover:bg-secondary text-xs" >
                  <GlobeIcon  className="w-4 h-4"/> Vista previa
                </Link>
                {project.urlProject && <Link  className="flex gap-1 bg-primary p-2 rounded-full hover:scale-110 transition-all hover:bg-secondary text-xs" href={project.urlProject}  target="_blank">
                  <GithubIcon className="w-4 h-4" /> Ver código
                </Link>}
              </div>
            </article>
          ))}
        </section>
      )}
    </Fragment>
  );
}
