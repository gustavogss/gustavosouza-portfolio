import { PageLayout } from '@/components/PageLayout';
import { Outlet, useLocation } from 'react-router-dom';
import { Check } from 'lucide-react';

type SkillCategory = {
  title: string;
  subtitle?: string;
  skills: string[];
};

const skillCategories: Record<string, SkillCategory> = {
  '/skills/frontend': {
    title: 'Frontend Development',
    skills: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Styled Components',
    ],
  },
  '/skills/mobile': {
    title: 'Mobile Development',
    skills: [
      'React Native',
      'Android (Java/Kotlin)',
      'Flutter',
    ],
  },
  '/skills/backend': {
    title: 'Backend Development',
    skills: [
      'Node.js',
      'Express',
      'Fastify',
      'Firebase',
      'Supabase',
      'MySQL',
      'Docker',
      'PHP',
      'Magento 2',
    ],
  },
  '/skills/devops': {
    title: 'DevOps',
    skills: [
      'Docker',
      'Kubernetes',
      'AWS',
      'CI/CD Pipelines',
      'Terraform',
    ],
  },
  '/skills/devsecops': {
    title: 'DevSecOps & Infraestrutura',
    skills: [
      'Pipelines CI/CD com SAST (SonarQube, Dependency Check, Bandit) e DAST (OWASP ZAP)',
      'GitFlow para versionamento e gerenciamento de branches',
      'Monitoramento e alertas: Prometheus, Grafana',
      'Provisionamento e automação: Terraform',
      'N8N e outras ferramentas low-code',
      'Engenharia de Prompt e Engenharia Reversa aplicada a IA',
    ],
  },
  '/skills/cyber': {
    title: 'Segurança & Pentest',
    subtitle: '(em estudo / prática)',
    skills: [
      'Ferramentas: Burp Suite, Nmap, Metasploit, Netcat, Kali Linux',
      'Simulações: brute force (Hydra), SQL Injection, IDOR, XSS',
      'Hardening e correção de vulnerabilidades',
      'Shell Script (OSINT e enumeração)',
      'Python (em aperfeiçoamento para Pentest)',
    ],
  },
  '/skills/design': {
    title: 'UI/UX',
    skills: [
      'Prototipação e design de soluções com Figma',
      'Design de interfaces',
      'Design Systems',
    ],
  },
};

export default function Skills() {
  const location = useLocation();
  const currentCategory = skillCategories[location.pathname as keyof typeof skillCategories];

  if (location.pathname === '/skills') {
    return (
      <PageLayout
        title="Habilidades"
        description="Minhas competências técnicas e ferramentas"
      >
        <div className="animate-section text-center py-12">
          <p className="text-xl text-muted-foreground">
            Selecione uma categoria no menu para ver as habilidades específicas
          </p>
        </div>
      </PageLayout>
    );
  }

  if (currentCategory) {
    return (
      <PageLayout
        title={currentCategory.title}
        description={currentCategory.subtitle || 'Tecnologias e ferramentas'}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {currentCategory.skills.map((skill, index) => (
            <div
              key={index}
              className="animate-section flex items-start gap-3 p-4 bg-card rounded-lg border border-border hover:scale-105 transition-transform duration-300"
            >
              <Check className="w-5 h-5 text-card-foreground flex-shrink-0 mt-0.5" />
              <span className="text-card-foreground">{skill}</span>
            </div>
          ))}
        </div>
      </PageLayout>
    );
  }

  return <Outlet />;
}
