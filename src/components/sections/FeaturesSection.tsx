import { motion } from "motion/react";
import MapScreen from "@/assets/map-screen.jpg";
import FilterScreen from "@/assets/filter-screen.jpg";
import MonitorScreen from "@/assets/monitor-price.jpg";
import { MotionEffect } from "../animate-ui/effects/motion-effect";

const features = [
  {
    title: "Economia na Palma da Mão",
    description:
      "Navegue pelo mapa e veja os preços dos combustíveis nos postos ao seu redor, apenas os postos regularmente verificados pela ANP.",
    imageUrl: MapScreen,
  },
  {
    title: "Busca Personalizada",
    description:
      "Personalize sua busca. Filtre por tipo de combustível, ordene por distância e raio de busca para encontrar exatamente o que você precisa.",
    imageUrl: FilterScreen,
  },
  {
    title: "Acompanhe Seus Postos Favoritos",
    description:
      "Acompanhe atualizações de preços. Receba notificações sobre mudanças de preços dos seus postos favoritos e nunca perca uma boa oferta.",
    imageUrl: MonitorScreen,
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <MotionEffect slide={{ direction: "up" }} fade inView>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold">
              Tudo que você precisa em um só lugar
            </h2>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
              O Tanque Cheio foi desenhado para ser seu copiloto na hora de
              abastecer.
            </p>
          </div>
        </MotionEffect>

        <div className="space-y-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? "md:grid-flow-col-dense" : ""
              }`}
            >
              <MotionEffect
                slide={{ direction: index % 2 === 0 ? "left" : "right" }}
                fade
                inView
                className={`relative h-[500px] flex items-center justify-center ${
                  index % 2 === 1 ? "md:col-start-2" : ""
                }`}
              >
                <img
                  src={feature.imageUrl}
                  alt={feature.title}
                  className="rounded-[2.5rem] w-[45%] mx-auto md:w-[55%] lg:w-[65%] xl:w-[42%] shadow-2xl border-8 border-gray-800"
                />
              </MotionEffect>

              <MotionEffect
                slide={{ direction: index % 2 === 0 ? "right" : "left" }}
                fade
                inView
                className={`${index % 2 === 1 ? "md:col-start-1" : ""}`}
              >
                <div className="text-left">
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </MotionEffect>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
