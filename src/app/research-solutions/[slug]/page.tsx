import { Button } from '@/components/ui/button';
import {
  Briefcase,
  Users,
  Tag,
  Target,
  Package,
  CheckCircle2,
  Scaling,
} from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Image from 'next/image';

const expertiseData = {
  'b2b-research': {
    icon: Briefcase,
    title: 'B2B Research',
    description: 'Deep dive into business-to-business markets to understand complex decision-making units, competitive landscapes, and industry trends. We help you build stronger partnerships and drive growth.',
    offerings: [
      'Market Sizing & Opportunity Analysis',
      'Competitor Intelligence',
      'Lead Generation & Funnel Analysis',
      'Buyer Journey Mapping',
    ],
    imageHint: 'corporate meeting',
  },
  'market-sizing': {
      icon: Scaling,
      title: 'Market Sizing',
      description: 'Accurately quantify market opportunities to inform your growth strategy, investment decisions, and resource allocation. We provide a clear picture of your total addressable market.',
      offerings: [
        'Total Addressable Market (TAM) Analysis',
        'Serviceable Available Market (SAM)',
        'Serviceable Obtainable Market (SOM)',
        'Market Trend & Growth Forecasting'
      ],
      imageHint: 'financial graphs',
  },
  'b2c-research': {
    icon: Users,
    title: 'B2C Research',
    description: 'Get closer to your customers. We uncover consumer behaviors, motivations, and unmet needs to help you create products and marketing campaigns that resonate.',
    offerings: [
      'Consumer Segmentation',
      'Usage & Attitude Studies (U&A)',
      'Product Concept Testing',
      'Brand Health Tracking',
    ],
    imageHint: 'retail shopping',
  },
  'pricing-research': {
      icon: Tag,
      title: 'Pricing Research',
      description: 'Optimize your pricing strategy for maximum profitability and market share. We use advanced techniques to understand price sensitivity and value perception.',
      offerings: [
        'Conjoint & MaxDiff Analysis',
        'Van Westendorp Price Sensitivity Meter',
        'Gabor-Granger Pricing Technique',
        'Feature & Bundle Optimization'
      ],
      imageHint: 'price tags',
  },
  'brand-research': {
    icon: Target,
    title: 'Brand Research',
    description: 'Measure, manage, and improve your brand perception and customer journey. We help you identify key touchpoints and moments that matter to build lasting loyalty.',
    offerings: [
      'Net Promoter Score (NPS) & CSAT',
      'Customer Journey Mapping',
      'Brand Positioning & Equity Studies',
      'Voice of the Customer (VoC) Programs',
    ],
    imageHint: 'customer feedback',
  },
  'product-research': {
    icon: Package,
    title: 'Product Research',
    description: 'Have a unique challenge? Our team specializes in designing bespoke research projects tailored to your specific objectives. No matter the complexity, we can build a solution.',
    offerings: [
      'Multi-Country Qualitative & Quantitative Studies',
      'Advanced Analytics & Predictive Modeling',
      'Innovation & New Product Development (NPD) Sprints',
      'Ad-Hoc Strategic Projects',
    ],
    imageHint: 'whiteboard strategy',
  },
};

type PageProps = {
  params: { slug: keyof typeof expertiseData };
};

export default function ResearchSolutionPage({ params }: PageProps) {
  const { slug } = params;
  const solution = expertiseData[slug];

  if (!solution) {
    notFound();
  }

  const { title, description, offerings, icon: Icon, imageHint } = solution;

  return (
    <>
      <section className="bg-primary pt-24 md:pt-32 pb-16 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
              <Icon className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight font-headline">
              {title}
            </h1>
          </div>
          <p className="mt-4 max-w-3xl text-lg md:text-xl text-primary-foreground/80">
            {description}
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Key Offerings
              </h2>
              <ul className="space-y-4">
                {offerings.map((offering) => (
                  <li key={offering} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <span className="text-lg text-foreground/90">{offering}</span>
                  </li>
                ))}
              </ul>
              <Button asChild size="lg" className="mt-8">
                <Link href="/contact">Discuss Your Project</Link>
              </Button>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
                <Image
                    src={`https://picsum.photos/seed/${slug}/800/600`}
                    alt={`${title} illustration`}
                    fill
                    className="object-cover"
                    data-ai-hint={imageHint}
                />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">
            Ready to Deepen Your Understanding?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            Let's tailor a research solution that addresses your unique challenges and unlocks new opportunities in the {title.toLowerCase()} space.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export async function generateStaticParams() {
    return Object.keys(expertiseData).map((slug) => ({
      slug,
    }));
}
