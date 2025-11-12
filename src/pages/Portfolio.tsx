import { PageLayout } from '@/components/PageLayout';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'Plataforma completa de e-commerce com painel administrativo e integração de pagamentos.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=400&fit=crop',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Security Dashboard',
    description: 'Dashboard para monitoramento de segurança com análise em tempo real de vulnerabilidades.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
    tags: ['TypeScript', 'Python', 'Docker', 'Kubernetes'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Mobile App',
    description: 'Aplicativo mobile cross-platform para gestão de projetos e tarefas.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop',
    tags: ['React Native', 'Firebase', 'Redux'],
    github: '#',
    demo: '#',
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
                <a
                  href={project.demo}
                  className="flex items-center gap-2 text-card-foreground hover:text-card-text-muted transition-smooth"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>Demo</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
