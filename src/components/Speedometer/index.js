import Component from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onIncrement = () => {
    const {count} = this.state
    if (count < 200) {
      this.state(prevState => ({count: prevState.count + 10}))
    }
  }

  break = () => {
    const {count} = this.state
    if (count > 0) {
      this.state(prevState => ({count: prevState.count - 10}))
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1>SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h1>Speed is {count}mph</h1>
        <p>Min Limit 0mph,Max Limit 200mph</p>
        <div className="buttonContainer">
          <button onClick={this.onIncrement} className="button1" type="button">
            Accelerate
          </button>
          <button onClick={this.break} className="button2" type="button">
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
