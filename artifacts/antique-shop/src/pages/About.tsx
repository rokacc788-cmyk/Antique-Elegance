import { motion } from 'framer-motion';
import exteriorImg from '@assets/shop/shop-exterior.jpg';
import ownerImg from '@assets/shop/owner.jpg';

export default function About() {
  return (
    <div className="bg-background pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-serif text-5xl md:text-6xl text-primary mb-6">The Story of Charming Antiques</h1>
          <div className="h-1 w-24 bg-accent mx-auto"></div>
        </motion.div>

        {/* Content Section 1 */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="prose prose-lg prose-p:text-muted-foreground prose-headings:font-serif prose-headings:text-primary">
            <h3>How It Started</h3>
            <p>
              Charming Antiques wasn't born out of a grand business plan. It began in 1998, quite by accident, in a damp garage filled to the brim with things I simply couldn't bear to leave behind at estate sales and auctions.
            </p>
            <p>
              I've always been afflicted with a romantic attachment to the discarded. When I see a worn leather armchair or a brass telescope tarnished by time, I don't see junk. I see the hands that built it, the people who used it, and the history it witnessed. 
            </p>
            <p>
              Eventually, the garage overflowed. My wife told me I either had to stop buying, or start selling. The choice was obvious.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 border-2 border-accent/20 translate-x-4 translate-y-4"></div>
            <img 
              src={exteriorImg} 
              alt="Shop exterior at dusk" 
              className="relative z-10 w-full h-[400px] object-cover rounded-sm shadow-xl grayscale-[20%] hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </motion.div>

        {/* Philosophy Callout */}
        <motion.div 
          className="bg-secondary p-12 md:p-16 text-center shadow-2xl mb-24 relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute top-0 left-0 w-2 h-full bg-accent"></div>
          <h2 className="font-serif text-3xl md:text-4xl text-secondary-foreground mb-8">Our Philosophy is Simple</h2>
          <p className="text-xl md:text-2xl font-serif italic text-secondary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            "We don't do 'shabby chic'. We don't paint over good mahogany. We don't turn vintage cameras into table lamps. We preserve, we restore gently, and we respect the object."
          </p>
        </motion.div>

        {/* Content Section 2 */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="order-2 md:order-1 relative">
            <div className="absolute -inset-4 border-2 border-accent/20 -translate-x-4 translate-y-4"></div>
            <img 
              src={ownerImg} 
              alt="Hands working on antique" 
              className="relative z-10 w-full h-[500px] object-cover rounded-sm shadow-xl"
            />
          </div>
          <div className="order-1 md:order-2 prose prose-lg prose-p:text-muted-foreground prose-headings:font-serif prose-headings:text-primary">
            <h3>The Shop Today</h3>
            <p>
              Located on historic Cobblestone Lane in York, the shop is exactly what an antique store should be: slightly cramped, smelling faintly of beeswax polish and old paper, and filled from floor to ceiling with the unusual.
            </p>
            <p>
              We are not a sterile gallery. You are encouraged to touch the items, test the winding mechanism on the pocket watches, and try out the typewriters. 
            </p>
            <p>
              If you visit, be prepared to lose an hour or two. We love talking about the history of our items, and we're always happy to put the kettle on for a fellow enthusiast.
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
