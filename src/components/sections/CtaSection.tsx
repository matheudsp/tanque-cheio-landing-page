import { RippleButton } from "../animate-ui/buttons/ripple";
import appStore from "@/assets/app-store.svg";
import playStore from "@/assets/play-store.svg";
import { MotionEffect } from "../animate-ui/effects/motion-effect";

export function CtaSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <MotionEffect slide={{direction:"up"}} fade inView>
          <div className="bg-gray-800 text-white rounded-2xl p-12 text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-extrabold">
              Comece a economizar hoje mesmo!
            </h2>
            <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
              Junte-se a milhares de motoristas e descubra a forma mais
              inteligente de abastecer. O download é rápido, fácil e gratuito.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <RippleButton
                variant="outline"
                size="lg"
                className="bg-white text-gray-800 hover:bg-gray-200"
              >
                <img src={appStore} alt="App Store" className="w-6 h-6 mr-2" />
                App Store
              </RippleButton>
              <RippleButton
                variant="outline"
                size="lg"
                className="bg-white text-gray-800 hover:bg-gray-200"
              >
                <img src={playStore} alt="Play Store" className="w-6 h-6 mr-2" />
                Play Store
              </RippleButton>
            </div>
          </div>
        </MotionEffect>
      </div>
    </section>
  );
}