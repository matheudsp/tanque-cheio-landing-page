import logo from "../assets/icon.png";
import { LiquidButton } from "./animate-ui/buttons/liquid";
import appStore from "@/assets/app-store.svg";
import playStore from "@/assets/play-store.svg";
export function Header() {
  return (
    <header className="bg-white/45 backdrop-blur-md fixed top-6 left-6 right-6 rounded-xl z-50 border border-border">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 mx-auto md:mx-0">
            <img
              src={logo}
              alt="Logo Tanque Cheio"
              className="h-10 w-10 rounded-full"
            />
            <span className="text-xl font-bold text-text-primary hidden md:flex">
              Tanque Cheio
            </span>
          </div>
          <div className="hidden md:flex flex-col sm:flex-row items-center justify-center gap-4">
            <LiquidButton>
              <img
                src={appStore}
                alt="Ícone do App Tanque Cheio"
                className="w-6 h-auto animate-pulse"
              />

              <p className="text-lg font-semibold leading-tight">App Store</p>
            </LiquidButton>
            <LiquidButton>
              <img
                src={playStore}
                alt="Ícone do App Tanque Cheio"
                className="w-6 h-auto animate-pulse"
              />

              <p className="text-lg font-semibold leading-tight">Play Store</p>
            </LiquidButton>
          </div>
        </div>
      </div>
    </header>
  );
}
