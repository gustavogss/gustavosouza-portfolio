import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, Code, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
        }
      );
    }

    if (cardsRef.current) {
      gsap.fromTo(
        cardsRef.current.children,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: 'back.out(1.7)',
          delay: 0.5,
        }
      );
    }
  }, []);

  const features = [
    {
      icon: Code,
      title: 'Full Stack Development',
      description: 'Desenvolvimento completo de aplicações web e mobile com as melhores tecnologias.',
    },
    {
      icon: Shield,
      title: 'DevSecOps',
      description: 'Implementação de segurança em todas as etapas do desenvolvimento.',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Otimização e escalabilidade para aplicações de alta performance.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div ref={heroRef} className="py-20">
        <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-6">
          Olá, eu sou
          <span className="text-primary"> Gustavo Souza</span>
        </h1>
        <p className="text-2xl md:text-3xl text-muted-foreground mb-8">
          Full Stack Developer | DevSecOps
        </p>
        <p className="text-xl text-muted-foreground max-w-2xl mb-12">
          Especializado em criar soluções completas e seguras, desde o frontend até a infraestrutura,
          com foco em qualidade, performance e boas práticas de desenvolvimento.
        </p>
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary-hover transition-smooth text-lg font-medium group"
        >
          Ver Projetos
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Features */}
      <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-card rounded-xl p-8 border border-border hover:scale-105 transition-transform duration-300"
          >
            <div className="w-16 h-16 bg-card-foreground/20 rounded-lg flex items-center justify-center mb-6">
              <feature.icon className="w-8 h-8 text-card-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-card-foreground mb-4">
              {feature.title}
            </h3>
            <p className="text-card-text-muted">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
