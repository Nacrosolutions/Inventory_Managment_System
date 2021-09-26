'use strict';



const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return e('img',{src:"resources/css/img/mountain.jpg"},null);
    }

    return (
      React.createElement("div", null, React.createElement("button", { onClick: () => this.setState({ liked: true }) }, "Like")
      )
    )

  }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);