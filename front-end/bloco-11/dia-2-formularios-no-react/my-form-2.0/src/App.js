import React from "react";
import "./App.css";
import Nome from "./Components/Nome";
import Cidade from "./Components/Cidade";
import Cpf from "./Components/Cpf";
import Email from "./Components/Email";
import Endereco from "./Components/Endereco";
import Estado from "./Components/Estado";


class App extends React.Component {
  state = {
    cidade: "",
    cpf: '',
    email: "",
    endereco: "",
    estado: "",
    nome: "",
    tipo: "",
  };

  dadosImput = (event) => {
    const {target: { name, value } } = event;
    this.setState({ [name]: value });
  };

  render() {
    const { nome, cidade, cpf, email, endereco, estado } = this.state
    return (
      <fieldset>
        <form>
          <Nome funcao={this.dadosImput} value={nome}/>
          <Cidade funcao={this.dadosImput} value={cidade} />
          <Cpf funcao={this.dadosImput} value={cpf} />
          <Email funcao={this.dadosImput} value={email} />
          <Endereco funcao={this.dadosImput} value={endereco} />
          <Estado funcao={this.dadosImput} value={estado} />
        </form>
      </fieldset>
    );
  }
}

export default App;
