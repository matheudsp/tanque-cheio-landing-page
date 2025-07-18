import { MotionEffect } from "../animate-ui/effects/motion-effect";
import { CountingNumber } from "../animate-ui/text/counting-number";

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fuelData.map((fuel, index) => (
            <MotionEffect
              key={fuel.name}
              slide={{ direction: "up" }}
              fade
              inView
              delay={index * 0.1}
            >
              <div className="bg-brand-background-paper rounded-xl shadow-lg p-6 border border-brand-border h-full flex flex-col hover:shadow-2xl hover:border-brand-primary-main/20 transition-all duration-300">
                <h3 className="text-xl font-bold mb-4 text-brand-text-primary">
                  {fuel.name}
                </h3>
                <div className="flex justify-between text-brand-text-secondary text-sm">
                  <span>Preço Máximo</span>
                  <span>Preço Mínimo</span>
                </div>
                <div className="flex justify-between items-end font-semibold text-2xl mb-4">
                  <span className="text-brand-error">
                    R${" "}
                    <CountingNumber
                      number={fuel.max}
                      decimalPlaces={2}
                      decimalSeparator=","
                      className="font-mono"
                    />
                  </span>
                  <span className="text-brand-success">
                    R${" "}
                    <CountingNumber
                      number={fuel.min}
                      decimalPlaces={2}
                      decimalSeparator=","
                      className="font-mono"
                    />
                  </span>
                </div>
                <div className="mt-auto pt-4 border-t border-brand-divider border-dashed">
                  <div className="bg-brand-info/10 text-brand-info rounded-lg p-4 text-center">
                    <p className="font-semibold">Sua economia pode chegar a</p>
                    <p className="text-3xl font-bold">
                      R${" "}
                      <CountingNumber
                        number={fuel.diff}
                        decimalPlaces={2}
                        decimalSeparator=","
                        className="font-mono"
                      />
                      <span className="font-medium text-xl">
                        {fuel.measureUnit}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </MotionEffect>
          ))}
        </div>
      </div>
    </section>
  );
}
