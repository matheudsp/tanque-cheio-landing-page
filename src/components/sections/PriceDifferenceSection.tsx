import { MotionEffect } from "../animate-ui/effects/motion-effect";
import { PriceCarousel } from "../PriceCarousel"; // 1. Importe o novo carrossel

const fuelData = [
  {
    name: "Gasolina Comum",
    max: 8.99,
    min: 4.99,
    diff: 4.0,
    measureUnit: " / litro",
  },
  {
    name: "Gasolina Aditivada",
    max: 9.29,
    min: 5.19,
    diff: 4.1,
    measureUnit: " / litro",
  },
  { name: "Etanol", max: 6.89, min: 3.19, diff: 3.7, measureUnit: " / litro" },
  {
    name: "Diesel S10",
    max: 8.99,
    min: 5.19,
    diff: 3.8,
    measureUnit: " / litro",
  },
  {
    name: "Diesel S500",
    max: 8.33,
    min: 5.29,
    diff: 3.04,
    measureUnit: " / litro",
  },
  { name: "GNV", max: 6.49, min: 3.99, diff: 2.5, measureUnit: " / m³" },
  {
    name: "GLP (Gás de Cozinha)",
    max: 156.0,
    min: 74.99,
    diff: 81.01,
    measureUnit: " / 13 kg",
  },
];

export function PriceDifferenceSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        <MotionEffect slide={{ direction: "up" }} fade inView>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-text-primary">
              Chega de pagar caro. A economia é real.
            </h2>
            <p className="text-lg text-brand-text-secondary mt-4 max-w-2xl mx-auto">
              Veja com seus próprios olhos a diferença que o Tanque Cheio faz no
              seu orçamento. Estes são dados reais, do nosso banco de dados.
            </p>
          </div>
        </MotionEffect>

        <PriceCarousel slides={fuelData} />
      </div>
    </section>
  );
}
