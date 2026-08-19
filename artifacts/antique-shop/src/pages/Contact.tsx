import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Facebook, ShoppingBag, ExternalLink } from 'lucide-react';

const MAP_QUERY = encodeURIComponent('34 Boothferry Rd, Goole DN14 5DA');
const MAP_EMBED_URL = `https://www.google.com/maps?q=${MAP_QUERY}&output=embed`;
const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${MAP_QUERY}`;

export default function Contact() {
  return (
    <div className="bg-background pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-serif text-5xl md:text-6xl text-primary mb-6">Visit The Shop</h1>
          <div className="h-1 w-24 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The best way to experience our collection is in person. The kettle is usually on.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Info Panel */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-card border border-border p-8 md:p-12 shadow-xl">
              
              <div className="mb-10">
                <h2 className="font-serif text-2xl text-primary flex items-center gap-3 mb-6">
                  <MapPin className="text-accent" /> Location & Directions
                </h2>
                <p className="text-card-foreground text-lg mb-4">
                  34 Boothferry Rd<br />
                  Goole<br />
                  DN14 5DA
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed border-l-2 border-accent pl-4">
                  We are located on Boothferry Road in Goole. Please contact us if you need directions or local parking information.
                </p>
              </div>

              <div className="mb-10">
                <h2 className="font-serif text-2xl text-primary flex items-center gap-3 mb-6">
                  <Clock className="text-accent" /> Opening Times
                </h2>
                <table className="w-full text-card-foreground">
                  <tbody>
                    <tr className="border-b border-border/50">
                      <td className="py-2">Monday</td>
                      <td className="py-2 text-right text-accent font-medium">Closed (Buying Day)</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2">Tuesday - Friday</td>
                      <td className="py-2 text-right">10:00 AM - 5:00 PM</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2">Saturday</td>
                      <td className="py-2 text-right">9:00 AM - 6:00 PM</td>
                    </tr>
                    <tr>
                      <td className="py-2">Sunday</td>
                      <td className="py-2 text-right">11:00 AM - 4:00 PM</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-primary flex items-center gap-3 mb-6">
                  <Phone className="text-accent" /> Get in Touch
                </h2>
                <div className="space-y-4">
                  <p className="flex items-center gap-3 text-card-foreground hover:text-accent transition-colors">
                    <Phone size={18} className="text-muted-foreground" />
                    <span>01904 123456</span>
                  </p>
                  <p className="flex items-center gap-3 text-card-foreground hover:text-accent transition-colors">
                    <Mail size={18} className="text-muted-foreground" />
                    <a href="mailto:hello@charmantique.example.com">hello@charmantique.example.com</a>
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Online Buying & Interactive Map */}
          <motion.div 
            className="flex flex-col gap-8"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Interactive Map */}
            <div className="relative aspect-square md:aspect-video lg:aspect-square overflow-hidden rounded-sm border border-border bg-secondary shadow-md">
              <iframe
                src={MAP_EMBED_URL}
                title="Interactive map showing Charm Antique on Boothferry Road in Goole"
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <a
                href={DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 z-10 inline-flex items-center gap-2 bg-primary px-5 py-3 text-xs font-bold uppercase tracking-widest text-primary-foreground shadow-lg transition-colors hover:bg-accent hover:text-primary"
              >
                Get Directions <ExternalLink size={14} />
              </a>
            </div>

            {/* Online Sales Banner */}
            <div className="bg-primary text-primary-foreground p-8 rounded-sm shadow-xl border-b-4 border-accent">
               <h3 className="font-serif text-2xl mb-4 text-accent">Can't make it to Goole?</h3>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                While we believe antiques are best appreciated in person, we regularly ship small items and selected pieces nationwide. Check our online listings for our current shippable inventory.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://ebay.co.uk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 bg-accent text-primary px-6 py-3 flex items-center justify-center gap-2 uppercase tracking-widest text-xs font-bold hover:bg-white transition-colors"
                >
                  <ShoppingBag size={16} /> eBay Store
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 border border-accent text-accent px-6 py-3 flex items-center justify-center gap-2 uppercase tracking-widest text-xs font-bold hover:bg-accent hover:text-primary transition-colors"
                >
                  <Facebook size={16} /> Facebook
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
