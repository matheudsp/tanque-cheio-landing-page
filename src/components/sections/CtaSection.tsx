import { RippleButton } from "../animate-ui/buttons/ripple";
import appStore from "@/assets/app-store.svg";
import playStore from "@/assets/play-store.svg";
import { MotionEffect } from "../animate-ui/effects/motion-effect";
import { HoleBackground } from "../animate-ui/backgrounds/hole";

export function CtaSection() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <HoleBackground
        className="absolute inset-0 flex items-center justify-center "
        particleRGBColor={[249, 115, 22]}

        strokeColor="#E5E7EB"
      />

      <div className="container mx-auto px-6 relative z-10">
        <MotionEffect slide={{ direction: "up" }} fade inView>
          <div className="bg-brand-background-paper/60 backdrop-blur-lg border border-brand-border/50 text-brand-text-primary rounded-2xl p-12 text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-extrabold">
              Comece a economizar hoje mesmo!
            </h2>
            <p className="text-lg text-brand-text-secondary mt-4 max-w-2xl mx-auto">
              Junte-se a milhares de motoristas e descubra a forma mais
              inteligente de abastecer. O download é rápido, fácil e gratuito.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <RippleButton
                size="lg"
                className="bg-brand-secondary-main/80 text-brand-secondary-text hover:bg-brand-secondary-dark w-full sm:w-auto"
              >
                <img src={appStore} alt="App Store" className="w-6 h-6 mr-2" />
                App Store
              </RippleButton>
              <RippleButton
                size="lg"
                className="bg-brand-secondary-main/80 text-brand-secondary-text hover:bg-brand-secondary-dark w-full sm:w-auto"
              >
                <img
                  src={playStore}
                  alt="Play Store"
                  className="w-6 h-6 mr-2"
                />
                Play Store
              </RippleButton>
            </div>
          </div>
        </MotionEffect>
      </div>
    </section>
  );
}
