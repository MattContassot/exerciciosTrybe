import React from "react";

class Button extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this)
    this.changeColor = this.changeColor.bind(this)
    this.state = {
      x1: 0,
      x2: 0,
      x3: 0,
    }
  }

  handleClick(event) {
    this.setState((estadoAnterior) => ({
      [`x${event.target.id}`]: estadoAnterior[`x${event.target.id}`] + 1,
    }));
    // if (this.state[`x${event.target.id}`] % 2 === 0 && this.state[`x${event.target.id}`] !== 0) console.log('É par');
    // console.log(this.state);
  }

  changeColor(event){
    console.log(event); // Não consegui usar o event.target pra identificar quem chamou e trabalhar com o dado
    return 'green';
  }

  render() {
    return (
      <div>
        <button id="1" onClick={ this.handleClick } style={{ backgroundColor: this.changeColor() }}>{ this.state.x1 }</button>
        <button id="2" onClick={ this.handleClick }>{ this.state.x2 }</button>
        <button id="3" onClick={ this.handleClick }>{ this.state.x3 }</button>
      </div>
    );
  }
}

export default Button;