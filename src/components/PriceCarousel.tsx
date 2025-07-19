import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Droplets, Zap } from "lucide-react";
import { CountingNumber } from "./animate-ui/text/counting-number";

import "@/styles/carousel.css"; // Mantenha a importação dos estilos

type FuelData = {
  name: string;
  max: number;
  min: number;
  diff: number;
  measureUnit: string;
};

type PropType = {
  slides: FuelData[];
};

export const PriceCarousel: React.FC<PropType> = (props) => {
  const { slides } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container pb-4">
          {slides.map((fuel) => (
            <div className="embla__slide" key={fuel.name}>
              <div className="group relative rounded-2xl shadow-lg border border-brand-border/20 h-full flex flex-col transition-all duration-300 overflow-hidden hover:border-brand-secondary-main/50">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-secondary-main/20 via-transparent to-brand-primary-main/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="p-6 z-10 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-brand-text-primary">
                      {fuel.name}
                    </h3>
                    <Droplets className="h-5 w-5 text-brand-primary-main" />
                  </div>

                  <div className="relative flex-grow flex flex-col justify-center my-4">
                    <div className="absolute w-full h-1 bg-brand-border/50 rounded-full" />
                    <div className="relative flex justify-between items-center w-full">
                      <div className="text-center">
                        <div className="bg-brand-success text-white rounded-full h-8 w-8 flex items-center justify-center border-4 border-white shadow-md">
                          <p className="font-bold text-xs">MIN</p>
                        </div>
                        <p className="mt-2 text-brand-success font-semibold font-mono text-lg">
                          R$
                          <CountingNumber
                            number={fuel.min}
                            decimalPlaces={2}
                            decimalSeparator=","
                          />
                        </p>
                      </div>

                      <div className="text-center">
                        <div className="bg-brand-error text-white rounded-full h-8 w-8 flex items-center justify-center border-4 border-white shadow-md">
                          <p className="font-bold text-xs">MAX</p>
                        </div>
                        <p className="mt-2 text-brand-error font-semibold font-mono text-lg">
                          R$
                          <CountingNumber
                            number={fuel.max}
                            decimalPlaces={2}
                            decimalSeparator=","
                          />
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-brand-secondary-main text-white rounded-xl p-4 mt-auto text-center flex items-center justify-center gap-4">
                    <Zap className="h-8 w-8 shrink-0" />
                    <div className="text-left">
                      <p className="font-semibold text-sm opacity-90">
                        Sua economia chega a
                      </p>
                      <p className="text-3xl font-extrabold font-mono">
                        R$
                        <CountingNumber
                          number={fuel.diff}
                          decimalPlaces={2}
                          decimalSeparator=","
                        />
                        <span className="text-lg font-medium align-baseline">
                          {fuel.measureUnit}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full px-[-20px]">
        <button
          onClick={scrollPrev}
          className="bg-white/80 backdrop-blur-sm shadow-md rounded-full p-2 hover:bg-brand-primary-main hover:text-white transition-all duration-300 -ml-4 z-20"
          aria-label="Slide anterior"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={scrollNext}
          className="bg-white/80 backdrop-blur-sm shadow-md rounded-full p-2 hover:bg-brand-primary-main hover:text-white transition-all duration-300 -mr-4 z-20"
          aria-label="Próximo slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};
