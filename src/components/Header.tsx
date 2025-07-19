import { RippleButton } from "./animate-ui/buttons/ripple";
import logo from "../assets/icon.png";
import appStore from "@/assets/app-store.svg";
import playStore from "@/assets/play-store.svg";
import { SplittingText } from "./animate-ui/text/splitting";

export function Header() {
  return (
    
    <header className="bg-brand-background-default/50 backdrop-blur-sm fixed top-6 left-6 right-6 rounded-xl z-50 border border-brand-border shadow-md">
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
            <RippleButton
              size="default"
              className="bg-brand-secondary-main/80 text-brand-secondary-text hover:bg-brand-secondary-dark"
            >
              <img src={appStore} alt="App Store" className="w-5 h-5 mr-2" />
              App Store
            </RippleButton>
            <RippleButton
              size="default" 
              className="bg-brand-secondary-main/80 text-brand-secondary-text hover:bg-brand-secondary-dark"
            >
              <img
                src={playStore}
                alt="Play Store"
                className="w-5 h-5 mr-2"
              />
              Play Store
            </RippleButton>
          </div>
        </div>
      </div>
    </header>
  );
}