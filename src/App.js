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
    const title = document.querySelector(".title");
    const sneaker = document.querySelector(".sneaker img");
    const purchase = document.querySelector(".purchase button");
    const description = document.querySelector(".info h3");
    const sizes = document.querySelector(".sizes");

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
      title.style.transform = `translateZ(150px)`;
      sneaker.style.transform = `translateZ(200px) rotateZ(-45deg)`;
      purchase.style.transform = `translateZ(150px)`;
      description.style.transform = `translateZ(125px)`;
      sizes.style.transform = `translateZ(100px)`;
      purchase.style.transform = `translateZ(75px)`;
    })

    //Animate Out
    container.addEventListener('mouseleave', e => {
      card.style.transition = `all .5s ease`;
      card.style.transform = `rotateY(0deg) rotateX(0deg)`;

      // Popback
      title.style.transform = `translateZ(0)`;
      sneaker.style.transform = `translateZ(0) rotateZ(0deg)`;
      purchase.style.transform = `translateZ(0)`;
      description.style.transform = `translateZ(0)`;
      sizes.style.transform = `translateZ(0)`;
      purchase.style.transform = `translateZ(0)`;
    });
  }

  render() {

    let xAxis = (window.innerWidth / 2 - this.state.x) / 25;
    let yAxis = (window.innerWidth / 2 - this.state.y) / 25;

    let styles = {
      transform: `rotateY(${yAxis}deg) rotateX(${xAxis}deg)`,
    }

    // console.log(`Eixo X: ${xAxis} \n Eixo Y: ${yAxis}`);

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
            <h3>Eagle eagle eagle eagle</h3>
            <div className="sizes">
              <button>39</button>
              <button>40</button>
              <button className="active">42</button>
              <button>44</button>
            </div>
            <div className="purchase">
              <button>Purchase</button>
            </div>
          </div>
        </div>
       </div>
      </div>
    );
  }
  
}

export default App;
