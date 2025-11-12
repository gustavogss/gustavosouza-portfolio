"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageLayout } from "@/components/PageLayout";
import { Github } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const categories = ["web", "mobile", "backend", "devops", "cyber"];

const categoryDescriptions: Record<string, string> = {
  web: "Alguns projetos web desenvolvidos e implementados",
  mobile: "Alguns projetos mobile desenvolvidos e implementados",
  backend: "Alguns projetos backend implementados",
  devops:
    "Alguns projetos DevOps com monitoramento, CI/CD e práticas de segurança",
  cyber: "Projetos relacionados à cibersegurança, OSINT e pentest",
};

const projects = [
  {
    title: "task-manager",
    description:
      "Estudo Caso: Criação, Implementação e Segurança de um Sistema de Gerenciamento de Tarefas usando ferramentas DAST/SAST como Bandit, OWASP ZAP. Prometheus e Grafana (monitoramento) durante um ataque de força bruta com Hydra na aplicação usando uma wordlist de usuários e senhas.",
    image:
      "https://github.com/gustavogss/task-manager/raw/main/images/monitory.png",
    tags: ["Python", "Docker", "OWASP ZAP", "Prometheus", "Grafana"],
    github: "https://github.com/gustavogss/task-manager",
    category: "devops",
  },
  {
    title: "tfc-project",
    description:
      "Aplicação web completa para gerenciamento de partidas de futebol, com API e front-end integrados.",
    image:
      "https://raw.githubusercontent.com/gustavogss/tfc-project/main/preview.png",
    tags: ["Node.js", "TypeScript", "React", "Docker"],
    github: "https://github.com/gustavogss/tfc-project",
    category: "web",
  },
  {
    title: "delivery",
    description:
      "Aplicativo de Delivery para dispositivos Android e iOS implementado com Flutter.",
    image:
      "https://private-user-images.githubusercontent.com/20332960/513080749-81dc365e-e779-4669-a66b-1db946f9122c.png",
    tags: ["Flutter", "Material UI", "Dart"],
    github: "https://github.com/gustavogss/delivery",
    category: "mobile",
  },
  {
    title: "osint-toolkit",
    description:
      "Ferramenta OSINT automatizada para coleta e análise de informações em investigações de segurança.",
    image:
      "https://raw.githubusercontent.com/gustavogss/osint-toolkit/main/preview.png",
    tags: ["Python", "Flask", "OSINT"],
    github: "https://github.com/gustavogss/osint-toolkit",
    category: "cyber",
  },
  {
    title: "api-minima-boilerplate",
    description:
      "Boilerplate de API mínima em .NET para construção rápida de backends modernos.",
    image:
      "https://raw.githubusercontent.com/gustavogss/api-minima-boilerplate/main/preview.png",
    tags: [".NET", "C#", "API"],
    github: "https://github.com/gustavogss/api-minima-boilerplate",
    category: "backend",
  },
  {
    title: "listadecompras",
    description:
      "Aplicativo mobile para controle de compras desenvolvido em Flutter.",
    image:
      "https://raw.githubusercontent.com/gustavogss/listadecompras/main/preview.png",
    tags: ["Flutter", "Dart"],
    github: "https://github.com/gustavogss/listadecompras",
    category: "mobile",
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("web");
  const categoriesRef = useRef<HTMLDivElement>(null);

  // Animação inicial das abas
  useEffect(() => {
    if (categoriesRef.current) {
      gsap.fromTo(
        categoriesRef.current.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: categoriesRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  // Animação ao trocar de categoria
  useEffect(() => {
    const buttons = document.querySelectorAll(".category-btn");
    gsap.fromTo(
      buttons,
      { opacity: 0.7, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        stagger: 0.05,
        ease: "power2.out",
      }
    );
  }, [activeCategory]);

  const filteredProjects = projects.filter(
    (project) => project.category === activeCategory
  );

  return (
    <PageLayout
      title="Portfólio"
      description={categoryDescriptions[activeCategory]}
      centered
    >
      {/* Abas de categorias centralizadas */}
      <div className="flex justify-center mb-10">
        <div
          ref={categoriesRef}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 w-1/2 justify-items-center"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              whileTap={{ scale: 0.95 }}
              className={`category-btn w-full px-4 py-2 rounded-full border text-center transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-primary text-white shadow-md scale-105"
                  : "bg-transparent text-muted-foreground border-border hover:bg-card"
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lista de projetos com animação */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -25 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 150 }}
              className="bg-[#121212] rounded-xl overflow-hidden border border-border shadow-md transition-all"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-card-foreground mb-3">
                  {project.title}
                </h3>
                <p className="text-card-text-muted mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-card-foreground/20 text-card-foreground text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  className="flex items-center gap-2 text-card-foreground hover:text-muted-foreground transition-all"
                >
                  <Github className="w-5 h-5" />
                  <span>Código</span>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </PageLayout>
  );
}
