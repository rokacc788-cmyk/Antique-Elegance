import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, Facebook, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import BrandLogo from '@/components/ui/BrandLogo';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'What We Sell', href: '/what-we-sell' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when location changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-sm border-b border-border py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo + Name */}
        <Link href="/" className="group flex items-center gap-3">
          <span className="text-accent transition-transform duration-300 group-hover:scale-110">
            <BrandLogo height={34} />
          </span>
          <span className="font-serif text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-accent leading-none">
            Charm Antique
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm uppercase tracking-widest transition-colors hover:text-accent font-medium ${
                location === link.href ? 'text-accent' : 'text-foreground/80'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/80 hover:text-accent transition-colors"
            aria-label="Facebook"
          >
            <Facebook size={20} />
          </a>
          <a
            href="https://ebay.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/80 hover:text-accent transition-colors"
            aria-label="eBay Store"
          >
            <ShoppingBag size={20} />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-foreground p-2 -mr-2"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 bg-background flex flex-col"
          >
            <div className="p-4 flex justify-between items-center border-b border-border">
              <span className="flex items-center gap-2 text-accent">
                <BrandLogo height={26} />
                <span className="font-serif text-xl font-bold text-foreground">Charm Antique</span>
              </span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-foreground"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center gap-8 p-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-2xl font-serif tracking-wide ${
                    location === link.href ? 'text-accent' : 'text-foreground'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center gap-6 mt-8 pt-8 border-t border-border/50 w-full justify-center">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-accent p-2"
                >
                  <Facebook size={28} />
                </a>
                <a
                  href="https://ebay.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-accent p-2"
                >
                  <ShoppingBag size={28} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
