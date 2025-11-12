import { PageLayout } from "@/components/PageLayout";
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
      "Responsável pela infraestrutura de tecnologia, site e marketing digital do hotel. Também atuava na gestão de RH, financeiro e operações, desenvolvendo competências em liderança, empatia e autogestão.",
    technologies: ["HTML", "CSS", "Flash", "Infraestrutura de Rede"],
  },
  {
    title: "Estagiário de TI",
    company: "Projeto Cooperar",
    period: "março de 1998 - outubro de 1998",
    description:
      "Participação no desenvolvimento do sistema FROTA, para controle e gestão da frota de veículos da empresa, utilizando Delphi e SQL.",
    technologies: ["Delphi", "SQL", "Windows Server"],
  },
];

export default function Experience() {
  return (
    <PageLayout
      title="Experiência Profissional"
      description="Minha trajetória e experiências no desenvolvimento de software e tecnologia"
      centered
    >
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="animate-section bg-card rounded-xl p-6 border border-border hover:scale-105 transition-transform duration-300"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-card-foreground/10 rounded-lg">
                  <Briefcase className="w-6 h-6 text-card-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-card-foreground mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-lg text-card-text-muted">{exp.company}</p>
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
