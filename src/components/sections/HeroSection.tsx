import phoneMockupUrl from "@/assets/search-screen.jpg";
import { MotionEffect } from "../animate-ui/effects/motion-effect";
import { StarsBackground } from "../animate-ui/backgrounds/stars";
import { RotatingText } from "../animate-ui/text/rotating";
import { CountingNumber } from "../animate-ui/text/counting-number";
import { Database, Fuel } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gray-900 text-white">
      <StarsBackground className="absolute inset-0" />
      <div className="container mx-auto px-6 py-32 md:py-48 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <MotionEffect slide={{ direction: "left" }} fade inView>
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                A maneira mais inteligente de economizar combustível.
              </h1>
              <RotatingText
                className="text-2xl md:text-3xl font-semibold mt-4 text-cyan-400"
                text={[
                  "Encontre os melhores preços",
                  "Postos confiáveis perto de você",
                  "Atualizações em tempo real",
                ]}
              />
              <p className="mt-6 text-lg text-gray-300 max-w-lg">
                Com o Tanque Cheio, você tem o poder de escolher o melhor preço
                e a melhor qualidade, tudo na palma da sua mão.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-8">
                <div className="flex items-center gap-4">
                  <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-3">
                    <Fuel className="h-8 w-8 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold font-mono">
                      <CountingNumber number={10637} />
                    </p>
                    <p className="text-sm text-gray-400">
                      Postos na nossa rede
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-3">
                    <Database className="h-8 w-8 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold font-mono">
                      <CountingNumber number={291528} />
                    </p>
                    <p className="text-sm text-gray-400">Preços atualizados</p>
                  </div>
                </div>
              </div>
            </div>
          </MotionEffect>
          <MotionEffect slide={{ direction: "right" }} fade inView>
            <div className="hidden md:flex justify-center">
              <img
                src={phoneMockupUrl}
                alt="Aplicativo Tanque Cheio"
                className="rounded-3xl shadow-2xl transform rotate-6 w-80"
              />
            </div>
          </MotionEffect>
        </div>
      </div>
    </section>
  );
}
