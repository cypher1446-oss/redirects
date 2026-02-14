
import { Logo } from '@/components/logo';
import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';

const footerLinks = {
  services: [
    { href: '/research-solutions/b2b-research', label: 'B2B Research' },
    { href: '/research-solutions/b2c-research', label: 'B2C Research' },
    { href: '/research-solutions/brand-research', label: 'Brand Research' },
    { href: '/research-solutions/product-research', label: 'Product Research' },
  ],
  company: [
    { href: '/why-us', label: 'About Us' },
    { href: '/case-studies', label: 'Case Studies' },
    { href: '/market-research-insights', label: 'Blog' },
    { href: '/contact', label: 'Contact Us' },
  ],
   legal: [
    { href: '#', label: 'Privacy Policy' },
    { href: '#', label: 'Terms of Service' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/" className="mb-4 inline-block">
              <Logo />
            </Link>
            <p className="text-sm text-foreground/70 max-w-xs">
              Delivering clarity and strategic insights for confident decision-making.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-primary">Services</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-primary">Company</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-primary">Contact Info</h3>
            <ul className="mt-4 space-y-3">
               <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0 text-foreground/70" />
                <span className="text-sm text-foreground/70">
                  A1-348, Dal Mill Road, Delhi, Delhi, 110059, India
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-1 flex-shrink-0 text-foreground/70" />
                <a
                  href="mailto:contact@opinioninsights.in"
                  className="text-sm text-foreground/70 hover:text-accent transition-colors"
                >
                  contact@opinioninsights.in
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-1 flex-shrink-0 text-foreground/70" />
                 <a
                  href="tel:+919354018421"
                  className="text-sm text-foreground/70 hover:text-accent transition-colors"
                >
                  +91 9354018421
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-sm text-foreground/60">
            &copy; {new Date().getFullYear()} OpinionInsights. All rights reserved.
          </p>
           <ul className="flex gap-4 mt-4 sm:mt-0">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/60 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
        </div>
      </div>
    </footer>
  );
}
