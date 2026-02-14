'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Briefcase,
  Users,
  BarChart,
  Tag,
  Target,
  Package,
  ArrowRight,
  ShieldCheck,
  Building2,
  Globe,
  Star,
  Scaling,
  Lightbulb,
  Check,
  Search,
  Database,
  BarChart3,
  Users2,
  ThumbsUp,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { ContactForm } from './contact/_components/contact-form';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const stats = [
  {
    icon: Briefcase,
    value: '6+',
    label: 'Years of Experience',
  },
  {
    icon: Building2,
    value: '1500+',
    label: 'Projects Completed',
  },
  {
    icon: ShieldCheck,
    value: '25+',
    label: 'Industries Served',
  },
];

const processSteps = [
    {
        step: 1,
        title: 'Discovery & Scoping',
        description: 'We align on your business goals to define research objectives and scope.'
    },
    {
        step: 2,
        title: 'Research Design & Methods',
        description: 'Our experts select the optimal methodology for your specific needs.'
    },
    {
        step: 3,
        title: 'Data Collection & Analysis',
        description: 'Rigorous quality control ensures clean, reliable, and actionable data.'
    },
    {
        step: 4,
        title: 'Insight & Strategic Reporting',
        description: 'We translate data into a clear narrative with strategic recommendations.'
    },
    {
        step: 5,
        title: 'Activation & Follow-through',
        description: 'We partner with you to ensure insights are effectively implemented.'
    }
];

const services = [
  {
    icon: Briefcase,
    title: 'B2B Research',
    description: 'Insights into complex business markets and decision-maker journeys.',
  },
  {
    icon: Scaling,
    title: 'Market Sizing',
    description: 'Quantify market opportunities to inform your growth strategy.',
  },
  {
    icon: Users,
    title: 'B2C Research',
    description: 'Understand consumer behavior, preferences, and motivations.',
  },
  {
    icon: Tag,
    title: 'Pricing Research',
    description: 'Optimize your pricing strategy for maximum profitability and market share.',
  },
  {
    icon: Target,
    title: 'Brand Research',
    description: 'Measure and track brand health, perception, and equity.',
  },
  {
    icon: Package,
    title: 'Product Research',
    description: 'Validate concepts, test features, and guide product development.',
  },
];

const whyChooseUs = [
    {
        icon: Lightbulb,
        title: 'Custom Methodologies',
        description: 'We design research tailored to your unique goals, not a one-size-fits-all approach.'
    },
    {
        icon: Check,
        title: 'Fast, Clean Data',
        description: 'Our agile processes and rigorous quality control deliver reliable insights, quickly.'
    },
    {
        icon: Users2,
        title: 'Senior-led Teams',
        description: 'Your project is managed by experienced researchers from start to finish.'
    },
    {
        icon: ThumbsUp,
        title: 'Dedicated Account Managers',
        description: 'A single point of contact ensures a seamless and responsive partnership.'
    }
]

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
];

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-home');
  const whyIpsobellImage = PlaceHolderImages.find((img) => img.id === 'why-ipsobell');
  const whyChooseImage = PlaceHolderImages.find((img) => img.id === 'why-choose');
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 20 },
    },
  };

  return (
    <div className="flex flex-col">
      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="py-16 md:py-24"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
                <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-bold tracking-tight font-headline">
                    OpinionInsights – Your Voice. Your Data. Your Future.
                </motion.h1>
                <motion.p variants={itemVariants} className="mt-4 max-w-2xl text-lg md:text-xl text-primary-foreground/80">
                    We provide the clarity and strategic insights your business needs to thrive. Confident decision-making starts here.
                </motion.p>
                <motion.div variants={itemVariants} className="mt-8 flex flex-col sm:flex-row gap-4">
                    <Button asChild size="lg" variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90">
                    <Link href="#services">Our Expertise</Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="border-primary-foreground/50 text-accent hover:bg-primary-foreground/10">
                    <Link href="/case-studies">Our Solutions</Link>
                    </Button>
                </motion.div>
                 <motion.div variants={itemVariants} className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-8 text-left">
                    {stats.map((stat) => (
                    <div key={stat.label} className="flex items-center gap-3">
                        <p className="text-3xl md:text-4xl font-bold">{stat.value}</p>
                        <p className="text-sm text-primary-foreground/80 leading-tight">{stat.label}</p>
                    </div>
                    ))}
                </motion.div>
            </motion.div>
            <div className="hidden lg:block h-full w-full relative">
                {heroImage && (
                    <Image
                        src={heroImage.imageUrl}
                        alt={heroImage.description}
                        fill
                        className="object-cover"
                        data-ai-hint={heroImage.imageHint}
                        priority
                    />
                )}
            </div>
        </div>
      </section>

      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                 <motion.div variants={itemVariants} className="relative h-96 rounded-lg overflow-hidden">
                    {whyIpsobellImage && (
                        <Image
                            src={whyIpsobellImage.imageUrl}
                            alt={whyIpsobellImage.description}
                            fill
                            className="object-cover"
                            data-ai-hint={whyIpsobellImage.imageHint}
                        />
                    )}
                 </motion.div>
                 <motion.div variants={itemVariants}>
                    <Badge variant="outline" className="mb-2 border-accent text-accent">Why OpinionInsights?</Badge>
                    <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline mb-4">
                        Driving confidence in your market decisions
                    </h2>
                    <p className="text-lg text-foreground/80 mb-6">
                        We combine research rigor with business acumen to deliver insights that don't just inform, but inspire action. Our senior-led teams are dedicated to understanding the nuances of your industry.
                    </p>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                            <span className="font-semibold">Expertise & Accuracy</span>
                        </div>
                         <div className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                            <span className="font-semibold">Customized Research</span>
                        </div>
                         <div className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                            <span className="font-semibold">Advanced Tech</span>
                        </div>
                         <div className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                            <span className="font-semibold">Global Reach</span>
                        </div>
                    </div>
                    <Button asChild variant="link" className="p-0 mt-6 h-auto text-accent">
                        <Link href="/why-us">Learn More <ArrowRight className="w-4 h-4 ml-2" /></Link>
                    </Button>
                 </motion.div>
            </div>
          </div>
      </motion.section>

      <section className="bg-muted">
        <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-12 max-w-2xl mx-auto"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            >
                <Badge variant="outline" className="mb-2 border-accent text-accent">Our Process</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">
                    Our Vision-Precise, Data-Actionable Insight
                </h2>
                <p className="mt-2 text-foreground/80">
                    A streamlined, transparent process designed for clarity and impact, from initial discovery to strategic activation.
                </p>
            </motion.div>
            <div className="relative">
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
                {processSteps.map((item, index) => (
                    <motion.div 
                      key={item.step} 
                      className="relative mb-8 md:mb-0"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ type: "spring", stiffness: 100, damping: 20, delay: index * 0.1 }}
                    >
                        <div className="flex items-center md:justify-center">
                            <div className={`flex items-center gap-8 w-full md:w-1/2 ${index % 2 === 0 ? 'md:flex-row-reverse md:text-right' : ''}`}>
                                <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-accent text-accent-foreground font-bold text-lg flex-shrink-0 z-10">
                                    {item.step}
                                </div>
                                <div className="flex-grow p-6 rounded-lg bg-card shadow-sm border">
                                    <h3 className="font-bold text-lg text-primary">{item.title}</h3>
                                    <p className="text-foreground/70 mt-1">{item.description}</p>
                                </div>
                            </div>
                        </div>
                         <div className="md:hidden absolute top-0 left-0 h-full w-0.5 bg-border -translate-x-4"/>
                         <div className="md:hidden absolute top-1/2 -left-4 -translate-y-1/2 w-8 h-8 rounded-full bg-accent text-accent-foreground font-bold text-lg flex items-center justify-center z-10">
                            {item.step}
                         </div>
                    </motion.div>
                ))}
            </div>
            <motion.div 
              className="text-center mt-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: processSteps.length * 0.1 }}
            >
                <Button asChild size="lg">
                    <Link href="/contact">Request a Demo</Link>
                </Button>
            </motion.div>
        </div>
      </section>

      <section id="services">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          >
            <Badge variant="outline" className="mb-2 border-accent text-accent">Our Services</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">
              Our Core Services
            </h2>
            <p className="mt-2 max-w-2xl mx-auto text-foreground/80">
              A comprehensive suite of research solutions to address your most pressing business questions.
            </p>
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {services.map((item, index) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                animate={{ y: ["0rem", "-0.5rem", "0rem"] }}
                transition={{
                  duration: 4,
                  ease: "easeInOut",
                  repeat: Infinity,
                  delay: index * 0.4,
                }}
              >
                <Tilt
                  tiltMaxAngleX={5}
                  tiltMaxAngleY={5}
                  glareEnable={true}
                  glareMaxOpacity={0.1}
                  glarePosition="all"
                >
                  <Link
                    href={`/research-solutions/${item.title.toLowerCase().replace(/ /g, '-')}`}
                    className="group h-full"
                  >
                    <Card className="h-full transition-all duration-300 ease-in-out shadow-md hover:shadow-2xl">
                      <CardHeader>
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                            <item.icon className="w-6 h-6 text-primary" />
                        </div>
                        <CardTitle className="text-xl">{item.title}</CardTitle>
                      </CardHeader>
                       <CardContent>
                        <p className="text-foreground/70">{item.description}</p>
                      </CardContent>
                    </Card>
                  </Link>
                </Tilt>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      <motion.section 
        className="bg-muted"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
            <motion.div variants={itemVariants} className="max-w-4xl mx-auto text-center mb-12">
                <Badge variant="outline" className="mb-2 border-accent text-accent">Let's Talk</Badge>
                 <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">
                    Ready to make smarter, data-driven decisions?
                </h2>
            </motion.div>
            <motion.div variants={itemVariants} className="grid lg:grid-cols-2 gap-12 bg-card p-8 md:p-12 rounded-lg shadow-xl border">
                <div>
                     <h3 className="text-3xl font-bold text-primary mb-4">Ready to Transform Your Business?</h3>
                     <p className="text-foreground/80">
                        Our experts are ready to help you tackle your most complex business challenges. Fill out the form, and we'll be in touch to schedule a complimentary consultation.
                     </p>
                     <div className="mt-8 space-y-4 text-lg">
                        <p className="flex items-center gap-3"><Check className="w-5 h-5 text-accent"/> <span className="font-semibold">1500+</span> Projects Completed</p>
                        <p className="flex items-center gap-3"><Check className="w-5 h-5 text-accent"/> <span className="font-semibold">90%</span> Client Retention Rate</p>
                        <p className="flex items-center gap-3"><Check className="w-5 h-5 text-accent"/> <span className="font-semibold">5+</span> Industry Awards</p>
                     </div>
                </div>
                 <div className="bg-muted p-8 rounded-lg">
                    <h3 className="text-2xl font-bold text-primary mb-4">Feel Free to Find Us</h3>
                    <ContactForm />
                </div>
            </motion.div>
        </div>
      </motion.section>

      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                 <motion.div variants={itemVariants}>
                    <Badge variant="outline" className="mb-2 border-accent text-accent">Why Choose Us?</Badge>
                    <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline mb-4">
                        Why Choose Our Services
                    </h2>
                    <p className="text-lg text-foreground/80 mb-6">
                        We are more than just a data provider. We are your strategic partner, committed to delivering excellence at every stage of your research journey.
                    </p>
                    <div className="space-y-6">
                       {whyChooseUs.map((item, index) => (
                           <motion.div 
                              key={item.title} 
                              className="flex items-start gap-4"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5, delay: index * 0.15 }}
                            >
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                        <item.icon className="w-6 h-6 text-accent" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">{item.title}</h3>
                                    <p className="text-foreground/70">{item.description}</p>
                                </div>
                           </motion.div>
                       ))}
                    </div>
                 </motion.div>
                 <motion.div variants={itemVariants} className="relative h-[500px] rounded-lg overflow-hidden">
                    {whyChooseImage && (
                        <Image
                            src={whyChooseImage.imageUrl}
                            alt={whyChooseImage.description}
                            fill
                            className="object-cover"
                            data-ai-hint={whyChooseImage.imageHint}
                        />
                    )}
                     <div className="absolute bottom-4 right-4 bg-card/80 backdrop-blur-sm p-4 rounded-lg shadow-lg grid grid-cols-3 gap-4 text-center">
                        <div>
                            <p className="text-2xl font-bold text-primary">40%</p>
                            <p className="text-xs text-foreground/70">Faster Insights</p>
                        </div>
                         <div>
                            <p className="text-2xl font-bold text-primary">2.5x</p>
                            <p className="text-xs text-foreground/70">Higher ROI</p>
                        </div>
                         <div>
                            <p className="text-2xl font-bold text-primary">20%</p>
                            <p className="text-xs text-foreground/70">Cost Reduction</p>
                        </div>
                     </div>
                 </motion.div>
            </div>
          </div>
      </motion.section>

      <section className="bg-muted">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          >
            <Badge variant="outline" className="mb-2 border-accent text-accent">Testimonials</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">
              Check Our Testimonials
            </h2>
            <p className="mt-2 max-w-2xl mx-auto text-foreground/80">
              See how we've helped businesses like yours achieve their goals.
            </p>
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div variants={itemVariants} key={testimonial.id}>
                <Card className="flex flex-col h-full">
                  <CardContent className="p-6 flex-grow">
                      <div className="flex text-yellow-400 mb-2">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star key={i} className={cn("w-5 h-5", i < testimonial.rating ? 'fill-current' : 'fill-muted stroke-muted-foreground')} />
                          ))}
                      </div>
                    <p className="text-foreground/80 italic">"{testimonial.text}"</p>
                  </CardContent>
                  <CardHeader className="pt-0 flex flex-row items-center gap-4 mt-auto">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-foreground/70">{testimonial.company}</p>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          >
            <Button asChild variant="outline">
              <Link href="/case-studies">View All Testimonials</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
