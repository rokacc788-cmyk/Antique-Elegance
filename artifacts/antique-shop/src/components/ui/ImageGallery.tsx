import { useState, useEffect, useRef, type PointerEvent as ReactPointerEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

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
  const [activeIndex, setActiveIndex] = useState(0);
  const pointerStartX = useRef<number | null>(null);
  const suppressClick = useRef(false);

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

  const moveSlide = (direction: number) => {
    setActiveIndex((currentIndex) => (
      (currentIndex + direction + images.length) % images.length
    ));
  };

  const getRelativePosition = (index: number) => {
    let position = index - activeIndex;
    const midpoint = Math.floor(images.length / 2);

    if (position > midpoint) position -= images.length;
    if (position < -midpoint) position += images.length;

    return position;
  };

  const getSlidePosition = (position: number) => {
    if (position === 0) return '50%';

    const offset = Math.abs(position) === 1
      ? 'clamp(9.5rem, 23vw, 20rem)'
      : 'clamp(19rem, 46vw, 40rem)';

    return `calc(50% ${position > 0 ? '+' : '-'} ${offset})`;
  };

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    pointerStartX.current = event.clientX;
    suppressClick.current = false;
  };

  const handlePointerUp = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (pointerStartX.current === null) return;

    const distance = event.clientX - pointerStartX.current;
    pointerStartX.current = null;

    if (Math.abs(distance) < 45) return;

    suppressClick.current = true;
    moveSlide(distance < 0 ? 1 : -1);
    window.setTimeout(() => {
      suppressClick.current = false;
    }, 0);
  };

  if (images.length === 0) return null;

  const activeImage = images[activeIndex];

  return (
    <>
      <div className="relative">
        <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          Swipe or use the arrows to explore
        </p>

        <div
          className="relative h-[360px] touch-pan-y overflow-hidden md:h-[455px]"
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerCancel={() => {
            pointerStartX.current = null;
          }}
          aria-label="Horizontal photo carousel"
        >
          {images.map((img, idx) => {
            const relativePosition = getRelativePosition(idx);
            const distance = Math.abs(relativePosition);
            const isActive = idx === activeIndex;

            return (
          <div
            key={idx}
            className="absolute top-1/2 -translate-y-1/2"
            style={{
              left: getSlidePosition(relativePosition),
              zIndex: images.length - distance,
            }}
          >
            <motion.button
              type="button"
              className={`group relative block h-32 w-52 -translate-x-1/2 overflow-hidden rounded-sm border-2 bg-secondary shadow-lg transition-colors md:h-52 md:w-80 ${
                isActive
                  ? 'cursor-zoom-in border-accent'
                  : 'cursor-pointer border-border/70 hover:border-accent'
              }`}
              animate={{
                scale: isActive ? 1 : distance === 1 ? 0.72 : 0.5,
                opacity: isActive ? 1 : distance === 1 ? 0.7 : 0.35,
              }}
              transition={{ type: 'spring', stiffness: 240, damping: 24 }}
              onClick={() => {
                if (suppressClick.current) return;

                if (isActive) {
                  setSelectedIndex(idx);
                } else {
                  setActiveIndex(idx);
                }
              }}
              aria-label={isActive ? `Open ${img.caption || img.alt}` : `Focus ${img.caption || img.alt}`}
              aria-current={isActive ? 'true' : undefined}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                draggable={false}
              />
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/5 to-transparent ${
                isActive ? 'opacity-100' : 'opacity-75'
              }`} />
              {isActive && (
                <>
                  <div className="pointer-events-none absolute inset-x-3 bottom-5 text-center text-primary-foreground md:bottom-8">
                    <p className="font-serif text-base leading-tight md:text-xl">{img.caption || img.alt}</p>
                  </div>
                  <span className="pointer-events-none absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-primary/55 text-white">
                    <ZoomIn size={15} aria-hidden="true" />
                  </span>
                </>
              )}
            </motion.button>
          </div>
            );
          })}
        </div>

        <div className="mx-auto -mt-6 max-w-md rounded-sm border border-border bg-card px-6 pb-5 pt-10 text-center shadow-md">
          <p className="font-serif text-xl text-card-foreground">{activeImage.caption || activeImage.alt}</p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{activeImage.alt}</p>
          <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            {activeIndex + 1} of {images.length}
          </p>
        </div>

        <div className="mt-5 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => moveSlide(-1)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-primary transition-colors hover:border-accent hover:text-accent"
            aria-label="Previous photo"
          >
            <ChevronLeft size={20} />
          </button>
          <span className="text-sm text-muted-foreground">The collection loops continuously</span>
          <button
            type="button"
            onClick={() => moveSlide(1)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-primary transition-colors hover:border-accent hover:text-accent"
            aria-label="Next photo"
          >
            <ChevronRight size={20} />
          </button>
        </div>
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
