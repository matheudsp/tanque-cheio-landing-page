import { Instagram } from "lucide-react";
import appStore from "@/assets/app-store.svg";
import playStore from "@/assets/play-store.svg";
import logo from "@/assets/icon.png";
import tiktok from "@/assets/tiktok.svg";
export function Footer() {
  return (
    <footer className="bg-gray-900 text-white mx-auto">
      <div className="container mx-auto p-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-3 lg:col-span-1">
            <div className="flex items-center mb-4">
              <img
                src={logo}
                alt="Logo Tanque Cheio"
                className="h-10 w-10 rounded-full mr-3"
              />
              <span className="text-xl font-bold">Tanque Cheio</span>
            </div>
            <p className="text-gray-400">
              A maneira mais inteligente de economizar combustível.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Baixe o App</h3>
            <div className="flex flex-col space-y-4">
              <a
                href="#"
                className="bg-gray-800 hover:bg-gray-700 rounded-lg p-3 flex items-center transition-colors"
              >
                <img src={appStore} alt="App Store" className="w-8 h-8 mr-3" />
                <div>
                  <p className="text-xs text-gray-300">Disponível na</p>
                  <p className="text-lg font-semibold">App Store</p>
                </div>
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-gray-700 rounded-lg p-3 flex items-center transition-colors"
              >
                <img
                  src={playStore}
                  alt="Google Play"
                  className="w-8 h-8 mr-3"
                />
                <div>
                  <p className="text-xs text-gray-300">Disponível na</p>
                  <p className="text-lg font-semibold">Google Play</p>
                </div>
              </a>
            </div>
          </div>

          {/* Coluna de Links */}
          {/* <div>
            <h3 className="font-semibold text-lg mb-4">Sobre</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Nossa história
                </a>
              </li>
           <li>
                <a href="#" className="hover:text-white">
                  Carreiras
                </a>
              </li> 
              <li>
                <a href="#" className="hover:text-white">
                  Imprensa
                </a>
              </li> 
            </ul>
          </div> */}

          {/* Coluna de Redes Sociais */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Acompanhe nas redes</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              ></a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <img className="w-6 fil-gray-400" src={tiktok} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Tanque Cheio. Todos os direitos
            reservados.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">
              Termos de Serviço
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Política de Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
