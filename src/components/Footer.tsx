import { Instagram } from "lucide-react";
import appStore from "@/assets/app-store.svg";
import playStore from "@/assets/play-store.svg";
import logo from "@/assets/icon.png";
import tiktok from "@/assets/tiktok.svg";
import { MotionEffect } from "./animate-ui/effects/motion-effect";

export function Footer() {
  return (
    <footer className="relative bg-brand-background-paper/80 backdrop-blur-md text-brand-text-primary mx-auto py-12">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3 bg-gradient-to-r from-transparent via-brand-border to-transparent" />

      <MotionEffect slide={{ direction: "up" }} fade inView>
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-3 lg:col-span-1">
              <div className="flex items-center mb-4">
                <img
                  src={logo}
                  alt="Logo Tanque Cheio"
                  className="h-10 w-10 rounded-full mr-3"
                />
                <span className="text-xl font-bold text-brand-text-primary">
                  Tanque Cheio
                </span>
              </div>
              <p className="text-brand-text-secondary">
                A maneira mais inteligente de economizar combustível.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4 text-brand-text-primary">
                Baixe o App
              </h3>
              <div className="flex flex-col space-y-4">
                <a
                  href="#"
                  className="bg-white/50 hover:bg-white/80 border border-brand-border rounded-lg p-3 flex items-center transition-colors shadow-sm"
                >
                  <img
                    src={appStore}
                    alt="App Store"
                    className="w-8 h-8 mr-3"
                  />
                  <div>
                    <p className="text-xs text-brand-text-secondary">
                      Disponível na
                    </p>
                    <p className="text-lg font-semibold text-brand-text-primary">
                      App Store
                    </p>
                  </div>
                </a>
                <a
                  href="#"
                  className="bg-white/50 hover:bg-white/80 border border-brand-border rounded-lg p-3 flex items-center transition-colors shadow-sm"
                >
                  <img
                    src={playStore}
                    alt="Google Play"
                    className="w-8 h-8 mr-3"
                  />
                  <div>
                    <p className="text-xs text-brand-text-secondary">
                      Disponível na
                    </p>
                    <p className="text-lg font-semibold text-brand-text-primary">
                      Google Play
                    </p>
                  </div>
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4 text-brand-text-primary">
                Acompanhe nas redes
              </h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-brand-text-secondary hover:text-brand-text-primary transition-colors"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="#"
                  className="text-brand-text-secondary hover:text-brand-text-primary transition-colors"
                >
                  <img className="w-6" src={tiktok} alt="Tiktok" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-brand-border flex flex-col md:flex-row justify-between items-center">
            <p className="text-brand-text-secondary text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Tanque Cheio. Todos os direitos
              reservados.
            </p>
            <div className="flex space-x-6 text-sm text-brand-text-secondary">
              <a
                href="#"
                className="hover:text-brand-text-primary transition-colors"
              >
                Termos de Serviço
              </a>
              <a
                href="#"
                className="hover:text-brand-text-primary transition-colors"
              >
                Política de Privacidade
              </a>
            </div>
          </div>
        </div>
      </MotionEffect>
    </footer>
  );
}
