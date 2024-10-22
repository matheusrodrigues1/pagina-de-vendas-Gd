import Image from "next/image";
import React from "react";
import Goldcard from "../assets/goldcard.jpeg";

const HomePage = () => {
  return (
    <div className="flex flex-col w-full h-full bg-zinc-900 items-center justify-center md:flex-row-reverse lg:max-w-screen-xl md:max-w-screen-lg md:h-screen mx-auto md:p-0">
      <Image
        src={Goldcard}
        className="mt-[2.5rem] md:mt-0 md:h-[25rem] md:w-[25rem] lg:h-[35rem] lg:w-[25rem] w-[20rem] h-[27rem] rounded-md"
        alt="img"
      />
      <div className="flex flex-col items-center md:items-start justify-center md:mr-5">
        <span className="font-extrabold text-white text-3xl mt-10 md:text-3xl lg:text-5xl md:mt-0 md:text-left">
          CONHEÇA A GOLD CARD
        </span>
        <div className="p-10 md:p-0 md:mt-10 lg:mt-20">
          <p className="text-center md:text-left text-3xl md:text-xl font-extralight text-white lg:text-3xl">
            Tenha na sua casa centenas de conteúdos, filmes e séries{" "}
            <span className="font-bold">ilimitados sem mensalidade.</span>
          </p>
        </div>
        <div className="hidden sm:block md:text-left md:text-xl text-white text-2xl md:mt-7 lg:text-2xl lg:mt-16 lg:gap-9">
          <p>✅ + 2000 conteúdos abertos e fechados.</p>
          <p>✅ + 40.000 conteúdos cinematográficos.</p>
          <p>✅ Fácil Instalação</p>
          <p>✅ Não precisa de antena.</p>
          <p>
            ✅ Recebimento de imediato direto na sua tv box, tv smart, celular
            ou computador
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
