import { RippleButton } from "./animate-ui/buttons/ripple";
import phoneMockupUrl from "@/assets/search-screen.jpg";
import appStore from "@/assets/app-store.svg";
import playStore from "@/assets/play-store.svg";

import { MotionEffect } from "./animate-ui/effects/motion-effect";
import { RotatingText } from "./animate-ui/text/rotating";
import { StarsBackground } from "./animate-ui/backgrounds/stars";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./animate-ui/radix/dialog";

export function Hero() {
  return (
    <section className="relative w-full  pb-20 md:pb-28 overflow-hidden  md:px-12">
      <StarsBackground
        pointerEvents={true}
        className="absolute inset-0 flex items-center justify-center  rounded-b-xl"
      />
      <div className="relative w-full pt-32 pb-32 md:pt-40 md:pb-40">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center ">
            <div className="text-left">
              <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight text-white">
                Nunca mais pague o preço cheio no combustível. O Tanque Cheio
                conta com
              </h1>
              <RotatingText
                className="text-4xl font-semibold text-white mt-4"
                transition={{ duration: 0.5, ease: "backInOut" }}
                text={["+ de 10.000 postos", "+ de 250.000 preços"]}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block absolute top-20 right-0 lg:right-[5%] xl:right-[10%] w-[200px] md:w-[280px] z-20">
        <img
          src={phoneMockupUrl}
          alt="Aplicativo Tanque Cheio em um smartphone"
          className="transform rotate-12 rounded-3xl shadow-2xl"
        />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="bg-white p-8 rounded-lg shadow-xl text-left -mt-24">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
              Encontre o melhor preço, em qualquer lugar.
            </h2>
            <p className="text-base text-gray-600 mb-8 max-w-md">
              Abasteça de forma mais inteligente sabendo qual é o preço mais
              barato e onde estão os melhores postos fiscalizados pela ANP.
            </p>

            <Dialog>
              <DialogTrigger asChild>
                <RippleButton
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3"
                >
                  BAIXE O APLICATIVO
                </RippleButton>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md z-50">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-center">
                    Quase lá!
                  </DialogTitle>
                  <DialogDescription className="text-center">
                    Escolha sua loja de aplicativos para baixar o Tanque Cheio e
                    comece a economizar agora mesmo.
                  </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col space-y-4 mt-4">
                  <a
                    href="#"
                    className="bg-gray-800 text-white hover:bg-gray-700 rounded-lg p-3 flex items-center transition-colors w-full"
                  >
                    <img
                      src={appStore}
                      alt="App Store"
                      className="w-10 h-10 mr-4"
                    />
                    <div>
                      <p className="text-xs text-gray-300">Disponível na</p>
                      <p className="text-lg font-semibold">App Store</p>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="bg-gray-800 text-white hover:bg-gray-700 rounded-lg p-3 flex items-center transition-colors w-full"
                  >
                    <img
                      src={playStore}
                      alt="Google Play"
                      className="w-10 h-10 mr-4"
                    />
                    <div>
                      <p className="text-xs text-gray-300">Disponível no</p>
                      <p className="text-lg font-semibold">Google Play</p>
                    </div>
                  </a>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div className="flex md:hidden justify-center mt-8">
            <MotionEffect fade zoom inView delay={0.5}>
              <img
                src={phoneMockupUrl}
                alt="Aplicativo Tanque Cheio em um smartphone"
                className="transform rotate-12 w-full md:w-[220px] max-w-[200px] rounded-3xl shadow-2xl"
              />
            </MotionEffect>
          </div>
        </div>
      </div>
    </section>
  );
}
