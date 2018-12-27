class Visibility extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    // Setup component state
    this.state = {
      visibility: false
    };
  }

  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      }
    });
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.visibility ? 'Hide details' : 'Show details'}
        </button>
        <div>
          {this.state.visibility && <p>Hey. There are some details you can see!</p>}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Visibility />, document.getElementById('app'));

