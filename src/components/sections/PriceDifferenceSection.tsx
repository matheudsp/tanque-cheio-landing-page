import { MotionEffect } from "../animate-ui/effects/motion-effect";
import { CountingNumber } from "../animate-ui/text/counting-number";

const fuelData = [
  { name: "Gasolina Comum", max: 8.99, min: 4.99, diff: 4.0 },
  { name: "Gasolina Aditivada", max: 9.29, min: 5.19, diff: 4.1 },
  { name: "Etanol", max: 6.89, min: 3.19, diff: 3.7 },
  { name: "Diesel S10", max: 8.99, min: 5.19, diff: 3.8 },
  { name: "Diesel S500", max: 8.33, min: 5.29, diff: 3.04 },
  { name: "GNV", max: 6.49, min: 3.99, diff: 2.5 },
  { name: "GLP (Gás de Cozinha)", max: 156.0, min: 74.99, diff: 81.01 },
];

export function PriceDifferenceSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        <MotionEffect slide={{ direction: "up" }} fade inView>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Chega de pagar caro. A economia é real.
            </h2>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
              Veja com seus próprios olhos a diferença que o Tanque Cheio faz no seu orçamento. Estes são dados reais, do nosso banco de dados.
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
              <div className="bg-gray-50 rounded-xl shadow-lg p-6 border h-full flex flex-col hover:shadow-2xl hover:border-cyan-500 transition-all duration-300">
                <h3 className="text-xl font-bold mb-4 text-gray-800">{fuel.name}</h3>
                <div className="flex justify-between text-gray-500 text-sm">
                  <span>Preço Máximo</span>
                  <span>Preço Mínimo</span>
                </div>
                <div className="flex justify-between items-end font-semibold text-2xl mb-4">
                  <span className="text-red-500">
                    R${" "}
                    <CountingNumber
                      number={fuel.max}
                      decimalPlaces={2}
                      decimalSeparator=","
                      className="font-mono"
                    />
                  </span>
                  <span className="text-green-600">
                    R${" "}
                    <CountingNumber
                      number={fuel.min}
                      decimalPlaces={2}
                      decimalSeparator=","
                      className="font-mono"
                    />
                  </span>
                </div>
                <div className="mt-auto pt-4 border-t border-dashed">
                  <div className="bg-cyan-100 text-cyan-900 rounded-lg p-4 text-center">
                    <p className="font-semibold">Sua economia pode chegar a</p>
                    <p className="text-3xl font-bold">
                      R${" "}
                      <CountingNumber
                        number={fuel.diff}
                        decimalPlaces={2}
                        decimalSeparator=","
                        className="font-mono"
                      />
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