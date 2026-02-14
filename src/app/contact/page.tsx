import { ContactForm } from './_components/contact-form';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function ContactPage() {
  return (
    <>
      <section className="bg-primary pt-24 md:pt-32 pb-16 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight font-headline">
            Contact Us
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-primary-foreground/80">
            We're here to help you with your market research needs. Reach out to us for a consultation or to ask any questions you may have.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-primary">Contact Information</h2>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-foreground/70">General Inquiries & Sales</p>
                  <a
                    href="mailto:contact@opinioninsights.in"
                    className="text-primary hover:underline"
                  >
                    contact@opinioninsights.in
                  </a>
                </div>
              </div>
               <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Phone</h3>
                  <p className="text-foreground/70">Mon-Fri, 9am-5pm</p>
                  <a
                    href="tel:+919354018421"
                    className="text-primary hover:underline"
                  >
                    +91 9354018421
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Our Office</h3>
                  <p className="text-foreground/70">
                    A1-348, Dal Mill Road, Delhi, Delhi, 110059, India
                  </p>
                  <p className="text-foreground/70">
                    (By appointment only)
                  </p>
                </div>
              </div>
            </div>
             <div className="lg:col-span-2">
                <Card className="bg-muted">
                    <CardContent className="p-8">
                        <h2 className="text-3xl font-bold text-primary mb-6">Send us a Message</h2>
                        <ContactForm />
                    </CardContent>
                </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
