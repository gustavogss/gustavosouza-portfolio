import { PageLayout } from '@/components/PageLayout';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const posts = [
  {
    title: 'Implementando DevSecOps em Pipelines CI/CD',
    excerpt: 'Como integrar práticas de segurança desde o início do desenvolvimento até o deploy.',
    date: '15 de Março, 2024',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
  },
  {
    title: 'React Server Components: O Futuro do React',
    excerpt: 'Explorando as novas possibilidades dos Server Components e como eles mudam o desenvolvimento.',
    date: '8 de Março, 2024',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop',
  },
  {
    title: 'Kubernetes na Prática: Deployment Strategies',
    excerpt: 'Estratégias de deploy em Kubernetes para aplicações resilientes e escaláveis.',
    date: '1 de Março, 2024',
    readTime: '10 min',
    image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=400&fit=crop',
  },
];

export default function Blog() {
  return (
    <PageLayout
      title="Blog"
      description="Artigos sobre desenvolvimento, DevOps e segurança"
    >
      <div className="space-y-8">
        {posts.map((post, index) => (
          <article
            key={index}
            className="animate-section bg-card rounded-xl overflow-hidden border border-border hover:scale-105 transition-transform duration-300 group"
          >
            <div className="md:flex">
              <div className="md:w-1/3 relative overflow-hidden h-64 md:h-auto">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-500"
                />
              </div>
              <div className="md:w-2/3 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-card-foreground mb-3 group-hover:text-card-text-muted transition-smooth">
                    {post.title}
                  </h3>
                  <p className="text-card-text-muted mb-4">{post.excerpt}</p>
                </div>
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
            </div>
          </article>
        ))}
      </div>
    </PageLayout>
  );
}
