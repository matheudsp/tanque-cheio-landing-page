import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import MapScreen from "@/assets/map-screen.jpg";
import FilterScreen from "@/assets/filter-screen.jpg";
import MonitorScreen from "@/assets/monitor-price.jpg";

const features = [
  {
    title: "Economia na Palma da Mão",
    description:
      "Navegue pelo mapa e veja os preços dos combustíveis nos postos ao seu redor, apenas os postos regularmente verificados pela ANP - Agência Nacional do Petróleo, Gás Natural e Biocombustíveis. ",
    imageUrl: MapScreen,
  },
  {
    title: "Busca filtrada",
    description:
      "Personalize sua busca. Filtre por tipo de combustível, ordene por distância e raio de busca.",
    imageUrl: FilterScreen,
  },
  {
    title: "Acompanhe novos preços",
    description:
      "Acompanhe atualizações de preços. Receba notificações sobre mudanças de preços dos seus postos favoritos.",
    imageUrl: MonitorScreen,
  },
];

export function SectionAnimatedFeatures() {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section className="py-20 md:py-28  overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
            Tudo que você precisa em um só lugar
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            O Tanque Cheio foi desenhado para ser seu copiloto na hora de
            abastecer, oferecendo funcionalidades poderosas de forma simples.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-4">
            {features.map((feature, index) => (
              <button
                key={index}
                onClick={() => setActiveFeature(index)}
                className={`text-left p-6 rounded-lg transition-all duration-300 ease-in-out transform ${
                  activeFeature === index
                    ? "bg-white shadow-2xl scale-105"
                    : "bg-transparent hover:bg-white hover:shadow-lg"
                }`}
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </button>
            ))}
          </div>

          <div className="relative h-[600px] flex items-center justify-center">
            <AnimatePresence mode="sync">
              <motion.div
                key={activeFeature}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -50, scale: 0.9 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute"
              >
                <img
                  src={features[activeFeature].imageUrl}
                  alt={features[activeFeature].title}
                  className="rounded-[2.5rem] w-[45%] mx-auto md:w-[55%] lg:w-[65%] xl:w-[42%] shadow-2xl border-8 border-gray-800"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
