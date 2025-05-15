import Emoji from './emoji';

export default class Text extends Emoji {
  constructor(props) {
    super(props);
  }
  render() {
    const decoratedText = this.addEmoji('I am the Text component', '💖');
    return super.render(decoratedText);
  }
}
