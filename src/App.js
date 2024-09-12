import React from "react";

function App() {
  return (
    <div className="bg-violet-950 flex flex-col justify-between min-h-screen">
      <header className="flex items-center text-center justify-end px-3 py-1 ">
      <div className="bg-white p-1 font-bold flex text-center rounded-3xl border-2 border-black w-14 h-10">
      <a href="" alt="">PT</a> <img src="https://assets-cdn.kahoot.it/controller/v2/assets/language-picker-black-ByQqAUxR.svg"/>
      </div>
      </header>
      <main className="flex flex-col text-center items-center">
      <div className="font-black">
      <img className="w-48" src="https://kahoot.com/wp-content/themes/kahoot2017/assets/img/kahoot-white.svg" alt=""/>
      </div>
      <div className="bg-white rounded-md flex flex-col mt-10 items-center border-2 border-black w-80 h-32 p-2 gap-3">
      <div className="rounded-md border-2 text-gray-400 font-semibold text-lg py-2 border-gray-400 w-72 h-14">
        PIN do jogo
      </div>
      <div className="rounded-md border-2 text-white font-semibold text-lg py-2 border-black bg-black w-72 h-14">
      <a href="" alt="">Inserir</a>
      </div>
      </div>
      </main>
      <footer className="bg-violet-950 flex flex-col mt-4 items-center py-2">
        <h4 className="text-white">Cire seu próprio kahoot GRATUITAMENTE em kahoot.com</h4>
        <div className="text-white font-thin flex flex-row gap-1">
        <a href="" alt="">Termos</a>
        <p>|</p>
        <a href="" alt="">Privacidade</a>
        <p>|</p>
        <a href="" alt="">Aviso sobre cookies</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
