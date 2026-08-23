import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ChevronUp, ChevronDown, ZoomIn } from 'lucide-react';

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(Math.min(1, images.length - 1));
  const sliderRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      
      if (e.key === 'Escape') setSelectedIndex(null);
      if (e.key === 'ArrowRight') setSelectedIndex((selectedIndex + 1) % images.length);
      if (e.key === 'ArrowLeft') setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, images.length]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [selectedIndex]);

  const focusSlide = (index: number, behavior: ScrollBehavior = 'smooth') => {
    const nextIndex = Math.max(0, Math.min(index, images.length - 1));
    setActiveIndex(nextIndex);
    slideRefs.current[nextIndex]?.scrollIntoView({ behavior, block: 'center' });
  };

  const updateActiveSlide = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    const sliderCenter = slider.scrollTop + slider.clientHeight / 2;
    let closestIndex = activeIndex;
    let closestDistance = Number.POSITIVE_INFINITY;

    slideRefs.current.forEach((slide, index) => {
      if (!slide) return;
      const slideCenter = slide.offsetTop + slide.offsetHeight / 2;
      const distance = Math.abs(sliderCenter - slideCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    if (closestIndex !== activeIndex) {
      setActiveIndex(closestIndex);
    }
  };

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => focusSlide(Math.min(1, images.length - 1), 'auto'));
    return () => window.cancelAnimationFrame(frame);
  }, [images.length]);

  if (images.length === 0) return null;

  return (
    <>
      <div className="relative">
        <div className="mb-5 flex items-center justify-between gap-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Scroll the collection
          </p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => focusSlide(activeIndex - 1)}
              disabled={activeIndex === 0}
              className="flex h-9 w-9 items-center justify-center border border-border text-primary transition-colors hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-35"
              aria-label="Previous photo"
            >
              <ChevronUp size={18} />
            </button>
            <button
              type="button"
              onClick={() => focusSlide(activeIndex + 1)}
              disabled={activeIndex === images.length - 1}
              className="flex h-9 w-9 items-center justify-center border border-border text-primary transition-colors hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-35"
              aria-label="Next photo"
            >
              <ChevronDown size={18} />
            </button>
          </div>
        </div>

        <div
          ref={sliderRef}
          onScroll={updateActiveSlide}
          className="h-[520px] snap-y snap-mandatory overflow-y-auto overscroll-contain pr-3 [scrollbar-color:var(--accent)_transparent] [scrollbar-width:thin] md:h-[610px]"
          aria-label="Vertical photo collection"
        >
          <div className="flex min-h-full flex-col justify-center gap-4 py-28">
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            ref={(element) => {
              slideRefs.current[idx] = element;
            }}
            layout
            className={`group relative snap-center overflow-hidden rounded-sm border transition-colors duration-300 ${
              idx === activeIndex
                ? 'h-[290px] border-accent shadow-xl md:h-[340px]'
                : 'h-[148px] cursor-pointer border-border/60 opacity-65 hover:border-accent/70 hover:opacity-90 md:h-[170px]'
            }`}
            animate={{ scale: idx === activeIndex ? 1 : 0.94 }}
            transition={{ type: 'spring', stiffness: 260, damping: 26 }}
            onClick={() => {
              if (idx === activeIndex) {
                setSelectedIndex(idx);
              } else {
                focusSlide(idx);
              }
            }}
            onMouseEnter={() => {
              if (idx !== activeIndex) focusSlide(idx);
            }}
          >
            <img 
              src={img.src} 
              alt={img.alt} 
              className={`h-full w-full object-cover transition-transform duration-700 ${
                idx === activeIndex ? 'scale-100 group-hover:scale-105' : 'scale-105'
              }`}
              loading="lazy"
            />
            <div className={`absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/15 to-transparent transition-opacity duration-300 ${
              idx === activeIndex ? 'opacity-100' : 'opacity-80'
            }`}>
              <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
                <p className={`font-serif text-primary-foreground transition-all duration-300 ${
                  idx === activeIndex ? 'text-xl md:text-2xl' : 'text-base'
                }`}>
                  {img.caption || img.alt}
                </p>
                {idx === activeIndex && (
                  <p className="mt-1 text-sm leading-relaxed text-primary-foreground/75">
                    {img.alt}
                  </p>
                )}
              </div>
            </div>
            <div className={`absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-primary/55 text-white transition-opacity ${
              idx === activeIndex ? 'opacity-100' : 'opacity-0'
            }`}>
              <ZoomIn size={17} aria-hidden="true" />
            </div>
          </motion.div>
        ))}
          </div>
        </div>
        <p className="mt-4 text-center text-sm text-muted-foreground">
          The centre image is highlighted. Select it to view it in full.
        </p>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-8"
            onClick={() => setSelectedIndex(null)}
          >
            {/* Close Button */}
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white z-10 transition-colors"
              onClick={() => setSelectedIndex(null)}
              aria-label="Close"
            >
              <X size={32} />
            </button>

            {/* Prev Button */}
            <button 
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-2 z-10 transition-colors hidden md:block"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
              }}
              aria-label="Previous image"
            >
              <ChevronLeft size={48} />
            </button>

            {/* Next Button */}
            <button 
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-2 z-10 transition-colors hidden md:block"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex((selectedIndex + 1) % images.length);
              }}
              aria-label="Next image"
            >
              <ChevronRight size={48} />
            </button>

            {/* Main Image Container */}
            <motion.div 
              className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={images[selectedIndex].src} 
                alt={images[selectedIndex].alt}
                className="max-w-full max-h-[85vh] object-contain rounded-sm shadow-2xl"
              />
              
              {/* Caption */}
              {images[selectedIndex].caption && (
                <div className="mt-4 text-center">
                  <p className="text-white/90 font-serif text-lg tracking-wide">
                    {images[selectedIndex].caption}
                  </p>
                  <p className="text-white/50 text-sm mt-1">
                    {selectedIndex + 1} of {images.length}
                  </p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
