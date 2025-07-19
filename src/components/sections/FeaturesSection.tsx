import { useRef, useState, useEffect } from "react";
import { AnimatePresence, motion, useScroll } from "motion/react";
import { cn } from "@/lib/utils";

// Importe suas imagens como antes
import MapScreen from "@/assets/apple-iphone-15-blue-mockup/map-screen-left.png";
import FilterScreen from "@/assets/apple-iphone-15-blue-mockup/filter-screen-portrait.png";
import MonitorScreen from "@/assets/apple-iphone-15-blue-mockup/monitor-price-left.png";

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
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const idx = Math.min(features.length - 1, Math.floor(latest * features.length));
      setActiveIndex(idx);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  const activeFeature = features[activeIndex];
  const totalHeight = features.length * 130;

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-brand-background-paper">
      <div className="container mx-auto px-6">
        {/* Título e descrição gerais */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-text-primary">
            Tudo que você precisa em um só lugar
          </h2>
          <p className="text-lg text-brand-text-secondary mt-4 max-w-2xl mx-auto">
            O Tanque Cheio foi desenhado para ser seu copiloto na hora de abastecer.
          </p>
        </motion.div>

        {/* Mobile: animação por seção empilhada */}
        <div className="md:hidden space-y-16">
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center text-center"
            >
              <motion.img
                src={feature.imageUrl}
                alt={feature.title}
                className="w-full max-h-[60vh] mb-6"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6 }}
              />
              <h3 className="text-2xl font-bold mb-2 text-brand-text-primary">
                {feature.title}
              </h3>
              <p className="text-base text-brand-text-secondary px-4">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Desktop: efeito sticky Apple style */}
        <div className="hidden md:block">
          <div className="relative" style={{ height: `${totalHeight}vh` }}>
            <div className="sticky top-0 h-screen flex items-center">
              <div className="grid grid-cols-2 gap-16 w-full">
                {/* Imagem */}
                <div className="flex items-center justify-center px-4">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeFeature.title}
                      src={activeFeature.imageUrl}
                      alt={activeFeature.title}
                      className="w-auto max-w-md max-h-[80vh] object-contain"
                      initial={{ opacity: 0, scale: 0.9, x: 50 }}
                      animate={{ opacity: 1, scale: 1, x: 0 }}
                      exit={{ opacity: 0, scale: 0.9, x: -50 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </AnimatePresence>
                </div>
                {/* Texto */}
                <div className="flex flex-col justify-center px-4">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeFeature.title}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -30 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="py-48"
                    >
                      <h3 className="text-3xl font-bold mb-4 text-brand-text-primary">
                        {activeFeature.title}
                      </h3>
                      <p className="text-lg text-brand-text-secondary">
                        {activeFeature.description}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
