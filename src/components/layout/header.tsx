'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/logo';
import { Menu, X } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import React from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/why-us', label: 'About Us' },
  { href: '/#services', label: 'Services' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/contact', label: 'Contact Us' },
];

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomeAtTop = !isScrolled && pathname === '/';

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300 backdrop-blur-sm',
        isScrolled ? 'bg-background/80 shadow-sm' : 'bg-transparent',
        !isHomeAtTop && 'bg-background/80 shadow-sm'
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-sm font-medium transition-colors',
                isHomeAtTop 
                  ? 'text-primary-foreground/80 hover:text-primary-foreground' 
                  : 'text-foreground/80 hover:text-accent',
                pathname === link.href && (isHomeAtTop ? 'text-primary-foreground' : 'text-accent')
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-4 md:flex">
          <Button asChild>
            <Link href="/contact">Request a Demo</Link>
          </Button>
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={cn(isHomeAtTop ? "text-primary-foreground" : "")}>
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-background">
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between border-b pb-4">
                  <Link href="/">
                    <Logo />
                  </Link>
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon">
                      <X className="h-6 w-6" />
                    </Button>
                  </SheetClose>
                </div>
                <nav className="mt-8 flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <Link
                        href={link.href}
                        className={cn(
                          'text-lg font-medium transition-colors hover:text-accent',
                          pathname === link.href
                            ? 'text-accent'
                            : 'text-foreground/80'
                        )}
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
                <div className="mt-auto pt-8">
                  <Button asChild className="w-full">
                    <Link href="/contact">Request a Demo</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
