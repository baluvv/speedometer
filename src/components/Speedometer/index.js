import './index.css'

import {Component} from 'react'

class Speedometer extends Component {
  state = {speed: 0}

  onIncrement = () => {
    this.setState(prevState => {
      if (prevState.speed === 200) {
        return {speed: 200}
      }
      return {speed: prevState.speed + 10}
    })
  }

  onDecrement = () => {
    this.setState(prevState => {
      if (prevState.speed === 0) {
        return {speed: 0}
      }
      return {speed: prevState.speed - 10}
    })
  }

  render() {
    const {speed} = this.state

    return (
      <div className="container">
        <h1 className="title">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="speedometer"
          alt="speedometer"
        />
        <h1 className="heading">Speed is {speed}mph</h1>
        <p className="limits">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="buttons-container">
          <button className="button1" onClick={this.onIncrement}>
            Accelerate
          </button>

          <button className="button2" onClick={this.onDecrement}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
