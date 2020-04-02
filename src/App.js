import React, {Component, Fragment} from 'react';
import Header from './componentes/Header';
import ListaNoticias from './componentes/ListaNoticias';
import Formulario from './componentes/Formulario';

class App extends Component {
  state = {
    noticias: []
  }

  componentDidMount(){
    this.consultarNoticias();

  }
  consultarNoticias = async (categoria = 'general') => {
        const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=c1ab53f3f0d04a6692fbf1378b95e90b` 
    
    const respuesta = await fetch(url);
    const noticas = await respuesta.json();

    this.setState({
      noticias : noticas.articles
    })
  }
  render(){
    return(
      <Fragment>
         <Header 
           titulo = 'Noticias del Mexico'
         />
         <div className="container white contenedor-noticias">
           <Formulario
             consultarNoticias={this.consultarNoticias}
           />
           <ListaNoticias 
             noticias={this.state.noticias}
           />
         </div>
      </Fragment>
    );
  }
}

export default App;
