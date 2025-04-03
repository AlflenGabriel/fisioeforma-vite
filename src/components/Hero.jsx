import React from "react";

function Hero() {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col justify-center items-center text-center bg-blue-500 text-white p-10"
    >
      <h1 className="text-5xl font-bold">Bem-vindo ao Meu Site</h1>
      <p className="text-xl mt-4">
        Aqui você encontra tudo o que precisa saber sobre nós.
      </p>
      <a
        href="#about"
        className="mt-6 bg-white text-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200"
      >
        Saiba Mais
      </a>
    </section>
  );
}

export default Hero;
