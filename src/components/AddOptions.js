import React from 'react';

export default class AddOptions extends React.Component {
  state = {
    error: undefined
  };
  handleAddOption = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();

    // If no returned value, then success, other wise, error - see logic in handleAddOptions
    const error = this.props.handleAddOption(option);

    // If error returns, then set error state
    this.setState(() => ({ error }));

    // If no error, clear the input field
    if (!error) {
      e.target.elements.option.value = '';
    }
  };
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Options</button>
        </form>
      </div>
    );
  };
}