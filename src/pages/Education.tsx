import { PageLayout } from '@/components/PageLayout';
import { GraduationCap, Award } from 'lucide-react';

const education = [
  {
    degree: 'Bacharelado em Ciência da Computação',
    institution: 'Universidade Federal',
    period: '2014 - 2018',
    description: 'Formação completa em desenvolvimento de software, algoritmos e estruturas de dados.',
  },
  {
    degree: 'Especialização em Segurança da Informação',
    institution: 'Instituto de Tecnologia',
    period: '2019 - 2020',
    description: 'Foco em cibersegurança, ethical hacking e proteção de sistemas.',
  },
];

const certifications = [
  'AWS Certified Solutions Architect',
  'Certified Kubernetes Administrator (CKA)',
  'Certified Information Systems Security Professional (CISSP)',
  'Professional Scrum Master (PSM I)',
];

export default function Education() {
  return (
    <PageLayout
      title="Formação Acadêmica"
      description="Educação e certificações profissionais"
    >
      <div className="space-y-12">
        {/* Education */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-foreground flex items-center gap-3">
            <GraduationCap className="w-8 h-8 text-primary" />
            Educação
          </h2>
          {education.map((edu, index) => (
            <div
              key={index}
              className="animate-section bg-card rounded-xl p-6 border border-border hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-2xl font-bold text-card-foreground mb-2">
                {edu.degree}
              </h3>
              <p className="text-lg text-card-text-muted mb-1">
                {edu.institution}
              </p>
              <p className="text-sm text-card-text-muted mb-3">{edu.period}</p>
              <p className="text-card-foreground">{edu.description}</p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-foreground flex items-center gap-3">
            <Award className="w-8 h-8 text-primary" />
            Certificações
          </h2>
          <div className="animate-section grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-4 border border-border flex items-center gap-3 hover:scale-105 transition-transform duration-300"
              >
                <Award className="w-6 h-6 text-card-foreground flex-shrink-0" />
                <span className="text-card-foreground font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
