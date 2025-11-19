import { useEffect, useRef } from "react";
import { PageLayout } from "@/components/PageLayout";
import HeaderPage from "@/components/ui/header-page";
import { GraduationCap, Award } from "lucide-react";
import { gsap } from "gsap";

const education = [
  {
    degree: "Técnico - Desenvolvedor Web Full Stack, DevOps e Mobile",
    institution: "Rocketseat",
    period: "2025 - 2026",
    description:
      "Imersão intensiva com foco em React, React Native, Node.js, boas práticas de desenvolvimento moderno, DevOps.",
  },
  {
    degree: "Técnico - Ethical Hacker e Segurança da Informação",
    institution: "GoHacking",
    period: "2024 - atual",
    description:
      "Formação prática em segurança ofensiva, testes de penetração e análise de vulnerabilidades em sistemas e redes.",
  },
  {
    degree: "Técnico - Hackers do Bem",
    institution: "RNP e Gov.br",
    period: "2024",
    description: "Formação em DevOps e DevSecOps.",
  },
  {
    degree: "Técnico - Desenvolvimento Web Full Stack",
    institution: "Trybe",
    period: "2021 - 2023",
    description:
      "Formação completa em desenvolvimento front-end e back-end com metodologias ágeis e práticas de DevOps.",
  },
  {
    degree:
      "Pós-graduação Lato Sensu - Especialização em Desenvolvimento de Sistemas Móveis e Embarcados",
    institution: "Estácio",
    period: "2012 - 2014",
    description:
      "Ênfase em tecnologias móveis, embarcadas e integração entre hardware e software.",
  },
  {
    degree: "Graduação - Tecnólogo Superior em Processamento de Dados",
    institution: "Faculdades Asper",
    period: "1996 - 1999",
    description:
      "Formação voltada para desenvolvimento e análise de sistemas, banco de dados e programação estruturada.",
  },
];

const certifications = [
  "Google Cybersecurity",
  "OWASP Top 10: de Injections a Broken Access Control",
  "International Career Acceleration - Volkswagen Digital Solutions (Road to Portugal)",
  "Curso de NodeJs: API Rest com Express e MongoDB",
  "NLW Expert - Trilha de React (Rocketseat)",
];

export default function Education() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Inicial fade-in dos cards
  useEffect(() => {
    if (!containerRef.current) return;

    const items =
      containerRef.current.querySelectorAll<HTMLElement>(".animate-section");

    gsap.fromTo(
      items,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.1 }
    );
  }, []);

  // Função para pulse
  const handleMouseEnter = (el: HTMLElement) => {
    gsap.to(el, {
      scale: 1.05,
      yoyo: true,
      repeat: -1,
      duration: 0.8,
      ease: "power1.inOut",
    });
  };

  const handleMouseLeave = (el: HTMLElement) => {
    gsap.killTweensOf(el);
    gsap.to(el, { scale: 1, duration: 0.2 });
  };

  return (
    <PageLayout centered>
      <HeaderPage
        title="Formação Acadêmica"
        subtitle="Educação e certificações profissionais"
      />

      <div ref={containerRef} className="space-y-1 text-center mb-4">
        {/* Educação */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-foreground flex items-center justify-center gap-3 mb-5">
            <GraduationCap className="w-8 h-8 text-primary" />
            Educação
          </h2>
          <div className="space-y-4 text-left">
            {education.map((edu, index) => (
              <div
                key={index}
                className="animate-section bg-card rounded-xl p-4 border border-border hover:scale-105 transition-transform duration-300"
                onMouseEnter={(e) => handleMouseEnter(e.currentTarget)}
                onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
              >
                <h3 className="text-xl font-bold text-card-foreground mb-1">
                  {edu.degree}
                </h3>
                <div className="flex flex-wrap items-center text-sm text-card-text-muted mb-2 gap-2">
                  <span className="font-semibold">{edu.institution}</span>
                  <span className="text-muted-foreground">•</span>
                  <span>{edu.period}</span>
                </div>
                <p className="text-card-foreground text-sm">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Certificações */}
        <div className="mt-1">
          <h2 className="text-3xl font-bold text-foreground flex items-center justify-center gap-3 mb-5">
            <Award className="w-8 h-8 text-primary" />
            Certificações
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left p-2">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="animate-section bg-card rounded-xl p-3 border border-border flex items-center gap-2 hover:scale-105 transition-transform duration-300"
                onMouseEnter={(e) => handleMouseEnter(e.currentTarget)}
                onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
              >
                <span className="text-card-foreground font-medium text-sm">
                  {cert}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
