import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Lightbulb,
  Check,
  Users2,
  ThumbsUp,
  ShieldCheck,
  Award,
  Users,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const whyChooseUs = [
    {
        icon: Lightbulb,
        title: 'Custom Methodologies',
        description: 'We design research tailored to your unique goals, not a one-size-fits-all approach. Your business challenges are unique, and your research should be too.'
    },
    {
        icon: Check,
        title: 'Fast, Clean Data',
        description: 'Our agile processes and rigorous, multi-step quality control deliver reliable, fraud-free insights faster than traditional agencies.'
    },
    {
        icon: Users2,
        title: 'Senior-led Teams',
        description: 'Your project is managed by experienced, senior researchers from start to finish, ensuring the highest level of strategic thinking and analysis.'
    },
    {
        icon: ThumbsUp,
        title: 'Dedicated Account Managers',
        description: 'A single point of contact who understands your business ensures a seamless, responsive, and collaborative partnership.'
    }
]

export default function WhyUsPage() {
  return (
    <>
      <section className="bg-primary pt-24 md:pt-32 pb-16 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight font-headline">
            About OpinionInsights
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-primary-foreground/80">
            We are more than a data provider; we're your strategic partner in understanding the market. We are built on a foundation of research rigor and business acumen.
          </p>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                 <div className="relative h-[500px] rounded-lg overflow-hidden order-last md:order-first">
                    <Image
                        src="https://picsum.photos/seed/about/800/1000"
                        alt="Team collaborating in a modern office"
                        fill
                        className="object-cover"
                        data-ai-hint="team collaboration office"
                    />
                 </div>
                 <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline mb-4">
                        Driving confidence in your market decisions
                    </h2>
                    <p className="text-lg text-foreground/80 mb-6">
                        We are more than a data provider; we're your strategic partner in understanding the market. Founded by Shivam Rathore, OpinionInsights is built on a foundation of research rigor and business acumen.
                    </p>
                    <p className="text-lg text-foreground/80">
                        At OpinionInsights, we believe that the best decisions are built on a foundation of undeniable truth. We are committed to providing that truth through meticulous data collection, advanced analytical techniques, and a clear, narrative-driven approach to reporting.
                    </p>
                 </div>
            </div>
        </div>
      </section>
      
      <section className="bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">The OpinionInsights Difference</h2>
            <p className="mt-2 text-foreground/80">What sets us apart is our unwavering commitment to client success.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item) => (
              <Card key={item.title} className="text-center">
                <CardHeader>
                    <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <item.icon className="w-8 h-8 text-accent" />
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">
                Our Commitment to Quality
              </h2>
              <p className="mt-4 text-lg text-foreground/80">
                Quality isn't just a goal; it's the foundation of everything we do. Our rigorous internal processes and adherence to industry best practices ensure that every project we deliver meets the highest standards of accuracy and reliability.
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-4">
                  <ShieldCheck className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold">ESOMAR Member</h4>
                    <p className="text-sm text-foreground/70">As proud members of ESOMAR, we adhere to a strict international code of conduct for market and social research.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Award className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold">Certified Analysts</h4>
                    <p className="text-sm text-foreground/70">Our team holds various industry certifications, ensuring expert-level analysis and interpretation of your data.</p>
                  </div>
                </li>
                 <li className="flex items-start gap-4">
                  <Users className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold">Client-Centric Approach</h4>
                    <p className="text-sm text-foreground/70">We build partnerships, not just projects. Your goals are our goals, and we work collaboratively to ensure success.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
                <Image
                    src="https://picsum.photos/seed/quality/800/600"
                    alt="Team collaborating"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                    data-ai-hint="team collaboration"
                />
                <div className="absolute inset-0 bg-primary/20"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            Partner with a Team You Can Trust
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/80">
            Ready to experience the OpinionInsights difference? Let's build a research strategy that drives real results.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/contact">Contact Our Experts</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
