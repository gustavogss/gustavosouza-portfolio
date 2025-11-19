import { PageLayout } from "@/components/PageLayout";
import HeaderPage from "@/components/ui/header-page";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Desenvolvedor Web Full Stack e Mobile",
    company: "G Soluções Digitais e Consultoria",
    period: "junho de 2023 - Presente",
    description:
      "Desenvolvimento de landing pages, sites institucionais, portais para imobiliárias e sistemas sob demanda.",
    technologies: [
      "Next.js",
      "React Native",
      "Node.js",
      "TypeScript",
      "Docker",
      "TailwindCSS",
      "Firebase",
      "Supabase",
      "WordPress",
    ],
  },
  {
    title: "Empreendedor / Administrador de TI e Marketing",
    company: "Hotel Pousada Solar da Praia",
    period: "fevereiro de 2002 - outubro de 2018",
    description:
      "Responsável pela infraestrutura de tecnologia, site e marketing digital do hotel. Também atuava na gestão de RH, financeiro e operações.",
    technologies: ["HTML", "CSS", "Flash", "Infraestrutura de Rede"],
  },
  {
    title: "Estagiário de TI",
    company: "Projeto Cooperar",
    period: "março de 1998 - outubro de 1998",
    description:
      "Participação no desenvolvimento do sistema FROTA, para controle e gestão da frota.",
    technologies: ["Delphi", "SQL", "Windows Server"],
  },
];

export default function Experience() {
  return (
    <PageLayout centered>
      <HeaderPage
        title="Experiência Profissional"
        subtitle="Minha trajetória e experiências no desenvolvimento de software e tecnologia"
      />

      {/* Cards 85% no desktop / padding lateral no mobile */}
      <div className="w-full px-4 md:px-0 flex flex-col items-center gap-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="w-[85%] animate-section bg-card rounded-xl p-6 border border-border hover:scale-105 transition-transform duration-300"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-card-foreground/10 rounded-lg">
                  <Briefcase className="w-6 h-6 text-card-foreground" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-card-foreground mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-card-text-muted">{exp.company}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-card-text-muted">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">{exp.period}</span>
              </div>
            </div>

            <p className="text-card-foreground mb-4">{exp.description}</p>

            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-card-foreground/20 text-card-foreground text-sm rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
