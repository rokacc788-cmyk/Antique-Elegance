import { Link } from 'wouter';
import { Facebook, ShoppingBag, MapPin, Phone, Mail } from 'lucide-react';
import BrandLogo from '@/components/ui/BrandLogo';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8 border-t-4 border-accent">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-accent">
                <BrandLogo height={38} />
              </span>
              <h2 className="font-serif text-3xl font-bold text-accent">Charm Antique</h2>
            </div>
            <p className="text-primary-foreground/80 max-w-md mb-6 leading-relaxed">
              A carefully curated collection of antique, vintage, and unusual finds.
              Every item has a story, waiting for its next chapter.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary p-3 rounded-full hover:bg-accent hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://ebay.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary p-3 rounded-full hover:bg-accent hover:text-primary transition-colors"
                aria-label="eBay Store"
              >
                <ShoppingBag size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-xl font-semibold mb-6 text-accent">Explore</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/what-we-sell" className="hover:text-accent transition-colors">What We Sell</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-accent transition-colors">About the Shop</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent transition-colors">Contact & Location</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-xl font-semibold mb-6 text-accent">Visit Us</h3>
            <ul className="space-y-4 text-primary-foreground/80">
              <li className="flex items-start gap-3">
                <MapPin className="shrink-0 mt-1 text-accent" size={18} />
                 <span>34 Boothferry Rd,<br/>Goole,<br/>DN14 5DA</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="shrink-0 text-accent" size={18} />
                <span>01904 123456</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="shrink-0 text-accent" size={18} />
                <span>hello@charmantique.example.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/60 text-center md:text-left">
            &copy; {new Date().getFullYear()} Charm Antique. All rights reserved.
          </p>
          <p className="text-sm text-accent/80 text-center md:text-right italic">
            Some items available to buy online via our eBay store and Facebook Marketplace.
          </p>
        </div>
      </div>
    </footer>
  );
}
