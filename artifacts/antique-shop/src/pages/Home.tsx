import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight, Clock, MapPin, Quote, Facebook, ShoppingBag } from 'lucide-react';

// Hero background image
import heroBg from '@assets/shop/hero.jpg';
import ownerImg from '@assets/shop/owner.jpg';

// Category thumbnails
import cameraImg from '@assets/shop/camera-1.jpg';
import clothesImg from '@assets/shop/clothing-1.jpg';
import furnitureImg from '@assets/shop/furniture-1.jpg';
import unusualImg from '@assets/shop/unusual-1.jpg';

const CATEGORIES = [
  { title: "Cameras & Optics", image: cameraImg, delay: 0.1 },
  { title: "Vintage Clothing", image: clothesImg, delay: 0.2 },
  { title: "Furniture & Home", image: furnitureImg, delay: 0.3 },
  { title: "Unusual Finds", image: unusualImg, delay: 0.4 },
];

export default function Home() {
  return (
    <div className="bg-background">
      {/* HERO SECTION */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${heroBg})`,
            backgroundAttachment: 'fixed',
          }}
        >
          {/* Overlay to darken image for text legibility */}
          <div className="absolute inset-0 bg-primary/70 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="text-accent uppercase tracking-[0.3em] text-sm md:text-base font-semibold mb-6 block drop-shadow-md">
              Established 1998
            </span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-primary-foreground mb-6 drop-shadow-lg max-w-4xl mx-auto leading-tight">
              Curiosities for the Incurably Curious.
            </h1>
            <p className="text-primary-foreground/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed drop-shadow">
              Step out of the modern world and into a curated collection of antique, vintage, and peculiar items. Every piece has a past, waiting for its next chapter.
            </p>
            
            <Link 
              href="/what-we-sell" 
              className="inline-flex items-center justify-center gap-3 bg-accent text-primary px-8 py-4 uppercase tracking-widest text-sm font-semibold hover:bg-white transition-colors duration-300"
            >
              Explore The Collection <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CATEGORY PREVIEW SECTION */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-primary mb-4">What We Sell</h2>
          <div className="h-1 w-24 bg-accent mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From 19th-century scientific instruments to 1960s designer wear, our stock is ever-changing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: category.delay }}
            >
              <Link href="/what-we-sell" className="group block h-full">
                <div className="relative overflow-hidden aspect-[4/5] bg-secondary rounded-sm mb-4">
                  <img 
                    src={category.image} 
                    alt={category.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-60 transition-opacity group-hover:opacity-40"></div>
                </div>
                <h3 className="font-serif text-2xl text-primary group-hover:text-accent transition-colors">
                  {category.title}
                </h3>
                <span className="text-accent text-sm uppercase tracking-widest group-hover:text-primary transition-colors flex items-center gap-1 mt-2">
                  View Category <ArrowRight size={14} />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link 
            href="/what-we-sell"
            className="inline-block border border-primary text-primary px-10 py-4 uppercase tracking-widest text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            View All Departments
          </Link>
        </div>
      </section>

      {/* MEET THE OWNER */}
      <section className="bg-secondary text-secondary-foreground py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16 max-w-6xl mx-auto">
            <motion.div 
              className="lg:w-1/2 relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute -inset-4 border border-accent/30 translate-x-2 translate-y-2 z-0"></div>
              <img 
                src={ownerImg} 
                alt="Hands holding an antique pocket watch" 
                className="relative z-10 w-full h-[500px] object-cover rounded-sm shadow-2xl"
              />
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Quote className="text-accent mb-6" size={48} />
              <h2 className="font-serif text-4xl mb-6">Every object here has outlived its maker. Our job isn't selling things—it's rescuing stories.</h2>
              <p className="text-secondary-foreground/80 text-lg mb-8 leading-relaxed">
                I didn't start this shop to be a retailer. I started it because I couldn't bear to see beautiful, well-made things discarded just because they were old. We don't do 'shabby chic' and we don't paint over good mahogany. We find pieces with soul and pass them on to people who care.
              </p>
              <Link 
                href="/about" 
                className="text-accent uppercase tracking-widest text-sm hover:text-white transition-colors border-b border-accent pb-1 inline-flex items-center gap-2"
              >
                Read The Full Story <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FIND US ONLINE */}
      <section className="py-24 px-4 md:px-8 max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl text-primary mb-4">Find Us Online</h2>
          <div className="h-1 w-24 bg-accent mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Can't make it to the shop? Browse and buy selected items through our online stores — updated regularly with new arrivals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Facebook */}
          <motion.a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center text-center bg-card border border-border p-10 shadow-md hover:shadow-xl hover:border-accent transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -4 }}
          >
            <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-primary transition-colors duration-300">
              <Facebook size={30} className="text-accent group-hover:text-primary transition-colors duration-300" />
            </div>
            <h3 className="font-serif text-2xl text-primary mb-3 group-hover:text-accent transition-colors">Facebook Marketplace</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Follow our Facebook page for new arrivals, shop news, and items listed for local collection or postage on Marketplace.
            </p>
            <span className="inline-flex items-center gap-2 text-accent uppercase tracking-widest text-xs font-semibold border-b border-accent pb-1 group-hover:gap-3 transition-all">
              Visit Our Facebook <ArrowRight size={13} />
            </span>
          </motion.a>

          {/* eBay */}
          <motion.a
            href="https://ebay.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center text-center bg-card border border-border p-10 shadow-md hover:shadow-xl hover:border-accent transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -4 }}
          >
            <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-primary transition-colors duration-300">
              <ShoppingBag size={30} className="text-accent group-hover:text-primary transition-colors duration-300" />
            </div>
            <h3 className="font-serif text-2xl text-primary mb-3 group-hover:text-accent transition-colors">eBay Shop</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Our eBay store carries a curated selection of smaller pieces that ship nationwide — cameras, collectibles, vintage accessories and more.
            </p>
            <span className="inline-flex items-center gap-2 text-accent uppercase tracking-widest text-xs font-semibold border-b border-accent pb-1 group-hover:gap-3 transition-all">
              Browse Our eBay Store <ArrowRight size={13} />
            </span>
          </motion.a>
        </div>
      </section>

      {/* QUICK VISIT INFO */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="bg-card border border-border p-8 md:p-16 text-center shadow-xl relative z-10">
            <h2 className="font-serif text-3xl md:text-4xl text-primary mb-12">Plan Your Visit</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="flex flex-col items-center text-center">
                <Clock className="text-accent mb-4" size={32} />
                <h3 className="font-serif text-2xl text-primary mb-4">Opening Hours</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex justify-between w-48 border-b border-border pb-1"><span>Tuesday - Friday</span> <span>10am - 5pm</span></li>
                  <li className="flex justify-between w-48 border-b border-border pb-1"><span>Saturday</span> <span>9am - 6pm</span></li>
                  <li className="flex justify-between w-48 border-b border-border pb-1"><span>Sunday</span> <span>11am - 4pm</span></li>
                  <li className="flex justify-between w-48 text-accent font-medium pt-1"><span>Monday</span> <span>Closed</span></li>
                </ul>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <MapPin className="text-accent mb-4" size={32} />
                <h3 className="font-serif text-2xl text-primary mb-4">Location</h3>
                <p className="text-muted-foreground max-w-[200px] mb-6">
                  14 Cobblestone Lane,<br />
                  Historic Quarter,<br />
                  York, YO1 7XX
                </p>
                <Link 
                  href="/contact" 
                  className="bg-primary text-primary-foreground px-6 py-3 uppercase tracking-widest text-xs hover:bg-accent hover:text-primary transition-colors"
                >
                  Get Directions
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative background element */}
        <div className="absolute top-1/2 left-0 w-full h-1/2 bg-muted/30 z-0"></div>
      </section>
    </div>
  );
}
