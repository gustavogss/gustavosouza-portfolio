"use client";

import { useState, useEffect } from "react";
import { PageLayout } from "@/components/PageLayout";
import { Calendar, Clock, ArrowRight, X } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const posts = [
  {
    title: "Implementando DevSecOps em Pipelines CI/CD",
    excerpt:
      "Como integrar práticas de segurança desde o início do desenvolvimento até o deploy.",
    content: `
      Neste artigo exploramos como integrar segurança em todas as etapas do pipeline de CI/CD.
      Utilizando ferramentas como SonarQube, OWASP ZAP e Snyk, garantimos qualidade e segurança contínuas.

      Exemplo prático:
      - Configuração de pipeline no GitHub Actions;
      - Escaneamento automático de vulnerabilidades antes do deploy;
      - Relatórios integrados no PR.

      O resultado é um ciclo DevSecOps completo e automatizado, garantindo segurança sem perder agilidade.
    `,
    date: "15 de Março, 2024",
    readTime: "8 min",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=600&fit=crop",
  },
  {
    title: "React Server Components: O Futuro do React",
    excerpt:
      "Explorando as novas possibilidades dos Server Components e como eles mudam o desenvolvimento.",
    content: `
      Os React Server Components permitem dividir a renderização entre servidor e cliente.
      Isso melhora o desempenho e reduz o bundle de JavaScript enviado ao navegador.

      Exemplo prático:
      - Utilizando Next.js 14 com App Router;
      - Componentes que fazem fetch de dados no servidor;
      - Suspense e streaming para UX fluida.

      É o futuro do React: aplicações mais rápidas e com melhor experiência de desenvolvimento.
    `,
    date: "8 de Março, 2024",
    readTime: "6 min",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=600&fit=crop",
  },
  {
    title: "Kubernetes na Prática: Deployment Strategies",
    excerpt:
      "Estratégias de deploy em Kubernetes para aplicações resilientes e escaláveis.",
    content: `
      Kubernetes oferece várias estratégias de deploy: Rolling Update, Blue-Green e Canary.
      Cada uma tem vantagens específicas dependendo do cenário.

      Exemplo prático:
      - Configuração de um Deployment YAML com RollingUpdate;
      - Testes de disponibilidade durante o rollout;
      - Uso do kubectl rollout para controle de versões.

      Dominar essas estratégias é essencial para times DevOps modernos.
    `,
    date: "1 de Março, 2024",
    readTime: "10 min",
    image:
      "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=1200&h=600&fit=crop",
  },
];

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<null | (typeof posts)[0]>(
    null
  );

  useEffect(() => {
    gsap.utils.toArray<HTMLElement>(".blog-card").forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <PageLayout
      title="Blog"
      description="Artigos sobre desenvolvimento, DevOps e segurança"
      centered
    >
      {/* Grid de 2 colunas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((post, index) => (
          <article
            key={index}
            className="blog-card bg-[#121212] rounded-xl overflow-hidden border border-border shadow-md hover:scale-105 transition-transform duration-300 group cursor-pointer"
            onClick={() => setSelectedPost(post)}
          >
            <div className="relative overflow-hidden h-56">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-card-foreground mb-3 group-hover:text-muted-foreground transition-colors">
                {post.title}
              </h3>
              <p className="text-card-text-muted mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-card-text-muted">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <button className="flex items-center gap-2 text-card-foreground hover:gap-3 transition-all">
                  <span className="font-medium">Ler mais</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Modal do post */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedPost(null)} // Fecha ao clicar fora
          >
            <motion.div
              className="relative w-full md:w-[80%] h-full bg-[#0b0b0b] overflow-y-auto shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 80, damping: 20 }}
              onClick={(e) => e.stopPropagation()} // Impede fechar ao clicar dentro
            >
              {/* Botão de fechar */}
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-6 right-6 text-white hover:text-muted-foreground transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Hero */}
              <div
                className="relative h-72 bg-cover bg-center flex items-center justify-center text-center"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${selectedPost.image})`,
                }}
              >
                <motion.h2
                  className="text-4xl md:text-5xl font-bold text-white px-6 drop-shadow-lg"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  {selectedPost.title}
                </motion.h2>
              </div>

              {/* Corpo do post */}
              <motion.div
                className="p-10 max-w-3xl mx-auto text-gray-200 leading-relaxed space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                {selectedPost.content.split("\n").map((p, i) => (
                  <p key={i} className="text-lg">
                    {p.trim()}
                  </p>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageLayout>
  );
}
