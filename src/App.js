import React, {Component} from "react";
import charizard from './images/charizard.png';
import './App.scss';


class App extends Component {

  state = {
    x: 0,
    y:0
  }

  componentDidMount() {
    const container = document.querySelector(".container");
    const card = document.querySelector(".card");
    //Items
    const sneaker = document.querySelector(".sneaker img");
    const title = document.querySelector(".title");
    const description = document.querySelector(".info h3");
    const data = document.querySelector(".description");

    container.addEventListener('mousemove', (e) => {
      this.setState({
        x: e.pageX, 
        y: e.pageY
      });
    });

    //Animate In
    container.addEventListener('mouseenter', e => {
      card.style.transition = 'none';

      //Popout
      sneaker.style.transform = `translateZ(200px) rotateZ(-45deg)`;
      title.style.transform = `translateZ(150px)`;
      description.style.transform = `translateZ(125px)`;
      data.style.transform = `translateZ(125px)`;
    })

    //Animate Out
    container.addEventListener('mouseleave', e => {
      card.style.transition = `all .5s ease`;
      card.style.transform = `rotateY(0deg) rotateX(0deg)`;

      // Popback
      sneaker.style.transform = `translateZ(0) rotateZ(0deg)`;
      title.style.transform = `translateZ(0)`;
      description.style.transform = `translateZ(0)`;
      data.style.transform = `translateZ(0)`;
    });
  }

  render() {

    let xAxis = (window.innerWidth / 2 - this.state.x) / 25;
    let yAxis = (window.innerWidth / 2 - this.state.y) / 25;

    let styles = {
      transform: `rotateY(${yAxis}deg) rotateX(${xAxis}deg)`,
    }

    return (
      <div className="App">
        <div className="container">
          <div className="card" style={styles}>
          <div className="sneaker">
            <div className="circle"></div>
            <img src={charizard} alt="Charizard"/>
          </div>
          <div className="info">
            <h1 className="title">Charizard</h1>
            <h3>
              Ele cospe fogo que é quente o suficiente 
              para derreter pedras. Pode causar incêndios 
              florestais ao soprar chamas.
            </h3>

            <div className="container-description">
              <div className="description">
                <div className="data">
                  <p>Altura</p>
                  <span>1,70 m</span>
                </div>

                <div className="data">
                  <p>Categoria</p>
                  <span>Fogo</span>
                </div>

                <div className="data">
                  <p>Peso</p>
                  <span>90,5 kg</span>
                </div>

                <div className="data">
                  <p>Habilidades</p>
                  <span>Fogo</span>
                </div>

                <div className="data">
                  <p>Gênero</p>
                  <span>Masc. / Fem</span>
                </div>

              </div>
            </div>
            
          </div>
        </div>
       </div>
      </div>
    );
  }
  
}

export default App;
