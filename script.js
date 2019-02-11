const hardCodedSeatList = [
  {
    id: 0,
    type: 'vip',
    available: true
  },
  {
    id: 1,
    type: 'vip',
    available: true
  },
  {
    id: 2,
    type: 'normal',
    available: true
  },
  {
    id: 3,
    type: 'normal',
    available: true
  },
  {
    id: 4,
    type: 'normal',
    available: false
  },
  {
    id: 5,
    type: 'normal',
    available: true
  },
]

function Welcome() {
  return(
    <div>
      <h2>Welcome to &lt;something you need tickets for&gt;</h2>
      <h4>Please select some seats.</h4>
    </div>
  )
}

class SeatSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seatList: this.props.seatList,
      selectedSeats: []
    };
    this.handleSeatSelection = this.handleSeatSelection.bind(this);
  }

  handleSeatSelection(seat) {
    if(this.state.selectedSeats.indexOf(seat.id) != -1) {
      return this.setState((currentState) => {
        return {
          selectedSeats: currentState.selectedSeats.filter((s) => s !== seat.id)
        }
      })
    };
    this.setState((currentState) => {
      return {
        selectedSeats: currentState.selectedSeats.concat([seat.id])
      }
    });
  }

  render() {
    return (
      <div>
        <p>{this.state.selectedSeats.length ? 'Selected seat IDs: ' + this.state.selectedSeats.join(', ') : 'No currently selected seats.'}</p>
        <ul>
          {this.state.seatList.map((seat) => {
            return(
              <div key={seat.id}>
                <ul className="ticket-lut">
                  <li>Seat ID: {seat.id}</li>
                  <li>Seat Type: {seat.type}</li>
                  <li>Seat {seat.available ? 'is' : 'is not'} available</li>
                  <li><button onClick={() => this.handleSeatSelection(seat)}>Toggle selection</button></li>
                </ul>
                <br />
              </div>
            )
          })}
        </ul>
      </div>
    )
  }
}

function App() {
  return (
    <div>
      <Welcome />
      <SeatSelector seatList={hardCodedSeatList} />
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('app'))
