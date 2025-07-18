import { CheckCircle } from "lucide-react";
import { MotionEffect } from "../animate-ui/effects/motion-effect";

const benefits = [
  "Economize até R$4 por litro. (Sim, existe essa diferença de preço entre postos)",
  "Encontre postos com selo de qualidade ANP.",
  "Disponível para Android e iOS (em breve).",
  "Atualização regular de preços .",
];

export function BenefitsSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        <MotionEffect slide={{ direction: "up" }} fade inView>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold">
              Por que escolher o Tanque Cheio?
            </h2>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
              Veja por que confiar em nós pode te ajudar a economizar todos os
              dias.
            </p>
          </div>
        </MotionEffect>
        <div className="max-w-3xl mx-auto">
          <ul className="space-y-4">
            {benefits.map((benefit, index) => (
              <MotionEffect
                key={index}
                slide={{ direction: "up" }}
                fade
                inView
                delay={index * 0.1}
              >
                <li className="flex items-start p-4 bg-gray-50 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-cyan-500 mr-4 mt-1 shrink-0" />
                  <span className="text-lg">{benefit}</span>
                </li>
              </MotionEffect>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
