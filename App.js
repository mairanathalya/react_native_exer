import React, {useState, createContext, Children, useContext} from "react";

//contador para incrementar 
const Contator = () => {
  const [contar , ConfigContador ] = useState(0);


  return (
    <div>
      <p>Contagem: {contar}</p>
      <button 
      onClick={() => ConfigContador(contar + 1)}>
        Incrementar 
      </button>
    </div>
  )
}

//criar, acessar e alterar o tema da aplicação 
const TemaContexto = createContext();

const TemaProvider = ({children}) => {
  const [tema, setTema ] = useState ("light");

  const alterarTema = () => {
    setTema(tema === "light" ? "dark" : "light")
  }

  return <TemaContexto.Provider value={{tema, alterarTema}}>{children}</TemaContexto.Provider>

}

//função callback para manipular o click no botão
const Botao = () => {<button onClick={() => console.log("Adicionar")}>Incrementar</button>}

//controlando campo de entrada e atualizando valor da entrada
const EntradaInput = () =>{
  const [entrada, Setentrada ] = useState ('');
  const atualizarEntrada = (Event) =>{
    setEntrada(Event.target.value);
  }

  return(
    <div>
      <input type="text" value={entrada} onChange={atualizarEntrada} placeholder="Escreva aqui:"></input>
      <p>O texto digitado foi: {entrada}</p>
    </div>
  );
}


//botão para mudar tema da aplicação
const AlterarTema = () =>{
  const [tema, setTema] = useContext(TemaContexto)

  const mudarOutroTema = () => {
    setTema(tema === "light" ? "dark" : "light");

  };

  return (
    <div>
      <button onClick={mudarOutroTema}>Alternar Tema </button>
    </div>
  );
}




