import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function ThankYouPage() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-md mx-auto">
          <CheckCircle className="w-16 h-16 text-accent mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary font-headline">
            Thank You!
          </h1>
          <p className="mt-4 text-lg md:text-xl text-foreground/80">
            Your message has been sent successfully. Our team will review it and get back to you as soon as possible.
          </p>
          <div className="mt-8">
            <Button asChild>
              <Link href="/">Return to Homepage</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
