import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Image from 'next/image';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    id: 1,
    name: 'Aarav Sharma',
    company: 'Innovate India',
    avatar: 'https://i.pravatar.cc/150?img=7',
    rating: 5,
    text: "OpinionInsights's market sizing report was a game-changer for our expansion strategy. Their data was impeccable and insights were spot on. We exceeded our first-year targets by 30%.",
  },
  {
    id: 2,
    name: 'Priya Mehta',
    company: 'Digital Solutions Co.',
    avatar: 'https://i.pravatar.cc/150?img=8',
    rating: 4,
    text: 'The product research they conducted was incredibly thorough. We were able to launch our new feature with confidence, knowing it met a real customer need. The team was professional and a pleasure to work with.',
  },
  {
    id: 3,
    name: 'Rohan Gupta',
    company: 'NextGen Ventures',
    avatar: 'https://i.pravatar.cc/150?img=9',
    rating: 5,
    text: "Working with OpinionInsights on our brand tracking study has been enlightening. The dashboards are intuitive, and the quarterly reports provide the strategic guidance we need to stay ahead of the competition.",
  },
  {
    id: 4,
    name: 'Saanvi Desai',
    company: 'FutureAI',
    avatar: 'https://i.pravatar.cc/150?img=10',
    rating: 5,
    text: "Their B2B research capabilities are second to none. They connected us with hard-to-reach decision-makers, and the qualitative insights were invaluable for refining our go-to-market messaging.",
  },
  {
    id: 5,
    name: 'Vihaan Reddy',
    company: 'Everyday Goods',
    avatar: 'https://i.pravatar.cc/150?img=11',
    rating: 4,
    text: "The pricing research project was a huge success. OpinionInsights's conjoint analysis helped us identify the optimal price points and feature bundles, leading to a 15% increase in average revenue per user.",
  },
  {
    id: 6,
    name: 'Anika Patel',
    company: 'SaaSWorks',
    avatar: 'https://i.pravatar.cc/150?img=12',
    rating: 5,
    text: "I was impressed by their agility and speed. We needed insights fast, and OpinionInsights delivered high-quality data and a clear, actionable report in half the time of other agencies we've worked with.",
  }
];

export default function TestimonialsPage() {
  return (
    <>
      <section className="bg-primary pt-24 md:pt-32 pb-16 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight font-headline">
            Client Success Stories
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-primary-foreground/80">
            Discover why leading companies trust OpinionInsights to deliver critical market insights and drive business growth.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="flex flex-col h-full">
                 <CardContent className="p-6 flex-grow flex flex-col">
                    <div className="flex text-yellow-400 mb-4">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <Star key={i} className={cn("w-5 h-5", i < testimonial.rating ? 'fill-current' : 'fill-muted stroke-muted-foreground')} />
                        ))}
                    </div>
                  <p className="text-foreground/80 italic flex-grow">"{testimonial.text}"</p>
                </CardContent>
                <CardHeader className="pt-0 mt-auto flex flex-row items-center gap-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-foreground/70">{testimonial.company}</p>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
