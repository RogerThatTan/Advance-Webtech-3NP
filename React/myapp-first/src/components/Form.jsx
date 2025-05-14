import React from 'react';

export default class Form extends React.Component {
  state = {
    titile: 'JavaScript',
    text: 'JavaScript is Awesome',
    library: 'React',
    isAwesome: true,
  };

  handleChange = (event) => {
    if (event.target.type === 'text') {
      this.setState({ titile: event.target.value });
    } else if (event.target.type === 'textarea') {
      this.setState({ text: event.target.value });
    } else if (event.target.type === 'select-one') {
      this.setState({ library: event.target.value });
    } else if (event.target.type === 'checkbox') {
      this.setState({ isAwesome: event.target.checked });
    }
    //shortcut way
    // this.setState({
    //   [event.target.name]: event.target.value,
    // });
  };

  submitHandle = (event) => {
    const { titile, text, library, isAwesome } = this.state;

    event.preventDefault();
    console.log('Form submitted');
    console.log(this.state);
  };

  render() {
    const { titile, text, library, isAwesome } = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandle}>
          <input
            name="titile"
            type="text"
            placeholder="Enter Title"
            value={titile}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <textarea name="text" value={text} onChange={this.handleChange}>
            JavaScript is awasome
          </textarea>
          <br />
          <br />
          <select value={library} onChange={this.handleChange}>
            <option value="React">React</option>
            <option value="Angular">Angular</option>
          </select>
          <br />
          <br />
          <input
            type="checkbox"
            checked={isAwesome}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
