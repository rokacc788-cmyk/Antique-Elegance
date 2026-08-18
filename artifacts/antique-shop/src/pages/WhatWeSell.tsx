import { motion } from 'framer-motion';
import ImageGallery, { GalleryImage } from '@/components/ui/ImageGallery';

// Import all generated images from attached_assets
// To replace camera photos: swap the filenames below
import cam1 from '@assets/20260818_170454_1787069114705.jpg';
import cam2 from '@assets/20260818_170448_1787069121220.jpg';
import cam3 from '@assets/20260818_170442_1787069129241.jpg';
import cam4 from '@assets/20260818_170441_1787069137068.jpg';
import cam5 from '@assets/20260818_170454_1787069143867.jpg';

import cloth1 from '@assets/shop/clothing-1.jpg';
import cloth2 from '@assets/shop/clothing-2.jpg';

import binoc1 from '@assets/shop/binoculars-1.jpg';
import binoc2 from '@assets/shop/binoculars-2.jpg';

import furn1 from '@assets/shop/furniture-1.jpg';
import furn2 from '@assets/shop/furniture-2.jpg';

import ant1 from '@assets/shop/antiques-1.jpg';
import ant2 from '@assets/shop/antiques-2.jpg';
import ant3 from '@assets/shop/antiques-3.jpg';

import elec1 from '@assets/shop/electronics-1.jpg';
import elec2 from '@assets/shop/electronics-2.jpg';

import unu1 from '@assets/shop/unusual-1.jpg';
import unu2 from '@assets/shop/unusual-2.jpg';
import unu3 from '@assets/shop/unusual-3.jpg';

// Define categories and their image arrays
// To replace photos: swap the image src in the photos arrays below
const CATEGORIES = [
  {
    id: "cameras",
    title: "Cameras & Photography",
    description: "Analog beauty. We specialize in working condition 35mm and medium format cameras from the 1920s to the 1980s, alongside vintage lenses, brass darkroom equipment, and original sepia photography.",
    images: [
      { src: cam1, alt: "Camera & photography item", caption: "From the Collection" },
      { src: cam2, alt: "Camera & photography item", caption: "From the Collection" },
      { src: cam3, alt: "Camera & photography item", caption: "From the Collection" },
      { src: cam4, alt: "Camera & photography item", caption: "From the Collection" },
      { src: cam5, alt: "Camera & photography item", caption: "From the Collection" },
    ] as GalleryImage[]
  },
  {
    id: "clothing",
    title: "Vintage Clothing",
    description: "Garments that have stood the test of time. Focusing primarily on pre-1970s menswear and womenswear, including heavy wool tweeds, genuine 1920s flapper dresses, and mid-century workwear.",
    images: [
      { src: cloth1, alt: "Rack of vintage clothing", caption: "1920s Evening Wear" },
      { src: cloth2, alt: "Brass button detail", caption: "Original Hardware Details" },
      { src: cloth1, alt: "Velvet dress", caption: "Faded Velvet Textures" },
      { src: cloth2, alt: "Tweed jacket", caption: "Heavy Weight Tweed" },
    ] as GalleryImage[]
  },
  {
    id: "binoculars",
    title: "Binoculars & Optics",
    description: "Brass, leather, and glass. A curated selection of WWI and WWII field binoculars, Victorian opera glasses inlaid with mother-of-pearl, and early naval telescopes.",
    images: [
      { src: binoc1, alt: "Antique brass binoculars", caption: "Military Field Binoculars" },
      { src: binoc2, alt: "Vintage opera glasses", caption: "Mother-of-Pearl Opera Glasses" },
      { src: binoc1, alt: "Leather case", caption: "Original Leather Cases" },
      { src: binoc2, alt: "Optics detail", caption: "Polished Brass Finish" },
    ] as GalleryImage[]
  },
  {
    id: "furniture",
    title: "Furniture & Home",
    description: "Solid wood, proper joinery. We refuse to sell modern flat-pack. Find mahogany dressers, deeply carved oak armchairs, Victorian writing desks, and mid-century teak sideboards.",
    images: [
      { src: furn1, alt: "Carved wooden armchair", caption: "Victorian Carved Armchair" },
      { src: furn2, alt: "Mahogany dresser", caption: "Polished Mahogany Dresser" },
      { src: furn1, alt: "Chair detailing", caption: "Original Upholstery" },
      { src: furn2, alt: "Brass handles", caption: "Original Brass Hardware" },
    ] as GalleryImage[]
  },
  {
    id: "antiques",
    title: "Antiques & Collectibles",
    description: "Small treasures and cabinet pieces. Solid silver pocket watches, pre-decimal coins, ornate candlestick holders, fountain pens, and leather-bound first editions.",
    images: [
      { src: ant1, alt: "Pocket watches and coins", caption: "Silver Pocket Watches" },
      { src: ant2, alt: "Brass candlestick", caption: "Ornate Brass Candlesticks" },
      { src: ant3, alt: "Skeleton keys", caption: "Victorian Skeleton Keys" },
      { src: ant1, alt: "Silver coins", caption: "Historical Currency" },
      { src: ant2, alt: "Leather books", caption: "Antiquarian Books" },
    ] as GalleryImage[]
  },
  {
    id: "electronics",
    title: "Vintage Electronics",
    description: "When technology was built to be repaired, not replaced. Bakelite radios with glowing warm dials, heavy rotary telephones, and early recording equipment.",
    images: [
      { src: elec1, alt: "Bakelite radio", caption: "1950s Bakelite Valve Radio" },
      { src: elec2, alt: "Rotary telephone", caption: "Heavyweight Rotary Phone" },
      { src: elec1, alt: "Radio dial", caption: "Illuminated Tuning Dial" },
      { src: elec2, alt: "Phone receiver", caption: "Original Braided Cords" },
    ] as GalleryImage[]
  },
  {
    id: "unusual",
    title: "Unusual Finds",
    description: "The weird, the wonderful, and the slightly macabre. Taxidermy under glass domes, 19th-century phrenology heads, obscure medical instruments, and crystal balls.",
    images: [
      { src: unu1, alt: "Taxidermy butterfly", caption: "Victorian Taxidermy" },
      { src: unu2, alt: "Brass scientific instrument", caption: "Early Medical Instruments" },
      { src: unu3, alt: "Crystal ball", caption: "Occult & Mystical Items" },
      { src: unu1, alt: "Glass dome detail", caption: "Original Blown Glass Domes" },
      { src: unu2, alt: "Instrument dials", caption: "Intricate Calibrations" },
    ] as GalleryImage[]
  }
];

export default function WhatWeSell() {
  return (
    <div className="bg-background pt-32 pb-24">
      {/* PAGE HEADER */}
      <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center mb-24">
        <motion.h1 
          className="font-serif text-5xl md:text-6xl text-primary mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          What We Sell
        </motion.h1>
        <motion.div 
          className="h-1 w-24 bg-accent mx-auto mb-8"
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
        <motion.p 
          className="text-lg md:text-xl text-muted-foreground leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Our inventory changes daily. What you see here is merely a representation of the types of treasures we hunt for. We do not sell online directly — these objects must be seen, held, and felt in person. 
          <br /><br />
          <span className="italic text-accent">However, we occasionally list select items on our eBay store and Facebook Marketplace.</span>
        </motion.p>
      </div>

      {/* CATEGORIES LIST */}
      <div className="space-y-32">
        {CATEGORIES.map((category, idx) => (
          <motion.section 
            key={category.id}
            id={category.id}
            className="container mx-auto px-4 md:px-8 max-w-7xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Category Text (Sticky on desktop) */}
              <div className="lg:col-span-4 lg:sticky lg:top-32">
                <h2 className="font-serif text-3xl md:text-4xl text-primary mb-4">
                  {category.title}
                </h2>
                <div className="h-px w-full bg-border mb-6"></div>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  {category.description}
                </p>
                <div className="hidden lg:block">
                  <p className="text-sm text-accent uppercase tracking-widest font-semibold">
                    Click images to enlarge
                  </p>
                </div>
              </div>

              {/* Gallery Grid */}
              <div className="lg:col-span-8">
                <ImageGallery images={category.images} />
              </div>
            </div>
          </motion.section>
        ))}
      </div>

      {/* CALL TO ACTION */}
      <section className="container mx-auto px-4 mt-32 max-w-4xl text-center">
        <div className="bg-secondary p-12 border border-border shadow-xl">
          <h2 className="font-serif text-3xl text-secondary-foreground mb-6">Looking for something specific?</h2>
          <p className="text-secondary-foreground/80 mb-8 max-w-2xl mx-auto">
            We maintain a 'Wish Book' behind the counter. If you're hunting for a particular item—be it a specific model of camera or a Victorian coal scuttle—let us know and we'll keep an eye out for you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://ebay.co.uk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-accent text-primary px-8 py-3 uppercase tracking-widest text-sm font-bold hover:bg-white transition-colors"
            >
              Find us on eBay
            </a>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="border border-accent text-accent px-8 py-3 uppercase tracking-widest text-sm font-bold hover:bg-accent hover:text-primary transition-colors"
            >
              View on Facebook
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
