import React from "react";

const conteudos = [
    {
      conteudo: 'High Order Functions',
      bloco: 8,
      status: 'Aprendido'
    },
    {
      conteudo: 'Composicao de Componentes',
      bloco: 11,
      status: 'Aprendendo',
    },
    {
      conteudo: 'Composicao de Estados',
      bloco: 12,
      status: 'Aprenderei'
    },
    {
      conteudo: 'Redux',
      bloco: 16,
      status: 'Aprenderei'
    },
  ];

function exibir() {
    return conteudos.map((item) => 
        `O CONTEUDO É: ${item.conteudo} STATUS: ${item.status} BLOCO: ${item.bloco}`
    )
}

class Content extends React.Component{
    render(){
        return(
            exibir()
        )
    }
}

export default Content