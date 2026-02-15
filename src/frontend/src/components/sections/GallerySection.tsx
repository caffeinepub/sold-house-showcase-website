import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Dialog, DialogContent, DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import type { ListingData } from '@/data/listing';

interface GallerySectionProps {
  gallery: ListingData['gallery'];
}

export function GallerySection({ gallery }: GallerySectionProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const goToPrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + gallery.length) % gallery.length);
    }
  };

  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % gallery.length);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (selectedIndex === null) return;
    
    if (e.key === 'ArrowLeft') {
      goToPrevious();
    } else if (e.key === 'ArrowRight') {
      goToNext();
    }
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <h2 className="mb-12 text-3xl font-bold tracking-tight sm:text-4xl">
          Photo Gallery
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((image, index) => (
            <button
              key={index}
              onClick={() => openLightbox(index)}
              className="group relative aspect-[3/2] overflow-hidden rounded-lg bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              aria-label={`View ${image.alt}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-background/0 transition-colors group-hover:bg-background/10" />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={selectedIndex !== null} onOpenChange={(open) => !open && closeLightbox()}>
        <DialogContent 
          className="max-w-7xl p-0"
          onKeyDown={handleKeyDown}
        >
          {selectedIndex !== null && (
            <div className="relative">
              <DialogClose asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-4 z-10 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background"
                  aria-label="Close gallery"
                >
                  <X className="h-5 w-5" />
                </Button>
              </DialogClose>

              <div className="relative flex items-center justify-center bg-background p-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={goToPrevious}
                  className="absolute left-4 z-10 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>

                <img
                  src={gallery[selectedIndex].src}
                  alt={gallery[selectedIndex].alt}
                  className="max-h-[85vh] w-auto rounded-lg object-contain"
                />

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={goToNext}
                  className="absolute right-4 z-10 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </div>

              <div className="bg-background px-6 py-4">
                <p className="text-center text-sm text-muted-foreground">
                  {selectedIndex + 1} / {gallery.length}
                </p>
                <p className="mt-2 text-center text-sm text-foreground">
                  {gallery[selectedIndex].alt}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
