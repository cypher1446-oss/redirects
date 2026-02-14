import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const insights = [
    {
      id: 'insight-1',
      title: 'The Future of AI in Market Research: Predictions for 2024',
      category: 'Technology',
      date: 'October 26, 2023',
      excerpt: 'Artificial intelligence is no longer a futuristic concept but a present-day tool revolutionizing how we gather, analyze, and interpret market data. Explore our predictions...',
      image: PlaceHolderImages.find((img) => img.id === 'insight-1'),
    },
    {
      id: 'insight-2',
      title: 'Navigating the Complexities of Healthcare Surveys',
      category: 'Healthcare',
      date: 'October 22, 2023',
      excerpt: 'Patient privacy, regulatory compliance, and stakeholder sensitivity make healthcare research unique. Learn best practices for designing effective and ethical surveys in this sector.',
      image: PlaceHolderImages.find((img) => img.id === 'insight-2'),
    },
    {
      id: 'insight-3',
      title: '5 Common Pitfalls in B2B Data Collection and How to Avoid Them',
      category: 'B2B Research',
      date: 'October 18, 2023',
      excerpt: 'From identifying the right decision-makers to ensuring data quality, B2B research presents many challenges. We break down the most common mistakes.',
      image: PlaceHolderImages.find((img) => img.id === 'insight-3'),
    },
    {
      id: 'case-study-1-insight',
      title: 'A Deep Dive into Global Market Entry Strategies',
      category: 'B2B Research',
      date: 'October 15, 2023',
      excerpt: 'Expanding internationally requires more than just a great product. This article explores the critical research steps for successful global expansion.',
      image: PlaceHolderImages.find((img) => img.id === 'case-study-1'),
    },
    {
      id: 'case-study-2-insight',
      title: 'The Power of Sentiment: How Brand Perception Shapes a Business',
      category: 'Brand & CX',
      date: 'October 11, 2023',
      excerpt: 'Go beyond NPS scores. We discuss advanced techniques for analyzing consumer sentiment and its direct impact on your bottom line.',
      image: PlaceHolderImages.find((img) => img.id === 'case-study-2'),
    },
];

export default function MarketResearchInsightsPage() {
  return (
    <>
      <section className="bg-background/80 pt-24 md:pt-32 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary font-headline">
            Market Research Insights
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-foreground/80">
            Your hub for the latest industry trends, expert analysis, and data-driven perspectives from the world of market research.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background/50">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex flex-col sm:flex-row gap-4 items-center">
            <div className="relative flex-grow w-full">
                <Input placeholder="Search articles..." className="pl-10 h-12" />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            </div>
            <Button size="lg" className="w-full sm:w-auto h-12">Search</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insights.map((insight) => (
              <Link
                href={`/market-research-insights#${insight.id}`}
                key={insight.id}
                className="group"
              >
                <Card className="overflow-hidden h-full flex flex-col transition-shadow duration-300 ease-in-out hover:shadow-xl">
                  {insight.image && (
                    <div className="relative h-52 w-full">
                       <Image
                        src={insight.image.imageUrl}
                        alt={insight.image.description}
                        fill
                        className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                        data-ai-hint={insight.image.imageHint}
                      />
                    </div>
                  )}
                  <CardContent className="p-6 flex-grow flex flex-col">
                    <p className="text-sm text-foreground/60 mb-2">
                      {insight.date}
                    </p>
                    <h3 className="text-xl font-semibold flex-grow mb-2">
                      {insight.title}
                    </h3>
                    <p className="text-foreground/70 text-sm line-clamp-3 mb-4">
                      {insight.excerpt}
                    </p>
                    <div className="mt-auto">
                      <Badge variant="secondary">{insight.category}</Badge>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
