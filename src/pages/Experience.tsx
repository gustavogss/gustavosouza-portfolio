import { PageLayout } from "@/components/PageLayout";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Web Full Stack Developer e Mobile",
    company: "G Soluções Digitais e Consultori",
    period: "2023 - Presente",
    description:
      "Desenvolvimento de aplicações web e mobile com foco em inovação.",
    technologies: ["Next", "Node", "TypeScript", "Docker", "React Native"],
  },

  {
    title: "Web Developer",
    company: "Web Design - Freelancer",
    period: "2018 - 2023",
    description: "Desenvolvimento de sites intitucionais e landpages.",
    technologies: ["Wordpress", "Magento"],
  },
];

export default function Experience() {
  return (
    <PageLayout
      title="Experiência Profissional"
      description="Minha trajetória e experiências no desenvolvimento de software"
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
