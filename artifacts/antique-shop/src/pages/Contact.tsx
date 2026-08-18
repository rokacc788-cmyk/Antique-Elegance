import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Facebook, ShoppingBag } from 'lucide-react';

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
                  14 Cobblestone Lane<br />
                  Historic Quarter<br />
                  York, YO1 7XX
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed border-l-2 border-accent pl-4">
                  We are located just off the Shambles. Look for the dark green painted frontage and the brass telescope in the window. The nearest parking is the Q-Park Shambles (3 mins walk).
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
                    <a href="mailto:hello@curioandco.example.com">hello@curioandco.example.com</a>
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Online Buying & Map Placeholder */}
          <motion.div 
            className="flex flex-col gap-8"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Map Placeholder */}
            <div className="bg-secondary relative aspect-square md:aspect-video lg:aspect-square flex flex-col items-center justify-center p-8 text-center rounded-sm overflow-hidden border border-border shadow-md group">
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <MapPin size={48} className="text-accent mb-4" />
              <h3 className="font-serif text-2xl text-primary mb-2">Find Us in York</h3>
              <p className="text-muted-foreground text-sm max-w-[250px]">
                Interactive map would load here. <br/>
                Coordinates: 53.9583° N, 1.0803° W
              </p>
              
              {/* Decorative grid to look like a map placeholder */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none z-0"></div>
            </div>

            {/* Online Sales Banner */}
            <div className="bg-primary text-primary-foreground p-8 rounded-sm shadow-xl border-b-4 border-accent">
              <h3 className="font-serif text-2xl mb-4 text-accent">Can't make it to York?</h3>
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
