import { motion } from "framer-motion";
import { CalendarIcon, ShieldCheck } from "lucide-react";
import Image from "next/image";
import React from "react";

type DemoLink = {
  icon: React.ReactNode;
  name: string;
  url: string;
};

export default function ItemExperience({
  jobPosition,
  company,
  description,
  dateRange,
  demoLinks,
  image,
  technologies,
}: {
  image?: string;
  jobPosition: string;
  company: string;
  description: string;
  dateRange: string;
  demoLinks?: DemoLink[];
  technologies?: string[];
}) {
  return (
    <div className="grid gap-4 grid-cols-[1fr,3fr]">
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, bounce: 0.5, delay: 0.5 }}
      >
        <div className="flex items-center justify-center relative w-[80px] h-[80px] rounded-full bg-white backdrop-blur-sm from-primary to-secondary">
          {image && (
            <Image
              className="w-16  h-16"
              src={image}
              alt={`Logo de ${company}`}
              width={64}
              height={64}
            />
          )}
          <div className="absolute w-full h-full bg-gradient-to-l from-primary to-secondary animate-[spin_2s_linear_infinite] rounded-full -z-10" />
        </div>
        <div className="flex gap-1 text-xs font-medium mt-4 text-primary w-fit">
          <CalendarIcon className="w-4 h-4 " /> {dateRange}
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, translateY: "50px" }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1, bounce: 0.5 }}
        className="flex flex-col gap-2"
      >
        <div>
          <h2 className="text-xl font-semibold">{jobPosition}</h2>
          <h3 className="text-md font-medium">{company}</h3>
          <p className="text-sm">
            {description}
            {"  "}
            <span className="text-primary font-medium">Ver más</span>
          </p>
        </div>
        <div className="text-xs flex items-center gap-2">
          {demoLinks?.map((demoLink: DemoLink) => (
            <a
              key={demoLink.url}
              href={demoLink.url}
              className="flex items-center gap-2 text-primary font-medium"
            >
              {demoLink.icon} {demoLink.name}
            </a>
          ))}
        </div>
        {technologies && (
          <div className="text-secondary flex items-center text-xs gap-2">
            <ShieldCheck className="w-4 h-4" /> {technologies.join(", ")}
          </div>
        )}
      </motion.div>
    </div>
  );
}
