import logo from "../assets/icon.png";
import { LiquidButton } from "./animate-ui/buttons/liquid";
import appStore from "@/assets/app-store.svg";
import playStore from "@/assets/play-store.svg";
import { SplittingText } from "./animate-ui/text/splitting";

export function Header() {
  return (
    
    <header className="bg-brand-background-default/50 backdrop-blur-sm fixed top-6 left-6 right-6 rounded-xl z-50 border border-brand-border">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 mx-auto md:mx-0">
            <img
              src={logo}
              alt="Logo Tanque Cheio"
              className="h-10 w-10 rounded-full"
            />
            <SplittingText
              className="text-xl font-bold text-brand-text-primary hidden md:flex"
              text="Tanque Cheio"
              type="chars"
              inView
            />
          </div>
          <div className="hidden md:flex flex-col sm:flex-row items-center justify-center gap-4">
        
            <LiquidButton className="bg-brand-secondary-main/20 text-brand-text-primary hover:bg-brand-secondary-main hover:text-brand-secondary-text">
              <img
                src={appStore}
                alt="Ícone do App Tanque Cheio"
                className="w-6 h-auto"
              />
              <p className="text-lg font-semibold leading-tight">App Store</p>
            </LiquidButton>
            <LiquidButton className="bg-brand-secondary-main/20 text-brand-text-primary hover:bg-brand-secondary-main hover:text-brand-secondary-text">
              <img
                src={playStore}
                alt="Ícone do App Tanque Cheio"
                className="w-6 h-auto"
              />
              <p className="text-lg font-semibold leading-tight">Play Store</p>
            </LiquidButton>
          </div>
        </div>
      </div>
    </header>
  );
}