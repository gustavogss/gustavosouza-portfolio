import { PageLayout } from "@/components/PageLayout";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "task-manager",
    description:
      "Estudo Caso: Criação, Implementação e Segurança de um Sistema de Gerenciamento de Tarefas usando ferramentas DAST/SAST como Bandit, OWASP ZAP. Promotheus e Grafana (monitoramento) durante um ataque de bruta force com Hydra na aplicação usando uma wordlist de usuários e senhas.",
    image:
      "https://github.com/gustavogss/task-manager/raw/main/images/pipeline-finished.png",
    tags: ["Python", "Docker", "OWASP ZAP", "Prometheus", "Grafana"],
    github: "https://github.com/gustavogss/task-manager",
  },
  {
    title: "delivery",
    description:
      "Aplicativo de Delivery para dispositvos Android e IOS implementado com Flutter",
    image: "@/assets/flutter-app.png",
    tags: ["Flutter", "Material UI", "Dart"],
    github: "https://github.com/gustavogss/delivery",
  },
];

export default function Portfolio() {
  return (
    <PageLayout
      title="Portfólio"
      description="Projetos desenvolvidos e implementados"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="animate-section bg-card rounded-xl overflow-hidden border border-border hover:scale-105 transition-transform duration-300 group"
          >
            <div className="relative overflow-hidden h-48">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-card-foreground mb-3">
                {project.title}
              </h3>
              <p className="text-card-text-muted mb-4">{project.description}</p>
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
              <div className="flex gap-4">
                <a
                  href={project.github}
                  className="flex items-center gap-2 text-card-foreground hover:text-card-text-muted transition-smooth"
                >
                  <Github className="w-5 h-5" />
                  <span>Código</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
